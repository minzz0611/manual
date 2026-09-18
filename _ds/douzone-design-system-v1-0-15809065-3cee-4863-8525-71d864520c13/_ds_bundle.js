/* @ds-bundle: {"format":4,"namespace":"DesignSystem_0bb2b1","components":[{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/data-display/Badge.jsx":"972aaa420038","components/data-display/Card.jsx":"e0c90081e789","components/forms/Button.jsx":"8e9561fa4f2b","components/forms/Input.jsx":"0e7e356f9ebd","ui_kits/ERP/Dashboard.jsx":"4c39849ddde1","ui_kits/ERP/Sidebar.jsx":"a2e4afafbb49","ui_kits/ERP/Topbar.jsx":"608494db2d2c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_0bb2b1 = window.DesignSystem_0bb2b1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DOUZONE ERP badge / tag.
 * tones: info (blue), ai (violet, filled), success (green), warning, error, neutral.
 */
function Badge({
  tone = "info",
  style,
  children,
  ...rest
}) {
  const tones = {
    info: {
      background: "var(--primary-50)",
      color: "var(--primary-700)"
    },
    ai: {
      background: "var(--violet-500)",
      color: "var(--neutral-0)"
    },
    success: {
      background: "var(--success-bg)",
      color: "var(--success)"
    },
    warning: {
      background: "#FEF3E6",
      color: "var(--warning)"
    },
    error: {
      background: "var(--error-bg)",
      color: "var(--error)"
    },
    neutral: {
      background: "var(--neutral-100)",
      color: "var(--neutral-700)"
    }
  };
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "4px",
      padding: "3px 10px",
      borderRadius: "var(--radius-badge)",
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 500,
      lineHeight: 1.4,
      whiteSpace: "nowrap",
      ...t,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DOUZONE ERP surface card.
 * variant "basic": plain white card.
 * variant "emphasis": stronger shadow for hero / AI emphasis.
 */
function Card({
  variant = "basic",
  style,
  children,
  ...rest
}) {
  const emphasis = variant === "emphasis";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      background: "var(--surface-card)",
      border: "0.5px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)",
      padding: "20px",
      boxShadow: emphasis ? "var(--shadow-md)" : "var(--shadow-sm)",
      overflow: "hidden",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DOUZONE ERP Button.
 * Variants: primary (filled blue), secondary (outline blue), ghost (violet text).
 * One filled primary per screen; use secondary/ghost for the rest.
 */
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  type = "button",
  onClick,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const sizes = {
    sm: {
      padding: "6px 12px",
      fontSize: 13
    },
    md: {
      padding: "10px 18px",
      fontSize: 14
    },
    lg: {
      padding: "13px 24px",
      fontSize: 16
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    lineHeight: 1,
    borderRadius: "var(--radius-control)",
    border: "1.5px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)",
    whiteSpace: "nowrap",
    ...sizes[size]
  };
  const variants = {
    primary: {
      default: {
        background: "var(--s1-indigo-500)",
        color: "var(--neutral-0)"
      },
      hover: {
        background: "var(--s1-indigo-700)",
        color: "var(--neutral-0)"
      },
      disabled: {
        background: "var(--neutral-200)",
        color: "#9199A6"
      }
    },
    secondary: {
      default: {
        background: "transparent",
        color: "var(--s1-indigo-500)",
        borderColor: "var(--s1-indigo-500)"
      },
      hover: {
        background: "var(--s1-indigo-40)",
        color: "var(--s1-indigo-700)",
        borderColor: "var(--s1-indigo-700)"
      },
      disabled: {
        background: "transparent",
        color: "var(--neutral-300)",
        borderColor: "var(--neutral-200)"
      }
    },
    ghost: {
      default: {
        background: "transparent",
        color: "var(--s1-indigo-500)"
      },
      hover: {
        background: "var(--s1-indigo-40)",
        color: "var(--s1-indigo-700)"
      },
      disabled: {
        background: "transparent",
        color: "var(--neutral-300)"
      }
    }
  };
  const v = variants[variant] || variants.primary;
  const stateStyle = disabled ? v.disabled : hover ? v.hover : v.default;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...stateStyle,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DOUZONE ERP text input with label, helper text, and error state.
 */
function Input({
  label,
  placeholder,
  value,
  onChange,
  error,
  helperText,
  disabled = false,
  type = "text",
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  let borderColor = "var(--neutral-200)";
  let boxShadow = "none";
  if (error) {
    borderColor = "var(--error)";
    boxShadow = focus ? "var(--shadow-focus-error)" : "none";
  } else if (focus) {
    borderColor = "var(--primary-500)";
    boxShadow = "var(--shadow-focus)";
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--text-body)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--text-strong)",
      padding: "10px 12px",
      borderRadius: "var(--radius-control)",
      border: `1.5px solid ${borderColor}`,
      background: disabled ? "var(--neutral-100)" : "var(--neutral-0)",
      boxShadow,
      outline: "none",
      transition: "border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)"
    }
  }, rest)), helperText && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? "var(--error)" : "var(--text-muted)"
    }
  }, helperText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ERP/Dashboard.jsx
