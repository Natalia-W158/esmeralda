// Die 22 Karten der Großen Arkana — Motive, Farb-Akzente und Bedeutungstexte
// stammen aus dem "Moon Power" Kartendeck-Design.

export const cards = [
  {
    id: 0,
    roman: '0',
    title: 'Der Narr',
    keywords: 'Aufbruch · Leichtigkeit',
    accent: '#4FA6E0',
    meaning: 'Ein junger Mensch, der unbekümmert seines Weges geht. Die Karte steht für Leichtigkeit und Aufbruch — je nach Umfeld auch für mangelnde Ernsthaftigkeit.',
    svg: `
      <circle cx="34" cy="28" r="17" fill="#F5C94E" opacity="0.2"></circle>
      <path d="M0 188c42 6 84 8 126 8l4 24H0z" fill="#C9C2E0" opacity="0.13"></path>
      <path d="M116 44L64 138" stroke="#4FA6E0" stroke-width="4" stroke-linecap="round"></path>
      <path d="M117 30c10-3 19 4 17 13-2 8-11 12-17 8-6-4-6-18 0-21z" fill="#4FA6E0"></path>
      <ellipse cx="78" cy="48" rx="10.5" ry="12.5" fill="#4FA6E0"></ellipse>
      <path d="M67 46c0-9 5-16 12-16s12 7 11 15c-3-4-7-6-11-6-5 0-9 3-12 7z" fill="#4FA6E0"></path>
      <rect x="74" y="58" width="8" height="7" fill="#4FA6E0"></rect>
      <path d="M78 64c-11 0-18 7-20 17l-4 23h48l-4-23c-2-10-9-17-20-17z" fill="#4FA6E0"></path>
      <path d="M96 70l22-14 5 8-22 18z" fill="#4FA6E0"></path>
      <path d="M60 72l-11 30 8 4 12-28z" fill="#4FA6E0"></path>
      <path d="M62 104h14l-8 56-11-2z" fill="#4FA6E0"></path>
      <path d="M84 104h14l12 52-11 4z" fill="#4FA6E0"></path>
      <path d="M52 158l18 2-2 9-18-2z" fill="#4FA6E0"></path>
      <path d="M97 158l17 5-3 8-16-4z" fill="#4FA6E0"></path>
      <g fill="#4FA6E0" opacity="0.75">
        <ellipse cx="138" cy="176" rx="18" ry="10"></ellipse>
        <circle cx="155" cy="166" r="8"></circle>
        <path d="M158 158l-4-9 8 4z"></path>
        <path d="M148 160l-2-10 7 5z"></path>
        <rect x="126" y="184" width="5" height="13" rx="2.5"></rect>
        <rect x="144" y="184" width="5" height="13" rx="2.5"></rect>
        <path d="M120 172l-11 8 4 6 11-8z"></path>
      </g>`,
  },
  {
    id: 1,
    roman: 'I',
    title: 'Der Magier',
    keywords: 'Wissen · Gestaltung',
    accent: '#F5C94E',
    meaning: 'Selbsterkenntnis, Wissen und Gestaltungskraft. Er versteht die Prinzipien des Lebens und wendet sie an — kann aber auch für Überheblichkeit stehen.',
    svg: `
      <g fill="none" stroke="#F5C94E" stroke-width="3.5" opacity="0.7">
        <circle cx="80" cy="20" r="9"></circle>
        <circle cx="100" cy="20" r="9"></circle>
      </g>
      <ellipse cx="90" cy="50" rx="10.5" ry="12.5" fill="#F5C94E"></ellipse>
      <path d="M79 48c0-9 5-16 11-16s11 7 11 16c-3-5-6-7-11-7s-8 2-11 7z" fill="#F5C94E"></path>
      <rect x="86" y="60" width="8" height="7" fill="#F5C94E"></rect>
      <path d="M90 66c-11 0-18 7-20 17l-4 24h48l-4-24c-2-10-9-17-20-17z" fill="#F5C94E"></path>
      <path d="M108 72l14-26 8 4-14 28z" fill="#F5C94E"></path>
      <path d="M126 18h7v34h-7z" fill="#F5C94E"></path>
      <path d="M72 72l-14 28 8 4 12-26z" fill="#F5C94E"></path>
      <path d="M56 98l-6 26 9 2 6-24z" fill="#F5C94E"></path>
      <path d="M66 107h48l6 42H60z" fill="#F5C94E" opacity="0.85"></path>
      <rect x="26" y="158" width="128" height="9" rx="3" fill="#C9C2E0" opacity="0.3"></rect>
      <rect x="34" y="167" width="9" height="40" rx="3" fill="#C9C2E0" opacity="0.22"></rect>
      <rect x="137" y="167" width="9" height="40" rx="3" fill="#C9C2E0" opacity="0.22"></rect>
      <path d="M48 134h16l-3 24H51z" fill="#C9C2E0" opacity="0.5"></path>
      <circle cx="80" cy="147" r="11" fill="#C9C2E0" opacity="0.5"></circle>
      <path d="M104 126l4 32h-8z" fill="#C9C2E0" opacity="0.5"></path>
      <rect x="122" y="128" width="6" height="30" rx="2" fill="#C9C2E0" opacity="0.5"></rect>`,
  },
  {
    id: 2,
    roman: 'II',
    title: 'Die Hohepriesterin',
    keywords: 'Intuition · Wissen',
    accent: '#F6A9C6',
    meaning: 'Die weibliche Kraft an sich. Ihre Macht kommt aus der Intuition und der Gabe, durch den Schleier zu sehen. Eine wissende Frau, die Dinge durchschaut.',
    svg: `
      <rect x="14" y="24" width="19" height="182" rx="5" fill="#F6A9C6" opacity="0.4"></rect>
      <rect x="147" y="24" width="19" height="182" rx="5" fill="#F6A9C6" opacity="0.4"></rect>
      <path d="M33 42h114v84H33z" fill="#F6A9C6" opacity="0.12"></path>
      <path d="M33 118c19 9 38 3 57 3s38 6 57-3v8H33z" fill="#F6A9C6" opacity="0.24"></path>
      <path d="M77 46h26l-3 12H80z" fill="#F5C94E"></path>
      <ellipse cx="90" cy="70" rx="11" ry="13" fill="#F6A9C6"></ellipse>
      <path d="M79 66c-6 14-8 30-6 44l-8-2c-3-18 1-36 8-48z" fill="#F6A9C6"></path>
      <path d="M101 66c6 12 11 30 8 48l-9 2c3-14 1-30-5-44z" fill="#F6A9C6"></path>
      <rect x="86" y="80" width="8" height="8" fill="#F6A9C6"></rect>
      <path d="M90 86c-12 0-20 8-22 19l-4 22h52l-4-22c-2-11-10-19-22-19z" fill="#F6A9C6"></path>
      <path d="M64 127h52l16 78H48z" fill="#F6A9C6" opacity="0.9"></path>
      <path d="M106 136h26l-4 14h-24z" fill="#150F30" opacity="0.4"></path>
      <path d="M106 136h26l-4 14h-24z" fill="none" stroke="#F5C94E" stroke-width="2.5" opacity="0.8"></path>
      <path d="M90 174a19 19 0 1 0 0 32 24 24 0 0 1 0-32z" fill="#150F30" opacity="0.5"></path>
      <path d="M92 176a17 17 0 1 0 0 28 22 22 0 0 1 0-28z" fill="#F5C94E" opacity="0.85"></path>`,
  },
  {
    id: 3,
    roman: 'III',
    title: 'Die Herrscherin',
    keywords: 'Fülle · Reife',
    accent: '#6FBF8A',
    meaning: 'Fülle, Reife und Vollendung, dazu eine mütterliche Dimension und große Stärke. Im Negativen ein Mensch, der seine Macht ausnutzt.',
    svg: `
      <path d="M0 184h180v36H0z" fill="#6FBF8A" opacity="0.14"></path>
      <path d="M52 94h76v98H52z" fill="#6FBF8A" opacity="0.18"></path>
      <path d="M70 42h34l-4 8h7l-4 12H71l-3-12h6z" fill="#F5C94E"></path>
      <ellipse cx="87" cy="74" rx="11" ry="13" fill="#6FBF8A"></ellipse>
      <path d="M75 72c-8 10-12 24-12 38l-9-2c0-18 6-32 15-42z" fill="#6FBF8A"></path>
      <path d="M99 72c8 10 13 24 13 38l9-2c-1-18-7-32-16-42z" fill="#6FBF8A"></path>
      <rect x="83" y="84" width="8" height="8" fill="#6FBF8A"></rect>
      <path d="M87 90c-13 0-21 8-23 20l-4 23h54l-4-23c-2-12-10-20-23-20z" fill="#6FBF8A"></path>
      <path d="M60 133h54l14 64H46z" fill="#6FBF8A" opacity="0.92"></path>
      <path d="M87 148c7-9 20-6 20 5s-13 18-20 24c-7-6-20-13-20-24s13-14 20-5z" fill="#150F30" opacity="0.45"></path>
      <g fill="#F5C94E" opacity="0.9">
        <rect x="147" y="128" width="5" height="64" rx="2"></rect>
        <ellipse cx="144" cy="130" rx="4.5" ry="8" transform="rotate(-24 144 130)"></ellipse>
        <ellipse cx="156" cy="130" rx="4.5" ry="8" transform="rotate(24 156 130)"></ellipse>
        <ellipse cx="144" cy="145" rx="4.5" ry="8" transform="rotate(-24 144 145)"></ellipse>
        <ellipse cx="156" cy="145" rx="4.5" ry="8" transform="rotate(24 156 145)"></ellipse>
        <ellipse cx="149.5" cy="118" rx="4.5" ry="9"></ellipse>
      </g>
      <g fill="#6FBF8A" opacity="0.5">
        <path d="M20 166c8-14 18-22 18-22s-2 16-8 26z"></path>
        <rect x="24" y="168" width="4" height="28" rx="2"></rect>
      </g>`,
  },
  {
    id: 4,
    roman: 'IV',
    title: 'Der Herrscher',
    keywords: 'Führung · Verantwortung',
    accent: '#F2707A',
    meaning: 'Herrschaft, Kontrolle und Verantwortung. Eine sachliche, geradlinige Karte: leiten und führen. Sie kann auch eine Respektperson bezeichnen.',
    svg: `
      <path d="M44 72h92v134H44z" fill="#F2707A" opacity="0.16"></path>
      <rect x="36" y="64" width="108" height="12" rx="4" fill="#F2707A" opacity="0.32"></rect>
      <path d="M44 64l10-14h72l10 14z" fill="#F2707A" opacity="0.24"></path>
      <path d="M72 38h36l-3 8h6l-4 12H73l-4-12h6z" fill="#F5C94E"></path>
      <ellipse cx="90" cy="70" rx="11" ry="13" fill="#F2707A"></ellipse>
      <path d="M79 78c0 12 22 12 22 0 4 12 6 24 4 34H75c-2-10 0-22 4-34z" fill="#F2707A" opacity="0.9"></path>
      <rect x="86" y="80" width="8" height="7" fill="#F2707A"></rect>
      <path d="M90 86c-13 0-21 8-23 19l-4 21h54l-4-21c-2-11-10-19-23-19z" fill="#F2707A"></path>
      <path d="M112 94l18 8-4 10-16-8z" fill="#F2707A"></path>
      <path d="M68 94l-16 8 4 10 14-8z" fill="#F2707A"></path>
      <path d="M63 126h54v20H63z" fill="#F2707A" opacity="0.9"></path>
      <path d="M67 146h20l-2 58H67z" fill="#F2707A"></path>
      <path d="M93 146h20l2 58H93z" fill="#F2707A"></path>
      <path d="M62 204h30v9H62zM88 204h30v9H88z" fill="#F2707A" opacity="0.7"></path>
      <rect x="128" y="50" width="6" height="68" rx="3" fill="#F5C94E"></rect>
      <circle cx="131" cy="42" r="10" fill="#F5C94E"></circle>
      <rect x="42" y="104" width="16" height="16" rx="8" fill="#F5C94E" opacity="0.85"></rect>`,
  },
  {
    id: 5,
    roman: 'V',
    title: 'Der Hierophant',
    keywords: 'Sinn · Wahrheit',
    accent: '#D8CFE8',
    meaning: 'Sinn, Wahrheit und die Gesetze des Lebens — eigene Überzeugungen ebenso wie große Sinnfragen. Zugleich die Aufforderung, Vorbilder zu hinterfragen.',
    svg: `
      <rect x="22" y="22" width="12" height="168" rx="4" fill="#D8CFE8" opacity="0.28"></rect>
      <rect x="146" y="22" width="12" height="168" rx="4" fill="#D8CFE8" opacity="0.28"></rect>
      <path d="M79 18h22v9H79zM75 28h30v10H75zM71 39h38v12H71z" fill="#F5C94E"></path>
      <ellipse cx="90" cy="64" rx="10.5" ry="12" fill="#D8CFE8"></ellipse>
      <path d="M80 72c0 10 20 10 20 0 3 10 5 20 4 28H76c-1-8 1-18 4-28z" fill="#D8CFE8" opacity="0.9"></path>
      <rect x="86" y="74" width="8" height="7" fill="#D8CFE8"></rect>
      <path d="M90 80c-12 0-20 8-22 18l-4 20h52l-4-20c-2-10-10-18-22-18z" fill="#D8CFE8"></path>
      <path d="M110 88l14-16 7 6-13 19z" fill="#D8CFE8"></path>
      <path d="M124 60l-4 14 8 2 4-14z" fill="#D8CFE8"></path>
      <path d="M70 90l-16 22 7 5 15-19z" fill="#D8CFE8"></path>
      <path d="M66 118h48l12 70H54z" fill="#D8CFE8" opacity="0.9"></path>
      <path d="M84 128h12v10h10v11H96v12H84v-12H74v-11h10z" fill="#F5C94E" opacity="0.8"></path>
      <g fill="#D8CFE8" opacity="0.55">
        <ellipse cx="44" cy="166" rx="9" ry="10"></ellipse>
        <path d="M44 178c-8 0-13 5-15 13l-4 20h38l-4-20c-2-8-7-13-15-13z"></path>
        <ellipse cx="136" cy="166" rx="9" ry="10"></ellipse>
        <path d="M136 178c-8 0-13 5-15 13l-4 20h38l-4-20c-2-8-7-13-15-13z"></path>
      </g>`,
  },
  {
    id: 6,
    roman: 'VI',
    title: 'Die Liebenden',
    keywords: 'Liebe · Verbindung',
    accent: '#F5943A',
    meaning: 'Liebe und die Verbindung zwischen Menschen. Nicht nur romantisch — auch Freundschaft, Partnerschaft, Zugehörigkeit und Zuneigung.',
    svg: `
      <circle cx="90" cy="38" r="26" fill="#F5C94E" opacity="0.2"></circle>
      <path d="M90 28c7-11 24-7 24 6s-17 22-24 30c-7-8-24-17-24-30s17-17 24-6z" fill="#F5C94E" opacity="0.85"></path>
      <ellipse cx="52" cy="94" rx="11" ry="13" fill="#F5943A"></ellipse>
      <path d="M41 90c0-9 5-16 11-16s11 7 11 16c0-6-22-6-22 0z" fill="#F5943A"></path>
      <rect x="48" y="104" width="8" height="7" fill="#F5943A"></rect>
      <path d="M52 110c-12 0-20 8-22 18l-4 22h52l-4-22c-2-10-10-18-22-18z" fill="#F5943A"></path>
      <path d="M28 150h48l8 56H20z" fill="#F5943A" opacity="0.9"></path>
      <ellipse cx="128" cy="94" rx="11" ry="13" fill="#F5943A"></ellipse>
      <path d="M117 86c-4 14-6 28-4 40l-8-2c-2-16 2-30 8-40z" fill="#F5943A"></path>
      <rect x="124" y="104" width="8" height="7" fill="#F5943A"></rect>
      <path d="M128 110c-12 0-20 8-22 18l-4 22h52l-4-22c-2-10-10-18-22-18z" fill="#F5943A"></path>
      <path d="M104 150h48l8 56h-64z" fill="#F5943A" opacity="0.9"></path>
      <path d="M70 122l40 6-2 10-40-6z" fill="#F5943A"></path>
      <path d="M0 206h180v12H0z" fill="#F5943A" opacity="0.2"></path>`,
  },
  {
    id: 7,
    roman: 'VII',
    title: 'Der Wagen',
    keywords: 'Bewegung · Chancen',
    accent: '#4FA6E0',
    meaning: 'Der einfahrende Triumphwagen: Bewegung, Entwicklung und Chancen. Wichtig ist, wo er steht — am Start, auf dem Weg oder schon auf der Zielgeraden.',
    svg: `
      <ellipse cx="120" cy="52" rx="10" ry="12" fill="#4FA6E0"></ellipse>
      <path d="M110 48c0-8 4-14 10-14s10 6 10 14l-4-4h-12z" fill="#F5C94E"></path>
      <rect x="116" y="61" width="8" height="7" fill="#4FA6E0"></rect>
      <path d="M120 66c-11 0-18 7-20 16l-3 18h46l-3-18c-2-9-9-16-20-16z" fill="#4FA6E0"></path>
      <path d="M100 76l-22 14 5 8 21-12z" fill="#4FA6E0"></path>
      <rect x="94" y="100" width="66" height="48" rx="6" fill="#4FA6E0" opacity="0.5"></rect>
      <path d="M100 110h54v8h-54z" fill="#4FA6E0" opacity="0.7"></path>
      <circle cx="110" cy="170" r="21" fill="none" stroke="#4FA6E0" stroke-width="6"></circle>
      <circle cx="151" cy="174" r="13" fill="none" stroke="#4FA6E0" stroke-width="5"></circle>
      <g fill="#4FA6E0">
        <rect x="10" y="110" width="60" height="32" rx="15"></rect>
        <path d="M50 116l7-32 14 4-9 32z"></path>
        <path d="M58 86l24-8 4 13-23 7z"></path>
        <path d="M60 82l-5-14 11 5z"></path>
        <path d="M76 80l6-12 2 12z"></path>
        <rect x="18" y="140" width="9" height="42" rx="4"></rect>
        <rect x="50" y="140" width="9" height="42" rx="4"></rect>
        <path d="M10 116L0 106v14l8 8z"></path>
      </g>
      <path d="M86 90l-18 22 6 5 18-20z" fill="#4FA6E0" opacity="0.7"></path>
      <path d="M0 196h180v10H0z" fill="#C9C2E0" opacity="0.16"></path>`,
  },
  {
    id: 8,
    roman: 'VIII',
    title: 'Die Gerechtigkeit',
    keywords: 'Ausgleich · Wahrheit',
    accent: '#C8CDD1',
    meaning: 'Gerechtigkeit, Ausgleich und Wahrheit. An der Wahrheit ist kein Vorbeikommen — das kann Hoffnung machen oder eine Warnung sein.',
    svg: `
      <path d="M60 68h60v138H60z" fill="#C8CDD1" opacity="0.12"></path>
      <path d="M84 24h22l-3 10H87z" fill="#F5C94E"></path>
      <ellipse cx="95" cy="48" rx="10.5" ry="12" fill="#C8CDD1"></ellipse>
      <rect x="91" y="58" width="8" height="7" fill="#C8CDD1"></rect>
      <path d="M95 64c-12 0-20 8-22 18l-4 20h52l-4-20c-2-10-10-18-22-18z" fill="#C8CDD1"></path>
      <path d="M75 72L46 86l4 10 27-12z" fill="#C8CDD1"></path>
      <path d="M115 72l16-14 7 7-15 17z" fill="#C8CDD1"></path>
      <path d="M71 102h50l12 104H59z" fill="#C8CDD1" opacity="0.85"></path>
      <g stroke="#F5C94E" stroke-width="3.5" fill="none" stroke-linecap="round">
        <path d="M18 90h50"></path>
        <path d="M26 90v12M60 90v20"></path>
      </g>
      <path d="M14 102h24a12 12 0 0 1-24 0z" fill="#F5C94E"></path>
      <path d="M48 110h24a12 12 0 0 1-24 0z" fill="#F5C94E"></path>
      <rect x="41" y="84" width="6" height="12" rx="3" fill="#F5C94E"></rect>
      <rect x="138" y="40" width="6" height="24" rx="2" fill="#F5C94E"></rect>
      <path d="M141 12l6 30h-12z" fill="#F5C94E"></path>
      <rect x="130" y="40" width="24" height="6" rx="3" fill="#F5C94E"></rect>`,
  },
  {
    id: 9,
    roman: 'IX',
    title: 'Der Eremit',
    keywords: 'Rückzug · Erkenntnis',
    accent: '#F5C94E',
    meaning: 'Rückzug aus der Welt und innere Einkehr. Antrieb kann Verletzung sein, ebenso Wahrheitssuche und Wachstum. Die Karte steht dafür, den eigenen Weg zu gehen.',
    svg: `
      <path d="M0 200l42-74 26 42 22-32 36 64z" fill="#C9C2E0" opacity="0.12"></path>
      <circle cx="128" cy="104" r="40" fill="#F5C94E" opacity="0.12"></circle>
      <path d="M78 32c14 0 24 11 25 26l3 26-56 2 3-28c1-15 11-26 25-26z" fill="#F5C94E" opacity="0.9"></path>
      <path d="M78 48c-9 0-15 8-16 19 4 5 10 8 16 8s12-3 16-8c-1-11-7-19-16-19z" fill="#150F30" opacity="0.55"></path>
      <path d="M50 82h56l14 124H36z" fill="#F5C94E" opacity="0.9"></path>
      <path d="M78 90c10 0 12 20 12 34H66c0-14 2-34 12-34z" fill="#150F30" opacity="0.28"></path>
      <path d="M106 94l16 8-4 10-14-8z" fill="#F5C94E"></path>
      <rect x="30" y="68" width="6" height="138" rx="3" fill="#F5C94E" opacity="0.6"></rect>
      <rect x="112" y="112" width="30" height="34" rx="4" fill="#150F30"></rect>
      <rect x="112" y="112" width="30" height="34" rx="4" fill="none" stroke="#F5C94E" stroke-width="4"></rect>
      <path d="M127 118l4 9 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1z" fill="#F5C94E"></path>
      <rect x="122" y="100" width="10" height="12" rx="4" fill="none" stroke="#F5C94E" stroke-width="3"></rect>`,
  },
  {
    id: 10,
    roman: 'X',
    title: 'Das Rad des Schicksals',
    keywords: 'Kreislauf · Wendepunkt',
    accent: '#6FBF8A',
    meaning: 'Der ewige Kreislauf und karmische Muster. Sie zeigt ein Thema von zentraler Bedeutung an — und erinnert daran, dass man das Steuer selbst in der Hand hat.',
    svg: `
      <circle cx="90" cy="112" r="64" fill="none" stroke="#6FBF8A" stroke-width="9"></circle>
      <circle cx="90" cy="112" r="46" fill="none" stroke="#6FBF8A" stroke-width="3" opacity="0.45"></circle>
      <circle cx="90" cy="112" r="15" fill="#6FBF8A"></circle>
      <g stroke="#6FBF8A" stroke-width="5" stroke-linecap="round">
        <path d="M90 56v20M90 148v20M32 112h20M128 112h20"></path>
        <path d="M49 71l14 14M117 141l14 14M131 71l-14 14M63 141l-14 14"></path>
      </g>
      <g fill="#F5C94E">
        <ellipse cx="90" cy="24" rx="8" ry="9"></ellipse>
        <path d="M90 34c-7 0-11 4-13 11l-3 11h32l-3-11c-2-7-6-11-13-11z"></path>
        <path d="M78 38L64 30l-3 7 15 8zM102 38l14-8 3 7-15 8z" opacity="0.8"></path>
        <ellipse cx="156" cy="180" rx="8" ry="9"></ellipse>
        <path d="M156 190c-7 0-11 4-13 11l-3 12h32l-3-12c-2-7-6-11-13-11z"></path>
        <ellipse cx="24" cy="180" rx="8" ry="9"></ellipse>
        <path d="M24 190c-7 0-11 4-13 11l-3 12h32l-3-12c-2-7-6-11-13-11z"></path>
      </g>`,
  },
  {
    id: 11,
    roman: 'XI',
    title: 'Die Kraft',
    keywords: 'Mut · Stärke',
    accent: '#F2707A',
    meaning: 'Mut, persönliche Stärke und Aussicht auf Erfolg. Gemeint ist keine aggressive Kraft, sondern innere Stärke — und ein Hinweis, wo Energie sich lohnt.',
    svg: `
      <g fill="none" stroke="#F5C94E" stroke-width="3.5" opacity="0.7">
        <circle cx="46" cy="24" r="9"></circle>
        <circle cx="66" cy="24" r="9"></circle>
      </g>
      <ellipse cx="56" cy="56" rx="10.5" ry="12.5" fill="#F2707A"></ellipse>
      <path d="M45 54c0-9 5-16 11-16s11 7 11 16c-2-6-6-8-11-8s-9 2-11 8z" fill="#F2707A"></path>
      <rect x="52" y="66" width="8" height="7" fill="#F2707A"></rect>
      <path d="M56 72c-12 0-20 8-22 18l-4 22h52l-4-22c-2-10-10-18-22-18z" fill="#F2707A"></path>
      <path d="M32 112h48l10 94H22z" fill="#F2707A" opacity="0.9"></path>
      <path d="M76 84l30 18-5 10-29-16z" fill="#F2707A"></path>
      <g fill="#F5C94E">
        <circle cx="126" cy="126" r="30" opacity="0.3"></circle>
        <ellipse cx="126" cy="126" rx="19" ry="18"></ellipse>
        <path d="M110 114l-4-12 12 6zM142 114l4-12-12 6z"></path>
        <path d="M114 144h24l10 62h-14l-6-32-6 32h-14z"></path>
        <path d="M154 148l18 36-8 6-20-32z"></path>
        <circle cx="119" cy="123" r="3" fill="#150F30"></circle>
        <circle cx="133" cy="123" r="3" fill="#150F30"></circle>
        <path d="M120 135c4 4 8 4 12 0" stroke="#150F30" stroke-width="2.5" fill="none" stroke-linecap="round"></path>
      </g>`,
  },
  {
    id: 12,
    roman: 'XII',
    title: 'Der Gehängte',
    keywords: 'Wandel · Geduld',
    accent: '#8E9FD8',
    meaning: 'Ein Einschnitt, der Transformation bedeuten kann. Geduld, innere Ruhe und Akzeptanz helfen, die Krise zu überstehen und verändert daraus hervorzugehen.',
    svg: `
      <rect x="20" y="24" width="140" height="11" rx="4" fill="#8E9FD8" opacity="0.45"></rect>
      <rect x="24" y="35" width="11" height="176" rx="4" fill="#8E9FD8" opacity="0.3"></rect>
      <rect x="145" y="35" width="11" height="176" rx="4" fill="#8E9FD8" opacity="0.3"></rect>
      <path d="M86 35v22h6V35z" fill="#8E9FD8"></path>
      <path d="M84 56h14l4 12H80z" fill="#8E9FD8"></path>
      <path d="M98 66l34 30-7 8-33-28z" fill="#8E9FD8" opacity="0.85"></path>
      <path d="M90 68c-13 0-21 9-23 20l-5 30h56l-5-30c-2-11-10-20-23-20z" fill="#8E9FD8"></path>
      <rect x="86" y="118" width="8" height="8" fill="#8E9FD8"></rect>
      <ellipse cx="90" cy="140" rx="11" ry="13" fill="#8E9FD8"></ellipse>
      <path d="M79 148c0 10 22 10 22 0 3 8 4 16 2 22H77c-2-6-1-14 2-22z" fill="#8E9FD8" opacity="0.85"></path>
      <circle cx="90" cy="140" r="26" fill="none" stroke="#F5C94E" stroke-width="3" opacity="0.85"></circle>
      <path d="M70 118l-22 26 8 7 21-24z" fill="#8E9FD8"></path>
      <path d="M108 118l16 26-9 6-15-24z" fill="#8E9FD8"></path>`,
  },
  {
    id: 13,
    roman: 'XIII',
    title: 'Der Tod',
    keywords: 'Loslassen · Neubeginn',
    accent: '#C9954F',
    meaning: 'Nicht der physische Tod, sondern Ablösung, Loslassen, ein Ende. Jedes Ende bringt einen Anfang mit sich — die Karten daneben zeigen, worauf sich der Wandel bezieht.',
    svg: `
      <path d="M0 194h180v26H0z" fill="#C9954F" opacity="0.14"></path>
      <circle cx="90" cy="110" r="34" fill="#F5C94E" opacity="0.1"></circle>
      <path d="M78 30c15 0 26 12 27 28l3 28-60 2 3-30c1-16 12-28 27-28z" fill="#C9954F"></path>
      <path d="M78 46c-10 0-16 9-17 21 4 6 11 9 17 9s13-3 17-9c-1-12-7-21-17-21z" fill="#150F30" opacity="0.6"></path>
      <path d="M48 84h60l16 110H32z" fill="#C9954F"></path>
      <path d="M78 92c11 0 13 22 13 38H65c0-16 2-38 13-38z" fill="#150F30" opacity="0.25"></path>
      <path d="M108 90l22-18 6 8-24 22z" fill="#C9954F"></path>
      <rect x="128" y="52" width="6" height="142" rx="3" fill="#C9954F"></rect>
      <path d="M131 52c24 4 38 20 38 40-14-16-26-22-38-22z" fill="#F5C94E" opacity="0.9"></path>
      <g fill="#C9954F" opacity="0.5">
        <path d="M14 168h9l-2 26h-6z"></path>
        <path d="M18 160l8 12h-16z"></path>
      </g>`,
  },
  {
    id: 14,
    roman: 'XIV',
    title: 'Die Mäßigkeit',
    keywords: 'Maß · Abwägen',
    accent: '#4FA6E0',
    meaning: 'Die sanfte Ratgeberin: langsam angehen, wachen Geist behalten, auf das rechte Maß achten. Beide Seiten abwägen führt zur klugen Entscheidung.',
    svg: `
      <path d="M70 66L20 34l6 50z" fill="#4FA6E0" opacity="0.35"></path>
      <path d="M110 66l50-32-6 50z" fill="#4FA6E0" opacity="0.35"></path>
      <ellipse cx="90" cy="44" rx="11" ry="13" fill="#4FA6E0"></ellipse>
      <path d="M79 42c0-9 5-16 11-16s11 7 11 16c-3-5-6-7-11-7s-8 2-11 7z" fill="#4FA6E0"></path>
      <rect x="86" y="54" width="8" height="7" fill="#4FA6E0"></rect>
      <path d="M90 60c-13 0-21 8-23 20l-5 26h56l-5-26c-2-12-10-20-23-20z" fill="#4FA6E0"></path>
      <path d="M62 106h56l14 100H48z" fill="#4FA6E0" opacity="0.72"></path>
      <path d="M68 72L36 84l4 12 30-12z" fill="#4FA6E0"></path>
      <path d="M112 88l26 20-6 10-26-18z" fill="#4FA6E0"></path>
      <g fill="#F5C94E">
        <path d="M22 74h30l-7 26H29z"></path>
        <path d="M124 116h30l-7 26h-16z"></path>
        <path d="M50 98c16 6 62 14 78 26l-6 9c-16-12-58-21-76-27z" opacity="0.9"></path>
      </g>
      <path d="M0 202h180v10H0z" fill="#4FA6E0" opacity="0.18"></path>`,
  },
  {
    id: 15,
    roman: 'XV',
    title: 'Der Teufel',
    keywords: 'Blockade · Warnung',
    accent: '#F2707A',
    meaning: 'Eine hilfreiche Warnung: Blockaden, Hindernisse, Schwierigkeiten — oder ein Mensch, dem nicht zu trauen ist. Auch das eigene Verhalten gehört geprüft.',
    svg: `
      <path d="M78 32l-7-20 14 13zM102 32l7-20-14 13z" fill="#F2707A"></path>
      <ellipse cx="90" cy="46" rx="14" ry="15" fill="#F2707A"></ellipse>
      <circle cx="84" cy="44" r="3" fill="#150F30"></circle>
      <circle cx="96" cy="44" r="3" fill="#150F30"></circle>
      <path d="M83 54c5 4 9 4 14 0-2 6-12 6-14 0z" fill="#150F30" opacity="0.7"></path>
      <path d="M90 62c-15 0-24 10-26 22l-5 30h62l-5-30c-2-12-11-22-26-22z" fill="#F2707A"></path>
      <path d="M116 74l24-24 8 8-24 30z" fill="#F2707A"></path>
      <path d="M64 74L44 92l7 9 19-16z" fill="#F2707A"></path>
      <rect x="52" y="114" width="76" height="20" rx="4" fill="#F2707A" opacity="0.45"></rect>
      <g fill="#F2707A" opacity="0.7">
        <ellipse cx="40" cy="138" rx="9" ry="10"></ellipse>
        <rect x="37" y="147" width="6" height="7"></rect>
        <path d="M40 154c-9 0-15 6-17 15l-5 37h44l-5-37c-2-9-8-15-17-15z"></path>
        <ellipse cx="140" cy="138" rx="9" ry="10"></ellipse>
        <rect x="137" y="147" width="6" height="7"></rect>
        <path d="M140 154c-9 0-15 6-17 15l-5 37h44l-5-37c-2-9-8-15-17-15z"></path>
      </g>
      <g stroke="#F5C94E" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.95">
        <path d="M62 130c-12 7-19 13-22 18"></path>
        <path d="M118 130c12 7 19 13 22 18"></path>
      </g>
      <rect x="30" y="145" width="20" height="7" rx="3.5" fill="#F5C94E"></rect>
      <rect x="130" y="145" width="20" height="7" rx="3.5" fill="#F5C94E"></rect>`,
  },
  {
    id: 16,
    roman: 'XVI',
    title: 'Der Turm',
    keywords: 'Einschnitt · Ausweg',
    accent: '#C9954F',
    meaning: 'Eine warnende Karte: Zerstörung, Fall, aber auch innere Gefangenschaft. Sie zeigt Einschnitte an und regt an, über den Ausweg nachzudenken.',
    svg: `
      <path d="M64 66h52l10 140H54z" fill="#C9954F"></path>
      <path d="M64 66h52v10H64z" fill="#150F30" opacity="0.3"></path>
      <path d="M78 92h24v28H78z" fill="#150F30" opacity="0.55"></path>
      <path d="M82 148h16v58H82z" fill="#150F30" opacity="0.4"></path>
      <path d="M60 30h60l-6 18H66z" fill="#F5C94E" transform="rotate(-16 90 38)"></path>
      <path d="M124 34l26-24-9 28 19-4-32 36 7-26z" fill="#F5C94E"></path>
      <g fill="#C9954F">
        <ellipse cx="26" cy="130" rx="9" ry="10"></ellipse>
        <path d="M26 142c-9 0-14 6-16 15l-5 24 39-6-4-19c-2-8-6-14-14-14z"></path>
        <ellipse cx="156" cy="156" rx="9" ry="10"></ellipse>
        <path d="M156 168c-9 0-14 6-16 15l-4 21 38 4-4-25c-2-9-6-15-14-15z"></path>
      </g>
      <path d="M0 206h180v12H0z" fill="#C9C2E0" opacity="0.16"></path>`,
  },
  {
    id: 17,
    roman: 'XVII',
    title: 'Der Stern',
    keywords: 'Hoffnung · Erfüllung',
    accent: '#F5C94E',
    meaning: 'Erfüllung, Schönheit und Glück. Eine Glückskarte, die gutes Gelingen und Segen anzeigt — ein Stern der Hoffnung, ein Stern, der leitet.',
    svg: `
      <path d="M90 8l9 24 24 9-24 9-9 24-9-24-24-9 24-9z" fill="#F5C94E"></path>
      <g fill="#F5C94E" opacity="0.45">
        <path d="M30 42l4 10 10 4-10 4-4 10-4-10-10-4 10-4z"></path>
        <path d="M150 56l4 10 10 4-10 4-4 10-4-10-10-4 10-4z"></path>
      </g>
      <ellipse cx="78" cy="98" rx="11" ry="12" fill="#D8CFE8"></ellipse>
      <path d="M67 96c0-9 5-16 11-16s11 7 11 16c-3-6-6-8-11-8s-8 2-11 8z" fill="#D8CFE8"></path>
      <rect x="74" y="108" width="8" height="7" fill="#D8CFE8"></rect>
      <path d="M78 114c-12 0-20 8-22 18l-5 24h54l-5-24c-2-10-10-18-22-18z" fill="#D8CFE8"></path>
      <path d="M52 156h52l8 46H44z" fill="#D8CFE8" opacity="0.85"></path>
      <path d="M100 122l22-6 4 12-24 8z" fill="#D8CFE8"></path>
      <path d="M118 112h26l-6 22h-16z" fill="#D8CFE8" opacity="0.9"></path>
      <path d="M128 134c-4 20-10 38-19 52l-9-5c9-14 15-30 19-47z" fill="#4FA6E0" opacity="0.85"></path>
      <path d="M0 176h180v40H0z" fill="#4FA6E0" opacity="0.2"></path>
      <path d="M16 188h46M98 198h58M36 208h58" stroke="#4FA6E0" stroke-width="4" stroke-linecap="round" opacity="0.45"></path>`,
  },
  {
    id: 18,
    roman: 'XVIII',
    title: 'Der Mond',
    keywords: 'Unbewusstes · Hingabe',
    accent: '#F6A9C6',
    meaning: 'Das Unbewusste, die Intuition, der Kontakt zur eigenen Seele. Eine Karte der Ruhe und Hingabe, die ermuntert, sich auch schwierigen Themen zu stellen.',
    svg: `
      <path d="M98 12a38 38 0 1 0 0 76 48 48 0 0 1 0-76z" fill="#F6A9C6"></path>
      <path d="M18 96h22l6 82H12z" fill="#F6A9C6" opacity="0.35"></path>
      <path d="M29 74l13 22H16z" fill="#F6A9C6" opacity="0.35"></path>
      <path d="M140 96h22l6 82h-34z" fill="#F6A9C6" opacity="0.35"></path>
      <path d="M151 74l13 22h-26z" fill="#F6A9C6" opacity="0.35"></path>
      <g fill="#F6A9C6">
        <path d="M48 150h60l5 26H44z"></path>
        <rect x="52" y="174" width="9" height="22" rx="4"></rect>
        <rect x="66" y="174" width="9" height="22" rx="4"></rect>
        <rect x="88" y="174" width="9" height="22" rx="4"></rect>
        <rect x="100" y="174" width="9" height="22" rx="4"></rect>
        <path d="M44 148L28 126l9-6 16 22z"></path>
        <path d="M102 152l14-26 13 7-13 25z"></path>
        <ellipse cx="124" cy="122" rx="11" ry="9.5"></ellipse>
        <path d="M126 114l22-13 4 9-20 15z"></path>
        <path d="M116 112l-5-15 13 7z"></path>
        <circle cx="128" cy="120" r="2.5" fill="#150F30"></circle>
      </g>
      <path d="M0 178h180v34H0z" fill="#4FA6E0" opacity="0.24"></path>
      <g fill="#F6A9C6" opacity="0.9">
        <ellipse cx="90" cy="196" rx="16" ry="10"></ellipse>
        <circle cx="84" cy="191" r="2.5" fill="#150F30"></circle>
        <circle cx="96" cy="191" r="2.5" fill="#150F30"></circle>
        <path d="M74 191l-12-7 4-6 12 7z"></path>
        <path d="M62 184l-10-3 3-7 5 4 3-5 4 6z"></path>
        <path d="M106 191l12-7-4-6-12 7z"></path>
        <path d="M118 184l10-3-3-7-5 4-3-5-4 6z"></path>
        <path d="M80 206l-7 9M90 208v10M100 206l7 9" stroke="#F6A9C6" stroke-width="3.5" stroke-linecap="round"></path>
      </g>`,
  },
  {
    id: 19,
    roman: 'XIX',
    title: 'Die Sonne',
    keywords: 'Lebenskraft · Gelingen',
    accent: '#F5943A',
    meaning: 'Licht- und Wärmespenderin, Inbegriff von Lebenskraft. Eine Karte voll Energie und Schaffenskraft — ein Hinweis auf gutes Gelingen, innen wie außen.',
    svg: `
      <circle cx="90" cy="50" r="28" fill="#F5C94E"></circle>
      <g stroke="#F5C94E" stroke-width="5" stroke-linecap="round">
        <path d="M90 4v12M38 50H26M154 50h-12M53 13l-9-9M127 13l9-9"></path>
      </g>
      <ellipse cx="90" cy="106" rx="12" ry="13" fill="#F5943A"></ellipse>
      <path d="M78 102c0-10 5-17 12-17s12 7 12 17c-3-6-7-8-12-8s-9 2-12 8z" fill="#F5943A"></path>
      <rect x="86" y="117" width="8" height="7" fill="#F5943A"></rect>
      <path d="M90 122c-13 0-21 8-23 19l-4 21h54l-4-21c-2-11-10-19-23-19z" fill="#F5943A"></path>
      <path d="M112 130l24-16 6 9-24 19z" fill="#F5943A"></path>
      <path d="M68 130L44 114l-6 9 24 19z" fill="#F5943A"></path>
      <path d="M68 162h18l-4 48H68z" fill="#F5943A"></path>
      <path d="M94 162h18l4 48H94z" fill="#F5943A"></path>
      <path d="M0 154h180v10H0z" fill="#F5943A" opacity="0.3"></path>
      <g fill="#F5C94E" opacity="0.65">
        <circle cx="22" cy="174" r="10"></circle>
        <rect x="19" y="182" width="5" height="30" rx="2"></rect>
        <circle cx="158" cy="182" r="10"></circle>
        <rect x="155" y="190" width="5" height="22" rx="2"></rect>
      </g>`,
  },
  {
    id: 20,
    roman: 'XX',
    title: 'Das Gericht',
    keywords: 'Prüfung · Klarheit',
    accent: '#C8CDD1',
    meaning: 'Die Dinge — oder sich selbst — genau prüfen. Zugleich ein Abschluss: Ehrlichkeit und Sachlichkeit helfen, etwas klar zu Ende zu bringen.',
    svg: `
      <ellipse cx="62" cy="34" rx="11" ry="12" fill="#C8CDD1"></ellipse>
      <path d="M51 32c0-9 5-16 11-16s11 7 11 16c-3-6-6-8-11-8s-8 2-11 8z" fill="#C8CDD1"></path>
      <rect x="58" y="44" width="8" height="7" fill="#C8CDD1"></rect>
      <path d="M62 50c-12 0-20 8-22 18l-4 26h52l-4-26c-2-10-10-18-22-18z" fill="#C8CDD1"></path>
      <path d="M42 66L12 48l2 22-8 3 32 16z" fill="#C8CDD1" opacity="0.55"></path>
      <path d="M72 62l28-12 5 12-29 13z" fill="#C8CDD1"></path>
      <path d="M46 66l-8 24 10 3 8-23z" fill="#C8CDD1"></path>
      <path d="M106 38l52-14v26l-52 8z" fill="#F5C94E"></path>
      <rect x="96" y="44" width="12" height="20" rx="4" fill="#F5C94E"></rect>
      <path d="M38 94h48l10 60H30z" fill="#C8CDD1" opacity="0.7"></path>
      <rect x="14" y="184" width="152" height="32" rx="5" fill="#C8CDD1" opacity="0.3"></rect>
      <rect x="14" y="184" width="152" height="6" rx="3" fill="#C8CDD1" opacity="0.45"></rect>
      <g fill="#C8CDD1">
        <ellipse cx="54" cy="146" rx="10" ry="11"></ellipse>
        <path d="M54 158c-9 0-14 6-16 15l-5 21h42l-5-21c-2-9-7-15-16-15z"></path>
        <path d="M40 158l-14-24 8-5 15 22zM68 158l14-24 8 5-15 22z" opacity="0.85"></path>
        <ellipse cx="122" cy="152" rx="10" ry="11"></ellipse>
        <path d="M122 164c-9 0-14 6-16 15l-4 17h40l-4-17c-2-9-7-15-16-15z"></path>
        <path d="M108 164l-12-22 8-4 13 20zM136 164l12-22 8 4-13 20z" opacity="0.85"></path>
      </g>`,
  },
  {
    id: 21,
    roman: 'XXI',
    title: 'Die Welt',
    keywords: 'Vollendung · Weitblick',
    accent: '#6FBF8A',
    meaning: 'Vollendung, Erfolg und alles, was Bestand hat: Verwirklichtes, Angekommensein, Reife. Auch ein Hinweis, mit Distanz auf das große Ganze zu schauen.',
    svg: `
      <ellipse cx="90" cy="110" rx="58" ry="84" fill="none" stroke="#6FBF8A" stroke-width="10"></ellipse>
      <ellipse cx="90" cy="110" rx="58" ry="84" fill="none" stroke="#150F30" stroke-width="3" stroke-dasharray="10 12"></ellipse>
      <ellipse cx="90" cy="66" rx="11" ry="13" fill="#6FBF8A"></ellipse>
      <path d="M79 64c0-9 5-16 11-16s11 7 11 16c-3-6-6-8-11-8s-8 2-11 8z" fill="#6FBF8A"></path>
      <rect x="86" y="76" width="8" height="7" fill="#6FBF8A"></rect>
      <path d="M90 82c-12 0-20 8-22 18l-4 22h52l-4-22c-2-10-10-18-22-18z" fill="#6FBF8A"></path>
      <path d="M112 90l24-14 5 9-24 18z" fill="#6FBF8A"></path>
      <path d="M68 90L44 76l-5 9 24 18z" fill="#6FBF8A"></path>
      <path d="M78 122l-16 44 11 5 16-36z" fill="#6FBF8A"></path>
      <path d="M100 122l18 28-10 7-18-26z" fill="#6FBF8A"></path>
      <g fill="#F5C94E" opacity="0.85">
        <ellipse cx="18" cy="22" rx="7" ry="8"></ellipse>
        <path d="M18 31c-6 0-10 4-11 10l-3 11h28l-3-11c-1-6-5-10-11-10z"></path>
        <ellipse cx="162" cy="22" rx="7" ry="8"></ellipse>
        <path d="M162 31c-6 0-10 4-11 10l-3 11h28l-3-11c-1-6-5-10-11-10z"></path>
        <ellipse cx="18" cy="182" rx="7" ry="8"></ellipse>
        <path d="M18 191c-6 0-10 4-11 10l-3 11h28l-3-11c-1-6-5-10-11-10z"></path>
        <ellipse cx="162" cy="182" rx="7" ry="8"></ellipse>
        <path d="M162 191c-6 0-10 4-11 10l-3 11h28l-3-11c-1-6-5-10-11-10z"></path>
      </g>`,
  },
];
