/* @ds-bundle: {"format":4,"namespace":"MoonPowerDesignSystem_7b1e52","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"GLYPHS","sourcePath":"components/core/Glyph.jsx"},{"name":"GLYPH_NAMES","sourcePath":"components/core/Glyph.jsx"},{"name":"Glyph","sourcePath":"components/core/Glyph.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"325802c9b955","components/core/Button.jsx":"1ff02e39688a","components/core/Card.jsx":"f318757cb5ac","components/core/Glyph.jsx":"55b156c9fc75","components/core/IconButton.jsx":"2fe8c9bbe436","components/core/Tag.jsx":"68e56e77648d","components/feedback/Dialog.jsx":"f6e50793433c","components/feedback/Toast.jsx":"67fcd2af5613","components/feedback/Tooltip.jsx":"0c19603d5a40","components/forms/Checkbox.jsx":"2c8e26a3d81c","components/forms/Input.jsx":"6540c75fa9d1","components/forms/Radio.jsx":"54ba71a0d136","components/forms/Select.jsx":"5b9248832a68","components/forms/Switch.jsx":"a2d4f886acca","components/navigation/Tabs.jsx":"4e0b260452a4","ds-preview.js":"3fffa6887dc4","ui_kits/website/HomeScreen.jsx":"9adb003e2a3b","ui_kits/website/JoinScreen.jsx":"51acd486f8e4","ui_kits/website/Placeholder.jsx":"a89ec1d4ab40","ui_kits/website/SiteChrome.jsx":"480cb5561c90","ui_kits/website/VoicesScreen.jsx":"6baed96e5e3f","ui_kits/website/data.jsx":"3ae7e4b83f1a","ui_kits/website/doc-page.js":"371bab66f42d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MoonPowerDesignSystem_7b1e52 = window.MoonPowerDesignSystem_7b1e52 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BADGE_TONES = {
  neutral: {
    background: "var(--surface-subtle)",
    color: "var(--text-muted)",
    border: "1px solid var(--border-default)"
  },
  accent: {
    background: "var(--accent-soft)",
    color: "var(--accent-primary)",
    border: "1px solid var(--accent-hue)"
  },
  gold: {
    background: "var(--mp-crescent-gold-soft)",
    color: "var(--mp-crescent-gold-deep)",
    border: "1px solid var(--mp-crescent-gold)"
  },
  success: {
    background: "var(--status-success-surface)",
    color: "var(--status-success)",
    border: "1px solid var(--status-success)"
  },
  danger: {
    background: "var(--status-danger-surface)",
    color: "var(--status-danger)",
    border: "1px solid var(--status-danger)"
  },
  info: {
    background: "var(--status-info-surface)",
    color: "var(--status-info)",
    border: "1px solid var(--status-info)"
  },
  inverse: {
    background: "rgba(237,235,245,0.12)",
    color: "var(--text-inverse)",
    border: "1px solid var(--border-inverse)"
  }
};

/** Small uppercase status/category marker. Not interactive — use Tag for that. */
function Badge({
  tone = "neutral",
  style,
  children,
  ...rest
}) {
  const t = BADGE_TONES[tone] || BADGE_TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: 22,
      padding: "0 10px",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-2xs)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      borderRadius: "var(--radius-pill)",
      ...t,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BUTTON_SIZES = {
  sm: {
    height: "var(--control-h-sm)",
    padding: "0 16px",
    fontSize: "var(--text-xs)"
  },
  md: {
    height: "var(--control-h-md)",
    padding: "0 20px",
    fontSize: "var(--text-sm)"
  },
  lg: {
    height: "var(--control-h-lg)",
    padding: "0 26px",
    fontSize: "var(--text-md)"
  }
};
const BUTTON_VARIANTS = {
  primary: {
    background: "var(--surface-inverse)",
    color: "var(--text-inverse)",
    border: "1px solid transparent",
    hover: "var(--mp-cosmos-700)"
  },
  secondary: {
    background: "var(--surface-action)",
    color: "var(--text-on-action)",
    border: "1px solid transparent",
    hover: "#F7D470"
  },
  accent: {
    background: "var(--accent-hue)",
    color: "var(--accent-on)",
    border: "1px solid transparent",
    hover: "var(--accent-primary)"
  },
  outline: {
    background: "transparent",
    color: "var(--text-strong)",
    border: "1px solid var(--border-strong)",
    hover: "var(--overlay-hover)"
  },
  quiet: {
    background: "transparent",
    color: "var(--text-muted)",
    border: "1px solid transparent",
    hover: "var(--overlay-hover)"
  }
};