try { (() => {
/* global React */
// DOUZONE ERP — Dashboard view. Uses DS primitives from window.DesignSystem_0bb2b1.
function Dashboard() {
  const DS = window.DesignSystem_0bb2b1 || {};
  const Card = DS.Card,
    Badge = DS.Badge,
    Button = DS.Button;
  const kpis = [{
    label: "당월 매출",
    value: "₩ 8.42억",
    delta: "+12.4%",
    up: true,
    icon: "trending-up"
  }, {
    label: "미수금 잔액",
    value: "₩ 1.28억",
    delta: "-3.1%",
    up: false,
    icon: "wallet"
  }, {
    label: "당월 지출",
    value: "₩ 5.06억",
    delta: "+4.8%",
    up: true,
    icon: "receipt"
  }, {
    label: "영업이익률",
    value: "18.6%",
    delta: "+1.2%p",
    up: true,
    icon: "percent"
  }];
  const months = [{
    m: "1월",
    v: 62
  }, {
    m: "2월",
    v: 70
  }, {
    m: "3월",
    v: 58
  }, {
    m: "4월",
    v: 81
  }, {
    m: "5월",
    v: 74
  }, {
    m: "6월",
    v: 92
  }];
  const blueRamp = ["#C9E3FF", "#9ECBFF", "#7CC0FF", "#57A8FF", "#309AFF", "#4164E1"];
  const rows = [{
    no: "2026-0612",
    name: "클라우드 사용료",
    dept: "IT운영팀",
    amt: "₩ 3,200,000",
    state: "완료",
    tone: "success"
  }, {
    no: "2026-0611",
    name: "6월 급여 이체",
    dept: "인사팀",
    amt: "₩ 128,400,000",
    state: "완료",
    tone: "success"
  }, {
    no: "2026-0609",
    name: "사무용품 구매",
    dept: "총무팀",
    amt: "₩ 540,000",
    state: "대기",
    tone: "warning"
  }, {
    no: "2026-0608",
    name: "해외 출장비 정산",
    dept: "영업1팀",
    amt: "₩ 2,180,000",
    state: "반려",
    tone: "error"
  }, {
    no: "2026-0607",
    name: "광고 대행비",
    dept: "마케팅팀",
    amt: "₩ 7,700,000",
    state: "완료",
    tone: "success"
  }];
  const label = {
    fontSize: 13,
    color: "var(--text-muted)",
    fontWeight: 500
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      overflowY: "auto",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16,
      marginBottom: 20
    }
  }, kpis.map(k => /*#__PURE__*/React.createElement(Card, {
    key: k.label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, k.label), /*#__PURE__*/React.createElement("i", {
    "data-lucide": k.icon,
    style: {
      width: 18,
      height: 18,
      color: "var(--primary-500)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      color: "var(--text-strong)",
      margin: "10px 0 6px"
    }
  }, k.value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: k.up ? "var(--success)" : "var(--error)"
    }
  }, k.delta, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      fontWeight: 500
    }
  }, "\uC804\uC6D4 \uB300\uBE44"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.7fr 1fr",
      gap: 16,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 16,
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, "\uC6D4\uBCC4 \uB9E4\uCD9C \uCD94\uC774"), /*#__PURE__*/React.createElement(Badge, {
    tone: "info"
  }, "\uC0C1\uBC18\uAE30")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "stretch",
      gap: 20,
      height: 180,
      padding: "0 4px"
    }
  }, months.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: b.m,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      width: "100%",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 44,
      height: `${b.v}%`,
      borderRadius: "6px 6px 0 0",
      background: blueRamp[i] || "var(--s1-blue-500)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--text-muted)"
    }
  }, b.m))))), /*#__PURE__*/React.createElement(Card, {
    variant: "emphasis"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "ai"
  }, "AI"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, "\uC9C0\uCD9C \uC774\uC0C1 \uD0D0\uC9C0")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 8px",
      fontSize: 18,
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, "\uBE44\uC815\uC0C1 \uC9C0\uCD9C 3\uAC74 \uAC10\uC9C0"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 16px",
      fontSize: 14,
      lineHeight: 1.6,
      color: "var(--text-body)"
    }
  }, "\uD574\uC678 \uCD9C\uC7A5\uBE44\uAC00 \uD3C9\uADE0 \uB300\uBE44 2.4\uBC30 \uB192\uC2B5\uB2C8\uB2E4. \uC2B9\uC778 \uC804 \uAC80\uD1A0\uB97C \uAD8C\uC7A5\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "\uC0C1\uC138 \uBCF4\uAE30"))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "18px 20px",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 16,
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, "\uCD5C\uADFC \uC804\uD45C"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "\uC804\uCCB4 \uBCF4\uAE30")), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      textAlign: "left",
      color: "var(--text-muted)",
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: th
  }, "\uC804\uD45C\uBC88\uD638"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "\uC801\uC694"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "\uBD80\uC11C"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: "right"
    }
  }, "\uAE08\uC561"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: "center"
    }
  }, "\uC0C1\uD0DC"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.no,
    style: {
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      color: "var(--text-muted)",
      fontVariantNumeric: "tabular-nums"
    }
  }, r.no), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, r.name), /*#__PURE__*/React.createElement("td", {
    style: td
  }, r.dept), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: "right",
      fontVariantNumeric: "tabular-nums",
      color: "var(--text-strong)"
    }
  }, r.amt), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: r.tone
  }, r.state))))))));
}
const th = {
  padding: "12px 20px",
  fontWeight: 600
};
const td = {
  padding: "13px 20px",
  color: "var(--text-body)"
};
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ERP/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ERP/Sidebar.jsx
try { (() => {
/* global React */
// DOUZONE ERP — Sidebar navigation
function Sidebar({
  active,
  onSelect
}) {
  const groups = [{
    label: "업무",
    items: [{
      id: "dashboard",
      icon: "layout-dashboard",
      name: "대시보드"
    }, {
      id: "finance",
      icon: "landmark",
      name: "재무회계"
    }, {
      id: "hr",
      icon: "users",
      name: "인사급여"
    }, {
      id: "inventory",
      icon: "package",
      name: "구매/재고"
    }, {
      id: "sales",
      icon: "trending-up",
      name: "영업관리"
    }]
  }, {
    label: "지능화",
    items: [{
      id: "ai",
      icon: "sparkles",
      name: "AI 인사이트",
      ai: true
    }]
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      flex: "none",
      height: "100%",
      background: "var(--neutral-0)",
      borderRight: "1px solid var(--border-subtle)",
      display: "flex",
      flexDirection: "column",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 20px 16px",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/omniesol_bi_01.png",
    alt: "OmniEsol",
    style: {
      height: 20
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      padding: "8px 12px",
      overflowY: "auto",
      flex: 1
    }
  }, groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.label,
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.04em",
      color: "var(--text-muted)",
      padding: "8px 12px 4px"
    }
  }, g.label), g.items.map(it => {
    const on = active === it.id;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onSelect(it.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        width: "100%",
        padding: "9px 12px",
        marginBottom: 2,
        border: "none",
        borderRadius: 8,
        background: on ? it.ai ? "var(--violet-50)" : "var(--s1-indigo-40)" : "transparent",
        color: on ? it.ai ? "var(--violet-700)" : "var(--s1-indigo-700)" : "var(--text-body)",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: on ? 600 : 500,
        cursor: "pointer",
        textAlign: "left",
        transition: "background 160ms"
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": it.icon,
      style: {
        width: 18,
        height: 18
      }
    }), /*#__PURE__*/React.createElement("span", null, it.name), it.ai && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto",
        fontSize: 10,
        fontWeight: 700,
        color: "var(--violet-500)"
      }
    }, "AI"));
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      borderTop: "1px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "50%",
      background: "var(--gradient-brand)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontWeight: 700,
      fontSize: 14
    }
  }, "\uAE40"), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, "\uAE40\uD604\uC6B0 \uB300\uB9AC"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--text-muted)"
    }
  }, "\uC7AC\uBB34\uD68C\uACC4\uD300")), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "settings",
    style: {
      width: 16,
      height: 16,
      marginLeft: "auto",
      color: "var(--text-muted)"
    }
  })));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ERP/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ERP/Topbar.jsx
