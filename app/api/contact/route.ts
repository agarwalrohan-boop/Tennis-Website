import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// "from" must be an address on a domain verified in Resend (racdemy.com).
// See README.md for the DNS verification steps.
const FROM_ADDRESS = "R Academy <noreply@racdemy.com>";
const TO_ADDRESS = "agarwalrohan@gmail.com";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set.");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: email,
      subject: `New lesson inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Unable to send message." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Unable to process request." },
      { status: 500 }
    );
  }
}
