import { i as __toESM } from "../_runtime.mjs";
import { v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as PhoneOff, D as Mic, K as Clock, O as MicOff, S as Phone, T as Pause, h as Send, k as MessageSquare } from "../_libs/lucide-react.mjs";
import { E as visibleDids, _ as planById, g as planAllows, i as LEADS, m as effectivePlanId, p as cn, w as useVela } from "./shell-CnmSgr4h.mjs";
import { t as Button } from "./button-ClkWwGp7.mjs";
import { n as formatDuration } from "./format-C2pV7IaQ.mjs";
import { t as playKeyTone } from "./dtmf-D4VrQCai.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/voice-panel-1AOmbJ4x.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KEYS = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"*",
	"0",
	"#"
];
var KEY_SUBTEXT = {
	"1": "",
	"2": "ABC",
	"3": "DEF",
	"4": "GHI",
	"5": "JKL",
	"6": "MNO",
	"7": "PQRS",
	"8": "TUV",
	"9": "WXYZ",
	"*": "",
	"0": "+",
	"#": ""
};
var HEIGHTS = [
	"h-2",
	"h-5",
	"h-3",
	"h-6",
	"h-4",
	"h-7",
	"h-3",
	"h-5",
	"h-2",
	"h-6",
	"h-4",
	"h-7"
];
function VoicePanel() {
	const store = useVela();
	const plan = planById(effectivePlanId(store.planId, store.active));
	const numbers = visibleDids(store.ownedDids, plan.dids);
	const [digits, setDigits] = (0, import_react.useState)("");
	const [now, setNow] = (0, import_react.useState)(0);
	const [mode, setMode] = (0, import_react.useState)("pad");
	const [smsTo, setSmsTo] = (0, import_react.useState)("");
	const [smsBody, setSmsBody] = (0, import_react.useState)("");
	const dialerAllowed = planAllows(plan.id, "lattice");
	const numberKey = numbers.join("|");
	(0, import_react.useEffect)(() => {
		const list = numberKey.split("|");
		const current = useVela.getState().did;
		if (!list.includes(current) && list[0]) useVela.getState().setDid(list[0]);
	}, [numberKey]);
	(0, import_react.useEffect)(() => {
		if (store.callStatus !== "live") return;
		setNow(Date.now());
		const id = window.setInterval(() => setNow(Date.now()), 1e3);
		return () => window.clearInterval(id);
	}, [store.callStatus]);
	const elapsed = store.callStarted && now ? Math.max(0, Math.floor((now - store.callStarted) / 1e3)) : 0;
	const busy = store.callStatus !== "idle";
	const onKeyClick = (key) => {
		playKeyTone(key);
		setDigits((val) => (val + key).slice(0, 18));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-w-0 ios-glass rounded-3xl p-6 border border-white/10 flex flex-col justify-between",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wider text-muted font-medium",
						children: "Outbound Caller ID"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1.5 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							id: "did",
							value: numbers.includes(store.did) ? store.did : numbers[0],
							onChange: (event) => store.setDid(event.target.value),
							className: "h-10 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 text-sm font-mono text-white focus:outline-none focus:ring-1 focus:ring-volt",
							children: numbers.map((number) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: number,
								className: "bg-bg text-white",
								children: number
							}, number))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-ios-green font-medium flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-ios-green" }), "Preview line · offline"]
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted block",
							children: [plan.name, " Pool"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm font-semibold text-white tabular-nums",
							children: [plan.minutes.toLocaleString(), " example minutes"]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 rounded-2xl bg-black/40 border border-white/10 p-5 md:p-6",
					"aria-live": "polite",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-2 rounded-full", store.callStatus === "live" ? "bg-ios-green animate-pulse" : store.callStatus === "dialing" ? "bg-volt animate-ping" : "bg-muted") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-wider font-semibold text-muted",
									children: store.callStatus === "idle" ? "Preview ready" : store.callStatus === "dialing" ? store.callDirection === "in" ? "Simulated incoming ring" : "Simulated dialing" : store.held ? "Simulated call on hold" : "Simulated call"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "tabular-nums font-mono text-sm font-medium text-white",
								children: busy && store.callStatus === "live" ? formatDuration(elapsed) : "00:00"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 truncate font-display text-3xl font-semibold text-white",
							children: busy ? store.callPeer : "No Active Call"
						}),
						store.callStatus === "live" && !store.held ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "vela-wave mt-4 flex h-8 items-end gap-1.5 justify-center py-1",
							"aria-hidden": "true",
							children: HEIGHTS.map((height, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("w-1.5 rounded-full bg-volt shadow-sm shadow-volt/50", height) }, index))
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-muted",
							children: "Tour the keypad here. Live calls use your Vela number once the invoice is paid."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "line",
									size: "sm",
									disabled: store.callStatus !== "live",
									onClick: store.toggleMute,
									"aria-pressed": store.muted,
									className: cn(store.muted && "bg-volt/20 text-volt border-volt/40"),
									children: [store.muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MicOff, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "size-4" }), store.muted ? "Muted" : "Mute"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "line",
									size: "sm",
									disabled: store.callStatus !== "live",
									onClick: store.toggleHold,
									"aria-pressed": store.held,
									className: cn(store.held && "bg-white/20 text-white"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }), store.held ? "Resume" : "Hold"]
								}),
								store.callStatus === "dialing" && store.callDirection === "in" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "call",
									size: "sm",
									onClick: store.answer,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), "Answer"]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: busy ? "hangup" : "line",
									size: "sm",
									disabled: !busy,
									onClick: store.hangup,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneOff, { className: "size-4" }), "End Call"]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-6 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs uppercase tracking-wider text-muted font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Simulated recent calls" })]
					}), store.recents.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-muted",
						children: "No preview calls yet. Use the keypad to see the local simulation."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 divide-y divide-line",
						children: store.recents.slice(0, 4).map((call) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between gap-3 py-2.5 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate font-mono font-medium text-white",
									children: call.peer
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-muted",
									children: call.direction === "out" ? "Outbound" : "Inbound"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums font-mono text-muted",
								children: formatDuration(call.seconds)
							})]
						}, call.id))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "min-w-0 flex flex-col justify-between",
						onSubmit: (event) => {
							event.preventDefault();
							store.sendSms(smsTo, smsBody);
							setSmsBody("");
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-xs uppercase tracking-wider text-muted font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sample SMS log · not sent" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: smsTo,
									onChange: (event) => setSmsTo(event.target.value),
									placeholder: "Recipient (+1...)",
									"aria-label": "SMS recipient",
									className: "mt-3 h-10 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 text-xs font-mono text-white placeholder:text-muted/60 focus:outline-none focus:ring-1 focus:ring-volt"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: smsBody,
									onChange: (event) => setSmsBody(event.target.value.slice(0, 160)),
									placeholder: "Type message...",
									"aria-label": "SMS body",
									className: "mt-2 h-10 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 text-xs text-white placeholder:text-muted/60 focus:outline-none focus:ring-1 focus:ring-volt"
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums text-[11px] text-muted font-mono",
									children: [smsBody.length, "/160"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "submit",
									variant: "line",
									size: "sm",
									disabled: !smsTo.trim() || !smsBody.trim(),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Save sample" })]
								})]
							}),
							store.messages.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 rounded-xl bg-white/[0.02] p-2 text-xs text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-semibold text-white",
									children: [
										"Latest to ",
										store.messages[0].to,
										": "
									]
								}), store.messages[0].body]
							})
						]
					})]
				})
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ios-glass rounded-3xl p-6 border border-white/10 flex flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-1 rounded-2xl bg-white/[0.05] p-1 border border-white/5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: cn("h-9 rounded-xl text-xs font-semibold transition-all", mode === "pad" ? "bg-white text-black shadow-md" : "text-muted hover:text-white"),
					onClick: () => setMode("pad"),
					children: "Keypad"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: cn("h-9 rounded-xl text-xs font-semibold transition-all", mode === "dialer" ? "bg-white text-black shadow-md" : "text-muted hover:text-white"),
					onClick: () => setMode("dialer"),
					children: "Predictive Dialer"
				})]
			}), mode === "pad" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-col justify-between flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						inputMode: "tel",
						"aria-label": "Number to call",
						value: digits,
						placeholder: "Enter number",
						onChange: (event) => setDigits(event.target.value.replace(/[^\d+*#\s]/g, "").slice(0, 18)),
						className: "h-12 w-full bg-transparent text-center font-mono text-2xl font-semibold tracking-wider text-white outline-none placeholder:text-muted/40"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid grid-cols-3 gap-2.5",
						children: KEYS.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "h-14 rounded-2xl bg-white/[0.04] border border-white/5 flex flex-col items-center justify-center hover:bg-white/[0.1] active:scale-95 transition-all text-white",
							onClick: () => onKeyClick(key),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl font-semibold leading-none",
								children: key
							}), KEY_SUBTEXT[key] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[9px] font-medium tracking-widest text-muted mt-0.5 leading-none",
								children: KEY_SUBTEXT[key]
							})]
						}, key))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid grid-cols-2 gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "line",
							size: "md",
							onClick: () => setDigits((value) => value.slice(0, -1)),
							disabled: !digits,
							children: "Delete"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "call",
							size: "md",
							onClick: () => store.startCall(digits),
							disabled: !digits.trim() || busy,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), "Preview call"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						className: "mt-3 w-full text-xs text-muted hover:text-white",
						onClick: store.ring,
						disabled: busy,
						children: "Simulate Inbound Ring"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialer, { allowed: dialerAllowed })]
		})]
	});
}
function Dialer({ allowed }) {
	const [running, setRunning] = (0, import_react.useState)(false);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [result, setResult] = (0, import_react.useState)("Sample queue ready");
	const lead = LEADS[index] ?? LEADS[0];
	(0, import_react.useEffect)(() => {
		if (!running) return;
		setResult("Simulating call...");
		const ring = window.setTimeout(() => {
			const outcomes = [
				"Sample: answered · 18s",
				"Sample: voicemail detected",
				"Sample: no answer"
			];
			setResult(outcomes[index % outcomes.length] ?? "No answer");
		}, 700);
		const next = window.setTimeout(() => {
			setIndex((value) => (value + 1) % LEADS.length);
		}, 1800);
		return () => {
			window.clearTimeout(ring);
			window.clearTimeout(next);
		};
	}, [running, index]);
	if (!allowed) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-8 text-center p-4 rounded-2xl bg-white/[0.02] border border-white/5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium text-white",
				children: "Predictive dialer concept"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted",
				children: "Lattice includes the predictive dialer. Relay is manual dialing and SMS."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/pricing",
				className: "mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-volt hover:underline",
				children: "Compare example tiers"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 flex flex-col justify-between flex-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-black/40 border border-white/5 p-4 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wider text-muted font-medium",
						children: "Sample predictive queue"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xl font-semibold text-white",
						children: lead.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-mono text-sm text-volt",
						children: lead.number
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 inline-block rounded-full bg-white/[0.08] px-3 py-1 text-xs text-fg",
						children: ["Status: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-white",
							children: result
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-center text-xs text-muted",
				children: "Sample leads only. This control does not place calls or contact customers."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-6 w-full",
				variant: running ? "line" : "primary",
				onClick: () => setRunning((value) => !value),
				children: running ? "Pause preview" : "Run sample campaign"
			})
		]
	});
}
//#endregion
export { VoicePanel as t };
