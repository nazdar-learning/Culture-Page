/* @ds-bundle: {"format":4,"namespace":"NazdarDesignSystem_715ce7","components":[{"name":"Alert","sourcePath":"components/core/Alert.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Table","sourcePath":"components/core/Table.jsx"},{"name":"Theme","sourcePath":"components/core/Theme.jsx"}],"sourceHashes":{"components/core/Alert.jsx":"c0e14ccc3e3a","components/core/Badge.jsx":"51b4501565d8","components/core/Button.jsx":"bf158636f174","components/core/Card.jsx":"627dfb4292c3","components/core/Input.jsx":"8daa4b8bfd77","components/core/Select.jsx":"41d26bf56928","components/core/Table.jsx":"b597f9d12335","components/core/Theme.jsx":"9ae9e69e0a15","ui_kits/component-library/Palette.jsx":"02d15d3d54a8","ui_kits/component-library/ShowcasePage.jsx":"88a4d22cf630","ui_kits/nazdar-corporate/DigitalInksPage.jsx":"391ca4a6da79","ui_kits/nazdar-corporate/HomePage.jsx":"b755dbb6cdfc","ui_kits/nazdar-corporate/SiteChrome.jsx":"aefb2960cc11","ui_kits/sourceone-store/CategoryPage.jsx":"0b12cd11f323","ui_kits/sourceone-store/StoreChrome.jsx":"c0ddc2f99a99"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NazdarDesignSystem_715ce7 = window.NazdarDesignSystem_715ce7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Alert.jsx
try { (() => {
/**
 * Alert
 *
 * Copy guidance baked into the API: title states what happened, children state
 * what to do about it. Errors do not apologize and are never vague.
 */
const MARKS = {
  success: '\u2713',
  warning: '!',
  error: '\u2715',
  info: 'i'
};
function Alert({
  tone = 'info',
  title,
  className = '',
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: tone === 'error' ? 'alert' : 'status',
    className: `nz-alert nz-alert--${tone} ${className}`
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "nz-alert__mark"
  }, MARKS[tone]), /*#__PURE__*/React.createElement("div", {
    className: "nz-alert__body"
  }, title && /*#__PURE__*/React.createElement("strong", null, title), children));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Alert.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  tone = 'neutral',
  className = '',
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `nz-badge nz-badge--${tone} ${className}`
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button
 *
 * Variants map to intent, not to color. That is deliberate: "destructive" is a
 * job, and the color that does that job cannot be brand red, because brand red
 * is already the primary action color. If both were red, a delete button and a
 * save button would look identical.
 */
