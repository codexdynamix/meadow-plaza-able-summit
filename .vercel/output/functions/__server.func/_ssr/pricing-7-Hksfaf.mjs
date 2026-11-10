import { i as __toESM } from "../_runtime.mjs";
import { v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as Check, L as Globe, d as ShieldCheck, j as Lock, rt as ArrowRight, t as Zap } from "../_libs/lucide-react.mjs";
import { d as Wrap, o as PLANS, p as cn, x as termPrice } from "./shell-CnmSgr4h.mjs";
import { n as buttonVariants } from "./button-ClkWwGp7.mjs";
import { t as TermToggle } from "./term-toggle-BNHsq6mO.mjs";
import { t as SeatMath } from "./seat-math-CLC8VSQ2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pricing-7-Hksfaf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PriceCard({ plan, term }) {
	const amount = termPrice(plan.price, term);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("ios-glass flex h-full flex-col justify-between rounded-3xl p-7 border transition-all duration-300", plan.featured ? "border-volt/60 bg-volt/[0.04] shadow-2xl shadow-volt/15 ring-1 ring-volt/30" : "border-white/10 hover:border-white/20 hover:bg-white/[0.05]"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-semibold uppercase tracking-wider text-muted",
					children: plan.featured ? "Featured example" : "Example tier"
				}), plan.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-volt/20 text-volt px-3 py-0.5 text-xs font-semibold",
					children: "Preview"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-3xl font-semibold tracking-tight text-white",
				children: plan.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted leading-relaxed min-h-[40px]",
				children: plan.blurb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex items-baseline gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-5xl font-semibold tracking-tight text-white tabular-nums",
					children: ["$", amount]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-medium text-muted",
					children: term === "year" ? "USD / year" : "USD / month"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted/70",
				children: term === "year" ? `Example estimate · ${(amount / 12).toFixed(2)} USD / month equivalent` : "Illustrative monthly estimate · not a live quote"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-6 border-t border-line" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-3 text-sm text-fg/90",
				children: plan.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full bg-volt/20 text-volt text-xs",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "size-3",
							strokeWidth: 2.5
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "leading-snug",
						children: feature
					})]
				}, feature))
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 pt-4 border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/checkout",
				search: {
					plan: plan.id,
					term,
					phones: []
				},
				className: cn(buttonVariants({
					variant: plan.featured ? "primary" : "line",
					size: "lg"
				}), "w-full flex items-center justify-center gap-2"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Choose services with ", plan.name] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
			})
		})]
	});
}
function PricingPage() {
	const [term, setTerm] = (0, import_react.useState)("month");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "relative border-b border-line py-16 md:py-24 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
			className: "text-center max-w-3xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs text-muted backdrop-blur-md mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-volt" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-white",
						children: "Plans"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-white",
					children: [
						"Three plans.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-volt",
							children: "The price is the price."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base sm:text-lg text-muted leading-relaxed",
					children: "Relay is a small line. Lattice is the plan most teams run. Foundry is a full floor with a pinned network address. Annual billing is 15% less."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TermToggle, {
						term,
						onChange: setTerm
					})
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
		className: "py-12 md:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid items-stretch gap-6 lg:grid-cols-3",
				children: PLANS.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceCard, {
					plan,
					term
				}, plan.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl ios-glass border border-white/10 text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-4 text-volt shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-white",
							children: "Order builder"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted",
							children: "Review services and estimated costs"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-4 text-ios-green shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-white",
							children: "Phone numbers"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted",
							children: "Included allowance varies by tier"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-4 text-ios-purple shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-white",
							children: "Provider requirements"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted",
							children: "Confirm by region and service"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-volt shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-white",
							children: "Illustrative rates"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted",
							children: "Confirm before ordering"
						})] })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeatMath, {})
			})
		]
	})] });
}
//#endregion
export { PricingPage as component };
