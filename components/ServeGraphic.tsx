export default function ServeGraphic() {
  return (
    <svg
      viewBox="0 0 600 760"
      className="h-full w-full"
      role="img"
      aria-label="Illustration of a tennis court with a serve trajectory arcing into the service box"
    >
      <g stroke="#FBFBF8" strokeWidth="3" fill="none" opacity="0.9">
        {/* Outer doubles court */}
        <rect x="40" y="40" width="520" height="680" />
        {/* Singles sidelines */}
        <line x1="100" y1="40" x2="100" y2="720" />
        <line x1="500" y1="40" x2="500" y2="720" />
        {/* Net */}
        <line x1="40" y1="380" x2="560" y2="380" strokeWidth="5" />
        {/* Service lines */}
        <line x1="100" y1="190" x2="500" y2="190" />
        <line x1="100" y1="570" x2="500" y2="570" />
        {/* Center service line */}
        <line x1="300" y1="190" x2="300" y2="570" />
        {/* Center marks */}
        <line x1="300" y1="40" x2="300" y2="55" />
        <line x1="300" y1="705" x2="300" y2="720" />
      </g>

      {/* Serve trajectory arc, drawn in on load */}
      <path
        id="serve-path"
        d="M 130 660 C 220 520, 260 420, 350 300 C 380 260, 400 230, 430 210"
        stroke="#C9D94A"
        strokeWidth="4"
        strokeDasharray="4 10"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />

      {/* Ball traveling the serve path */}
      <circle r="9" fill="#C9D94A">
        <animateMotion
          dur="2.4s"
          begin="0.3s"
          fill="freeze"
          path="M 130 660 C 220 520, 260 420, 350 300 C 380 260, 400 230, 430 210"
        />
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;0.05;0.9;1"
          dur="2.4s"
          begin="0.3s"
          fill="freeze"
        />
      </circle>
    </svg>
  );
}