/** Primary action control. Pill-shaped, Poppins SemiBold, wide tracking. */
function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  iconLeft,
  iconRight,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = BUTTON_VARIANTS[variant] || BUTTON_VARIANTS.primary;
  const s = BUTTON_SIZES[size] || BUTTON_SIZES.md;
  const flat = variant === "outline" || variant === "quiet";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      width: fullWidth ? "100%" : undefined,
      height: s.height,
      padding: s.padding,
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-semibold)",
      fontSize: s.fontSize,
      letterSpacing: "var(--tracking-ui)",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      background: hover && !disabled ? flat ? v.hover : v.hover : v.background,
      color: v.color,
      border: v.border,
      borderRadius: "var(--radius-pill)",
      boxShadow: flat ? "none" : hover && !disabled ? "var(--shadow-md)" : "var(--shadow-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.42 : 1,
      transform: press && !disabled ? "var(--press-scale)" : "none",
      transition: "var(--transition-control)",
      ...style
    }
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      fontSize: "1.15em"
    }
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      fontSize: "1.15em"
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The workhorse container: white, soft-cornered, hairline border, optional Farb-ID bar. */
function Card({
  variant = "default",
  accentBar = false,
  interactive = false,
  padding = "22px 24px",
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const skins = {
    default: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      color: "var(--text-body)"
    },
    subtle: {
      background: "var(--surface-subtle)",
      border: "1px solid transparent",
      color: "var(--text-body)"
    },
    accent: {
      background: "var(--accent-soft)",
      border: "1px solid var(--accent-hue)",
      color: "var(--text-body)"
    },
    cosmos: {
      background: "var(--surface-cosmos-gradient)",
      border: "1px solid var(--border-inverse)",
      color: "var(--text-inverse)"
    },
    outline: {
      background: "transparent",
      border: "1px solid var(--border-strong)",
      color: "var(--text-body)"
    }
  };
  const skin = skins[variant] || skins.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "var(--radius-md)",
      padding,
      paddingLeft: accentBar ? "calc(" + padding.split(" ").slice(-1)[0] + " + var(--accent-bar-width))" : undefined,
      boxShadow: interactive && hover ? "var(--shadow-md)" : variant === "subtle" ? "none" : "var(--shadow-sm)",
      transform: interactive && hover ? "var(--lift-hover)" : "none",
      cursor: interactive ? "pointer" : undefined,
      transition: "var(--transition-control)",
      ...skin,
      ...style
    }
  }, rest), accentBar ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: "var(--accent-bar-width)",
      background: "var(--accent-hue)"
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Glyph.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The nine Farb-ID marks. Astronomical unicode — Moon Power draws no custom icons. */
const GLYPHS = {
  moon: "\u263E",
  mercury: "\u263F",
  mars: "\u2642",
  jupiter: "\u2643",
  venus: "\u2640",
  uranus: "\u2645",
  neptune: "\u2646",
  pluto: "\u2647",
  saturn: "\u2644"
};
const GLYPH_NAMES = {
  moon: "Mond",
  mercury: "Merkur",
  mars: "Mars",
  jupiter: "Jupiter",
  venus: "Venus",
  uranus: "Uranus",
  neptune: "Neptun",
  pluto: "Pluto",
  saturn: "Saturn"
};
function Glyph({
  id = "moon",
  size = 24,
  color,
  title,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": title || GLYPH_NAMES[id] || id,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-serif-display)",
      fontSize: size,
      lineHeight: 1,
      color: color || "var(--accent-primary)",
      ...style
    }
  }, rest), GLYPHS[id] || GLYPHS.moon);
}
Object.assign(__ds_scope, { GLYPHS, GLYPH_NAMES, Glyph });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Glyph.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICON_SIZES = {
  sm: 28,
  md: 34,
  lg: 40
};

/** Square-ish round control holding a single glyph. Always needs a label for a11y. */
function IconButton({
  label,
  variant = "quiet",
  size = "md",
  disabled = false,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = ICON_SIZES[size] || ICON_SIZES.md;
  const skins = {
    quiet: {
      background: hover ? "var(--overlay-hover)" : "transparent",
      color: "var(--text-muted)",
      border: "1px solid transparent"
    },
    outline: {
      background: hover ? "var(--overlay-hover)" : "transparent",
      color: "var(--text-strong)",
      border: "1px solid var(--border-strong)"
    },
    solid: {
      background: hover ? "var(--mp-cosmos-700)" : "var(--surface-inverse)",
      color: "var(--text-inverse)",
      border: "1px solid transparent"
    },
    accent: {
      background: hover ? "var(--accent-primary)" : "var(--accent-hue)",
      color: "var(--accent-on)",
      border: "1px solid transparent"
    }
  };
  const skin = skins[variant] || skins.quiet;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: Math.round(d * 0.44),
      lineHeight: 1,
      fontFamily: "var(--font-sans)",
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.42 : 1,
      transition: "var(--transition-control)",
      ...skin,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Lowercase descriptor chip — the tone words attached to each Farb-ID. */
function Tag({
  selected = false,
  onRemove,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = Boolean(rest.onClick);
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 26,
      padding: "0 12px",
      font: "var(--type-body-sm)",
      color: selected ? "var(--accent-on)" : "var(--text-body)",
      background: selected ? "var(--accent-hue)" : hover && clickable ? "var(--surface-sunken)" : "var(--surface-subtle)",
      border: "1px solid " + (selected ? "var(--accent-hue)" : "var(--border-default)"),
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      cursor: clickable ? "pointer" : "default",
      transition: "var(--transition-control)",
      ...style
    }
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Entfernen",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "inherit",
      font: "inherit",
      padding: 0,
      lineHeight: 1,
      opacity: 0.6
    }
  }, "\u00D7") : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Centred modal on an indigo scrim. Used for turning points, never for confirmations of trivia. */
function Dialog({
  open,
  eyebrow,
  title,
  footer,
  onClose,
  width = 520,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: "var(--z-dialog)",
      background: "var(--scrim)",
      backdropFilter: "var(--blur-chrome)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      animation: "none"
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      position: "relative",
      width: "100%",
      maxWidth: width,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      padding: "28px 30px 24px",
      borderTop: "var(--accent-bar-width) solid var(--accent-hue)",
      ...style
    }
  }, rest), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Schlie\xDFen",
    onClick: onClose,
    style: {
      position: "absolute",
      top: 16,
      right: 18,
      border: "none",
      background: "none",
      cursor: "pointer",
      fontSize: 20,
      lineHeight: 1,
      color: "var(--text-subtle)",
      padding: 4
    }
  }, "\u00D7") : null, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--accent-primary)",
      marginBottom: 8
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      color: "var(--text-strong)",
      marginBottom: 12
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-muted)"
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 12,
      marginTop: 24
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TOAST_TONES = {
  neutral: {
    bar: "var(--mp-twilight-500)",
    mark: "\u263E"
  },
  success: {
    bar: "var(--status-success)",
    mark: "\u2713"
  },
  danger: {
    bar: "var(--status-danger)",
    mark: "!"
  },
  info: {
    bar: "var(--status-info)",
    mark: "\u263F"
  }
};

