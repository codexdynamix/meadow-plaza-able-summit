import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { d as Wrap } from "./shell-CnmSgr4h.mjs";
import { t as TunnelPanel } from "./tunnel-panel-DwaXIMuH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tunnel-Xg3LHFRC.js
var import_jsx_runtime = require_jsx_runtime();
function TunnelPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-line py-12 md:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrap, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs text-muted backdrop-blur-md mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-ios-green animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-white",
						children: "Private tunnel"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-white",
					children: "Keep call traffic on your own network."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base sm:text-lg text-muted leading-relaxed",
					children: "Twelve exit cities, on the same account as your numbers and desks. OpenVPN or IKEv2 is there when an office network blocks WireGuard."
				})
			]
		}) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrap, {
		className: "py-10 md:py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TunnelPanel, {})
	})] });
}
//#endregion
export { TunnelPage as component };
