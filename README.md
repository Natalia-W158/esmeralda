# ☾ Esmeralda — Tarotkartenlegerin

Eine kleine, stimmungsvolle Web-App: Esmeralda mischt die 22 Karten der Großen Arkana und legt dir deine Tageskarte — inklusive Bedeutungstext, Teilen-Funktion und persönlicher Kartenhistorie.

**🔮 Live:** [natalia-w158.github.io/esmeralda](https://natalia-w158.github.io/esmeralda/)

## Was die App kann

- **Tageskarte ziehen** — Esmeralda mischt animiert, danach erscheint eine zufällige Karte der Großen Arkana als Overlay mit Motiv, Schlagworten und vollständigem Bedeutungstext
- **Teilen** — die gezogene Karte per WhatsApp, Telegram, Facebook, Instagram, E-Mail oder Zwischenablage weitergeben (nutzt die native Systemfreigabe, wo verfügbar)
- **Anmeldung & Historie** — mit Vorname, Nachname und E-Mail anmelden (E-Mail-Domain wird per echtem DNS-Check live geprüft) und alle bisher gezogenen Tageskarten einsehen, durchsuchen und nach Datum oder Karte sortieren — inklusive der jeweiligen **Mondphase** des Tages
- **Persönliche Begrüßung** — Esmeralda begrüßt dich beim Aufruf und (mit Namen) direkt nach dem Login in einer Sprechblase
- **Cookie-Hinweis** — transparent, wofür lokale Speicherung und der Domain-Check genutzt werden
- Durchgängig responsiv (Mobile, Tablet, Desktop)

## Design

Motive, Farben, Typografie und Kartentexte stammen aus dem **Moon Power**-Kartendeck-Design (siehe [`_design-source/`](_design-source)) — demselben Design-System wie das Schwesterprojekt „Moon Buddy".

## Tech-Stack

- [Vite](https://vitejs.dev) + [React](https://react.dev) — keine weiteren Frameworks, kein Backend
- Konten & Historie werden lokal im Browser gespeichert (`localStorage`) — noch kein echtes Cloud-Backend
- Mondphasen werden rein astronomisch berechnet (kein externer API-Call nötig)
- Deploy automatisiert über GitHub Actions nach GitHub Pages

## Lokal entwickeln

```bash
npm install
npm run dev       # Dev-Server, Standard: http://localhost:5173
npm run build     # Produktions-Build nach dist/
npm run preview   # Produktions-Build lokal testen
```

Es gibt kein Test- oder Lint-Setup.

## Deployment

Jeder Push auf `main` löst automatisch einen Build + Deploy nach GitHub Pages aus (siehe [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).
