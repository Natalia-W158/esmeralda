// Zeichnet die Mondsichel/-scheibe für eine gegebene Phase (0..1, 0/1 = Neumond,
// 0.5 = Vollmond) als kleines SVG — der beleuchtete Anteil wird über die
// klassische Zirkel-Terminator-Kurve berechnet, nicht aus 8 festen Icons.
export default function MoonPhaseIcon({ phase, size = 18, className = '' }) {
  const r = 10;
  const cx = r;
  const cy = r;
  const theta = phase * 2 * Math.PI;
  const rx = -r * Math.cos(theta);
  const outerSweep = phase < 0.5 ? 1 : 0;
  const innerSweep = rx >= 0 ? outerSweep : 1 - outerSweep;
  const d = `M ${cx} ${cy - r} A ${r} ${r} 0 0 ${outerSweep} ${cx} ${cy + r} A ${Math.abs(rx)} ${r} 0 0 ${innerSweep} ${cx} ${cy - r} Z`;

  return (
    <svg viewBox={`0 0 ${r * 2} ${r * 2}`} width={size} height={size} className={`moon-phase-icon ${className}`}>
      <circle cx={cx} cy={cy} r={r - 0.75} className="moon-phase-icon__base" />
      <path d={d} className="moon-phase-icon__lit" />
      <circle cx={cx} cy={cy} r={r - 0.75} className="moon-phase-icon__ring" />
    </svg>
  );
}
