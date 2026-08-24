# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Esmeralda: a single-page React app where a hand-illustrated fortune teller shuffles the Major Arcana and draws a random daily card, shown with its full meaning in an overlay. Plain Vite + React, no router, no backend.

## Commands

```bash
npm install
npm run dev       # Vite dev server, http://localhost:5173 by default
npm run build     # production build
npm run preview   # serve the production build locally
```

There is no test suite and no linter configured.

**Dev server port:** `vite.config.js` reads `process.env.PORT` (falling back to `5173`, `strictPort: false`) instead of a hardcoded port — keep it that way rather than adding a `--port` flag to the `dev` script.

**`.claude/launch.json`'s `esmeralda-tarot` preview config fails to start via `preview_start` on this machine** with `EPERM: process.cwd failed ... uv_cwd` — that's the preview tool's process spawner hitting a macOS sandbox restriction on this Desktop-located path, not a project bug. Workaround: start the dev server yourself in the background (`npm run dev`) and call `preview_start` with the resulting `url` (e.g. `http://localhost:5173`) instead of `name`.

## Architecture

- **`src/main.jsx`** mounts `App.jsx` and imports `styles/tokens.css` *before* `styles/app.css` — `tokens.css` defines the `--mp-*` CSS custom properties and `@font-face` rules that `app.css` consumes, so that order matters.
- **`src/data/cards.js`** is the single source of truth for all 22 Major Arcana cards: `{ id, roman, title, keywords, accent, meaning, svg }`, where `svg` is the raw inner markup of a `viewBox="0 0 180 220"` `<svg>` (rendered via `dangerouslySetInnerHTML` in `TarotCard.jsx`). Every motif, color, and meaning text here was transcribed verbatim from the "Moon Power" tarot deck design handoff — see `_design-source/`. If that source deck design changes, re-sync by hand from there rather than redrawing motifs from scratch.
- **`src/styles/tokens.css`** holds the Moon Power brand tokens (colors, self-hosted Lora/Poppins via `public/fonts/*.woff2`) copied from the same design handoff. This brand system is shared with the sibling `moon-buddy` project — if the design system is updated there, sync colors/fonts here too.
- **`App.jsx`** is a small state machine: clicking "Karten mischen" sets `shuffling = true` for 1450ms (must stay in sync with the shuffle keyframe duration in `app.css`), then picks a card with `Math.random()` and opens `CardOverlay`. Every click is an independent random draw — there is deliberately no "one card per day" persistence (an earlier localStorage-based daily-lock version was removed per explicit user request; don't reintroduce it without asking).
- **`Esmeralda.jsx`** is a hand-built flat-silhouette SVG illustration (`viewBox="0 0 320 280"`, no photographic skin tones — everything is flat accent-colored shapes, matching the deck's own illustration style). Its idle sway and the on-table card group (`.esmeralda__cards`, toggled with `.is-shuffling`) are animated from `app.css`; the three tabletop cards there are a simplified inline redraw, not the `TarotCard` component.
- **`CardOverlay.jsx`** reuses `TarotCard.jsx` for the drawn-card display — any component rendering a card just needs an object shaped like an entry from `cards.js`.
- **`_design-source/`** is reference-only (the original Claude Design handoff: `.dc.html` source, design-system tokens, and font files) — nothing in `src/` imports from it at build time.
