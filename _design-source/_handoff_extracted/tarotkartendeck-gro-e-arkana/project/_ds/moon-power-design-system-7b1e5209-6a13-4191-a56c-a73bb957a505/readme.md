# Moon Power — Design System

**Version 1.0 · Juli 2026**

Moon Power is a German-language community brand. Its premise: *„Neun Stimmen, ein
System."* One master brand — the night sky, Cosmos Indigo and Crescent Gold — and
nine **Farb-IDs** (colour identities) named after the Moon and the planets. Each
Farb-ID is a *voice*: a three-colour palette, a set of tone words, a typographic
variation, and an example of how the brand addresses people in that register.
The product promise is individuality and belonging at the same time — "werde wer
du bist, gemeinsam sind wir mehr".

The brand has one surface today: a **marketing website** (Start / Stimmen /
Mitmachen). There is no app, no dashboard, no docs site.

---

## Sources this system was built from

| Source | What it gave us |
| --- | --- |
| `website/` — local folder mounted read-only via the Import menu | The full component inventory, all token names, and the three website screens. This folder is a previous export of this same system's UI kit; it is the ground truth for naming and structure. |
| `uploads/MoonPower_final.pdf` — 6-page print reference, "Referenz — Drei Screens" | Verbatim German copy, the nine Farb-ID palettes with exact hex values, tone words, usage contexts and typographic variations. |

No Figma file, no GitHub repository, and no original brand book were provided.
Both sources describe the *same* three screens, so everything outside those three
screens (component states, spacing scale, motion, elevation) has been derived to
be consistent with them rather than copied from a source. Where a value was
derived rather than found, this readme says so.

**Two things the sources do not contain, and this system therefore does not invent:**

1. **No logo file.** Wherever a mark belongs, the brand sets ☾ (U+263E) in Lora
   next to the wordmark `MOON POWER` in Lora Bold, letter-spacing 1px. See
   `guidelines/brand-mark.html`. Send a real logo and it drops straight into
   `assets/`.
2. **No photography or illustration.** Every image slot is a striped placeholder
   with a monospace caption naming what belongs there
   (`ui_kits/website/Placeholder.jsx`, `guidelines/brand-imagery.html`).

---

## Content fundamentals

**Language.** German, always. Sentence case for prose; the *only* uppercase is
the micro-caps layer (eyebrows, button labels, field labels).

**Person.** **Du**, as standard, everywhere. `„Du schaffst das."` ·
`„Wie sollen wir dich nennen?"` · `„Was hast du vor?"` The single exception is
the **Pluto** voice — legal text, terms, principles — which is the only Farb-ID
allowed to use **Sie**: `„Ihre Angaben werden ausschließlich für den Kreis-Zugang
verwendet. Sie können die Zustimmung jederzeit widerrufen."` Never mix the two in
one block; switch by switching voice.

**The five principles** that no Farb-ID may contradict — they appear as a
five-card band on the homepage:

1. Ermutigend statt belehrend
2. Herzlich & inklusiv
3. Klar, nie hart
4. Poesie in Maßen
5. Humor, keine Häme

**Sentence shape.** One thought per sentence, active voice, verb early. Long
thoughts are broken with an em dash rather than a subordinate clause:
`„Fakten vor Effekt. Erklärt, ordnet ein, lässt Zahlen sprechen — nie kalt."`

**Reassurance is part of the copy, not an afterthought.** Every ask is paired
with a limit: `„Einmal im Monat, kein Spam."` · `„Zwei Minuten, fünf Felder."` ·
`„Wir melden uns mit einem Willkommensgruß — kein Verkaufsgespräch."`

**Errors ask, they do not scold.**
`„Diese Adresse kennen wir noch nicht — nochmal prüfen?"` — a question mark, no
"ungültig", no red imperative.

**Enthusiasm is rationed.** One exclamation mark maximum, and only when the
delight is genuine (`Willkommen im Kreis`). Superlatives and marketing adjectives
are absent from every string in the sources.

