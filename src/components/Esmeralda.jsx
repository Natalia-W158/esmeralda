export default function Esmeralda({ shuffling }) {
  return (
    <svg
      viewBox="0 0 320 280"
      className="esmeralda"
      role="img"
      aria-label="Esmeralda, die Tarotkartenlegerin, sitzt an ihrem Tisch"
    >
      {/* Sterne im Hintergrund */}
      <g fill="#F5C94E" opacity="0.55">
        <path d="M42 36l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" />
        <path d="M282 58l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" />
        <path d="M270 20l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
        <path d="M26 110l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
      </g>

      {/* Heiligenschein-Glanz hinter dem Kopf */}
      <circle cx="160" cy="86" r="62" fill="#F5C94E" opacity="0.12" />

      <g className="esmeralda__figure">
        {/* Kristallkugel */}
        <g opacity="0.9">
          <path d="M244 214h20l4 14h-28z" fill="#241A52" />
          <circle cx="254" cy="196" r="21" fill="#E6E2F2" opacity="0.28" />
          <circle cx="254" cy="196" r="21" fill="none" stroke="#F5C94E" strokeWidth="2" opacity="0.6" />
          <circle cx="248" cy="189" r="6" fill="#FFFFFF" opacity="0.35" />
        </g>

        {/* Umhang / Robe */}
        <path
          d="M112 128c8-6 18-10 48-10s40 4 48 10c14 22 20 54 22 82H90c2-28 8-60 22-82z"
          fill="#5B3A8E"
        />
        <path
          d="M132 132c10 30 8 62-2 90h-20c2-28 8-60 22-90z"
          fill="#F6A9C6"
          opacity="0.22"
        />
        {/* Goldener Besatz am Kragen */}
        <path d="M118 126c14-8 28-12 42-12s28 4 42 12l-6 12c-12-7-24-10-36-10s-24 3-36 10z" fill="#F5C94E" />

        {/* Arme zu den Karten */}
        <path d="M112 150c-16 10-26 26-30 48l16 6c4-18 12-32 24-40z" fill="#5B3A8E" />
        <path d="M208 150c16 10 26 26 30 48l-16 6c-4-18-12-32-24-40z" fill="#5B3A8E" />
        {/* Hände */}
        <ellipse cx="94" cy="206" rx="11" ry="9" fill="#F6A9C6" />
        <ellipse cx="226" cy="206" rx="11" ry="9" fill="#F6A9C6" />

        {/* Kopf */}
        <circle cx="160" cy="90" r="28" fill="#F6A9C6" />

        {/* Kopftuch */}
        <path
          d="M126 84c6-26 22-38 34-38s28 12 34 38c-10-8-22-12-34-12s-24 4-34 12z"
          fill="#5B3A8E"
        />
        <path d="M128 82c-10 8-16 20-16 34l14 4c0-16 4-28 10-36z" fill="#5B3A8E" />
        <path d="M192 82c10 8 16 20 16 34l-14 4c0-16-4-28-10-36z" fill="#5B3A8E" />
        <path d="M128 80c10-6 20-9 32-9s22 3 32 9l-4 10c-9-5-18-8-28-8s-19 3-28 8z" fill="#F5C94E" />

        {/* Ohrringe */}
        <circle cx="132" cy="98" r="6" fill="none" stroke="#F5C94E" strokeWidth="2.5" />
        <circle cx="188" cy="98" r="6" fill="none" stroke="#F5C94E" strokeWidth="2.5" />
      </g>

      {/* Tisch */}
      <path d="M64 244c0-10 43-18 96-18s96 8 96 18v20H64z" fill="#241A52" />
      <ellipse cx="160" cy="244" rx="96" ry="16" fill="#F5C94E" opacity="0.22" />
      <ellipse cx="160" cy="244" rx="96" ry="16" fill="none" stroke="#F5C94E" strokeWidth="1.5" opacity="0.4" />

      {/* Karten auf dem Tisch */}
      <g
        className={`esmeralda__cards${shuffling ? ' is-shuffling' : ''}`}
        style={{ transformOrigin: '160px 240px' }}
      >
        {[-14, 0, 14].map((angle, i) => (
          <g key={i} transform={`rotate(${angle} 160 240)`}>
            <rect x="142" y="206" width="36" height="52" rx="4" fill="#241A52" stroke="#F5C94E" strokeWidth="1" />
            <path d="M160 216a8 8 0 1 0 0 16 10 10 0 0 1 0-16z" fill="#F5C94E" />
          </g>
        ))}
      </g>
    </svg>
  );
}
