import { NextRequest, NextResponse } from "next/server";

// This is a stub API route. Wire this up to a real email provider
// (Resend, SendGrid, Postmark, etc.) or a CRM webhook before going live.
// Example with Resend is sketched in the README under "Connecting the contact form".
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

    // TODO: send an email / create a CRM lead / post to Slack, etc.
    console.log("New contact form submission:", { name, email, message });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Unable to process request." },
      { status: 500 }
    );
  }
}
