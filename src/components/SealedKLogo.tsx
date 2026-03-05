/** Concept 01 — Sealed K (simplified for nav/small use) */
export function SealedKLogoNav({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle
        cx="32"
        cy="32"
        r="26"
        stroke="rgba(244,237,216,0.45)"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M 18 12 L 18 52"
        stroke="#FAF6EE"
        strokeWidth="4"
        strokeLinecap="butt"
        opacity="0.88"
      />
      <path
        d="M 15 12 L 21 12"
        stroke="#FAF6EE"
        strokeWidth="2"
        strokeLinecap="butt"
        opacity="0.88"
      />
      <path
        d="M 15 52 L 21 52"
        stroke="#FAF6EE"
        strokeWidth="2"
        strokeLinecap="butt"
        opacity="0.88"
      />
      <path
        d="M 20 32 L 48 12"
        stroke="#FAF6EE"
        strokeWidth="3"
        strokeLinecap="butt"
        opacity="0.8"
      />
      <path
        d="M 20 32 L 30 26"
        stroke="#FAF6EE"
        strokeWidth="4.5"
        strokeLinecap="butt"
        opacity="0.8"
      />
      <path
        d="M 20 33 L 48 52"
        stroke="#FAF6EE"
        strokeWidth="3"
        strokeLinecap="butt"
        opacity="0.8"
      />
      <path
        d="M 20 33 L 30 38"
        stroke="#FAF6EE"
        strokeWidth="4.5"
        strokeLinecap="butt"
        opacity="0.8"
      />
      <circle cx="20" cy="32.5" r="4" fill="#C4A050" />
    </svg>
  );
}

/** Concept 01 ghost — Sealed K silhouette for hero watermark */
export function SealedKGhost() {
  return (
    <svg
      width="780"
      height="780"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle
        cx="32"
        cy="32"
        r="26"
        stroke="#F4EDD8"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M 18 12 L 18 52"
        stroke="#F4EDD8"
        strokeWidth="4"
        strokeLinecap="butt"
      />
      <path
        d="M 15 12 L 21 12"
        stroke="#F4EDD8"
        strokeWidth="2"
        strokeLinecap="butt"
      />
      <path
        d="M 15 52 L 21 52"
        stroke="#F4EDD8"
        strokeWidth="2"
        strokeLinecap="butt"
      />
      <path
        d="M 20 32 L 48 12"
        stroke="#F4EDD8"
        strokeWidth="3"
        strokeLinecap="butt"
      />
      <path
        d="M 20 32 L 30 26"
        stroke="#F4EDD8"
        strokeWidth="4.5"
        strokeLinecap="butt"
      />
      <path
        d="M 20 33 L 48 52"
        stroke="#F4EDD8"
        strokeWidth="3"
        strokeLinecap="butt"
      />
      <path
        d="M 20 33 L 30 38"
        stroke="#F4EDD8"
        strokeWidth="4.5"
        strokeLinecap="butt"
      />
    </svg>
  );
}