try { (() => {
/* global React */
// DOUZONE ERP — top bar with company selector, search, notifications
function Topbar({
  title
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 60,
      flex: "none",
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "0 24px",
      background: "var(--neutral-0)",
      borderBottom: "1px solid var(--border-subtle)",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 20,
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 8,
      display: "flex",
      alignItems: "center",
      gap: 6,
      padding: "5px 10px",
      border: "1px solid var(--border-subtle)",
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600,
      color: "var(--text-body)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "building-2",
    style: {
      width: 14,
      height: 14,
      color: "var(--primary-500)"
    }
  }), "(\uC8FC)\uB354\uC874\uBE44\uC988\uC628", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-down",
    style: {
      width: 14,
      height: 14,
      color: "var(--text-muted)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      width: 240,
      padding: "8px 12px",
      background: "var(--surface-page)",
      border: "1px solid var(--border-subtle)",
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search",
    style: {
      width: 16,
      height: 16,
      color: "var(--text-muted)"
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "\uBA54\uB274\xB7\uC804\uD45C\xB7\uAC70\uB798\uCC98 \uAC80\uC0C9",
    style: {
      border: "none",
      background: "transparent",
      outline: "none",
      fontSize: 13,
      fontFamily: "var(--font-sans)",
      color: "var(--text-strong)",
      width: "100%"
    }
  })), /*#__PURE__*/React.createElement(IconBtn, {
    icon: "bell",
    dot: true
  }), /*#__PURE__*/React.createElement(IconBtn, {
    icon: "help-circle"
  })));
}
function IconBtn({
  icon,
  dot
}) {
  return /*#__PURE__*/React.createElement("button", {
    style: {
      position: "relative",
      width: 38,
      height: 38,
      borderRadius: 8,
      border: "1px solid var(--border-subtle)",
      background: "var(--neutral-0)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 18,
      height: 18,
      color: "var(--text-body)"
    }
  }), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 8,
      right: 9,
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "var(--error)",
      border: "1.5px solid var(--neutral-0)"
    }
  }));
}
window.Topbar = Topbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ERP/Topbar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

})();