/** Transient confirmation. One line of warmth, one line of fact. */
function Toast({
  tone = "neutral",
  title,
  onDismiss,
  children,
  style,
  ...rest
}) {
  const t = TOAST_TONES[tone] || TOAST_TONES.neutral;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      minWidth: 280,
      maxWidth: 380,
      padding: "14px 16px",
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      borderLeft: "var(--accent-bar-width) solid " + t.bar,
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: "var(--font-serif-display)",
      fontSize: 16,
      lineHeight: "20px",
      color: t.bar
    }
  }, t.mark), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-h3)",
      fontSize: "var(--text-md)",
      color: "var(--text-strong)",
      marginBottom: 3
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, children) : null), onDismiss ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Schlie\xDFen",
    onClick: onDismiss,
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      fontSize: 17,
      lineHeight: 1,
      color: "var(--text-subtle)",
      padding: 0
    }
  }, "\u00D7") : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hover/focus label on an indigo capsule. */
function Tooltip({
  content,
  placement = "top",
  children,
  style,
  ...rest
}) {
  const [on, setOn] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setOn(true),
    onMouseLeave: () => setOn(false),
    onFocus: () => setOn(true),
    onBlur: () => setOn(false),
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: "var(--z-tooltip)",
      ...pos,
      padding: "6px 10px",
      borderRadius: "var(--radius-sm)",
      background: "var(--surface-inverse)",
      color: "var(--text-inverse)",
      font: "var(--type-caption)",
      letterSpacing: "var(--tracking-normal)",
      textTransform: "none",
      whiteSpace: "nowrap",
      boxShadow: "var(--shadow-md)",
      opacity: on ? 1 : 0,
      visibility: on ? "visible" : "hidden",
      transition: "opacity var(--dur-fast) var(--ease-moon)",
      pointerEvents: "none"
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with optional description line. Checked state uses the Farb-ID hue. */
function Checkbox({
  label,
  description,
  checked,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const uid = React.useMemo(() => id || "mp-" + Math.random().toString(36).slice(2, 8), [id]);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "flex",
      gap: 11,
      alignItems: "flex-start",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      flex: "0 0 auto",
      width: 18,
      height: 18,
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 18,
      height: 18,
      margin: 0,
      cursor: "inherit"
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 18,
      height: 18,
      borderRadius: "var(--radius-xs)",
      background: checked ? "var(--accent-hue)" : "var(--surface-card)",
      border: "1px solid " + (checked ? "var(--accent-hue)" : "var(--border-field)"),
      color: "var(--accent-on)",
      fontSize: 12,
      lineHeight: 1,
      transition: "var(--transition-control)"
    }
  }, checked ? "\u2713" : "")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-strong)"
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-subtle)"
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function InputFieldShell({
  label,
  required,
  hint,
  error,
  htmlFor,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-2xs)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-eyebrow)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent-primary)"
    }
  }, " *") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--status-danger)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-subtle)"
    }
  }, hint) : null);
}

/** Single-line or multiline text field with label, hint and error slots. */
function Input({
  label,
  hint,
  error,
  required = false,
  multiline = false,
  rows = 3,
  id,
  style,
  wrapperStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const uid = React.useMemo(() => id || "mp-" + Math.random().toString(36).slice(2, 8), [id]);
  const Ctrl = multiline ? "textarea" : "input";
  const control = /*#__PURE__*/React.createElement(Ctrl, _extends({
    id: uid,
    rows: multiline ? rows : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: "100%",
      minHeight: multiline ? undefined : "var(--control-h-md)",
      padding: multiline ? "10px 14px" : "0 14px",
      font: "var(--type-body)",
      color: "var(--text-strong)",
      background: "var(--surface-card)",
      border: "1px solid " + (error ? "var(--status-danger)" : focus ? "var(--accent-primary)" : hover ? "var(--border-field-hover)" : "var(--border-field)"),
      borderRadius: "var(--radius-sm)",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      outline: "none",
      resize: multiline ? "vertical" : undefined,
      transition: "var(--transition-control)",
      ...style
    }
  }, rest));
  return /*#__PURE__*/React.createElement(InputFieldShell, {
    label: label,
    required: required,
    hint: hint,
    error: error,
    htmlFor: uid,
    style: wrapperStyle
  }, control);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  name,
  value,
  checked,
  disabled = false,
  style,
  ...rest
}) {
  const uid = React.useMemo(() => "mp-" + Math.random().toString(36).slice(2, 8), []);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "flex",
      gap: 11,
      alignItems: "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      flex: "0 0 auto",
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 18,
      height: 18,
      margin: 0,
      cursor: "inherit"
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 18,
      height: 18,
      borderRadius: "var(--radius-pill)",
      background: "var(--surface-card)",
      border: "1px solid " + (checked ? "var(--accent-hue)" : "var(--border-field)"),
      transition: "var(--transition-control)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--accent-hue)" : "transparent",
      transition: "var(--transition-control)"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-strong)"
    }
  }, label));
}

/** Labelled stack of radios — the normal way to use Radio. */
function RadioGroup({
  label,
  name,
  value,
  options = [],
  onChange,
  style,
  ...rest
}) {
  const items = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      ...style
    },
    role: "radiogroup",
    "aria-label": label
  }, rest), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-2xs)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-eyebrow)",
      marginBottom: 2
    }
  }, label) : null, items.map(o => /*#__PURE__*/React.createElement(Radio, {
    key: o.value,
    name: name,
    value: o.value,
    label: o.label,
    checked: value === o.value,
    onChange: onChange
  })));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SelectFieldShell({
  label,
  required,
  hint,
  error,
  htmlFor,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-2xs)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-eyebrow)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent-primary)"
    }
  }, " *") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--status-danger)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-subtle)"
    }
  }, hint) : null);
}

