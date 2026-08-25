// Astronomische Mondphasen-Berechnung — kein API-Call nötig, funktioniert offline.
// Referenz-Neumond: 6. Januar 2000, 18:14 UTC (gebräuchlicher Ankerpunkt für
// den synodischen Mondzyklus von ~29,53 Tagen).
const SYNODIC_MONTH = 29.530588861;
const REFERENCE_NEW_MOON = Date.UTC(2000, 0, 6, 18, 14, 0);

const PHASE_NAMES = [
  'Neumond',
  'Zunehmende Sichel',
  'Erstes Viertel',
  'Zunehmender Mond',
  'Vollmond',
  'Abnehmender Mond',
  'Letztes Viertel',
  'Abnehmende Sichel',
];

// Liefert { phase, name }. phase läuft 0 (Neumond) → 0.5 (Vollmond) → 1 (Neumond).
export function getMoonPhase(date) {
  const days = (date.getTime() - REFERENCE_NEW_MOON) / 86400000;
  const cycles = days / SYNODIC_MONTH;
  const phase = cycles - Math.floor(cycles);
  const index = Math.round(phase * 8) % 8;
  return { phase, name: PHASE_NAMES[index] };
}
