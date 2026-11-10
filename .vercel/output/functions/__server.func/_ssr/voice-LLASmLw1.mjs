import { i as __toESM } from "../_runtime.mjs";
import { v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { L as Globe, b as Plus, g as Search } from "../_libs/lucide-react.mjs";
import { _ as planById, d as Wrap, n as DIDS, p as cn } from "./shell-CnmSgr4h.mjs";
import { t as VoicePanel } from "./voice-panel-1AOmbJ4x.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/voice-LLASmLw1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function VoicePage() {
	const plan = planById("lattice");
	const [query, setQuery] = (0, import_react.useState)("");
	const filteredDids = DIDS.filter((d) => d.city.toLowerCase().includes(query.toLowerCase()) || d.country.toLowerCase().includes(query.toLowerCase()) || d.id.includes(query));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-line py-12 md:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrap, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs text-muted backdrop-blur-md mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-ios-green animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-white",
						children: "Voice"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-white",
					children: "A dialer and a local number."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base sm:text-lg text-muted leading-relaxed",
					children: "Try the keypad here. When you order, the same dialer places real calls on the numbers in your plan."
				})
			]
		}) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
		className: "py-10 md:py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoicePanel, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16 pt-12 border-t border-line",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-wider text-volt",
							children: "Phone number options"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-2xl sm:text-3xl font-semibold text-white",
							children: "Cities you can order"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs sm:text-sm text-muted",
							children: [
								plan.name,
								" includes up to ",
								plan.dids,
								" numbers. Pick a city to carry into the order."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-3xl text-xs leading-relaxed text-muted",
							children: "The exact digits are assigned when the invoice is paid. A few countries ask for an address or ID first. We say so before you pay."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative w-full sm:w-64",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Filter by city, country...",
							className: "h-10 w-full rounded-xl border border-white/10 bg-white/[0.04] pl-10 pr-3.5 text-xs text-white placeholder:text-muted/60 focus:outline-none focus:ring-1 focus:ring-volt"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 ios-glass rounded-3xl overflow-hidden border border-white/10 divide-y divide-line",
					children: filteredDids.map((did) => {
						const included = DIDS.findIndex((item) => item.id === did.id) < plan.dids;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 sm:px-6 hover:bg-white/[0.02] transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-volt shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-sm font-semibold text-white",
									children: did.id
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted",
									children: [
										did.city,
										", ",
										did.country,
										" · example number"
									]
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between sm:justify-end gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-medium text-muted",
									children: included ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-ios-green font-semibold",
										children: ["Included in ", plan.name]
									}) : `Example rate: $${did.monthly} / mo*`
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/checkout",
									search: {
										plan: "lattice",
										term: "month",
										phones: [did.id]
									},
									className: cn("inline-flex h-9 items-center justify-center gap-2 rounded-xl px-3 text-xs font-medium transition-colors", "bg-volt text-black hover:bg-volt/90"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Select region" })]
								})]
							})]
						}, did.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-[11px] text-muted",
					children: "*Illustrative allowance and rates only; selecting a region does not reserve, purchase, or activate a number."
				})
			]
		})]
	})] });
}
//#endregion
export { VoicePage as component };