/** Native select in Moon Power field clothing, with a Lora chevron. */
function Select({
  label,
  hint,
  error,
  required = false,
  options = [],
  placeholder,
  id,
  style,
  wrapperStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = React.useMemo(() => id || "mp-" + Math.random().toString(36).slice(2, 8), [id]);
  const items = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement(SelectFieldShell, {
    label: label,
    required: required,
    hint: hint,
    error: error,
    htmlFor: uid,
    style: wrapperStyle
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    defaultValue: "",
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      height: "var(--control-h-md)",
      padding: "0 34px 0 14px",
      font: "var(--type-body)",
      color: "var(--text-strong)",
      background: "var(--surface-card)",
      appearance: "none",
      border: "1px solid " + (error ? "var(--status-danger)" : focus ? "var(--accent-primary)" : "var(--border-field)"),
      borderRadius: "var(--radius-sm)",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      outline: "none",
      cursor: "pointer",
      transition: "var(--transition-control)",
      ...style
    }
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder) : null, items.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 13,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      fontFamily: "var(--font-serif-display)",
      fontSize: 11,
      color: "var(--text-subtle)"
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Toggle for a preference that takes effect immediately. */
function Switch({
  label,
  description,
  checked = false,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const uid = React.useMemo(() => id || "mp-" + Math.random().toString(36).slice(2, 8), [id]);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      flex: "0 0 auto",
      width: 38,
      height: 22,
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 38,
      height: 22,
      margin: 0,
      cursor: "inherit"
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "block",
      width: 38,
      height: 22,
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--accent-hue)" : "var(--mp-lavender-200)",
      transition: "var(--transition-control)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 3,
      left: checked ? 19 : 3,
      width: 16,
      height: 16,
      borderRadius: "var(--radius-pill)",
      background: "var(--mp-pure-white)",
      boxShadow: "var(--shadow-sm)",
      transition: "left var(--dur-base) var(--ease-moon)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-strong)"
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-subtle)"
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Horizontal switcher. pill = Farb-ID chooser; underline = section nav. */
function Tabs({
  items = [],
  value,
  onChange,
  variant = "pill",
  style,
  ...rest
}) {
  const list = items.map(i => typeof i === "string" ? {
    value: i,
    label: i
  } : i);
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: variant === "pill" ? 8 : 26,
      borderBottom: variant === "underline" ? "1px solid var(--border-default)" : undefined,
      ...style
    }
  }, rest), list.map(i => {
    const on = i.value === value;
    const hot = hover === i.value;
    const base = {
      font: "var(--type-ui)",
      letterSpacing: "var(--tracking-ui)",
      textTransform: "uppercase",
      cursor: "pointer",
      transition: "var(--transition-control)",
      background: "none",
      whiteSpace: "nowrap"
    };
    const skin = variant === "pill" ? {
      height: "var(--control-h-sm)",
      padding: "0 15px",
      borderRadius: "var(--radius-pill)",
      background: on ? "var(--surface-inverse)" : hot ? "var(--surface-sunken)" : "var(--surface-subtle)",
      color: on ? "var(--text-inverse)" : "var(--text-muted)",
      border: "1px solid " + (on ? "transparent" : "var(--border-default)")
    } : {
      height: 38,
      padding: "0 0 10px",
      border: "none",
      borderBottom: "2px solid " + (on ? "var(--mp-crescent-gold)" : "transparent"),
      color: on ? "var(--text-strong)" : hot ? "var(--text-body)" : "var(--text-subtle)"
    };
    return /*#__PURE__*/React.createElement("button", {
      key: i.value,
      type: "button",
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(i.value),
      onMouseEnter: () => setHover(i.value),
      onMouseLeave: () => setHover(null),
      style: {
        ...base,
        ...skin,
        display: "inline-flex",
        alignItems: "center",
        gap: 7
      }
    }, i.icon || null, i.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ds-preview.js
try { (() => {
/* DSPreview — tiny loader shared by Moon Power's UI-kit pages.

   boot({ bundle, load, needs, local })
     bundle : path to the compiled _ds_bundle.js (preferred source of primitives)
     needs  : component names the page expects on the namespace
     local  : fallback .jsx paths, transpiled in-browser if the bundle is absent
     load   : the page's own Babel scripts, evaluated in order
   Afterwards the demo in <script type="text/x-demo"> runs.
   Resolved primitives are published on window.MPKit.NS. */
window.DSPreview = function () {
  const T = (code, name) => Babel.transform(code, {
    presets: ["react"],
    filename: name
  }).code;
  function loadScript(src) {
    return new Promise(res => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = () => res(true);
      s.onerror = () => res(false);
      document.head.appendChild(s);
    });
  }
  function findNamespace(needs) {
    for (const k of Object.keys(window)) {
      if (!/^[A-Z]/.test(k)) continue;
      const v = window[k];
      if (v && typeof v === "object" && needs.every(n => typeof v[n] === "function")) return v;
    }
    return null;
  }
  async function fromLocal(paths) {
    // Each file gets its own scope, exactly like a real module, so two files may
    // both declare a private SIZES/TONES constant without colliding.
    let src = "";
    for (const p of paths) {
      const names = [];
      let code = await (await fetch(p)).text();
      code = code.replace(/^\s*import[^;]+;\s*$/gm, "");
      code = code.replace(/export\s+(function|const|class)\s+([A-Za-z0-9_]+)/g, (m, kw, n) => {
        names.push(n);
        return kw + " " + n;
      });
      src += "(function(){\n" + T(code, p) + "\nObject.assign(__ns, {" + names.join(",") + "});\n})();\n";
    }
    // eslint-disable-next-line no-new-func
    const ns = {};
    new Function("React", "__ns", src)(window.React, ns);
    return ns;
  }
  async function boot(opts) {
    const needs = opts.needs || [];
    window.MPKit = window.MPKit || {};
    if (opts.bundle) await loadScript(opts.bundle);
    let ns = findNamespace(needs);
    if (!ns && opts.local) {
      try {
        ns = await fromLocal(opts.local);
      } catch (e) {
        console.error("DSPreview local fallback failed:", e && e.message, e);
      }
    }
    if (!ns) {
      console.error("DSPreview: could not resolve primitives", needs);
      return;
    }
    window.MPKit.NS = ns;
    for (const f of opts.load || []) {
      const code = await (await fetch(f)).text();
      // eslint-disable-next-line no-new-func
      new Function("React", "ReactDOM", T(code, f))(window.React, window.ReactDOM);
    }
    const demo = document.getElementById("demo");
    if (demo) {
      // eslint-disable-next-line no-new-func
      new Function("React", "ReactDOM", T(demo.textContent, "demo"))(window.React, window.ReactDOM);
    }
  }
  return {
    boot
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ds-preview.js", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
window.MPKit = window.MPKit || {};
window.MPKit.HomeScreen = function HomeScreen({
  onNavigate
}) {
  const {
    Button,
    Card,
    Glyph,
    Badge
  } = window.MPKit.NS;
  const {
    Placeholder,
    IDS
  } = window.MPKit;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-cosmos-gradient)",
      color: "var(--text-inverse)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "88px var(--page-gutter) 96px",
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--mp-twilight-500)",
      marginBottom: 18
    }
  }, "Master Brand \u2014 Moon Power"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      letterSpacing: "var(--tracking-display)",
      color: "var(--mp-crescent-gold)",
      marginBottom: 20
    }
  }, "Werde wer du bist \u2014", /*#__PURE__*/React.createElement("br", null), "gemeinsam sind wir mehr"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-lg)",
      color: "var(--mp-twilight-300)",
      maxWidth: 440,
      marginBottom: 32
    }
  }, "Neun Stimmen, ein System. Moon Power begleitet Menschen dabei, ihre eigene St\xE4rke zu entdecken \u2014 mit klarer Sprache und einer Gemeinschaft, in der unterschiedliche Pers\xF6nlichkeiten Platz haben."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNavigate("join")
  }, "Jetzt mitmachen"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    onClick: () => onNavigate("voices"),
    style: {
      color: "var(--mp-moonlight-pearl)",
      borderColor: "var(--border-inverse)"
    }
  }, "Stimmen ansehen"))), /*#__PURE__*/React.createElement(Placeholder, {
    tone: "dark",
    height: 320,
    label: "Hero-Bild \u2014 Community-Portr\xE4t",
    src: "../../assets/imagery/hero-community.jpeg"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "80px var(--page-gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-eyebrow)",
      marginBottom: 8
    }
  }, "Farb-IDs"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      marginBottom: 10
    }
  }, "Neun Stimmen, ein System"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-muted)",
      maxWidth: "var(--measure-intro)"
    }
  }, "Jede Farb-ID variiert den Ton, keine widerspricht den f\xFCnf Grundprinzipien. W\xE4hle die Stimme, die zum Moment passt.")), /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    onClick: () => onNavigate("voices")
  }, "Alle ansehen")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 18
    }
  }, IDS.map(v => /*#__PURE__*/React.createElement("div", {
    key: v.id,
    "data-mp-theme": v.id
  }, /*#__PURE__*/React.createElement(Card, {
    accentBar: true,
    interactive: true,
    onClick: () => onNavigate("voices", v.id),
    style: {
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Glyph, {
    id: v.id,
    size: 26
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)"
    }
  }, v.name)), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-muted)",
      margin: "0 0 14px"
    }
  }, v.tone), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, v.use)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-action)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "56px var(--page-gutter)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-quote)",
      fontSize: 24,
      color: "var(--mp-cosmos-indigo)",
      margin: 0,
      maxWidth: 620
    }
  }, "\u201EDu schaffst das. Und falls nicht allein \u2014 wir sind f\xFCr dich da.\u201C"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNavigate("join")
  }, "Teil werden"))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "80px var(--page-gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 2fr)",
      gap: 16
    }
  }, [["01", "Ermutigend statt belehrend"], ["02", "Herzlich & inklusiv"], ["03", "Klar, nie hart"], ["04", "Poesie in Maßen"], ["05", "Humor, keine Häme"]].map(([n, t]) => /*#__PURE__*/React.createElement(Card, {
    key: n,
    variant: "subtle",
    style: {
      paddingLeft: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: 22,
      color: "var(--mp-crescent-gold)",
      WebkitTextStroke: "1px var(--mp-cosmos-indigo)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-xs)",
      lineHeight: 1.4,
      color: "var(--text-strong)",
      marginTop: 10
    }
  }, t))))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/JoinScreen.jsx