**Casing details.** German quotation marks `„…"` always, never `"…"`. Em dash
with spaces ` — ` as the standard break. Ampersand is used in short pairings
("Herzlich & inklusiv", "warm & ermutigend"). Gender-inclusive colon form is used
where needed: `Expert:innen`.

**Emoji: never.** Not one appears in any source string. The expressive layer is
the nine planetary glyphs (☾ ☿ ♂ ♃ ♀ ♅ ♆ ♇ ♄), which are typography, not emoji.

**Vocabulary that recurs.** *Stimme* (voice), *Farb-ID*, *Kreis* (the community),
*Ton*, *Wendepunkt*, *mitmachen*, *Teil werden*. Tone words are always lowercase
adjectives in threes: `herzlich · ermutigend · empathisch`.

**Labels.** Buttons are verb phrases, two or three words: "Jetzt mitmachen",
"Teil werden", "Stimmen ansehen", "Erst später". Never "Klicken Sie hier",
never a single bare noun.

---

## Visual foundations

### Colour

The master brand is a **night sky**: `--mp-cosmos-indigo #1E1640` with
`--mp-crescent-gold #F5C94E` as the single accent, over Moonlight neutrals
(`--mp-cloud-white`, `--mp-moonlight-pearl`, `--mp-lavender-100`). Text on light
is Ink, never pure black; text on indigo is Twilight or Pearl, **never pure
white** — a rule the source states explicitly: *„Auf Indigo nie reines Weiß
setzen — Pearl oder Twilight 300 halten den Satz weich."*

The nine Farb-IDs are theme scopes, not decoration. Put `data-mp-theme="mars"` on
any wrapper and `--accent-hue`, `--accent-primary`, `--accent-soft`,
`--accent-deep` and `--accent-on` re-point beneath it; every component follows.
The three documented swatches per ID are reproduced verbatim in
`tokens/colors.css`. `--accent-primary` is a *derived*, legibility-safe rendering
of the signature hue for text and hairlines (Mond's Blossom Pink #F6A9C6 cannot
carry 9.5px type); the literal swatch always stays available as `--accent-hue`.

At most **two background colours per view**: the page white and one of indigo /
gold / a Farb-ID tint.

### Type

Two families, never a third. **Lora** (serif) carries voice: headlines, quotes,
the wordmark, the planetary glyphs. **Poppins** (sans) carries information: body
copy, UI, labels, tables. Monospace appears only inside image placeholders and
spec captions.

Display sizes are Lora at 46 / 28 / 17 with tight leading (1.12 / 1.3) and
`-0.01em` on H1 only. Body is Poppins 17 / 14 / 13 at 1.65 leading — generous,
per the Mond rule *„großzügiger Zeilenabstand"*. Quotes are Lora Italic.

The signature texture of the brand is the **micro-caps layer**: uppercase Poppins
SemiBold at 9.5–13px with tracking from `0.08em` (buttons, tabs) to `0.12em`
(field labels) to `0.2em` (eyebrows). Almost every block on every screen opens
with one.

Per-ID typographic variations are documented on each Farb-ID card, e.g. Mars =
*Lora Bold in Versalien für Statements — sparsam*; Uranus = *Poppins Regular in
Versalien, weites Letterspacing*.

### Spacing & layout

4px base scale (`--space-1` … `--space-12`, 4→112). Page is `--page-max 1180px`
with `--page-gutter 40px`; sections breathe at 80px (`--gap-section`); cards sit
in 18px grids. Intro paragraphs are capped at `--measure-intro 620px`, body at
`66ch`. Interactive elements take one of exactly three heights: 30 / 38 / 46px.

The site header is the only fixed element: `position: sticky`, `rgba(255,255,255,0.92)`
with `backdrop-filter: blur(8px)` and a 1px lavender bottom border. Blur and
transparency are used **only** there and on the dialog scrim — nowhere in content.

### Backgrounds

No patterns, no textures, no photography. Three background treatments only:

- flat white / cloud-white pages;
- one **gradient**, `--surface-cosmos-gradient` — Cosmos 900 → 700 → 500 at 158°
  with a soft radial gold glow at 82% 8%, used for the hero and `Card variant="cosmos"`;
- one **flat action band** in Crescent Gold carrying an indigo Lora quote.

Full-bleed sections are edge-to-edge colour with the 1180px content column
centred inside — never edge-to-edge imagery, because there is none.

### Corners, borders, elevation

The rule: **things you press are round; things that hold content are soft
rectangles.** Buttons, tabs, tags, badges → `--radius-pill`. Cards → 14px,
dialogs → 20px, fields → 8px, checkbox → 4px. Nothing is square.

Borders are 1px hairlines in `--border-default` (lavender #E6E2F2) on light, and
`rgba(237,235,245,0.18)` on indigo. The Farb-ID marker is a **4px bar** — down the
left edge of a Card (`accentBar`), across the top edge of a Dialog, down the left
edge of a Toast.

Shadows are **indigo-tinted, never neutral grey**, and low: `--shadow-sm` at rest,
`--shadow-md` on hover, `--shadow-lg` for dialogs and toasts. There is no inner
shadow system beyond `--shadow-inset-hairline`, which keeps white swatches visible
against white cards. No protection gradients — captions sit *beside* placeholders,
never over imagery.

### Motion

Calm and short. 120ms for control feedback, 200ms for entrances and the switch
knob, 360ms for overlays, all on `--ease-moon cubic-bezier(.2,.8,.2,1)`. Things
**fade and rise**; nothing bounces, nothing springs, nothing rotates. Reduced
motion is honoured globally in `tokens/base.css`.

### Hover & press

Hover on a filled control darkens it one step (indigo → Cosmos 700) and raises
the shadow one level; hover on a flat control lays down `--overlay-hover`
(`rgba(30,22,64,0.05)`), never an opacity change. Interactive cards lift
`translateY(-1px)`. Press shrinks: `scale(0.985)` — no colour flash. Focus is
always the same and always visible: a 3px Crescent Gold ring
(`--shadow-focus`), regardless of the surrounding Farb-ID. Disabled is 42%
opacity plus `not-allowed`.

### Imagery direction (aspirational — none supplied)

The placeholders name what the brand expects: community portraits, warm and
candid ("Hero-Bild — Community-Porträt", "Bildwelt — Mond"). Given the palette,
imagery should read warm and soft-lit on the light surfaces and cool-indigo where
it meets the cosmos gradient. **This is an inference, not a sourced rule** — treat
it as a starting proposal.

---

## Iconography

Moon Power has **no icon library, no icon font, and no SVG icon set** — not in the
codebase, not in the PDF. Its iconography is a single, deliberate system:

**The nine planetary marks, set as Unicode characters in Lora.**

| ID | Glyph | Codepoint | Voice |
| --- | --- | --- | --- |
| moon | ☾ | U+263E | Mond |
| mercury | ☿ | U+263F | Merkur |
| mars | ♂ | U+2642 | Mars |
| jupiter | ♃ | U+2643 | Jupiter |
| venus | ♀ | U+2640 | Venus |
| uranus | ♅ | U+2645 | Uranus |
| neptune | ♆ | U+2646 | Neptun |
| pluto | ♇ | U+2647 | Pluto |
| saturn | ♄ | U+2644 | Saturn |

They are shipped as the `Glyph` component, which colours itself from
`--accent-primary` and so follows the surrounding `data-mp-theme` automatically.
☾ at 1.35× the wordmark size stands in for a logo.

Beyond the nine, the sources use a handful of **typographic unicode characters**
as UI affordances, and nothing else: `⧉` copy, `×` (U+00D7) dismiss, `✓` (U+2713)
checked, `▾` (U+25BE) select chevron, `⋯` more. Follow that pattern rather than
importing a library — an `IconButton` takes any of these as children.

**No emoji, ever.** **No hand-drawn SVGs.** If a genuinely new icon is needed,
raise it rather than drawing one: the brand's restraint here is the point. Should
a set become necessary, the nearest match in weight and feel would be Lucide at
1.5px stroke — but that substitution has **not** been made here.

---

## Fonts — substitution flag

⚠️ **No font binaries were supplied.** The sources name *Lora* and *Poppins*;
both were fetched from **Google Fonts** and self-hosted in `assets/fonts/`
(latin + latin-ext subsets, woff2):

- **Lora** — variable 400–700, upright + italic
- **Poppins** — 400 / 500 / 600 / 700 upright, 400 italic

If Moon Power licenses different cuts (or a bespoke display face), **please send
the files** and `tokens/fonts.css` can be repointed in one edit.

---

## Intentional additions

Everything in `components/` is named in the source's own dependency list
(`website/index.html`). Two clarifications:

- **`Glyph`** — the source used it as a primitive but it is really a wrapper
  around the unicode set; it is documented as a component so consumers stop
  hand-typing planet characters.
- **`Radio` / `RadioGroup`** — the source imports only `RadioGroup`; the single
  `Radio` is exported from the same file so custom layouts are possible.

No Avatar, Breadcrumb, Table, Accordion or Pagination has been invented. If you
need one, ask — it should be designed, not assumed.

---

## Index

### Root
- `styles.css` — the single entry point consumers link. `@import` lines only.
- `readme.md` — this file.
- `SKILL.md` — Agent Skills front-matter so this folder works inside Claude Code.
- `thumbnail.html` — homepage tile.
- `ds-preview.js` — small loader shared by the UI-kit pages.

### `tokens/`
`fonts.css` (@font-face) · `colors.css` (raw palette + nine Farb-IDs) ·
`typography.css` · `spacing.css` · `shape.css` · `elevation.css` (shadows, z, scrim) ·
`motion.css` · `semantic.css` (the aliases components actually use) ·
`themes.css` (the nine `[data-mp-theme]` scopes) · `base.css`

### `components/`
| Group | Components |
| --- | --- |
| `core/` | **Button**, **IconButton**, **Glyph**, **Card**, **Badge**, **Tag** |
| `forms/` | **Input**, **Select**, **Checkbox**, **Radio** (+ **RadioGroup**), **Switch** |
| `navigation/` | **Tabs** |
| `feedback/` | **Dialog**, **Toast**, **Tooltip** |

Each has a `.jsx`, a `.d.ts` props contract and a `.prompt.md` usage note; each
directory has one `@dsCard` HTML showing its states.

### `guidelines/`
31 specimen cards, grouped in the Design System tab as **Colors** (master brand,
ink, twilight, surfaces, status), **Farb-IDs** (one card per voice), **Type**
(families, display, body, quote, micro-caps, weights), **Spacing** (scale, page &
measure, control heights) and **Brand** (wordmark, glyphs, gradient, radii,
shadows, motion, states, imagery).

### `templates/`
`marketing-page/MarketingPage.dc.html` — a one-file Moon Power marketing page
(sticky header, cosmos hero, Farb-ID grid, gold quote band, principles row,
indigo footer) built from the design-system components. Copy the folder into a
consuming project and edit the one `base` line in `ds-base.js`.

### `ui_kits/website/`
The three-screen marketing site — `index.html` (click-through), `HomeScreen.jsx`,
`VoicesScreen.jsx`, `JoinScreen.jsx`, `SiteChrome.jsx`, `data.jsx`,
`Placeholder.jsx`, plus its own `README.md` with caveats.

### `assets/`
`fonts/` — 14 woff2 files. No logo, no imagery (see above).

---

## Derived, not sourced

For honesty when someone compares this system against a future brand book, these
were reasoned from the two sources rather than found in them: the exact indigo
value and the Cosmos 900/700/500 ramp; the Ink and Twilight ramps; the 4px
spacing scale and 30/38/46 control heights; all shadow, radius, motion and
z-index values; `--accent-primary` per Farb-ID; the status-colour mapping; and
the imagery direction. Everything in the Farb-ID palettes, all German copy, the
five principles, the two font families and the three screen layouts came
straight from the sources.
