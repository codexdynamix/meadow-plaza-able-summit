import { i as __toESM } from "../_runtime.mjs";
import { v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { $ as Check, E as Monitor, L as Globe, M as LockKeyhole, Q as ChevronDown, S as Phone, X as CircleAlert, d as ShieldCheck, rt as ArrowRight, v as RefreshCw } from "../_libs/lucide-react.mjs";
import { _ as planById, a as MACHINES, b as suggestCallsign, c as REGIONS, d as Wrap, f as cleanCallsign, g as planAllows, n as DIDS, o as PLANS, p as cn, s as PROTOCOLS, t as DEDICATED_PLANS, u as VPS_PLANS, x as termPrice } from "./shell-CnmSgr4h.mjs";
import { n as Route$6 } from "./router-DDcxA9Eb.mjs";
import { t as Button } from "./button-ClkWwGp7.mjs";
import { t as TermToggle } from "./term-toggle-BNHsq6mO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-C-ds4Ixg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DEFAULT_MACHINES = {
	relay: ["pool-1"],
	lattice: ["dx-04"],
	foundry: [
		"dx-04",
		"dx-09",
		"dx-12"
	]
};
var MACHINE_LABELS = {
	"pool-1": "Essential",
	"dx-04": "Standard",
	"dx-09": "Professional",
	"dx-12": "Ultimate"
};
var PHONE_COUNTRIES = {
	US: { name: "United States" },
	UK: { name: "United Kingdom" },
	DE: { name: "Germany" },
	NL: { name: "Netherlands" },
	SG: { name: "Singapore" },
	JP: { name: "Japan" },
	DK: { name: "Denmark" },
	NO: { name: "Norway" },
	SE: { name: "Sweden" },
	FI: { name: "Finland" },
	IS: { name: "Iceland" },
	AU: { name: "Australia" },
	CA: { name: "Canada" },
	BR: { name: "Brazil" },
	AE: { name: "United Arab Emirates" }
};
function CountryFlag({ country }) {
	let design;
	switch (country) {
		case "US":
			design = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				Array.from({ length: 7 }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					y: index * 2.77,
					width: "40",
					height: "1.38",
					fill: index % 2 ? "#fff" : "#c83b4b"
				}, index)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "17",
					height: "11",
					fill: "#294477"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M2 2h1m3 0h1m3 0h1m3 0h1M3.5 4.5h1m3 0h1m3 0h1m3 0h1M2 7h1m3 0h1m3 0h1m3 0h1M3.5 9.5h1m3 0h1m3 0h1m3 0h1",
					stroke: "#fff",
					strokeWidth: "1"
				})
			] });
			break;
		case "UK":
			design = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "40",
					height: "24",
					fill: "#294477"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "m0 0 40 24M40 0 0 24",
					stroke: "#fff",
					strokeWidth: "5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "m0 0 40 24M40 0 0 24",
					stroke: "#c83b4b",
					strokeWidth: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M20 0v24M0 12h40",
					stroke: "#fff",
					strokeWidth: "8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M20 0v24M0 12h40",
					stroke: "#c83b4b",
					strokeWidth: "4"
				})
			] });
			break;
		case "DE":
			design = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "40",
					height: "8",
					fill: "#222"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					y: "8",
					width: "40",
					height: "8",
					fill: "#c83b4b"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					y: "16",
					width: "40",
					height: "8",
					fill: "#e7b642"
				})
			] });
			break;
		case "NL":
			design = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "40",
					height: "8",
					fill: "#c83b4b"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					y: "8",
					width: "40",
					height: "8",
					fill: "#fff"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					y: "16",
					width: "40",
					height: "8",
					fill: "#294477"
				})
			] });
			break;
		case "SG":
			design = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "40",
					height: "12",
					fill: "#c83b4b"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					y: "12",
					width: "40",
					height: "12",
					fill: "#fff"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "10",
					cy: "6",
					r: "3.6",
					fill: "#fff"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "11.5",
					cy: "5.3",
					r: "3",
					fill: "#c83b4b"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "m17 2.3.8 1.6 1.8.2-1.3 1.2.3 1.8-1.6-.9-1.6.9.3-1.8-1.3-1.2 1.8-.2z",
					fill: "#fff"
				})
			] });
			break;
		case "JP":
			design = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "40",
				height: "24",
				fill: "#fff"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "20",
				cy: "12",
				r: "6.5",
				fill: "#bc3446"
			})] });
			break;
		case "DK":
			design = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "40",
				height: "24",
				fill: "#c83b4b"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 0v24M0 12h40",
				stroke: "#fff",
				strokeWidth: "3"
			})] });
			break;
		case "NO":
			design = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "40",
					height: "24",
					fill: "#c83b4b"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M12 0v24M0 12h40",
					stroke: "#fff",
					strokeWidth: "6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M12 0v24M0 12h40",
					stroke: "#294477",
					strokeWidth: "2.5"
				})
			] });
			break;
		case "SE":
			design = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "40",
				height: "24",
				fill: "#2874ae"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 0v24M0 12h40",
				stroke: "#f3cf54",
				strokeWidth: "3"
			})] });
			break;
		case "FI":
			design = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "40",
				height: "24",
				fill: "#fff"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 0v24M0 12h40",
				stroke: "#28629a",
				strokeWidth: "4"
			})] });
			break;
		case "IS":
			design = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "40",
					height: "24",
					fill: "#294477"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M12 0v24M0 12h40",
					stroke: "#fff",
					strokeWidth: "6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M12 0v24M0 12h40",
					stroke: "#c83b4b",
					strokeWidth: "2.5"
				})
			] });
			break;
		case "AU":
			design = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "40",
					height: "24",
					fill: "#294477"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M0 0 20 12M20 0 0 12",
					stroke: "#fff",
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M0 0 20 12M20 0 0 12",
					stroke: "#c83b4b",
					strokeWidth: "1.2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M10 0v12M0 6h20",
					stroke: "#fff",
					strokeWidth: "4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M10 0v12M0 6h20",
					stroke: "#c83b4b",
					strokeWidth: "1.8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "m29 5 .8 1.8 2-.8-.8 2 .8 2-2-.8-.8 1.8-.8-1.8-2 .8.8-2-.8-2 2 .8zM23 16l.6 1.3 1.4-.5-.5 1.4.5 1.4-1.4-.6-.6 1.3-.6-1.3-1.4.6.5-1.4-.5-1.4 1.4.5zM33 16l.6 1.3 1.4-.5-.5 1.4.5 1.4-1.4-.6-.6 1.3-.6-1.3-1.4.6.5-1.4-.5-1.4 1.4.5z",
					fill: "#fff"
				})
			] });
			break;
		case "CA":
			design = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "40",
					height: "24",
					fill: "#fff"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "10",
					height: "24",
					fill: "#c83b4b"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "30",
					width: "10",
					height: "24",
					fill: "#c83b4b"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "m20 4 1.8 4 2.6-.8-1.1 3.2 2.8 2-3.5.8.6 3.8-2.6-1.8-2.6 1.8.6-3.8-3.5-.8 2.8-2-1.1-3.2 2.6.8z",
					fill: "#c83b4b"
				})
			] });
			break;
		case "BR":
			design = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "40",
					height: "24",
					fill: "#218453"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "m20 3 16 9-16 9L4 12z",
					fill: "#f3cf54"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "20",
					cy: "12",
					r: "5.1",
					fill: "#31518a"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M15.5 10.5q4-1 8.8 1",
					fill: "none",
					stroke: "#fff",
					strokeWidth: "1"
				})
			] });
			break;
		case "AE":
			design = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "10",
					width: "30",
					height: "8",
					fill: "#218453"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "10",
					y: "8",
					width: "30",
					height: "8",
					fill: "#fff"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "10",
					y: "16",
					width: "30",
					height: "8",
					fill: "#222"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "10",
					height: "24",
					fill: "#c83b4b"
				})
			] });
			break;
		default: design = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "40",
			height: "24",
			fill: "#e7edf3"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "20",
			cy: "12",
			r: "7",
			fill: "#94a3b8"
		})] });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 40 24",
		role: "img",
		"aria-label": `${PHONE_COUNTRIES[country]?.name ?? country} flag`,
		className: "h-6 w-10 shrink-0 overflow-hidden rounded-md border border-slate-900/10 shadow-sm",
		children: design
	});
}
function CheckoutPage() {
	const search = Route$6.useSearch();
	const [regionId, setRegion] = (0, import_react.useState)("fra");
	const [protocol, setProtocol] = (0, import_react.useState)("wg");
	const [planId, setPlanId] = (0, import_react.useState)(search.plan);
	const [term, setTerm] = (0, import_react.useState)(search.term);
	const [selectedDids, setSelectedDids] = (0, import_react.useState)(search.phones?.length ? search.phones : [DIDS[0].id]);
	const [selectedMachines, setSelectedMachines] = (0, import_react.useState)(DEFAULT_MACHINES[search.plan]);
	const [selectedVpsId, setSelectedVpsId] = (0, import_react.useState)(null);
	const [selectedDedicatedId, setSelectedDedicatedId] = (0, import_react.useState)(null);
	const [name, setName] = (0, import_react.useState)("");
	const [suggestion, setSuggestion] = (0, import_react.useState)("north-lark");
	const [step, setStep] = (0, import_react.useState)("draft");
	(0, import_react.useEffect)(() => {
		setSuggestion(suggestCallsign());
	}, []);
	const plan = planById(planId);
	const selectedVps = VPS_PLANS.find((item) => item.id === selectedVpsId);
	const selectedDedicated = DEDICATED_PLANS.find((item) => item.id === selectedDedicatedId);
	const serverMonthlyTotal = (selectedVps?.price ?? 0) + (selectedDedicated?.price ?? 0);
	const monthlyTotal = plan.price + serverMonthlyTotal;
	const total = termPrice(monthlyTotal, term);
	const cleaned = name.trim() ? cleanCallsign(name) : suggestion;
	const invalid = name.trim().length > 0 && !cleanCallsign(name);
	const machineLimit = planId === "foundry" ? 3 : 1;
	function changePlan(nextPlanId) {
		setPlanId(nextPlanId);
		setSelectedDids((current) => [current[0] ?? DIDS[0].id]);
		setSelectedMachines(DEFAULT_MACHINES[nextPlanId]);
	}
	function changeDidRegion(id) {
		setSelectedDids([id]);
	}
	function toggleMachine(id) {
		setSelectedMachines((current) => {
			if (current.includes(id)) return current.length > 1 ? current.filter((selected) => selected !== id) : current;
			if (current.length >= machineLimit) return current;
			return [...current, id];
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
		className: "py-10 md:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl mb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs text-muted backdrop-blur-md mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5 text-ios-green" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-white",
							children: "Order"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl sm:text-4xl font-semibold tracking-tight text-white",
						children: "Build the service you want on one invoice"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Choose a plan, the cities for your numbers, the desks, and a tunnel. We send this list back as an invoice. Billing starts when you approve it."
					})
				]
			}),
			step === "draft" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Configure services",
				className: "sticky top-[76px] z-30 mb-6 -mx-4 border-y border-slate-200/80 bg-white/95 px-4 py-2 shadow-sm backdrop-blur-xl sm:top-[84px] sm:mx-0 sm:rounded-2xl sm:border sm:px-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-1 overflow-x-auto sm:justify-between",
					children: [
						["workspace", "Workspace"],
						["phones", "Phone region"],
						["rdp", "RDP desktops"],
						["vps", "VPS plans"],
						["dedicated", "Dedicated servers"],
						["tunnel", "Secure tunnel"]
					].map(([id, label], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `#${id}`,
						className: "inline-flex min-h-10 shrink-0 items-center gap-2 rounded-xl px-3 text-xs font-semibold text-slate-600 transition-colors hover:bg-blue-50 hover:text-[#1f4d3a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f4d3a] sm:px-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-5 items-center justify-center rounded-full bg-slate-100 text-[10px] text-slate-500",
							children: index + 1
						}), label]
					}, id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-12 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ios-glass rounded-3xl p-6 sm:p-8 border border-white/10 lg:col-span-12 shadow-2xl",
					children: step === "draft" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								id: "workspace",
								className: "scroll-mt-36",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-wider text-muted font-semibold mb-3",
									children: "1. Select example tier"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-3 sm:grid-cols-3",
									children: PLANS.map((item) => {
										const selected = planId === item.id;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
											className: cn("flex min-w-0 flex-col rounded-2xl border bg-white p-4 transition-all", selected ? "border-volt ring-2 ring-volt/15 shadow-md shadow-volt/10" : "border-slate-200 hover:border-volt/40 hover:shadow-sm"),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-semibold uppercase tracking-wide text-slate-500",
													children: item.name
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "mt-2 text-2xl font-bold tracking-tight text-slate-900",
													children: [
														"$",
														item.price,
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "ml-1 text-xs font-medium text-slate-500",
															children: "USD/mo · example"
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
													className: "mt-4 flex-1 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700",
													children: item.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
														className: "flex items-start gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-3.5 shrink-0 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: feature })]
													}, feature))
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													"aria-pressed": selected,
													onClick: () => changePlan(item.id),
													className: cn("mt-4 inline-flex min-h-10 w-full items-center justify-center rounded-xl px-3 text-xs font-semibold transition-colors", selected ? "bg-emerald-600 text-white hover:bg-emerald-700" : "bg-[#c44712] text-white hover:bg-[#a93b0d]"),
													children: selected ? "Selected" : `Choose ${item.name}`
												})
											]
										}, item.id);
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "space-y-7 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										id: "phones",
										className: "scroll-mt-36",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-start justify-between gap-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "flex items-center gap-2 text-sm font-semibold text-white",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-volt" }), "Choose a phone region"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 text-xs text-muted",
												children: [
													"Choose a requested region. Your ",
													plan.name,
													" plan includes up to ",
													plan.dids,
													" numbers; specific numbers and coverage require carrier confirmation."
												]
											})] })
										}), (() => {
											const did = DIDS.find((item) => item.id === selectedDids[0]) ?? DIDS[0];
											const country = PHONE_COUNTRIES[did.country];
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-2",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
														className: "group relative min-w-0 flex-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
															"aria-label": `Choose primary phone region, currently ${country?.name ?? did.country}`,
															className: "flex min-h-14 cursor-pointer list-none items-center gap-3 rounded-xl px-2.5 py-2 transition-colors hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt [&::-webkit-details-marker]:hidden",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryFlag, { country: did.country }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																	className: "min-w-0 flex-1",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "block truncate text-sm font-semibold text-fg",
																		children: country?.name ?? did.country
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																		className: "mt-0.5 block truncate text-xs text-muted",
																		children: [
																			did.city,
																			" · ",
																			did.id
																		]
																	})]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 shrink-0 text-muted transition-transform group-open:rotate-180" })
															]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "absolute left-0 right-0 top-full z-30 mt-2 max-h-72 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xl shadow-slate-900/10",
															children: DIDS.map((option) => {
																const optionCountry = PHONE_COUNTRIES[option.country];
																return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																	type: "button",
																	onClick: (event) => {
																		changeDidRegion(option.id);
																		event.currentTarget.closest("details")?.removeAttribute("open");
																	},
																	className: cn("flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt", option.id === did.id && "bg-blue-50/70"),
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryFlag, { country: option.country }),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																			className: "min-w-0 flex-1",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																				className: "block truncate text-sm font-semibold text-slate-800",
																				children: optionCountry?.name ?? option.country
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																				className: "mt-0.5 block truncate text-xs text-slate-500",
																				children: [
																					option.city,
																					" · ",
																					option.id
																				]
																			})]
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			className: "shrink-0 text-right text-xs font-semibold text-emerald-700",
																			children: "Included"
																		})
																	]
																}, option.id);
															})
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "shrink-0 px-2 text-right text-xs font-semibold text-ios-green",
														children: "Included"
													})]
												})
											});
										})()]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										id: "rdp",
										className: "scroll-mt-36 border-t border-white/10 pt-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start justify-between gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "flex items-center gap-2 text-sm font-semibold text-white",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "size-4 text-volt" }), "Select required RDP desktop(s)"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "mt-1 text-xs text-muted",
													children: [
														"RDP is required for every agent in this workflow. Compare the preview desktop specs; the workspace tier includes up to ",
														machineLimit,
														" desktop",
														machineLimit === 1 ? "" : "s",
														"."
													]
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "shrink-0 rounded-full bg-white/[0.05] px-2.5 py-1 text-[11px] text-muted",
													children: [
														selectedMachines.length,
														" / ",
														machineLimit
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
												children: MACHINES.map((machine) => {
													const selected = selectedMachines.includes(machine.id);
													const available = planAllows(plan.id, machine.min);
													const atLimit = selectedMachines.length >= machineLimit;
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
														className: cn("flex min-w-0 flex-col rounded-2xl border bg-white p-4 transition-all", selected ? "border-volt ring-2 ring-volt/15 shadow-md shadow-volt/10" : "border-slate-200 hover:border-volt/40 hover:shadow-sm"),
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex min-h-8 items-start justify-between gap-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-xs font-semibold uppercase tracking-wide text-slate-500",
																	children: MACHINE_LABELS[machine.id]
																}), selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700",
																	children: "Selected"
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																className: "mt-2 text-2xl font-bold tracking-tight text-slate-900",
																children: [planById(machine.min).price, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "ml-1 text-xs font-medium text-slate-500",
																	children: "USD/mo · example"
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																className: "mt-1 text-[11px] text-slate-500",
																children: ["Included with ", planById(machine.min).name]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
																className: "mt-4 flex-1 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700",
																children: [
																	machine.os,
																	machine.cpu,
																	`${machine.ram} memory`,
																	`${machine.disk} storage`
																].map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
																	className: "flex items-start gap-2",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-3.5 shrink-0 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: feature })]
																}, feature))
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																type: "button",
																"aria-pressed": selected,
																disabled: available && !selected && atLimit,
																onClick: () => {
																	if (available) toggleMachine(machine.id);
																	else changePlan(machine.min);
																},
																className: cn("mt-4 inline-flex min-h-10 w-full items-center justify-center rounded-xl px-3 text-xs font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50", selected ? "bg-emerald-600 text-white hover:bg-emerald-700" : available ? "bg-[#c44712] text-white hover:bg-[#a93b0d]" : "bg-slate-100 text-slate-700 hover:bg-slate-200"),
																children: selected ? "Selected" : available ? "Choose RDP" : `Upgrade to ${planById(machine.min).name}`
															})
														]
													}, machine.id);
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-[11px] text-muted",
												children: "Example bundle pricing only. No desktop is reserved or provisioned from this preview."
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										id: "vps",
										className: "scroll-mt-36 border-t border-white/10 pt-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "flex items-center gap-2 text-sm font-semibold text-white",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "size-4 text-volt" }), "Add a VPS"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-muted",
												children: "Optional example USA VPS plans. Their illustrative monthly rates are not provider quotes."
											})] }), selectedVps && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setSelectedVpsId(null),
												className: "shrink-0 text-xs font-medium text-muted hover:text-white",
												children: "Remove"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
											children: VPS_PLANS.map((item) => {
												const selected = selectedVpsId === item.id;
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
													className: cn("flex min-w-0 flex-col rounded-2xl border bg-white p-4 transition-all", selected ? "border-volt ring-2 ring-volt/15 shadow-md shadow-volt/10" : "border-slate-200 hover:border-volt/40 hover:shadow-sm"),
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-xs font-semibold uppercase tracking-wide text-slate-500",
															children: item.name
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: "mt-2 text-2xl font-bold tracking-tight text-slate-900",
															children: [
																"$",
																item.price,
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "ml-1 text-xs font-medium text-slate-500",
																	children: "USD/mo · example"
																})
															]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
															className: "mt-4 flex-1 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700",
															children: item.specs.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
																className: "flex items-start gap-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-3.5 shrink-0 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: feature })]
															}, feature))
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															"aria-pressed": selected,
															onClick: () => setSelectedVpsId(selected ? null : item.id),
															className: cn("mt-4 inline-flex min-h-10 w-full items-center justify-center rounded-xl px-3 text-xs font-semibold transition-colors", selected ? "bg-emerald-600 text-white hover:bg-emerald-700" : "bg-[#c44712] text-white hover:bg-[#a93b0d]"),
															children: selected ? "Selected" : "Choose VPS"
														})
													]
												}, item.id);
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										id: "dedicated",
										className: "scroll-mt-36 border-t border-white/10 pt-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "flex items-center gap-2 text-sm font-semibold text-white",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "size-4 text-volt" }), "Add a dedicated server"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-muted",
												children: "Optional example Chicago server plans. Their illustrative monthly rates are not provider quotes."
											})] }), selectedDedicated && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setSelectedDedicatedId(null),
												className: "shrink-0 text-xs font-medium text-muted hover:text-white",
												children: "Remove"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
											children: DEDICATED_PLANS.map((item) => {
												const selected = selectedDedicatedId === item.id;
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
													className: cn("flex min-w-0 flex-col rounded-2xl border bg-white p-4 transition-all", selected ? "border-volt ring-2 ring-volt/15 shadow-md shadow-volt/10" : "border-slate-200 hover:border-volt/40 hover:shadow-sm"),
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-xs font-semibold uppercase tracking-wide text-slate-500",
															children: item.name
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: "mt-2 text-2xl font-bold tracking-tight text-slate-900",
															children: [
																"$",
																item.price,
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "ml-1 text-xs font-medium text-slate-500",
																	children: "USD/mo · example"
																})
															]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
															className: "mt-4 flex-1 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700",
															children: item.specs.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
																className: "flex items-start gap-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-3.5 shrink-0 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: feature })]
															}, feature))
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															"aria-pressed": selected,
															onClick: () => setSelectedDedicatedId(selected ? null : item.id),
															className: cn("mt-4 inline-flex min-h-10 w-full items-center justify-center rounded-xl px-3 text-xs font-semibold transition-colors", selected ? "bg-emerald-600 text-white hover:bg-emerald-700" : "bg-[#c44712] text-white hover:bg-[#a93b0d]"),
															children: selected ? "Selected" : "Choose server"
														})
													]
												}, item.id);
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										id: "tunnel",
										className: "scroll-mt-36 border-t border-white/10 pt-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "flex items-center gap-2 text-sm font-semibold text-white",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, { className: "size-4 text-volt" }), "Configure secure tunnel"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-muted",
												children: "Select an example protocol and region. No VPN provider or live tunnel is connected."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-4 grid gap-3 sm:grid-cols-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "text-xs font-medium text-muted",
													children: ["Protocol", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
														value: protocol,
														onChange: (event) => {
															const selected = PROTOCOLS.find((item) => item.id === event.target.value);
															if (selected) setProtocol(selected.id);
														},
														className: "mt-2 h-11 w-full rounded-xl border border-white/10 bg-white px-3 text-sm text-fg focus:outline-none focus:ring-1 focus:ring-volt",
														children: PROTOCOLS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: item.id,
															children: item.name
														}, item.id))
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "text-xs font-medium text-muted",
													children: ["Exit region", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
														value: regionId,
														onChange: (event) => setRegion(event.target.value),
														className: "mt-2 h-11 w-full rounded-xl border border-white/10 bg-white px-3 text-sm text-fg focus:outline-none focus:ring-1 focus:ring-volt",
														children: REGIONS.map((region) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
															value: region.id,
															children: [
																region.city,
																" · ",
																region.ms,
																" ms"
															]
														}, region.id))
													})]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-2 flex items-center gap-1.5 text-[11px] text-ios-green",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-3.5" }), " Example tunnel preference · no live service"]
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-wider text-muted font-semibold mb-3",
								children: "3. Billing term"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TermToggle, {
								term,
								onChange: setTerm
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "callsign",
									className: "text-xs uppercase tracking-wider text-muted font-semibold block mb-2",
									children: "4. Preview workspace label (optional)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "callsign",
										value: name,
										autoComplete: "off",
										placeholder: suggestion,
										onChange: (event) => setName(event.target.value),
										className: "h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-sm font-mono text-white placeholder:text-muted/50 focus:outline-none focus:ring-1 focus:ring-volt"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2.5 flex items-center gap-3 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "text-volt font-medium hover:underline flex items-center gap-1",
											onClick: () => setName(suggestion),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												"Use “",
												suggestion,
												"”"
											] })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted/40",
											children: "·"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											className: "text-muted hover:text-white flex items-center gap-1",
											onClick: () => setSuggestion(suggestCallsign()),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Shuffle" })]
										})
									]
								}),
								invalid ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-red-400",
									children: "Must be 3–16 letters or digits starting with a letter."
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-muted",
									children: "Used only to label this local preview; it does not create an account."
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								className: "w-full sm:w-auto",
								size: "lg",
								disabled: Boolean(invalid),
								onClick: () => setStep("review"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Review order" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-b border-line pb-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold uppercase tracking-wider text-volt",
										children: step === "sent" ? "Invoice requested" : "Order review"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "mt-1 text-2xl font-semibold tracking-tight text-white",
										children: [
											plan.name,
											" · ",
											term === "year" ? "Annual" : "Monthly"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-sm text-muted",
										children: [
											"$",
											total.toLocaleString(),
											" USD ",
											term === "year" ? "per year" : "per month",
											", before any carrier document fee a country may add."
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-2xl border border-volt-border bg-volt-light p-5 text-sm text-fg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "mt-0.5 size-5 shrink-0 text-volt" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-semibold text-fg",
										children: step === "sent" ? "We have this order" : "Nothing is billed on this page"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 leading-relaxed text-muted",
										children: step === "sent" ? "Your selection is saved in this browser. A Vela specialist invoices this exact list and tells you if a country needs extra documents." : "Request the invoice when the list looks right. We confirm number stock and any paperwork, then you approve payment. The desks and lines start after that."
									})] })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "space-y-3 rounded-2xl border border-white/10 bg-black/20 p-5 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted",
											children: "Workspace label"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "font-mono font-medium text-white",
											children: cleaned
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted",
											children: "Phone region request"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "text-right font-medium text-white",
											children: DIDS.find((item) => item.id === selectedDids[0])?.city ?? "Not selected"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted",
											children: "RDP desktops requested"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
											className: "text-right font-medium text-white",
											children: [
												selectedMachines.length,
												" · ",
												selectedMachines.map((id) => MACHINE_LABELS[id]).join(", ")
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between gap-4 border-t border-white/10 pt-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "font-semibold text-white",
											children: "Estimated recurring total"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
											className: "font-semibold text-volt",
											children: [
												"$",
												total.toLocaleString(),
												" USD-equivalent",
												term === "year" ? "/yr" : "/mo"
											]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-3 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "lg",
									onClick: () => setStep("sent"),
									disabled: step === "sent",
									children: step === "sent" ? "Invoice requested" : "Request this invoice"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "line",
									size: "lg",
									onClick: () => setStep("draft"),
									children: "Edit order"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: "Requesting an invoice does not charge a card. You approve the invoice we send back."
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "ios-glass rounded-3xl p-6 sm:p-7 border border-white/10 lg:col-span-12 shadow-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-muted font-semibold",
							children: "Example order estimate"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-2xl font-semibold text-white tracking-tight",
							children: [plan.name, " example bundle"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-5 grid gap-x-8 gap-y-3 text-xs sm:grid-cols-2 xl:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center py-2 border-b border-line",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted",
										children: "Workspace tier"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
										className: "font-semibold text-white",
										children: [
											"$",
											plan.price,
											" USD / mo · example"
										]
									})]
								}),
								selectedVps && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center py-2 border-b border-line",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
										className: "text-muted",
										children: ["VPS · ", selectedVps.name]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
										className: "font-semibold text-white",
										children: [
											"$",
											selectedVps.price,
											" USD / mo · example"
										]
									})]
								}),
								selectedDedicated && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center py-2 border-b border-line",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
										className: "text-muted",
										children: ["Dedicated · ", selectedDedicated.name]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
										className: "font-semibold text-white",
										children: [
											"$",
											selectedDedicated.price,
											" USD / mo · example"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center py-2 border-b border-line",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted",
										children: "Example phone allowance"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-semibold text-white font-mono",
										children: plan.dids
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between gap-3 text-[11px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
										className: "min-w-0 truncate text-muted",
										children: [
											"Primary line · ",
											DIDS.find((item) => item.id === selectedDids[0])?.city,
											" · ",
											selectedDids[0]
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "shrink-0 font-semibold text-amber-200",
										children: "Not reserved"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center py-2 border-b border-line",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted",
										children: "Selected RDP desktops"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
										className: "font-semibold text-white font-mono",
										children: [selectedMachines.length, " requested · example"]
									})]
								}),
								selectedMachines.map((id) => {
									const machine = MACHINES.find((item) => item.id === id);
									return machine ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between gap-3 text-[11px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
											className: "min-w-0 truncate text-muted",
											children: [
												machine.name,
												" · ",
												machine.cpu,
												" / ",
												machine.ram
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "shrink-0 font-semibold text-amber-200",
											children: "Not provisioned"
										})]
									}, id) : null;
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center py-2 border-b border-line",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted",
										children: "Example tunnel preference"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
										className: "font-semibold text-white",
										children: [
											PROTOCOLS.find((item) => item.id === protocol)?.name,
											" · ",
											REGIONS.find((item) => item.id === regionId)?.city
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center py-2 border-b border-line",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
										className: "text-muted",
										children: ["Example agent allowance · ", plan.seats]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-semibold text-amber-200",
										children: "Not ordered"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center py-2 border-b border-line",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
										className: "text-muted",
										children: ["Example minute allowance · ", plan.minutes.toLocaleString()]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-semibold text-amber-200",
										children: "Not ordered"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center py-2 border-b border-line",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted",
										children: "Recurring subtotal (estimate)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
										className: "font-semibold text-white",
										children: [
											"$",
											monthlyTotal.toLocaleString(),
											" USD-equivalent / mo"
										]
									})]
								}),
								term === "year" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center py-2 border-b border-line",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted",
										children: "Annual estimate · example 15% adjustment"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
										className: "font-semibold text-ios-green",
										children: [
											"$",
											total.toLocaleString(),
											" USD-equivalent / yr"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center py-2 border-b border-line",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted",
										children: "Subscription Term"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-semibold text-white",
										children: term === "year" ? "Annual estimate" : "Monthly estimate"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
										className: "text-sm font-semibold text-white",
										children: [
											term === "year" ? "Annual total" : "Monthly total",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-normal text-muted",
												children: "(USD equivalent)"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
										className: "text-base font-semibold text-volt font-mono tabular-nums",
										children: [
											"$",
											total.toLocaleString(),
											" USD-equivalent"
										]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-[11px] text-muted leading-relaxed",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-white block mb-1",
								children: "Illustrative estimate only"
							}), "Pricing, number availability, verification requirements, and provisioning times must be confirmed by the service providers."]
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { CheckoutPage as component };