try { (() => {
window.MPKit = window.MPKit || {};
window.MPKit.JoinScreen = function JoinScreen() {
  const {
    Button,
    Card,
    Input,
    Select,
    Checkbox,
    Switch,
    RadioGroup,
    Toast,
    Badge,
    Glyph,
    Dialog
  } = window.MPKit.NS;
  const {
    IDS
  } = window.MPKit;
  const [name, setName] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [ton, setTon] = React.useState("moon");
  const [reason, setReason] = React.useState("");
  const [news, setNews] = React.useState(true);
  const [poesie, setPoesie] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);
  const mailError = mail && !mail.includes("@") ? "Diese Adresse kennen wir noch nicht — nochmal prüfen?" : "";
  const active = IDS.find(x => x.id === ton) || IDS[0];
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "56px var(--page-gutter) 88px"
    },
    "data-mp-theme": ton
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-eyebrow)",
      marginBottom: 8
    }
  }, "Mitmachen"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h2)",
      marginBottom: 10
    }
  }, "Finde deine Stimme im Kreis"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-muted)",
      maxWidth: "var(--measure-intro)",
      marginBottom: 30,
      width: 671,
      height: 49
    }
  }, "Zwei Minuten, f\xFCnf Felder. Wir melden uns mit einem Willkommensgru\xDF \u2014 kein Verkaufsgespr\xE4ch."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.25fr 1fr",
      gap: 26,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "30px 32px 30px 37px",
    style: {
      overflow: "visible",
      paddingLeft: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 18,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Wie sollen wir dich nennen?",
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-Mail",
    type: "email",
    required: true,
    value: mail,
    onChange: e => setMail(e.target.value),
    error: mailError,
    hint: "Wir schreiben dir nur, wenn es wichtig ist."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 18,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Wo willst du starten?",
    placeholder: "Bitte w\xE4hlen",
    options: ["Community", "Kampagne", "Support", "Storytelling"]
  }), /*#__PURE__*/React.createElement(RadioGroup, {
    name: "ton",
    label: "Welcher Ton passt zu dir?",
    value: ton,
    onChange: e => setTon(e.target.value),
    options: [{
      value: "moon",
      label: "Mond — warm & ermutigend"
    }, {
      value: "mercury",
      label: "Merkur — sachlich & klar"
    }, {
      value: "venus",
      label: "Venus — verspielt & laut"
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Was hast du vor?",
    multiline: true,
    rows: 3,
    value: reason,
    onChange: e => setReason(e.target.value),
    placeholder: "Ein Satz gen\xFCgt."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Newsletter abonnieren",
    description: "Einmal im Monat, kein Spam.",
    checked: news,
    onChange: e => setNews(e.target.checked)
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Poesie in Ma\xDFen",
    description: "Mond- und Sternbilder in meinen Mails zulassen.",
    checked: poesie,
    onChange: e => setPoesie(e.target.checked)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    disabled: !mail || Boolean(mailError),
    onClick: () => setSent(true)
  }, "Mitmachen"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "quiet",
    onClick: () => setConfirm(true)
  }, "Erst sp\xE4ter"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    accentBar: true,
    variant: "subtle"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Glyph, {
    id: active.id,
    size: 26
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)"
    }
  }, active.name)), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-quote)",
      color: "var(--text-strong)",
      margin: "0 0 14px"
    }
  }, "\u201E", active.quote, "\u201C"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, active.tags.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: "neutral"
  }, t)))), /*#__PURE__*/React.createElement(Card, {
    variant: "cosmos",
    padding: "22px 12px",
    style: {
      paddingLeft: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--mp-twilight-500)",
      marginBottom: 10
    }
  }, "Pluto-Ton"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--mp-twilight-300)",
      margin: 0,
      paddingLeft: 5
    }
  }, "Ihre Angaben werden ausschlie\xDFlich f\xFCr den Kreis-Zugang verwendet. Sie k\xF6nnen die Zustimmung jederzeit widerrufen.")))), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: 28,
      bottom: 28,
      zIndex: "var(--z-toast)"
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Willkommen im Kreis",
    onDismiss: () => setSent(false)
  }, "Wir haben dir eine Best\xE4tigung geschickt.")) : null, /*#__PURE__*/React.createElement(Dialog, {
    open: confirm,
    eyebrow: "Wendepunkt",
    title: "F\xFCr heute genug?",
    onClose: () => setConfirm(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => setConfirm(false)
    }, "Weitermachen"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => setConfirm(false)
    }, "Sp\xE4ter erinnern"))
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Manchmal ist der richtige Moment noch nicht gekommen. Du kannst jederzeit wiederkommen \u2014 dein Entwurf bleibt hier.")));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/JoinScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Placeholder.jsx
try { (() => {
/* Striped image placeholder — Moon Power supplied no photography or illustration.
   Drop real imagery in and delete this. */
window.MPKit = window.MPKit || {};
window.MPKit.Placeholder = function Placeholder({
  label,
  height = 240,
  tone = "light",
  radius = "var(--radius-md)",
  src,
  style
}) {
  const dark = tone === "dark";
  if (src) {
    return /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: label,
      style: {
        height,
        width: "100%",
        objectFit: "cover",
        display: "block",
        borderRadius: radius,
        border: "1px solid " + (dark ? "var(--border-inverse)" : "var(--border-default)"),
        ...style
      }
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: radius,
      border: "1px solid " + (dark ? "var(--border-inverse)" : "var(--border-default)"),
      background: dark ? "repeating-linear-gradient(135deg, rgba(237,235,245,0.07) 0 8px, rgba(237,235,245,0.02) 8px 16px)" : "repeating-linear-gradient(135deg, var(--mp-lavender-100) 0 8px, var(--mp-cloud-white) 8px 16px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
      fontSize: 11,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: dark ? "var(--mp-twilight-500)" : "var(--text-subtle)"
    }
  }, label));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Placeholder.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
window.MPKit = window.MPKit || {};
window.MPKit.Wordmark = function Wordmark({
  color = "var(--mp-cosmos-indigo)",
  size = 18
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: 8,
      color
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif-display)",
      fontSize: size + 6,
      lineHeight: 1
    }
  }, "\u263E"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: size,
      letterSpacing: "1px"
    }
  }, "MOON POWER"));
};
window.MPKit.SiteHeader = function SiteHeader({
  screen,
  onNavigate
}) {
  const {
    Button
  } = window.MPKit.NS;
  const {
    Wordmark
  } = window.MPKit;
  const nav = [{
    value: "home",
    label: "Start"
  }, {
    value: "voices",
    label: "Stimmen"
  }, {
    value: "join",
    label: "Mitmachen"
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: "var(--z-sticky)",
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "16px var(--page-gutter)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("home");
    },
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 28
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.value,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate(n.value);
    },
    style: {
      textDecoration: "none",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-xs)",
      letterSpacing: "var(--tracking-ui)",
      textTransform: "uppercase",
      color: screen === n.value ? "var(--text-strong)" : "var(--text-subtle)",
      borderBottom: "2px solid " + (screen === n.value ? "var(--mp-crescent-gold)" : "transparent"),
      paddingBottom: 3
    }
  }, n.label))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => onNavigate("join")
  }, "Jetzt mitmachen")));
};
window.MPKit.SiteFooter = function SiteFooter() {
  const {
    Wordmark
  } = window.MPKit;
  const cols = [["Marke", ["Farbsystem", "Typografie", "Tonalität"]], ["Gemeinschaft", ["Neun Stimmen", "Community", "Support"]], ["Rechtliches", ["Impressum", "Datenschutz", "Nutzungsbedingungen"]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-inverse)",
      color: "var(--text-inverse)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "56px var(--page-gutter) 40px",
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(3, 1fr)",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wordmark, {
    color: "var(--mp-crescent-gold)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--mp-twilight-300)",
      maxWidth: 260,
      marginTop: 14
    }
  }, "Individualit\xE4t und Zusammenhalt gleichzeitig zeigen.")), cols.map(([title, links]) => /*#__PURE__*/React.createElement("div", {
    key: title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--mp-twilight-500)",
      marginBottom: 14
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 9
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      font: "var(--type-body)",
      color: "var(--mp-moonlight-pearl)",
      textDecoration: "none"
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-inverse)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "18px var(--page-gutter)",
      display: "flex",
      justifyContent: "space-between",
      font: "var(--type-caption)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--mp-twilight-500)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Version 1.0 \xB7 Juli 2026"), /*#__PURE__*/React.createElement("span", null, "Pluto-Ton: Wir informieren Sie \xFCber \xC4nderungen."))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/VoicesScreen.jsx