function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `nz-btn nz-btn--${size} nz-btn--${variant} ${className}`
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  title,
  className = '',
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `nz-card ${className}`
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "nz-card__head"
  }, /*#__PURE__*/React.createElement("p", null, title)), /*#__PURE__*/React.createElement("div", {
    className: "nz-card__body"
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input
 *
 * Error state uses the feedback error color, not brand red, for the same reason
 * the destructive button does. Error text is always paired with the border
 * change rather than replacing it, so the state does not rely on color alone.
 */
function Input({
  label,
  hint,
  error,
  id,
  className = '',
  ...props
}) {
  const inputId = id || `nz-input-${Math.random().toString(36).slice(2, 9)}`;
  const describedBy = error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined;
  return /*#__PURE__*/React.createElement("div", {
    className: `nz-field ${className}`
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "nz-field__label",
    htmlFor: inputId
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    "aria-invalid": error ? 'true' : undefined,
    "aria-describedby": describedBy,
    className: `nz-field__control${error ? ' nz-field__control--error' : ''}`
  }, props)), error && /*#__PURE__*/React.createElement("p", {
    id: `${inputId}-error`,
    className: "nz-field__error"
  }, error), !error && hint && /*#__PURE__*/React.createElement("p", {
    id: `${inputId}-hint`,
    className: "nz-field__hint"
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  id,
  options = [],
  className = '',
  ...props
}) {
  const selectId = id || `nz-select-${Math.random().toString(36).slice(2, 9)}`;
  return /*#__PURE__*/React.createElement("div", {
    className: `nz-field ${className}`
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "nz-field__label",
    htmlFor: selectId
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    "aria-describedby": hint ? `${selectId}-hint` : undefined,
    className: "nz-field__control"
  }, props), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), hint && /*#__PURE__*/React.createElement("p", {
    id: `${selectId}-hint`,
    className: "nz-field__hint"
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Table.jsx
try { (() => {
/**
 * Table
 *
 * The header underline uses the accent var, so a SourceOne page gets a blue
 * rule and an Ink Technologies page gets green with no code change.
 */
function Table({
  columns = [],
  rows = [],
  className = ''
}) {
  return /*#__PURE__*/React.createElement("table", {
    className: `nz-table ${className}`
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c,
    scope: "col"
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, r.map((cell, j) => /*#__PURE__*/React.createElement("td", {
    key: j
  }, cell))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Table.jsx", error: String((e && e.message) || e) }); }

// components/core/Theme.jsx
try { (() => {
/**
 * Theme
 *
 * Wrap any subtree to switch the division accent. Everything inside inherits
 * it through CSS variables, so no component needs a division prop.
 *
 *   <Theme division="sourceone"><Button>Save changes</Button></Theme>
 */
const CLASSES = {
  master: 'nz-theme-master',
  inktech: 'nz-theme-inktech',
  sourceone: 'nz-theme-sourceone'
};
function Theme({
  division = 'master',
  className = '',
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `${CLASSES[division]} ${className}`
  }, children);
}
Object.assign(__ds_scope, { Theme });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Theme.jsx", error: String((e && e.message) || e) }); }

// ui_kits/component-library/Palette.jsx
try { (() => {
const {
  Badge
} = window.NazdarDesignSystem_715ce7;

/* Live WCAG contrast, computed rather than typed, so the numbers can never
   drift from the swatches they sit under. */
function luminance(hex) {
  const c = [1, 3, 5].map(i => parseInt(hex.substr(i, 2), 16) / 255).map(v => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}
function contrast(hex, against = '#FFFFFF') {
  const a = luminance(hex);
  const b = luminance(against);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}
const BRAND = [{
  name: 'Nazdar Red',
  hex: '#CF102D',
  meta: 'PMS 186',
  use: 'Fills, display type, primary action'
}, {
  name: 'Nazdar Dark Red',
  hex: '#A91623',
  meta: 'PMS 187',
  use: 'Brand text and links. Clears AAA'
}, {
  name: 'Ink Tech Green',
  hex: '#A3CF60',
  meta: 'PMS 367',
  use: 'Fill only. Dark text on top, never white'
}, {
  name: 'Ink Tech Dark Green',
  hex: '#7FA44C',
  meta: 'PMS 576',
  use: 'Darker Ink Technologies applications'
}, {
  name: 'SourceOne Blue',
  hex: '#0099D6',
  meta: 'PMS 2925',
  use: 'Large text and UI components only'
}, {
  name: 'SourceOne Dark Blue',
  hex: '#007CBA',
  meta: 'PMS 7461',
  use: 'Links, focus rings, info states'
}, {
  name: 'Black',
  hex: '#000000',
  meta: 'CMYK 0/0/0/100',
  use: 'Maximum contrast'
}, {
  name: 'Dark Gray',
  hex: '#323E48',
  meta: 'PMS 432',
  use: 'Default body text'
}, {
  name: 'Cool Gray',
  hex: '#666666',
  meta: 'RGB 102/102/102',
  use: 'Secondary text, captions'
}];
function Swatch({
  name,
  hex,
  meta,
  use
}) {
  const ratio = contrast(hex);
  const passes = ratio >= 4.5;
  return /*#__PURE__*/React.createElement("div", {
    className: "sw"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sw__chip",
    style: {
      background: hex
    }
  }, /*#__PURE__*/React.createElement("span", null, hex)), /*#__PURE__*/React.createElement("div", {
    className: "sw__meta"
  }, /*#__PURE__*/React.createElement("p", {
    className: "sw__name"
  }, name), /*#__PURE__*/React.createElement("p", {
    className: "sw__hex"
  }, hex), /*#__PURE__*/React.createElement("p", {
    className: "sw__pms"
  }, meta), /*#__PURE__*/React.createElement("p", {
    className: "sw__use"
  }, use), /*#__PURE__*/React.createElement("p", {
    className: "sw__ratio"
  }, /*#__PURE__*/React.createElement("b", null, ratio.toFixed(2), ":1"), " on white", /*#__PURE__*/React.createElement(Badge, {
    tone: passes ? 'success' : 'error'
  }, passes ? 'AA text' : 'fill only'))));
}
function Section({
  title,
  layer,
  note,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "sec__h"
  }, title, " ", /*#__PURE__*/React.createElement(Badge, {
    tone: layer === 'Brand' ? 'brand' : 'neutral'
  }, layer)), note && /*#__PURE__*/React.createElement("p", {
    className: "sec__note"
  }, note), children);
}
Object.assign(window, {
  BRAND,
  Swatch,
  Section,
  contrast
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/component-library/Palette.jsx", error: String((e && e.message) || e) }); }

// ui_kits/component-library/ShowcasePage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Input,
  Select,
  Alert,
  Card,
  Badge,
  Table,
  Theme
} = window.NazdarDesignSystem_715ce7;
const {
  BRAND,
  Swatch,
  Section
} = window;
const LOGO_RULES = ['Never alter the proportions of the signature.', 'Never separate the wordmark from the Z symbol.', 'Never re-create the elements. Always use approved artwork.', 'Never stretch the logo disproportionately.', 'Never set opacity below 100 percent.', 'Keep clear space free of other graphic elements. Clear space equals x, the height of the crossbar in the A of the wordmark.', 'Never reproduce smaller than 0.125in in height.', 'Use secondary colors sparingly. They never dominate the primary palette.'];
function ShowcasePage() {
  const [division, setDivision] = React.useState('master');
  const [qty, setQty] = React.useState('0');
  const [saved, setSaved] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "nz-rule-diagonal"
  }), /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("header", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("img", {
    className: "hero__logo",
    src: "../../assets/logos/nazdar/Logo-Nazdar-Black.png",
    alt: "Nazdar"
  }), /*#__PURE__*/React.createElement("p", {
    className: "nz-label"
  }, "Component library"), /*#__PURE__*/React.createElement("h1", {
    className: "hero__h"
  }, "Design system, derived from the ", /*#__PURE__*/React.createElement("span", null, "2023 logo guidelines")), /*#__PURE__*/React.createElement("p", {
    className: "hero__p"
  }, "Every component below is built from tokens in ", /*#__PURE__*/React.createElement("code", null, "styles.css"), ". There is no hard-coded hex anywhere in the component files. Items tagged Brand come from the official guide. Items tagged Extended were added to make the palette usable in an interface and have not been approved by Marketing Communications.")), /*#__PURE__*/React.createElement(Section, {
    title: "Primary palette",
    layer: "Brand",
    note: "Contrast ratios are computed in the browser. This is the fastest way to see which colors can hold text and which are fills only."
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-sw"
  }, BRAND.map(c => /*#__PURE__*/React.createElement(Swatch, _extends({
    key: c.hex + c.name
  }, c))))), /*#__PURE__*/React.createElement(Section, {
    title: "Buttons",
    layer: "Extended",
    note: "Primary and destructive are distinguishable only because the destructive color is not brand red. That is the single most important decision in this system."
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setSaved(true)
  }, "Save changes"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    variant: "destructive"
  }, "Delete record"), /*#__PURE__*/React.createElement(Button, {
    disabled: true
  }, "Unavailable"), /*#__PURE__*/React.createElement(Button, {
    variant: "quiet"
  }, "View details")), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Small"), /*#__PURE__*/React.createElement(Button, {
    size: "md"
  }, "Medium"), /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Large")), saved && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "Saved"
  }, "Your changes are live."))), /*#__PURE__*/React.createElement(Section, {
    title: "Forms",
    layer: "Extended",
    note: "Focus rings use SourceOne Dark Blue at 4.57:1, the only brand blue that clears AA. Error states pair a color change with text so the state never depends on color alone."
  }, /*#__PURE__*/React.createElement("div", {
    className: "row row--top"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Product code",
    placeholder: "e.g. 9700-1042",
    hint: "Found on the technical data sheet."
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Batch quantity",
    value: qty,
    onChange: e => setQty(e.target.value),
    error: Number(qty) >= 1 ? undefined : 'Enter a quantity of 1 or more.'
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Division",
    hint: "Sets the accent color for this record.",
    value: division,
    onChange: e => setDivision(e.target.value),
    options: [{
      value: 'master',
      label: 'Nazdar'
    }, {
      value: 'inktech',
      label: 'Nazdar Ink Technologies'
    }, {
      value: 'sourceone',
      label: 'Nazdar SourceOne'
    }]
  }))), /*#__PURE__*/React.createElement(Section, {
    title: "Alerts",
    layer: "Extended",
    note: "Title says what happened. Body says what to do next. Errors do not apologize and are never vague."
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "Saved"
  }, "Your changes are live."), /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    title: "Check the hex values"
  }, "Two colors in the source guide have conflicting specs."), /*#__PURE__*/React.createElement(Alert, {
    tone: "error",
    title: "Upload failed"
  }, "The file is larger than 25 MB. Compress it and try again."), /*#__PURE__*/React.createElement(Alert, {
    tone: "info",
    title: "Campton is self-hosted"
  }, "Licensed files live in assets/fonts. Calibri then Arial remain the fallbacks.")), /*#__PURE__*/React.createElement(Section, {
    title: "Division theming",
    layer: "Brand",
    note: "Three cards, identical markup, different Theme wrapper. The Ink Technologies card uses dark text on green because green at 1.80:1 cannot carry white text."
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-div"
  }, [['master', 'Nazdar', 'Master brand. Accent is PMS 186.'], ['inktech', 'Ink Technologies', 'Accent is PMS 367. Requires dark text on fills.'], ['sourceone', 'SourceOne', 'Accent is PMS 2925. Distribution division.']].map(([d, title, copy]) => /*#__PURE__*/React.createElement(Theme, {
    key: d,
    division: d
  }, /*#__PURE__*/React.createElement(Card, {
    title: title
  }, /*#__PURE__*/React.createElement("p", {
    className: "card__copy"
  }, copy), /*#__PURE__*/React.createElement(Button, null, "Primary action")))))), /*#__PURE__*/React.createElement(Section, {
    title: "Table",
    layer: "Extended",
    note: "The header rule inherits the accent, so the same component reads as Nazdar, Ink Technologies, or SourceOne depending on its wrapper. This one follows the Division select above."
  }, /*#__PURE__*/React.createElement(Theme, {
    division: division
  }, /*#__PURE__*/React.createElement(Table, {
    columns: ['Color', 'Pantone', 'Division'],
    rows: [['Nazdar Red', '186', 'Master brand'], ['Ink Tech Green', '367', 'Ink Technologies'], ['SourceOne Blue', '2925', 'SourceOne']]
  }))), /*#__PURE__*/React.createElement(Section, {
    title: "Typography",
    layer: "Brand",
    note: "Campton in four weights is the primary face, self-hosted from assets/fonts. Calibri then Arial stay in the stack: the guide names Calibri for Office output and Arial for web, so those fallbacks are intended behavior rather than a compromise."
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-wt"
  }, [['Light', 300], ['Book', 400], ['Medium', 500], ['Bold', 700]].map(([n, w]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    className: "wt"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: w
    }
  }, "Screen printing inks"), /*#__PURE__*/React.createElement("small", null, n, " / ", w)))), [['4xl / 49px', 'var(--text-4xl)', 700], ['3xl / 39px', 'var(--text-3xl)', 700], ['2xl / 31px', 'var(--text-2xl)', 500], ['xl / 25px', 'var(--text-xl)', 500], ['lg / 20px', 'var(--text-lg)', 400]].map(([label, size, weight]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    className: "tr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tr__k"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "tr__d",
    style: {
      fontSize: size,
      fontWeight: weight
    }
  }, "Ink technology")))), /*#__PURE__*/React.createElement(Section, {
    title: "Logo rules",
    layer: "Brand",
    note: "Transcribed from the guide. No logo artwork appears in this system, because the guide is explicit that the elements are never to be re-created. When the approved SVG files arrive they get placed in assets/, not drawn."
  }, /*#__PURE__*/React.createElement("ol", {
    className: "rules"
  }, LOGO_RULES.map((rule, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", null, String(i + 1).padStart(2, '0')), rule)))), /*#__PURE__*/React.createElement("footer", {
    className: "foot"
  }, "Derived from Nazdar Logo Guidelines (2023). Brand-layer values are authoritative. Extended-layer values are an internal proposal pending Marketing Communications review.")));
}
Object.assign(window, {
  ShowcasePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/component-library/ShowcasePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nazdar-corporate/DigitalInksPage.jsx
try { (() => {
/* nazdar.com product-category page + Find Your Ink finder rail.
   Structure and copy transcribed from www.nazdar.com/en-us/DIGITAL-INKS. */

const {
  Button,
  Select,
  Table,
  Badge
} = window.NazdarDesignSystem_715ce7;
const ROTATOR = ['Find Your Inkjet Ink', 'Nazdar Digital Inks Video', 'Digital UV Inks', 'Nazdar OEM Services', 'Digital Solvent Inks', 'Nazdar Digital Ink Warranty'];
const SECTIONS = [{
  title: 'Inks By Chemistry',
  items: ['UV & UV-LED Curable Inks', 'Eco-Solvent Inks', 'Solvent Inks']
}, {
  title: 'Inks By Application',
  items: ['Wide Format Solvent', 'UV/UV-LED Inkjet', 'Film Positive / Pre-Press', 'Photographic / Fine Art', 'Marking & Coding', 'OEM Partnerships']
}, {
  title: 'Printer Compatibility',
  items: ['Inkjet Ink Warranty', 'Printer Reference Charts', 'Printers']
}];
const PRINTERS = ['Agfa (Gandi)', 'CET Color', 'Durst', 'Epson', 'Fujifilm', 'HP (Scitex, NUR)', 'Inca', 'Jetrix', 'Mimaki', 'Mutoh', 'Océ', 'Oki', 'Roland', 'Other'];
function FinderRail({
  tab,
  setTab
}) {
  const TABS = ['Search Products', 'Digital Inks', 'Screen Inks', 'Narrow Web Inks'];
  return /*#__PURE__*/React.createElement("aside", {
    className: "nz-corp-rail"
  }, /*#__PURE__*/React.createElement("h3", null, "Search Products"), /*#__PURE__*/React.createElement("div", {
    className: "nz-corp-rail__tabs"
  }, TABS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    className: t === tab ? 'is-on' : '',
    onClick: () => setTab(t)
  }, t))), tab === 'Digital Inks' ? /*#__PURE__*/React.createElement("div", {
    className: "nz-corp-rail__body"
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Printer manufacturer",
    options: PRINTERS.map(p => ({
      value: p,
      label: p
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12
    }
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Ink chemistry",
    options: [{
      value: 'uv',
      label: 'UV & UV-LED Curable'
    }, {
      value: 'eco',
      label: 'Eco-Solvent'
    }, {
      value: 'sol',
      label: 'Solvent'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Find your ink")) : /*#__PURE__*/React.createElement("div", {
    className: "nz-corp-rail__body nz-corp-rail__empty"
  }, /*#__PURE__*/React.createElement("p", null, "The live finder for ", /*#__PURE__*/React.createElement("b", null, tab), " is a multi-step form driven by product data that is not published on the page. Left blank rather than invented.")));
}
function DigitalInksPage() {
  const [tab, setTab] = React.useState('Digital Inks');
  return /*#__PURE__*/React.createElement("main", {
    className: "nz-corp-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nz-corp-rot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nz-corp-wrap nz-corp-rot__in"
  }, ROTATOR.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r,
    className: `nz-corp-rot__c ${i === 0 ? 'nz-corp-rot__c--lg' : ''}`
  }, /*#__PURE__*/React.createElement("span", null, "Promo banner", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, r)))))), /*#__PURE__*/React.createElement("div", {
    className: "nz-corp-wrap nz-corp-cols"
  }, /*#__PURE__*/React.createElement(FinderRail, {
    tab: tab,
    setTab: setTab
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("nav", {
    className: "nz-corp-crumbs"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Home"), /*#__PURE__*/React.createElement("span", null, ">"), /*#__PURE__*/React.createElement("b", null, "Digital Inkjet Inks")), /*#__PURE__*/React.createElement("h1", {
    className: "nz-corp-h1"
  }, "Digital Inks"), /*#__PURE__*/React.createElement("div", {
    className: "nz-corp-cats"
  }, SECTIONS.map(s => /*#__PURE__*/React.createElement("article", {
    key: s.title,
    className: "nz-corp-cat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nz-corp-cat__img"
  }, /*#__PURE__*/React.createElement("span", null, "Category image", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, s.title.replace(/ /g, '-'), ".jpg"))), /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, s.title)), /*#__PURE__*/React.createElement("ul", null, s.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, i))))))), /*#__PURE__*/React.createElement("section", {
    className: "nz-corp-compat"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "nz-corp-h2"
  }, "Printer Compatibility ", /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "14 manufacturers")), /*#__PURE__*/React.createElement(Table, {
    columns: ['Manufacturer', 'Reference chart', 'Warranty'],
    rows: PRINTERS.slice(0, 6).map(p => [p, 'Printer Reference Charts', 'Nazdar Inkjet Ink Warranty'])
  }), /*#__PURE__*/React.createElement("p", {
    className: "nz-corp-morenote"
  }, "Eight more manufacturers follow on the live page: ", PRINTERS.slice(6).join(', '), ".")))));
}
Object.assign(window, {
  DigitalInksPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nazdar-corporate/DigitalInksPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nazdar-corporate/HomePage.jsx
try { (() => {
/* nazdar.com landing page — "The Nazdar Family of Companies".
   Copy transcribed verbatim from www.nazdar.com/en-us/. */

const PANELS = [{
  key: 'inks',
  eyebrow: 'Inks & Coating',
  logo: '../../assets/logos/ink-technologies/Logo-NazdarInkTech-White.png',
  alt: 'Nazdar Ink Technologies',
  theme: 'nz-theme-inktech',
  body: 'Manufacturer and innovator of the most comprehensive selection of UV curing, LED curing, solvent-based and aqueous inks obtainable from a single source.',
  links: ['Digital Inks', 'Narrow Web Inks', 'Screen Inks']
}, {
  key: 'sourceone',
  eyebrow: 'Distribution & Sales',
  logo: '../../assets/logos/sourceone/Logo-NazdarSourceOne-White.png',
  alt: 'Nazdar SourceOne',
  theme: 'nz-theme-sourceone',
  body: 'With a network of 14 locations, Nazdar SourceOne delivers localized inventory, superior customer service and expert technical support to graphic, textile and industrial markets.',
  links: ['Equipment', 'Inks', 'Supplies']
}, {
  key: 'careers',
  eyebrow: 'Careers',
  logo: '../../assets/logos/nazdar/Logo-Nazdar-OneColor-White.png',
  alt: 'Nazdar',
  theme: 'nz-theme-master',
  body: 'At Nazdar, we don\u2019t offer jobs, we offer careers. We are a forward-thinking organization with a dynamic, family-oriented culture that attracts and retains high quality people driven toward success.',
  links: ['Explore Openings', 'Who We Are', 'Our Culture']
}];
function HomePage() {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("main", {
    className: "nz-home"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nz-corp-wrap nz-home__head"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "nz-corp-crumbs"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Home"), /*#__PURE__*/React.createElement("span", null, ">"), /*#__PURE__*/React.createElement("b", null, "The Nazdar Family of Companies")), /*#__PURE__*/React.createElement("h1", {
    className: "nz-home__h1"
  }, "Nazdar"), /*#__PURE__*/React.createElement("p", {
    className: "nz-home__sub"
  }, "The Nazdar Family of Companies")), /*#__PURE__*/React.createElement("div", {
    className: "nz-home__panels"
  }, PANELS.map(p => /*#__PURE__*/React.createElement("section", {
    key: p.key,
    className: `nz-home__p ${p.theme} ${hover === p.key ? 'is-hover' : ''}`,
    onMouseEnter: () => setHover(p.key),
    onMouseLeave: () => setHover(null)
  }, /*#__PURE__*/React.createElement("div", {
    className: "nz-home__pimg"
  }, /*#__PURE__*/React.createElement("span", null, "Panel image", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, p.key, ".jpg"))), /*#__PURE__*/React.createElement("div", {
    className: "nz-home__pbody"
  }, /*#__PURE__*/React.createElement("p", {
    className: "nz-home__eyebrow"
  }, p.eyebrow), /*#__PURE__*/React.createElement("img", {
    className: "nz-home__plogo",
    src: p.logo,
    alt: p.alt
  }), /*#__PURE__*/React.createElement("p", {
    className: "nz-home__ptext"
  }, p.body), /*#__PURE__*/React.createElement("ul", {
    className: "nz-home__plinks"
  }, p.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, l)))))))));
}
Object.assign(window, {
  HomePage,
  PANELS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nazdar-corporate/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nazdar-corporate/SiteChrome.jsx
try { (() => {
/* nazdar.com corporate chrome — utility bar, mega nav, footer.
   Nav tree and footer links transcribed from www.nazdar.com/en-us/DIGITAL-INKS (DNN). */

function Icon({
  name,
  size = 18
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      display: 'inline-block',
      flex: 'none'
    }
  });
}
const CORP_NAV = [{
  label: 'Find Your Ink',
  cols: [{
    title: 'Find Your Ink',
    items: ['Digital Inkjet Ink', 'Screen Ink', 'Screen Ink Additive', 'Narrow Web Ink', 'Ad Specialty Ink']
  }]
}, {
  label: 'Digital Inks',
  cols: [{
    title: 'Inks By Chemistry',
    items: ['UV & UV-LED Curable Inks', 'Eco-Solvent Inks', 'Solvent Inks']
  }, {
    title: 'Inks By Application',
    items: ['Wide Format Solvent', 'UV/UV-LED Inkjet', 'Film Positive / Pre-Press', 'Photographic / Fine Art', 'Marking & Coding', 'OEM Partnerships']
  }, {
    title: 'Printer Compatibility',
    items: ['Inkjet Ink Warranty', 'Printer Reference Charts', 'Printers']
  }]
}, {
  label: 'Screen Inks',
  cols: [{
    title: 'Inks By Chemistry',
    items: ['UV Curable Inks', 'LED Curable Inks', 'Solvent Inks', 'Water-based Inks', 'Thermoset Inks']
  }, {
    title: 'Inks By Application',
    items: ['Additives', 'Ad Specialty Inks', 'Banner Inks', 'Conductive Inks', 'Container Inks', 'Decal Inks', 'Industrial Inks', 'Metal Decorating Inks', 'Nameplate Inks', 'Overprint Clears / Varnishes', 'POP Inks', 'Poster Inks', 'Resist Inks', 'Specialty Inks', 'Textile / Fabric Inks', 'Plastic Card Inks']
  }, {
    title: 'Inks By Substrate',
    items: ['Substrate Reference Charts', 'Glass', 'Metal', 'Misc', 'Paper', 'Plastic', 'Polyester', 'Textile / Fabric', 'Vinyl', 'Wood']
  }]
}, {
  label: 'Narrow Web Inks',
  cols: [{
    title: 'Inks By Chemistry',
    items: ['UV Curable Inks', 'LED Curable Inks', 'Water-based Inks']
  }, {
    title: 'Inks By Print Process',
    items: ['Rotary Screen', 'Offset', 'Letterpress', 'Flexographic']
  }, {
    title: 'Color Matching',
    items: ['Narrow Web Color Match']
  }]
}, {
  label: 'Coatings/Primers',
  cols: [{
    title: 'Inks By Type',
    items: ['Coatings', 'Primers']
  }, {
    title: 'Inks By Application',
    items: ['Roller Coater', 'Screen Printing', 'Wipe On', 'UV Digital', 'Inkjet', 'Paint On']
  }, {
    title: 'By Printer Type',
    items: ['Digital', 'Roller', 'Screen', 'Inkjet']
  }]
}, {
  label: 'Services'
}, {
  label: 'Resources',
  cols: [{
    title: 'Product Support',
    items: ['Catalogs & Brochures', 'Color Cards', 'ColorStar', 'Discontinued Inks', 'Special Effects Prints', 'Technical Data Sheets', 'Nazdar Screen Color Match Form']
  }, {
    title: 'Customer Support',
    items: ['InkAnswers', 'FAQ / Glossary', 'Tech Tips & Topics', 'Videos', 'Webinars']
  }, {
    title: 'Compliance',
    items: ['SDS', 'Health & Safety', 'Shelf Stability', 'Sustainability']
  }]
}, {
  label: 'News',
  cols: [{
    title: 'News & Events',
    items: ['Press Releases', 'Trade Shows & Events', 'Articles', 'Testimonials', 'Tech Tips & Topics', 'Videos']
  }]
}, {
  label: 'Consulting',
  cols: [{
    title: 'Consulting Services',
    items: ['About', 'Consultants', 'Support Services', 'Testimonials', 'InkAnswers', 'Remote Support']
  }, {
    title: 'Software & Devices',
    items: ['ColorStar\u00ae', 'Tipper\u00ae Ink Dispenser', 'Additional Software & Devices']
  }, {
    title: 'Training',
    items: ['G7 Master Printer Training', 'G7 Trained Printers']
  }]
}, {
  label: 'About/Contact',
  cols: [{
    title: 'About Us',
    items: ['Company Overview', 'Mission & History', 'OEM Partnerships', 'Privacy Policy', 'Quality: From Research to Results', 'Testimonials', 'Nazdar Consulting Services']
  }, {
    title: 'Contact',
    items: ['Contact Us', 'Careers']
  }]
}, {
  label: 'Careers'
}, {
  label: 'Find a Distributor'
}];
function CorpHeader({
  openMenu,
  setOpenMenu
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "nz-corp-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nz-corp-util"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nz-corp-wrap nz-corp-util__in"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Contact Us"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Login"))), /*#__PURE__*/React.createElement("div", {
    className: "nz-corp-wrap nz-corp-head__main"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    className: "nz-corp-logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/ink-technologies/Logo-NazdarInkTech-Black.png",
    alt: "Nazdar Ink Technologies"
  })), /*#__PURE__*/React.createElement("div", {
    className: "nz-corp-head__act"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nz-corp-tag"
  }, "Products & Services"), /*#__PURE__*/React.createElement("a", {
    className: "nz-corp-cta",
    href: "#",
    onClick: e => e.preventDefault()
  }, "Where to Buy"))), /*#__PURE__*/React.createElement("nav", {
    className: "nz-corp-nav",
    onMouseLeave: () => setOpenMenu(null)
  }, /*#__PURE__*/React.createElement("div", {
    className: "nz-corp-wrap nz-corp-nav__in"
  }, CORP_NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.label,
    href: "#",
    onClick: e => e.preventDefault(),
    onMouseEnter: () => setOpenMenu(n.cols ? n.label : null),
    className: openMenu === n.label ? 'is-open' : ''
  }, n.label))), CORP_NAV.filter(n => n.cols && openMenu === n.label).map(n => /*#__PURE__*/React.createElement("div", {
    key: n.label,
    className: "nz-corp-mega"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nz-corp-wrap nz-corp-mega__in",
    style: {
      gridTemplateColumns: `repeat(${n.cols.length},1fr)`
    }
  }, n.cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title
  }, /*#__PURE__*/React.createElement("h4", null, c.title), /*#__PURE__*/React.createElement("ul", null, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, i)))))))))));
}
const CORP_FOOT = [['Find Your Ink', ['Digital Ink', 'Screen Ink', 'Narrow Web Ink', 'Ad Specialty Ink']], ['Company', ['Where to Buy', 'News', 'ColorStar', 'SDS']], ['Support', ['ISO Certification', 'Careers', 'Contact Us']]];
function CorpFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "nz-corp-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nz-corp-wrap nz-corp-foot__social"
  }, ['facebook', 'twitter', 'linkedin', 'youtube', 'instagram'].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    onClick: e => e.preventDefault(),
    "aria-label": s
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s,
    size: 18
  })))), /*#__PURE__*/React.createElement("div", {
    className: "nz-corp-wrap nz-corp-foot__in"
  }, CORP_FOOT.map(([title, links]) => /*#__PURE__*/React.createElement("div", {
    key: title
  }, /*#__PURE__*/React.createElement("h4", null, title), /*#__PURE__*/React.createElement("ul", null, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    className: "nz-corp-foot__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/nazdar/Logo-Nazdar-OneColor-White.png",
    alt: "Nazdar"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "nz-corp-wrap nz-corp-foot__legal"
  }, /*#__PURE__*/React.createElement("p", null, "Copyright 2026 by Nazdar."), /*#__PURE__*/React.createElement("p", null, "All rights reserved. Nazdar Ink Technologies and CATZper are registered trademarks of Nazdar. All other trademarks are the property of their respective owners. Specifications subject to change without notice.")));
}
Object.assign(window, {
  CORP_NAV,
  Icon,
  CorpHeader,
  CorpFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nazdar-corporate/SiteChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sourceone-store/CategoryPage.jsx
try { (() => {
/* Category landing + login modal for the Nazdar SourceOne storefront.
   Page copy transcribed verbatim from sourceone.nazdar.com/Equipment. */

const {
  Input,
  Button
} = window.NazdarDesignSystem_715ce7;
const {
  Icon
} = window;
const CATEGORIES = {
  equipment: {
    title: 'Equipment',
    crumbs: ['Home'],
    intro: 'Choosing the right piece of finishing equipment for your application is critical to overall success. Nazdar SourceOne is proud to offer a full range of printing equipment designed to support graphics, textile, and industrial production environments. We have partnered with the top brands including M&R, Roland, EFI, Colex, Epson and others to bring you comprehensive solutions that are reliable and versatile. Whether you\u2019re producing signage, apparel, or custom products, Nazdar SourceOne has the solutions that will fit your needs and grow your business.',
    shopHeading: 'Shop Equipment by Market Industry',
    cards: [{
      key: 'graphic',
      title: 'Graphic Equipment',
      body: 'Nazdar SourceOne is the leading supplier of graphic printing equipment to shops of every size and industry. We offer technology used to produce high quality visual output for signage, apparel decoration, displays, custom graphics, and more. From wide format printers and direct to garment systems to automated screen presses, exposure units, cutters, and finishing solutions, graphics printing equipment, you can find everything you need to produce exceptional graphics across a wide range of substrates and applications.',
      links: ['Digital Equipment', 'Screen Equipment']
    }, {
      key: 'textile',
      title: 'Textile Equipment',
      body: null,
      links: ['Digital Equipment', 'Screen Equipment']
    }, {
      key: 'industrial',
      title: 'Industrial Equipment',
      body: null,
      links: ['Digital Equipment', 'Screen Equipment']
    }],
    seoHeading: 'Nazdar SourceOne Printing Equipment'
  },
  graphic: {
    title: 'Graphic Equipment',
    crumbs: ['Home', 'Equipment'],
    intro: 'Nazdar SourceOne is the leading supplier of graphic printing equipment to shops of every size and industry. We offer technology used to produce high quality visual output for signage, apparel decoration, displays, custom graphics, and more. From wide format printers and direct to garment systems to automated screen presses, exposure units, cutters, and finishing solutions, graphics printing equipment, you can find everything you need to produce exceptional graphics across a wide range of substrates and applications.',
    shopHeading: 'Shop Graphic Equipment by Print Process',
    cards: [{
      key: null,
      title: 'Digital Equipment',
      body: null,
      links: ['Printing', 'Finishing', 'Measuring & Testing']
    }, {
      key: null,
      title: 'Screen Equipment',
      body: null,
      links: ['Finishing', 'Production', 'Pre-Press', 'Post-Press', 'Screen Presses', 'Measuring & Testing']
    }],
    seoHeading: null
  }
};
function CategoryPage({
  id,
  onOpen
}) {
  const c = CATEGORIES[id];
  return /*#__PURE__*/React.createElement("main", {
    className: "s1-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "s1-wrap"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "s1-crumbs"
  }, c.crumbs.map(x => /*#__PURE__*/React.createElement(React.Fragment, {
    key: x
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen(x === 'Equipment' ? 'equipment' : 'equipment');
    }
  }, x), /*#__PURE__*/React.createElement("span", null, "/"))), /*#__PURE__*/React.createElement("b", null, c.title)), /*#__PURE__*/React.createElement("h1", {
    className: "s1-h1"
  }, c.title), /*#__PURE__*/React.createElement("p", {
    className: "s1-intro"
  }, c.intro), /*#__PURE__*/React.createElement("h2", {
    className: "s1-h4"
  }, c.shopHeading), /*#__PURE__*/React.createElement("div", {
    className: `s1-cats s1-cats--${c.cards.length}`
  }, c.cards.map(card => /*#__PURE__*/React.createElement("article", {
    key: card.title,
    className: "s1-cat"
  }, /*#__PURE__*/React.createElement("button", {
    className: "s1-cat__img",
    onClick: () => card.key && onOpen(card.key)
  }, /*#__PURE__*/React.createElement("span", null, "Category image", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, card.title.toLowerCase().replace(/ /g, '-'), ".png"))), /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      card.key && onOpen(card.key);
    }
  }, card.title)), card.body && /*#__PURE__*/React.createElement("p", null, card.body), /*#__PURE__*/React.createElement("ul", {
    className: "s1-cat__links"
  }, card.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, l))))))), c.seoHeading && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("hr", {
    className: "s1-hr"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "s1-h4"
  }, c.seoHeading), /*#__PURE__*/React.createElement("div", {
    className: "s1-note"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 16
  }), /*#__PURE__*/React.createElement("p", null, "The live page carries two paragraphs of SEO body copy here. On ", /*#__PURE__*/React.createElement("b", null, "sourceone.nazdar.com"), " that block is currently unreplaced Lorem ipsum, so it is left blank in this recreation rather than invented.")))));
}
function LoginModal({
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "s1-modal",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "s1-modal__box",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "s1-modal__head"
  }, /*#__PURE__*/React.createElement("h2", null, "Customer Login"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    className: "s1-modal__body"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Registered Customers"), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onClose();
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email Address",
    type: "email",
    placeholder: "you@company.com"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement("div", {
    className: "s1-modal__act"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, "Sign In"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Forgot Your Password?")), /*#__PURE__*/React.createElement("p", {
    className: "s1-recap"
  }, "This form is protected by reCAPTCHA \u2014 the Google Privacy Policy and Terms of Service apply."))), /*#__PURE__*/React.createElement("div", {
    className: "s1-modal__new"
  }, /*#__PURE__*/React.createElement("h3", null, "New Customers"), /*#__PURE__*/React.createElement("p", null, "Creating an account has many benefits:"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "See order and shipping status"), /*#__PURE__*/React.createElement("li", null, "Track order history"), /*#__PURE__*/React.createElement("li", null, "Check out faster")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Create an Account")))));
}
Object.assign(window, {
  CategoryPage,
  LoginModal,
  CATEGORIES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sourceone-store/CategoryPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sourceone-store/StoreChrome.jsx
try { (() => {
/* Nazdar SourceOne storefront chrome — header, mega nav, footer.
   Structure and copy transcribed from sourceone.nazdar.com/Equipment (Magento 2, Hyva theme).
   Colors and type come from the Nazdar design system, not from the live site's CSS. */

const NAV = [{
  label: 'Equipment',
  href: '/equipment',
  groups: [{
    title: 'Graphic Equipment',
    href: '/equipment/graphic',
    cols: [{
      title: 'Digital Equipment',
      items: ['Printing', 'Finishing', 'Measuring & Testing']
    }, {
      title: 'Screen Equipment',
      items: ['Finishing', 'Production', 'Pre-Press', 'Post-Press', 'Screen Presses', 'Measuring & Testing']
    }]
  }, {
    title: 'Textile Equipment',
    href: '/equipment/textile',
    cols: [{
      title: 'Digital Equipment',
      items: ['Direct-To-Film (DTF)', 'Direct-to-Garment (DTG)', 'Dye Sublimation', 'Heat Transfer Presses', 'Pretreat Machines']
    }, {
      title: 'Screen Equipment',
      items: ['Dryers', 'Pre-Press', 'Production', 'Post-Press', 'Screen Presses', 'Measuring & Testing']
    }]
  }, {
    title: 'Industrial Equipment',
    href: '/equipment/industrial',
    cols: [{
      title: 'Digital Equipment',
      items: ['Printing', 'Finishing', 'Measuring & Testing']
    }, {
      title: 'Screen Equipment',
      items: ['Finishing', 'Measuring & Testing', 'Pre-Press', 'Production', 'Post-Press']
    }]
  }]
}, {
  label: 'Inks',
  href: '/inks',
  groups: [{
    title: 'Graphic Inks',
    href: '/inks/graphic',
    cols: [{
      title: 'Digital Inks',
      items: ['UV Curable Inks', 'Wide Format Solvent Inks', 'Aqueous Inks', 'LED Curable Inks']
    }, {
      title: 'Screen Inks',
      items: ['UV Curable Inks', 'Solvent Inks', 'Ink Additives', 'Water-Based Inks', 'Specialty Inks']
    }]
  }, {
    title: 'Textile Inks',
    href: '/inks/textile',
    cols: [{
      title: 'Digital Inks',
      items: ['Direct-To-Film Inks', 'Direct-to-Garment Inks', 'Dye Sublimation Inks']
    }, {
      title: 'Screen Inks',
      items: ['Plastisol Inks', 'Water-Based Inks', 'Silicone (PVC Free) Inks', 'Solvent Inks', 'Hybrid Inks']
    }]
  }, {
    title: 'Industrial Inks',
    href: '/inks/industrial',
    cols: [{
      title: 'Screen Inks',
      items: ['UV Curable Inks', 'Ink Additives', 'Solvent Inks', 'LED Curable Inks', 'Specialty Inks', 'Optical Media']
    }]
  }]
}, {
  label: 'Supplies',
  href: '/supplies',
  groups: [{
    title: 'Graphic Supplies',
    href: '/supplies/graphic',
    cols: [{
      title: 'Digital Supplies',
      items: ['Laminate', 'Banner Media', 'Pressure Sensitive Media', 'Specialty Media', 'Tapes & Adhesives', 'Tools & Miscellaneous']
    }, {
      title: 'Screen Supplies',
      items: ['Banner Media', 'Pressure Sensitive Media', 'Specialty Media', 'Laminates, Tapes & Adhesives', 'Mesh & Frames', 'Squeegees', 'Emulsion & Stencil Tools', 'Press Accessories', 'Chemistry & Cleaners', 'Tools & Miscellaneous']
    }]
  }, {
    title: 'Textile Supplies',
    href: '/supplies/textile',
    cols: [{
      title: 'Digital Supplies',
      items: ['Direct-To-Garment (DTG)', 'Direct-To-Film (DTF)', 'Transfer & Print Media']
    }, {
      title: 'Screen Supplies',
      items: ['Mesh & Frames', 'Squeegees', 'Emulsion & Stencil Tools', 'Press Accessories', 'Tapes & Adhesives', 'Spot Cleaning', 'Chemistry & Cleaners', 'Tools & Miscellaneous']
    }]
  }, {
    title: 'Industrial Supplies',
    href: '/supplies/industrial',
    cols: [{
      title: 'Digital Supplies',
      items: ['Tapes & Films', 'Software', 'Tools & Miscellaneous']
    }, {
      title: 'Screen Supplies',
      items: ['Mesh & Frames', 'Squeegees', 'Emulsion & Stencil Tools', 'Press Accessories', 'Tapes & Adhesives', 'Chemistry & Cleaners', 'Tools & Miscellaneous']
    }]
  }]
}, {
  label: 'Clearance',
  href: '/clearance'
}, {
  label: 'Resources',
  href: '/resources',
  icon: 'bookmark',
  flyout: [['bookmark', 'Central Resource Hub'], ['book-open', 'Resource Library'], ['newspaper', 'News & Updates'], ['star', 'ColorStar Calculator'], ['traffic-cone', 'Safety Data Sheets']]
}, {
  label: 'Customer Support',
  href: '/customer-support',
  icon: 'circle-help',
  flyout: [['phone', 'Contact Us'], ['circle-help', 'Frequently Asked Questions']]
}, {
  label: 'Subscribe',
  href: '/newsletter',
  icon: 'mail'
}];
function Icon({
  name,
  size = 18,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    className: className,
    style: {
      width: size,
      height: size,
      display: 'inline-block',
      flex: 'none'
    }
  });
}
function StoreHeader({
  onSignIn,
  cartCount,
  openMenu,
  setOpenMenu
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "s1-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "s1-util"
  }, /*#__PURE__*/React.createElement("div", {
    className: "s1-wrap s1-util__in"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Reorder"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "My Requisition Lists"))), /*#__PURE__*/React.createElement("div", {
    className: "s1-wrap s1-head__main"
  }, /*#__PURE__*/React.createElement("a", {
    className: "s1-logo",
    href: "#",
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/sourceone/Logo-NazdarSourceOne-Black.png",
    alt: "Nazdar SourceOne"
  })), /*#__PURE__*/React.createElement("form", {
    className: "s1-search",
    onSubmit: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 18
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search entire store here...",
    "aria-label": "Search"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Search")), /*#__PURE__*/React.createElement("div", {
    className: "s1-acct"
  }, /*#__PURE__*/React.createElement("button", {
    className: "s1-acct__btn",
    onClick: onSignIn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user"
  }), /*#__PURE__*/React.createElement("span", null, "Sign In")), /*#__PURE__*/React.createElement("button", {
    className: "s1-acct__btn s1-acct__btn--cart"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shopping-cart"
  }), /*#__PURE__*/React.createElement("span", {
    className: "s1-cart-n"
  }, cartCount)))), /*#__PURE__*/React.createElement("nav", {
    className: "s1-nav",
    onMouseLeave: () => setOpenMenu(null)
  }, /*#__PURE__*/React.createElement("div", {
    className: "s1-wrap s1-nav__in"
  }, NAV.map(n => /*#__PURE__*/React.createElement("div", {
    key: n.label,
    className: "s1-nav__item",
    onMouseEnter: () => setOpenMenu(n.groups || n.flyout ? n.label : null)
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    className: openMenu === n.label ? 'is-open' : ''
  }, n.icon && /*#__PURE__*/React.createElement(Icon, {
    name: n.icon,
    size: 16
  }), n.label, (n.groups || n.flyout) && /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14
  }))))), NAV.filter(n => n.groups && openMenu === n.label).map(n => /*#__PURE__*/React.createElement("div", {
    key: n.label,
    className: "s1-mega"
  }, /*#__PURE__*/React.createElement("div", {
    className: "s1-wrap s1-mega__in"
  }, n.groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.title,
    className: "s1-mega__g"
  }, /*#__PURE__*/React.createElement("a", {
    className: "s1-mega__gt",
    href: "#",
    onClick: e => e.preventDefault()
  }, g.title), g.cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    className: "s1-mega__c"
  }, /*#__PURE__*/React.createElement("a", {
    className: "s1-mega__ct",
    href: "#",
    onClick: e => e.preventDefault()
  }, c.title), /*#__PURE__*/React.createElement("ul", null, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, i))))))))))), NAV.filter(n => n.flyout && openMenu === n.label).map(n => /*#__PURE__*/React.createElement("div", {
    key: n.label,
    className: "s1-mega s1-mega--sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "s1-wrap"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "s1-fly"
  }, n.flyout.map(([ic, label]) => /*#__PURE__*/React.createElement("li", {
    key: label
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 16
  }), label)))))))));
}
const FOOT = [['Shop Nazdar SourceOne', ['Equipment', 'Inks', 'Supplies', 'Clearance']], ['Learn', ['News & Updates', 'ColorStar Calculator', 'Health & Safety', 'Safety Data Sheets', 'Central Resource Hub', 'Upcoming Events']], ['Customer Help', ['My Account', 'Order Tracking', 'Frequently Asked Questions', 'Contact Us', 'Careers']]];
function StoreFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "s1-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "s1-news"
  }, /*#__PURE__*/React.createElement("div", {
    className: "s1-wrap s1-news__in"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Sign Up For Special Offers"), /*#__PURE__*/React.createElement("p", null, "Get first access to promotions, events, new products & more!")), /*#__PURE__*/React.createElement("form", {
    className: "s1-news__f",
    onSubmit: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Enter your email address",
    "aria-label": "Email address"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Sign Up")))), /*#__PURE__*/React.createElement("div", {
    className: "s1-wrap s1-foot__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "s1-foot__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/sourceone/Logo-NazdarSourceOne-White.png",
    alt: "Nazdar SourceOne"
  }), /*#__PURE__*/React.createElement("div", {
    className: "s1-social"
  }, ['instagram', 'facebook', 'youtube', 'twitter', 'linkedin'].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    onClick: e => e.preventDefault(),
    "aria-label": s
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s,
    size: 18
  }))))), FOOT.map(([title, links]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    className: "s1-foot__col"
  }, /*#__PURE__*/React.createElement("h4", null, title), /*#__PURE__*/React.createElement("ul", null, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    className: "s1-foot__legal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "s1-wrap s1-foot__legal-in"
  }, /*#__PURE__*/React.createElement("span", null, "Copyright 2026 by Nazdar. All rights reserved."), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Privacy Policy"), " | ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Terms & Conditions")))));
}
Object.assign(window, {
  NAV,
  Icon,
  StoreHeader,
  StoreFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sourceone-store/StoreChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Theme = __ds_scope.Theme;

})();