try { (() => {
window.MPKit = window.MPKit || {};

/* Supplied imagery, keyed by Farb-ID. Voices without a file keep the striped placeholder. */
const BILDWELT = {
  moon: "../../assets/imagery/mond-bildwelt.jpeg",
  mercury: "../../assets/imagery/merkur-bildwelt.jpeg",
  mars: "../../assets/imagery/mars-bildwelt.jpeg",
  jupiter: "../../assets/imagery/jupiter-bildwelt.jpeg",
  venus: "../../assets/imagery/venus-bildwelt.jpeg",
  uranus: "../../assets/imagery/uranus-bildwelt.jpeg",
  neptune: "../../assets/imagery/neptun-bildwelt.jpeg",
  pluto: "../../assets/imagery/pluto-bildwelt.jpeg",
  saturn: "../../assets/imagery/saturn-bildwelt.jpeg"
};
window.MPKit.VoicesScreen = function VoicesScreen({
  selected,
  onSelect
}) {
  const {
    Tabs,
    Card,
    Tag,
    Glyph,
    Button,
    Tooltip,
    IconButton
  } = window.MPKit.NS;
  const {
    IDS,
    Placeholder
  } = window.MPKit;
  const v = IDS.find(x => x.id === selected) || IDS[0];
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "56px var(--page-gutter) 88px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-eyebrow)",
      marginBottom: 8
    }
  }, "Referenz"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h2)",
      marginBottom: 10
    }
  }, "Stimmen & Farb-IDs"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-muted)",
      maxWidth: "var(--measure-intro)",
      marginBottom: 26
    }
  }, "Alle neun Farb-IDs auf einen Blick \u2014 f\xFCr den schnellen Zugriff in Design- und Content-Arbeit."), /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    value: v.id,
    onChange: onSelect,
    items: IDS.map(x => ({
      value: x.id,
      label: x.name
    })),
    style: {
      marginBottom: 26
    }
  }), /*#__PURE__*/React.createElement("div", {
    "data-mp-theme": v.id,
    style: {
      display: "grid",
      gridTemplateColumns: "1.35fr 1fr",
      gap: 22,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    accentBar: true,
    padding: "26px 30px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Glyph, {
    id: v.id,
    size: 46
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-eyebrow)"
    }
  }, v.use), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)"
    }
  }, v.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    content: "Palette kopieren"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Kopieren",
    variant: "outline"
  }, "\u29C9")), /*#__PURE__*/React.createElement(Tooltip, {
    content: "Als Standard setzen"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Standard",
    variant: "accent"
  }, /*#__PURE__*/React.createElement(Glyph, {
    id: v.id,
    size: 16,
    color: "currentColor"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginBottom: 22
    }
  }, v.swatches.map(([name, hex], i) => /*#__PURE__*/React.createElement("div", {
    key: hex,
    style: {
      width: 140
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: i === 0 ? 96 : 96,
      background: hex,
      borderRadius: "var(--radius-sm)",
      boxShadow: "var(--shadow-inset-hairline)",
      marginBottom: 8
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-strong)"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 9.5,
      color: "var(--text-subtle)"
    }
  }, hex)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 22
    }
  }, v.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))), [["Tonalität", v.tone], ["Typografie-Variante", v.type]].map(([label, body]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      marginBottom: 18,
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-bold)",
      fontSize: 9.5,
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--accent-primary)",
      marginBottom: 5
    }
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--mp-ink-800)",
      margin: 0
    }
  }, body))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-bold)",
      fontSize: 9.5,
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--accent-primary)",
      marginBottom: 5
    }
  }, "Ansprache-Beispiel"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-quote)",
      color: "var(--text-strong)",
      margin: 0
    }
  }, "\u201E", v.quote, "\u201C"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    height: 200,
    label: "Bildwelt — " + v.name,
    src: BILDWELT[v.id]
  }), /*#__PURE__*/React.createElement(Card, {
    variant: "subtle",
    style: {
      paddingLeft: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-eyebrow)",
      marginBottom: 10
    }
  }, "So sprechen wir"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-muted)",
      margin: "0 0 14px"
    }
  }, "Du-Form als Standard, aktiv, ein Gedanke pro Satz. Begeisterung nur, wenn sie echt ist."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    fullWidth: true
  }, "Sprachleitfaden \xF6ffnen")), /*#__PURE__*/React.createElement(Card, {
    variant: "cosmos",
    padding: "22px 12px",
    style: {
      paddingLeft: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--mp-twilight-500)",
      marginBottom: 8
    }
  }, "Kontrast-Regel"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--mp-twilight-300)",
      margin: 0
    }
  }, "Auf Indigo nie reines Wei\xDF setzen \u2014 Pearl oder Twilight 300 halten den Satz weich.")))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/VoicesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.jsx
try { (() => {
window.MPKit = window.MPKit || {};
window.MPKit.IDS = [{
  id: "moon",
  name: "Mond",
  tone: "Warm, nahbar, nie belehrend. Die Stimme der Marke im Kern.",
  quote: "Du schaffst das. Und falls nicht allein — wir sind für dich da.",
  tags: ["herzlich", "ermutigend", "empathisch"],
  use: "Onboarding, Willkommen",
  type: "Lora Semibold + Poppins Regular, großzügiger Zeilenabstand.",
  swatches: [["Blossom Pink", "#F6A9C6"], ["Pure White", "#FFFFFF"], ["Crescent Gold", "#F5C94E"]]
}, {
  id: "mercury",
  name: "Merkur",
  tone: "Fakten vor Effekt. Erklärt, ordnet ein, lässt Zahlen sprechen — nie kalt.",
  quote: "Hier sind die Fakten. Lass uns das gemeinsam durchdenken.",
  tags: ["präzise", "ruhig", "analytisch"],
  use: "FAQ, Doku, Produktinfo",
  type: "Poppins Medium durchgängig, klare Tabellen, viel Weißraum.",
  swatches: [["Mercury Blue", "#4FA6E0"], ["Ice White", "#EAF6FC"], ["Deep Navy", "#1B4F72"]]
}, {
  id: "mars",
  name: "Mars",
  tone: "Kurz, klar, dringlich. Für Momente, in denen die Marke Position bezieht.",
  quote: "Jetzt handeln. Kein Zögern.",
  tags: ["leidenschaftlich", "direkt", "entschlossen"],
  use: "Aufrufe, Statements",
  type: "Lora Bold in Versalien für Statements — sparsam.",
  swatches: [["Flame Red", "#E63946"], ["Ember Black", "#2B2024"], ["Shrine White", "#FFF3F0"]]
}, {
  id: "jupiter",
  name: "Jupiter",
  tone: "Die anpackende, fürsorgliche Stimme — Sicherheit und Unterstützung.",
  quote: "Ich hab das für dich vorbereitet — lass uns loslegen.",
  tags: ["bodenständig", "beschützend", "verlässlich"],
  use: "Support, Community",
  type: "Poppins SemiBold für CTAs, weicher Rosa-Akzent.",
  swatches: [["Forest Green", "#3E8E5B"], ["Blossom Pink", "#F5B8C4"], ["Bark Brown", "#6B4A34"]]
}, {
  id: "venus",
  name: "Venus",
  tone: "Die Bühnen-Stimme: einladend, leicht werbend, macht Lust mitzumachen.",
  quote: "Zeig, was in dir steckt — die Bühne gehört dir.",
  tags: ["charismatisch", "verspielt", "führungsstark"],
  use: "Kampagne, Launch",
  type: "Lora Italic für Zitate, Poppins Bold für Aktionsflächen.",
  swatches: [["Sunset Orange", "#F5943A"], ["Gold", "#F5C94E"], ["Rose", "#F2B6C6"]]
}, {
  id: "uranus",
  name: "Uranus",
  tone: "Wenig Worte, hohe Wirkung. Reduziert und souverän.",
  quote: "Ich mach das auf meine Art.",
  tags: ["unabhängig", "cool", "reduziert"],
  use: "Premium, Expert:innen",
  type: "Poppins Regular in Versalien, weites Letterspacing.",
  swatches: [["Steel Teal", "#2E6E7E"], ["Charcoal", "#26282B"], ["Platinum", "#C8CDD1"]]
}, {
  id: "neptune",
  name: "Neptun",
  tone: "Die poetische, bildhafte Stimme für Momente der Reflexion.",
  quote: "Manche Antworten findet man nur, wenn man in die Tiefe hört.",
  tags: ["intuitiv", "elegant", "sensibel"],
  use: "Storytelling, About",
  type: "Lora Regular Italic für lange Fließtexte.",
  swatches: [["Deep Ocean Blue", "#2A4B7C"], ["Aqua Violet", "#6C7FBE"], ["Pearl", "#EDEFF7"]]
}, {
  id: "pluto",
  name: "Pluto",
  tone: "Gemessen und autoritativ. Die einzige Stimme, die auch in Sie-Form auftreten darf.",
  quote: "Es gibt einen richtigen Moment für alles. Noch ist er nicht gekommen.",
  tags: ["geheimnisvoll", "weise", "zeitlos"],
  use: "Recht, Grundsätze",
  type: "Lora Semibold, dunkler Satz auf hellem Grund.",
  swatches: [["Garnet Wine", "#6E1E3A"], ["Midnight Navy", "#1B2A4A"], ["Bronze", "#A97142"]]
}, {
  id: "saturn",
  name: "Saturn",
  tone: "Sonderstimme für Wendepunkte: Abschied, Neuanfang, große Umbrüche.",
  quote: "Manchmal muss etwas enden, damit etwas Neues beginnen kann.",
  tags: ["still", "kraftvoll", "sanft-ernst"],
  use: "Wendepunkte — selten",
  type: "Lora Bold, viel Schwarzraum um die Zeile.",
  swatches: [["Royal Violet", "#5B3A8E"], ["Deep Plum", "#2E1A47"], ["Silver Glow", "#D8CFE8"]]
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/doc-page.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.GLYPHS = __ds_scope.GLYPHS;

__ds_ns.GLYPH_NAMES = __ds_scope.GLYPH_NAMES;

__ds_ns.Glyph = __ds_scope.Glyph;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
