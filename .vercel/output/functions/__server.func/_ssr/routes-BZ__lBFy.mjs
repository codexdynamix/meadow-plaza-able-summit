import { i as __toESM } from "../_runtime.mjs";
import { a as AccordionTrigger, i as AccordionItem, n as AccordionContent, r as AccordionHeader, t as Accordion, v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as Check, C as PhoneOff, D as Mic, I as Grid3x3, J as Circle, L as Globe, O as MicOff, Q as ChevronDown, S as Phone, T as Pause, U as Cpu, Y as CircleCheck, _ as RotateCw, a as Users, i as Volume2, l as Sparkles, o as UserPlus, p as Share2, rt as ArrowRight, t as Zap, u as Shield, x as Play, y as Radio, z as ExternalLink } from "../_libs/lucide-react.mjs";
import { c as REGIONS, d as Wrap, p as cn, r as FAQ } from "./shell-CnmSgr4h.mjs";
import { n as buttonVariants } from "./button-ClkWwGp7.mjs";
import { n as playRingbackTone, t as playKeyTone } from "./dtmf-D4VrQCai.mjs";
import { t as SeatMath } from "./seat-math-CLC8VSQ2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BZ__lBFy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var OMNI_CHANNELS = [
	{
		id: "phone",
		name: "Voice",
		color: "bg-volt",
		icon: "Ph"
	},
	{
		id: "sms",
		name: "SMS",
		color: "bg-emerald-600",
		icon: "SMS"
	},
	{
		id: "chat",
		name: "Web chat",
		color: "bg-blue-700",
		icon: "Web"
	},
	{
		id: "whatsapp",
		name: "WhatsApp",
		color: "bg-[#128C7E]",
		icon: "WA"
	},
	{
		id: "telegram",
		name: "Telegram",
		color: "bg-[#0088CC]",
		icon: "Tg"
	},
	{
		id: "viber",
		name: "Viber",
		color: "bg-[#7360F2]",
		icon: "Vb"
	},
	{
		id: "messenger",
		name: "Messenger",
		color: "bg-[#0084FF]",
		icon: "Ms"
	},
	{
		id: "instagram",
		name: "Instagram",
		color: "bg-[#C13584]",
		icon: "Ig"
	}
];
var CRM_INTEGRATIONS = [
	{
		name: "Salesforce",
		category: "CRM",
		bg: "bg-[#00A1E0]",
		initial: "SF"
	},
	{
		name: "Zoho CRM",
		category: "CRM",
		bg: "bg-[#DF1B12]",
		initial: "ZO"
	},
	{
		name: "HubSpot",
		category: "Marketing & CRM",
		bg: "bg-[#FF7A59]",
		initial: "HS"
	},
	{
		name: "Freshdesk",
		category: "Helpdesk",
		bg: "bg-[#00C9A7]",
		initial: "FD"
	},
	{
		name: "Pipedrive",
		category: "Sales CRM",
		bg: "bg-[#1A1A1A]",
		initial: "PD"
	},
	{
		name: "Zendesk",
		category: "Customer Support",
		bg: "bg-[#03363D]",
		initial: "ZD"
	},
	{
		name: "Bitrix24",
		category: "Collaboration",
		bg: "bg-[#00ADEF]",
		initial: "BX"
	},
	{
		name: "LeadSquared",
		category: "Lead Capture",
		bg: "bg-[#FF6F00]",
		initial: "LS"
	},
	{
		name: "Talkdesk",
		category: "Telephony",
		bg: "bg-[#183B56]",
		initial: "TD"
	},
	{
		name: "Zapier",
		category: "Automation",
		bg: "bg-[#FF4A00]",
		initial: "ZP"
	},
	{
		name: "Monday.com",
		category: "Work OS",
		bg: "bg-[#6161FF]",
		initial: "MN"
	},
	{
		name: "ClickUp",
		category: "Tasks & CRM",
		bg: "bg-[#7B68EE]",
		initial: "CU"
	},
	{
		name: "Make",
		category: "No-Code IPaaS",
		bg: "bg-[#6C38FF]",
		initial: "MK"
	},
	{
		name: "ActiveCampaign",
		category: "Customer Experience",
		bg: "bg-[#356AE6]",
		initial: "AC"
	},
	{
		name: "Jira Service",
		category: "Ticketing",
		bg: "bg-[#0052CC]",
		initial: "JR"
	}
];
function VoisoDarkDialer({ contactName = "Sabrina Hawkins", phoneNumber = "+44 7874 484 817", _initialTime, className, isFloating = false }) {
	const [isMuted, setIsMuted] = (0, import_react.useState)(false);
	const [isOnHold, setIsOnHold] = (0, import_react.useState)(false);
	const [isRecording, setIsRecording] = (0, import_react.useState)(true);
	const [showKeypad, setShowKeypad] = (0, import_react.useState)(false);
	const [callActive, setCallActive] = (0, import_react.useState)(true);
	const [seconds, setSeconds] = (0, import_react.useState)(252);
	(0, import_react.useEffect)(() => {
		if (!callActive || isOnHold) return;
		const interval = setInterval(() => {
			setSeconds((s) => s + 1);
		}, 1e3);
		return () => clearInterval(interval);
	}, [callActive, isOnHold]);
	const formatTimer = (totalSeconds) => {
		const mins = Math.floor(totalSeconds / 60);
		const secs = totalSeconds % 60;
		return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
	};
	const handleKeypadPress = (digit) => {
		playKeyTone(digit);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("rounded-2xl bg-[#1A2634] text-white shadow-2xl border border-white/10 select-none overflow-hidden", isFloating ? "w-72 sm:w-80" : "w-full max-w-sm", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-white/10 px-4 py-2 bg-[#141F2B]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-emerald-400 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-semibold tracking-wide text-white/90",
						children: "Vela desk"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 text-white/40 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "cursor-pointer hover:text-white",
						children: "_"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "cursor-pointer hover:text-white",
						children: "✕"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5 py-4 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base font-bold text-white tracking-tight",
						children: contactName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-mono text-slate-400 mt-0.5",
						children: phoneNumber
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-0.5 border border-white/10 text-xs font-mono text-emerald-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: callActive ? isOnHold ? "On Hold" : formatTimer(seconds) : "Call Ended" })]
					})
				]
			}),
			showKeypad ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-4 bg-[#141F2B]/90 border-t border-white/10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-2",
					children: [
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
					].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => handleKeypadPress(d),
						className: "h-10 rounded-xl bg-white/10 hover:bg-white/20 text-sm font-bold active:scale-95 transition-all text-white cursor-pointer",
						children: d
					}, d))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setShowKeypad(false),
					className: "mt-3 w-full py-1 text-xs text-center text-slate-400 hover:text-white cursor-pointer",
					children: "Close Keypad"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-3 gap-y-3 gap-x-2 text-center text-[10px] text-slate-300",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setIsOnHold(!isOnHold),
							className: "flex flex-col items-center gap-1 group cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("size-10 rounded-full flex items-center justify-center transition-colors", isOnHold ? "bg-amber-500 text-white" : "bg-white/10 text-white group-hover:bg-white/20"),
								children: isOnHold ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "group-hover:text-white",
								children: isOnHold ? "Resume" : "Hold"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => alert("Simulating Blind Transfer to queue..."),
							className: "flex flex-col items-center gap-1 group cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-10 rounded-full bg-white/10 text-white flex items-center justify-center group-hover:bg-white/20 transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "group-hover:text-white",
								children: "Blind transfer"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setShowKeypad(true),
							className: "flex flex-col items-center gap-1 group cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-10 rounded-full bg-white/10 text-white flex items-center justify-center group-hover:bg-white/20 transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid3x3, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "group-hover:text-white",
								children: "Keypad"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setIsMuted(!isMuted),
							className: "flex flex-col items-center gap-1 group cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("size-10 rounded-full flex items-center justify-center transition-colors", isMuted ? "bg-rose-500 text-white" : "bg-white/10 text-white group-hover:bg-white/20"),
								children: isMuted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MicOff, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "group-hover:text-white",
								children: isMuted ? "Unmute" : "Mute"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => alert("Initiating warm consultation with Tier-2 Supervisor..."),
							className: "flex flex-col items-center gap-1 group cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-10 rounded-full bg-white/10 text-white flex items-center justify-center group-hover:bg-white/20 transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "group-hover:text-white",
								children: "Consultation"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setIsRecording(!isRecording),
							className: "flex flex-col items-center gap-1 group cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("size-10 rounded-full flex items-center justify-center transition-colors", isRecording ? "bg-rose-500/20 text-rose-400 border border-rose-500/30" : "bg-white/10 text-white"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: cn("size-3.5 fill-current", isRecording && "animate-pulse") })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "group-hover:text-white",
								children: "Rec"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => alert("Adding caller to 3-way conference..."),
						className: "flex flex-col items-center gap-1 group cursor-pointer text-[10px] text-slate-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-10 rounded-full bg-white/10 text-white flex items-center justify-center group-hover:bg-white/20 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "group-hover:text-white",
							children: "Conference"
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-5 py-3 flex justify-center bg-[#141F2B]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						if (callActive) setCallActive(false);
						else {
							setCallActive(true);
							setSeconds(0);
							const stop = playRingbackTone();
							setTimeout(stop, 2e3);
						}
					},
					className: cn("w-36 h-10 rounded-full flex items-center justify-center gap-2 font-bold text-xs text-white transition-all transform active:scale-95 cursor-pointer shadow-lg", callActive ? "bg-[#EA3943] hover:bg-[#D92A34] shadow-rose-900/40" : "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-900/40"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneOff, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: callActive ? "End Call" : "Reconnect" })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-center gap-2 border-t border-white/10 px-4 py-2 bg-[#0F1722] text-[10px] text-slate-400",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-3 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono",
					children: "+44 20 3742 8876 — my CID"
				})]
			})
		]
	});
}
var call_center_agent_default = "/assets/call-center-agent-2XIP4pRh.jpg";
var customer_phone_call_default = "/assets/customer-phone-call-ka1NyKPj.jpg";
var phone_support_call_default = "/assets/phone-support-call-BjocBoIn.jpg";
var remote_agent_portrait_default = "/assets/remote-agent-portrait-l9BHGVCP.jpg";
function ClaudeLogo({ className = "size-5" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		role: "img",
		viewBox: "0 0 24 24",
		className: cn("size-5 text-[#D97757]", className),
		fill: "currentColor",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fillRule: "evenodd",
			d: "M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z"
		})
	});
}
function OpenAiLogo({ className = "size-5" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		role: "img",
		viewBox: "0 0 24 24",
		className: cn("size-5", className),
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#10A37F",
			d: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
		})
	});
}
function GeminiLogo({ className = "size-5" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		role: "img",
		viewBox: "0 0 24 24",
		className,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
			id: "gemini-official-grad",
			x1: "0%",
			y1: "0%",
			x2: "100%",
			y2: "100%",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "#1BA1E3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "50%",
					stopColor: "#4E87F8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "#9B72CB"
				})
			]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "url(#gemini-official-grad)",
			d: "M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"
		})]
	});
}
function MetaLlamaLogo({ className = "size-5" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		role: "img",
		viewBox: "0 0 24 24",
		className: cn("size-5 text-[#0081FB]", className),
		fill: "currentColor",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" })
	});
}
var AI_RESEARCH_PROMPT = encodeURIComponent("Evaluate VELA Communications Cloud: browser voice dialer in 130+ countries, multi-LLM speech analytics with Claude, Gemini, and GPT-4o, WireGuard private tunnels, and disposable remote desktops.");
var AI_ASSISTANTS = [
	{
		name: "ChatGPT (GPT-4o)",
		href: `https://chatgpt.com/?q=${AI_RESEARCH_PROMPT}`,
		Logo: OpenAiLogo,
		color: "text-[#10A37F]"
	},
	{
		name: "Claude 3.5 Sonnet",
		href: `https://claude.ai/new?q=${AI_RESEARCH_PROMPT}`,
		Logo: ClaudeLogo,
		color: "text-[#D97757]"
	},
	{
		name: "Google Gemini",
		href: "https://gemini.google.com/app",
		Logo: GeminiLogo,
		color: "text-[#4E87F8]"
	},
	{
		name: "Meta Llama",
		href: "https://llama.meta.com",
		Logo: MetaLlamaLogo,
		color: "text-[#0081FB]"
	}
];
var COMPARISON_ROWS = [
	{
		feature: "Phone numbers",
		vela: "Local numbers in the cities on your plan, on the same invoice.",
		usual: "A number vendor, then a trunk, then a separate dialer."
	},
	{
		feature: "Agent desks",
		vela: "A Windows desk for the dialer, CRM, and call notes.",
		usual: "Rent a desktop somewhere else and hope the audio is clean."
	},
	{
		feature: "Private network",
		vela: "WireGuard, with OpenVPN or IKEv2 if a site blocks it.",
		usual: "A third contract, and a second login for the team."
	},
	{
		feature: "Calling tools",
		vela: "Manual or predictive dialing, local caller ID, recording, and a simple IVR.",
		usual: "Each tool is an add-on you discover after the contract."
	},
	{
		feature: "Price",
		vela: "One published plan. Extra minutes and numbers are listed before you order.",
		usual: "A per-seat license, then usage you only see on the bill."
	}
];
var LLM_MODELS = [
	{
		id: "claude",
		name: "Claude 3.5 Sonnet",
		provider: "Anthropic",
		brandColor: "#D97757",
		badgeBg: "bg-[#FAECE5] text-[#A64526] border-[#F2C4B2]",
		Logo: ClaudeLogo,
		focus: "Nuanced Empathy & Objection Handling",
		description: "Industry-leading conversational reasoning. Detects subtle emotional friction, customer hesitation, and guides agents with tailored, de-escalation responses during high-stakes sales and support calls.",
		latency: "180 ms",
		bestFor: "Complex B2B negotiations & VIP customer retention",
		samplePrompt: "Customer mentions competitor pricing is 20% lower but needs guaranteed 99.99% uptime.",
		sampleOutput: "Coach: Acknowledge the budget priority immediately, then pivot to our redundant 12-hub carrier mesh and carrier SLA which mitigates downtime costs that dwarf the 20% delta."
	},
	{
		id: "gpt",
		name: "GPT-4o",
		provider: "OpenAI",
		brandColor: "#10A37F",
		badgeBg: "bg-[#E6F7F2] text-[#0D7A5F] border-[#A8E5D3]",
		Logo: OpenAiLogo,
		focus: "Real-Time Translation & CRM Auto-Sync",
		description: "Blazing sub-second speech synthesis and structured extraction. Automatically parses spoken caller details into structured CRM fields (deal size, target go-live date, decision makers) while the call is still live.",
		latency: "110 ms",
		bestFor: "High-velocity outbound sales & multilingual support",
		samplePrompt: "Extract contact details, renewal timeline, and generate CRM action note.",
		sampleOutput: "Structured CRM Payload: { account: 'Acme Global', term: 'Annual Enterprise', seats: 45, next_step: 'Send contract by Friday', sentiment: 'Highly Receptive' }"
	},
	{
		id: "gemini",
		name: "Gemini 1.5 Pro",
		provider: "Google",
		brandColor: "#4E87F8",
		badgeBg: "bg-blue-50 text-blue-800 border-blue-300",
		Logo: GeminiLogo,
		focus: "Multimodal Long-Context Call Audit",
		description: "Unrivaled 2-million-token context window. Ingests full 2-hour recorded meetings, cross-referencing call audio with attached product PDFs and compliance guidelines to spot regulatory discrepancies in seconds.",
		latency: "220 ms",
		bestFor: "Compliance QA, medical/financial telecom & call auditing",
		samplePrompt: "Audit 45-minute mortgage disclosure call against SEC / FINRA compliance rules.",
		sampleOutput: "Audit Result: 100% Mandatory Disclosure Compliance verified at minute 14:22. Zero prohibited promissory claims detected. Audio wave pattern matches authentic agent."
	},
	{
		id: "llama",
		name: "Llama 3.3 70B",
		provider: "Meta (Private On-Prem)",
		brandColor: "#0081FB",
		badgeBg: "bg-sky-50 text-sky-800 border-sky-300",
		Logo: MetaLlamaLogo,
		focus: "Air-Gapped Private Cloud Inference",
		description: "Complete data sovereignty. Runs locally inside private VPCs with zero third-party data egress, ensuring strict HIPAA, GDPR, and defense-grade telecommunications confidentiality.",
		latency: "95 ms",
		bestFor: "Zero-egress banking, healthcare & private operations",
		samplePrompt: "Summarize sensitive patient triage call without sending data to public cloud.",
		sampleOutput: "Local Edge Inference: Session wiped from memory post-summary. Secure token dispatched to local hospital database via WireGuard encrypted mesh."
	}
];
function Home() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("phone");
	const [selectedLlm, setSelectedLlm] = (0, import_react.useState)(LLM_MODELS[0].id);
	const [isAnalyzing, setIsAnalyzing] = (0, import_react.useState)(false);
	const [analysisDone, setAnalysisDone] = (0, import_react.useState)(false);
	const [heroSlide, setHeroSlide] = (0, import_react.useState)(0);
	const [activeIvrKey, setActiveIvrKey] = (0, import_react.useState)("key1");
	const [selectedChannel, setSelectedChannel] = (0, import_react.useState)("whatsapp");
	const [dispositionChecked, setDispositionChecked] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
		const targets = document.querySelectorAll("[data-reveal]");
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				entry.target.classList.add("is-visible");
				observer.unobserve(entry.target);
			});
		}, {
			threshold: .1,
			rootMargin: "0px 0px -4% 0px"
		});
		targets.forEach((target) => {
			target.classList.add("reveal-ready");
			observer.observe(target);
		});
		return () => observer.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const id = window.setInterval(() => {
			setHeroSlide((slide) => (slide + 1) % 3);
		}, 7e3);
		return () => window.clearInterval(id);
	}, [heroSlide]);
	const currentLlmData = LLM_MODELS.find((m) => m.id === selectedLlm) || LLM_MODELS[0];
	const handleRunAnalysis = () => {
		setIsAnalyzing(true);
		setAnalysisDone(false);
		setTimeout(() => {
			setIsAnalyzing(false);
			setAnalysisDone(true);
		}, 1200);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-x-hidden bg-[#f7f4ee]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden pt-8 pb-14 md:pt-12 md:pb-18",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-24 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#1f4d3a]/15 via-blue-400/10 to-transparent blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrap, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-12 lg:grid-cols-12 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-7 space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full border border-volt-border bg-volt-light px-4 py-1.5 text-xs font-semibold text-volt",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "relative flex size-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex size-full animate-ping rounded-full bg-volt opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex size-2 rounded-full bg-volt" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Voice, desks, and a private line" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-display text-4xl font-medium leading-[1.08] tracking-tight text-fg sm:text-5xl lg:text-[56px]",
									children: "The calling setup, sold as one service."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-xl text-base sm:text-lg text-muted leading-relaxed",
									children: "Vela is a business phone company. You get local numbers, a dialer your team can use in the browser, a Windows desk for each agent, and a private tunnel so the audio stays on your network. The price is on the page."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/checkout",
										search: {
											plan: "lattice",
											term: "month"
										},
										className: "inline-flex min-h-11 items-center gap-2 rounded-full bg-volt px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-volt/20 transition-all hover:bg-volt-hover",
										children: ["Build an order", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/pricing",
										className: "inline-flex min-h-11 items-center rounded-full border border-line bg-raised px-6 py-2.5 text-sm font-semibold text-fg transition-colors hover:bg-card-hover",
										children: "See the three plans"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2 border-t border-line pt-4 text-xs text-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-4 text-volt" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "We send an invoice before billing. Carrier documents, if a country needs them, are listed first." })]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-5 relative",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 aspect-[4/3] sm:aspect-[1/1] max-h-[520px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: call_center_agent_default,
										alt: "Illustrative customer support agent wearing a headset",
										className: "size-full object-cover object-center"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/20" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute top-4 left-4 z-20 flex items-center gap-2.5 rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1.5 shadow-lg border border-slate-200/80",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "relative flex size-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex size-2.5 rounded-full bg-emerald-500" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-left",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] font-bold text-slate-900 leading-tight",
												children: "Live line"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[9px] font-mono text-emerald-700 font-semibold",
												children: "London · 04:12"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute top-4 right-4 z-20 flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1.5 shadow-lg border border-slate-200/80",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center gap-0.5 h-4",
											children: [
												40,
												85,
												60,
												100,
												70,
												45,
												90
											].map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "w-1 bg-[#1f4d3a] rounded-full animate-soundwave",
												style: {
													height: `${h}%`,
													animationDelay: `${i * 120}ms`
												}
											}, i))
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-bold text-slate-800 font-mono",
											children: "Opus 48kHz"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute bottom-4 inset-x-4 z-20 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 shadow-2xl border border-slate-200/80",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between pb-2 border-b border-slate-100",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClaudeLogo, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-bold text-slate-900",
													children: "Call notes"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full",
												children: "On the call"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-2 text-xs text-slate-700 leading-relaxed font-medium",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-volt font-bold",
												children: "Next step:"
											}), " Caller asked for the annual price. Offer Lattice, then send the order summary."]
										})]
									})
								]
							})
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 border-y border-line bg-raised py-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-faint mb-4",
							children: "What is on the invoice"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap items-center justify-center gap-x-8 gap-y-3",
							children: [
								"Local numbers",
								"Browser dialer",
								"Windows agent desks",
								"Private tunnel",
								"Call recording",
								"Simple phone menu"
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium tracking-tight text-fg",
								children: item
							}, item))
						})] })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"data-reveal": true,
				className: "py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrap, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-3xl shadow-2xl transition-all",
					children: [
						heroSlide === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "banner-in bg-[#1c3329] text-white p-8 sm:p-12 lg:p-16 grid gap-8 lg:grid-cols-12 items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white",
										children: "Outbound calling"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-4 font-display text-3xl font-medium sm:text-4xl lg:text-5xl tracking-tight leading-tight",
										children: "More live conversations, fewer empty dials"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl",
										children: "The dialer calls the next lead when an agent is free. It can skip answering machines and show a local number for the city you are calling. Your team stays in one queue."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-8",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/pricing",
											className: "inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#1c3329] hover:bg-slate-100 transition-all shadow-lg",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore" })
										})
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lg:col-span-5 relative flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative rounded-2xl bg-white text-fg p-6 shadow-2xl w-full max-w-md border border-slate-100",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between pb-3 border-b border-slate-100",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm font-bold text-fg",
													children: "AI Predictive Dialer"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative flex items-center",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "w-11 h-6 bg-volt rounded-full flex items-center p-1 transition-colors",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-4 bg-white rounded-full translate-x-5 transition-transform" })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-1 -right-2" })]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between pb-3 border-b border-slate-100",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm font-medium text-slate-700",
													children: "AI Answering Machine Detection"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "w-11 h-6 bg-slate-200 rounded-full flex items-center p-1",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-4 bg-white rounded-full" })
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm font-medium text-slate-700",
													children: "Local Caller ID"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "w-11 h-6 bg-slate-200 rounded-full flex items-center p-1",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-4 bg-white rounded-full" })
												})]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs",
										children: [
											{
												name: "James Wilkins",
												status: "Active call"
											},
											{
												name: "Becky Simmons",
												status: "Available"
											},
											{
												name: "Steven Weller",
												status: "Inbound"
											},
											{
												name: "Bianca Howard",
												status: "Active call"
											}
										].map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 rounded-lg bg-slate-50 p-2 border border-slate-100",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-emerald-500 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-bold text-fg text-[11px] leading-tight",
												children: a.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-muted",
												children: a.status
											})] })]
										}, i))
									})]
								})
							})]
						}),
						heroSlide === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "banner-in bg-[#054E38] text-white p-8 sm:p-12 lg:p-16 grid gap-8 lg:grid-cols-12 items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white",
										children: "Phone menus"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-4 font-display text-3xl font-medium sm:text-4xl lg:text-5xl tracking-tight leading-tight",
										children: "Callers reach the right person"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-base sm:text-lg text-emerald-100 leading-relaxed max-w-xl",
										children: "Build a short menu: press 1 for sales, press 2 for support. Send each choice to a queue. No code. You can change it when the team changes."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-8",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#flow-builder",
											className: "inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#054E38] hover:bg-slate-100 transition-all shadow-lg",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore Flow Builder" })
										})
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lg:col-span-5 flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-white p-6 shadow-2xl text-fg w-full max-w-md border border-slate-100",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold uppercase tracking-wider text-muted",
										children: "Active Flow Pipeline"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 space-y-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-900",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex size-6 items-center justify-center rounded-lg bg-emerald-600 text-white font-bold text-[10px]",
													children: "1"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "IVR Language Detection (Opus 48kHz)" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3 p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-900",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex size-6 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-[10px]",
													children: "2"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Claude 3.5 Sentiment & Urgency Classification" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3 p-3 rounded-xl bg-purple-50 border border-purple-200 text-xs font-semibold text-purple-900",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex size-6 items-center justify-center rounded-lg bg-purple-600 text-white font-bold text-[10px]",
													children: "3"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Route to VIP Tier-1 Softphone Queue" })]
											})
										]
									})]
								})
							})]
						}),
						heroSlide === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "banner-in bg-[#2a2620] text-white p-8 sm:p-12 lg:p-16 grid gap-8 lg:grid-cols-12 items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white",
										children: "One inbox"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-4 font-display text-3xl font-medium sm:text-4xl lg:text-5xl tracking-tight leading-tight",
										children: "Voice, SMS, and messages in one place"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-base sm:text-lg text-stone-200 leading-relaxed max-w-xl",
										children: "An agent sees the call and the message thread for the same customer. They log the outcome once. The history stays with the contact, not in a personal phone."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-8",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#omnichannel",
											className: "inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#2a2620] hover:bg-slate-100 transition-all shadow-lg",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore Omnichannel" })
										})
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lg:col-span-5 flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-white p-5 shadow-2xl text-fg w-full max-w-md",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold text-muted mb-3",
										children: "Example channel overview"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-4 gap-2 text-center text-xs",
										children: OMNI_CHANNELS.slice(0, 8).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-2.5 rounded-xl bg-slate-50 border border-slate-100",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-lg",
												children: c.icon
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-semibold text-fg text-[10px] mt-1 truncate",
												children: c.name
											})]
										}, c.id))
									})]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20",
							children: [
								0,
								1,
								2
							].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setHeroSlide(i),
								className: cn("h-2 rounded-full transition-all cursor-pointer", heroSlide === i ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/70"),
								"aria-label": `Go to slide ${i + 1}`
							}, i))
						})
					]
				}) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "sales",
				"data-reveal": true,
				className: "py-20 md:py-28 bg-white border-b border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
					className: "grid gap-12 lg:grid-cols-12 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-volt-border bg-volt-light px-3.5 py-1 text-xs font-semibold text-volt",
								children: "Sales teams"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-display text-3xl font-medium tracking-tight text-fg sm:text-4xl lg:text-5xl leading-tight",
								children: "Outbound, without five vendors"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base sm:text-lg text-muted leading-relaxed",
								children: "Give the team a list, a local caller ID, and a dialer that keeps agents on live calls. Numbers, recording, and the Windows desk are on the same plan."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap items-center gap-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/pricing",
									className: "rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-800 hover:border-[#1f4d3a] hover:text-[#1f4d3a] transition-colors",
									children: "Explore Sales >"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/pricing",
									className: "rounded-full bg-[#1f4d3a] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#16382b] shadow-md shadow-[#1f4d3a]/20 transition-all",
									children: "See plans"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative rounded-[36px] bg-[#e7efe8] overflow-hidden shadow-xl border border-pink-200/70 min-h-[500px] md:min-h-[560px] flex items-end justify-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-6 left-6 z-20 size-12 rounded-2xl bg-[#1f4d3a] text-white flex items-center justify-center shadow-md",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xl",
										children: "📈"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute top-6 right-6 z-20 rounded-2xl bg-white p-3.5 shadow-xl border border-slate-100 w-56 sm:w-60 hidden sm:block",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between pb-2 border-b border-slate-100",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold text-slate-900",
												children: "Use Local Caller ID"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative flex items-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "w-8 h-4.5 bg-[#1f4d3a] rounded-full flex items-center p-0.5",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-3.5 bg-white rounded-full translate-x-3.5 transition-transform" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-1 -right-2" })]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-2 space-y-1 text-[11px] font-mono text-slate-600",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🇫🇮 +35898564713" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-slate-400",
														children: "✕"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🇳🇴 +4722859417" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-slate-400",
														children: "✕"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🇸🇪 +4686573298" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-slate-400",
														children: "✕"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🇩🇰 +4533914265" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-slate-400",
														children: "✕"
													})]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-2 pt-2 border-t border-slate-100 text-[10px] text-slate-500 flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Assigned team:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-[#1f4d3a]",
												children: "Nordic Sales"
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: customer_phone_call_default,
									alt: "Sales lead on a call at a working desk",
									className: "absolute inset-0 z-0 size-full object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute bottom-4 left-4 z-20 scale-75 sm:scale-80 origin-bottom-left max-w-[240px] hidden md:block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoisoDarkDialer, {
										contactName: "Simon Atwell",
										phoneNumber: "+44 7488 803 758",
										initialTime: "02:58",
										isFloating: true
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-6 right-6 z-20 space-y-3 hidden sm:block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-1.5 w-44",
										children: [
											{
												name: "Simon Atwell",
												status: "Active call",
												active: true
											},
											{
												name: "Becky Simmons",
												status: "● ● ●",
												active: false
											},
											{
												name: "Bianca Howard",
												status: "● ● ●",
												active: false
											},
											{
												name: "Steven Weller",
												status: "● ● ●",
												active: false
											}
										].map((agent, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between rounded-xl bg-white/95 backdrop-blur-sm px-3 py-1.5 shadow-md border border-slate-100 text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold text-slate-800 text-[11px] truncate",
												children: agent.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: cn("text-[9px] font-bold px-1.5 py-0.5 rounded-md", agent.active ? "bg-blue-50 text-[#1f4d3a]" : "text-slate-400"),
												children: agent.status
											})]
										}, i))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-white p-3.5 shadow-xl border border-slate-100 text-xs w-56",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between pb-2 border-b border-slate-100",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold text-slate-900",
												children: "AI Predictive Dialer"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "w-8 h-4 bg-[#1f4d3a] rounded-full flex items-center p-0.5",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-3 bg-white rounded-full translate-x-4" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-1 -right-2" })]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between pt-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-slate-600 text-[11px]",
												children: "AI AMD Detection"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "w-8 h-4 bg-slate-200 rounded-full flex items-center p-0.5",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-3 bg-white rounded-full" })
											})]
										})]
									})]
								})
							]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "support",
				"data-reveal": true,
				className: "py-20 md:py-28 bg-[#f7f4ee] border-b border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
					className: "grid gap-12 lg:grid-cols-12 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-7 order-2 lg:order-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative rounded-[36px] bg-[#efe6d8] overflow-hidden shadow-xl border border-orange-200/70 min-h-[500px] md:min-h-[560px] flex items-end justify-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-6 right-6 z-20 size-12 rounded-2xl bg-[#1f4d3a] text-white flex items-center justify-center shadow-md",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xl",
										children: "👍"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute top-6 left-6 z-20 space-y-2.5 max-w-[210px] hidden sm:block",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl bg-white/95 backdrop-blur-sm p-3 shadow-lg border border-slate-100 text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-slate-900 text-[11px]",
													children: "Sabrina Hawkins"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-slate-600 text-[11px]",
												children: "Thank you so much! 🙏"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl bg-white/95 backdrop-blur-sm p-3 shadow-lg border border-slate-100 text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-blue-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-slate-900 text-[11px]",
													children: "Alan Braithwaite"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-slate-600 text-[11px]",
												children: "I've got an issue with my account..."
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl bg-white/95 backdrop-blur-sm p-3 shadow-lg border border-slate-100 text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-purple-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-slate-900 text-[11px]",
													children: "Mia Phillips"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-slate-600 text-[11px]",
												children: "Glad I could be of help! Have a great day."
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: phone_support_call_default,
									alt: "Support specialist taking a call at her desk",
									className: "absolute inset-0 z-0 size-full object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-6 right-6 z-20 rounded-2xl bg-white/95 backdrop-blur-sm p-4 shadow-2xl border border-slate-100 text-xs w-64 hidden sm:block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between pb-2 border-b border-slate-100",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-bold text-slate-900 flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#1f4d3a]",
												children: "::"
											}), " DTMF (IVR)"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-slate-400 text-[10px]",
											children: "Text-to-Speech"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2.5 space-y-1.5 text-[11px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-1.5 rounded-lg bg-slate-50 font-mono text-slate-700",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Key 1 → Sales" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#1f4d3a] text-[10px] font-bold",
												children: "Routed"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-1.5 rounded-lg bg-blue-50 text-[#1f4d3a] font-mono font-bold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Key 2 → Support" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "relative" })]
										})]
									})]
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5 order-1 lg:order-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-volt-border bg-volt-light px-3.5 py-1 text-xs font-semibold text-volt",
								children: "Support desks"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-display text-3xl font-medium tracking-tight text-fg sm:text-4xl lg:text-5xl leading-tight",
								children: "Inbound, with a short path to a person"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base sm:text-lg text-muted leading-relaxed",
								children: "A caller presses a key and lands in the right queue. The agent sees the customer record, the last call, and a place to write what happened. Wait time goes down because the menu is simple."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap items-center gap-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/pricing",
									className: "rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-800 hover:border-[#1f4d3a] hover:text-[#1f4d3a] transition-colors",
									children: "Explore Support >"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/pricing",
									className: "rounded-full bg-[#1f4d3a] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#16382b] shadow-md shadow-[#1f4d3a]/20 transition-all",
									children: "See plans"
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "remote",
				"data-reveal": true,
				className: "py-20 md:py-28 bg-white border-b border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
					className: "grid gap-12 lg:grid-cols-12 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-volt-border bg-volt-light px-3.5 py-1 text-xs font-semibold text-volt",
								children: "Remote teams"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-display text-3xl font-medium tracking-tight text-fg sm:text-4xl lg:text-5xl leading-tight",
								children: "Agents can work away from the office"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base sm:text-lg text-muted leading-relaxed",
								children: "Each person uses the browser dialer, or a hosted Windows desk, over the Vela tunnel. Supervisors see who is on a call. Recordings stay on the account, not on a laptop."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap items-center gap-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/pricing",
									className: "rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-800 hover:border-[#1f4d3a] hover:text-[#1f4d3a] transition-colors",
									children: "Explore Virtual Software >"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/pricing",
									className: "rounded-full bg-[#1f4d3a] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#16382b] shadow-md shadow-[#1f4d3a]/20 transition-all",
									children: "See plans"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative rounded-[36px] bg-[#1c3329] overflow-hidden shadow-xl border border-emerald-800 min-h-[500px] md:min-h-[560px] flex items-end justify-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-6 left-6 z-20 size-12 rounded-2xl bg-white/15 text-white flex items-center justify-center border border-white/20 backdrop-blur-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-6 text-emerald-200" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute top-6 right-6 z-20 rounded-2xl bg-white p-3.5 shadow-xl border border-slate-100 text-xs w-56 sm:w-60 hidden sm:block",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between text-[11px] text-slate-500",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold text-slate-900",
												children: "Call recording"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[#1f4d3a] font-semibold",
												children: "04:12"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-2 h-2 rounded-full overflow-hidden flex bg-slate-100",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2/3 bg-emerald-500" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1/6 bg-amber-400" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1/6 bg-rose-500" })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-2 flex items-center justify-between text-[10px] text-slate-500",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sentiment: 94% Positive" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-emerald-600 font-semibold",
												children: "Compliant"
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: remote_agent_portrait_default,
									alt: "Remote agent ready for a shift",
									className: "absolute inset-0 z-0 size-full object-cover object-top"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-6 left-6 z-20 rounded-2xl bg-white p-3.5 shadow-xl border border-slate-100 text-center w-36 sm:w-40 hidden sm:block",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-bold uppercase tracking-wider text-slate-400",
											children: "Conversation Score"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-2 flex items-center justify-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "relative size-14 rounded-full border-4 border-emerald-500 flex items-center justify-center bg-emerald-50",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-lg font-extrabold text-emerald-800",
													children: "4.4"
												})
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-[10px] text-slate-500 font-medium",
											children: "Out of 5.0 (Top 5%)"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-6 right-6 z-20 rounded-2xl bg-white p-3.5 shadow-xl border border-slate-100 text-xs w-60 sm:w-64 hidden sm:block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-b border-slate-100 pb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-slate-900",
											children: "Agent List"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-emerald-600 font-semibold",
											children: "12 Online"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 space-y-1.5 text-[11px]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-slate-800",
													children: "Daniella Carter"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-emerald-600 text-[10px] font-bold",
													children: "● Available 💬3"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-slate-800",
													children: "Bradley Hawkins"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-blue-600 text-[10px] font-bold",
													children: "● Outbound 📞"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-slate-800",
													children: "Simon Jones"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-purple-600 text-[10px] font-bold",
													children: "● Inbound"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-slate-800",
													children: "Victor Lewis"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-slate-400 text-[10px]",
													children: "● Logged Off"
												})]
											})
										]
									})]
								})
							]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "flow-builder",
				"data-reveal": true,
				className: "py-20 md:py-28 bg-[#f7f4ee] border-b border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
					className: "grid gap-12 lg:grid-cols-12 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-line bg-white p-6 sm:p-8 shadow-2xl relative overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b border-line pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 text-slate-600 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "size-7 rounded-lg bg-white text-volt flex items-center justify-center font-mono font-bold shadow-xs",
											children: "#"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "size-7 rounded-lg hover:bg-white flex items-center justify-center cursor-pointer",
											children: "🎵"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "size-7 rounded-lg hover:bg-white flex items-center justify-center cursor-pointer",
											children: "{}"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "size-7 rounded-lg hover:bg-white flex items-center justify-center cursor-pointer",
											children: "💬"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "size-7 rounded-lg hover:bg-white flex items-center justify-center cursor-pointer",
											children: "</>"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "size-7 rounded-lg hover:bg-white flex items-center justify-center cursor-pointer",
											children: "🔀"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "size-7 rounded-lg hover:bg-white flex items-center justify-center cursor-pointer",
											children: "➡️"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-xs font-semibold text-emerald-600",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-emerald-500 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Flow Active" })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 relative min-h-[320px] flex flex-col justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									className: "absolute inset-0 size-full pointer-events-none",
									xmlns: "http://www.w3.org/2000/svg",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M 170 120 C 230 120, 230 40, 300 40",
											fill: "none",
											stroke: activeIvrKey === "key1" ? "#1f4d3a" : "#cbd5e1",
											strokeWidth: activeIvrKey === "key1" ? "2.5" : "1.5",
											strokeDasharray: activeIvrKey === "key1" ? "4 2" : "none",
											className: activeIvrKey === "key1" ? "animate-pulse" : ""
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M 170 145 C 230 145, 230 150, 300 150",
											fill: "none",
											stroke: activeIvrKey === "key2" ? "#1f4d3a" : "#cbd5e1",
											strokeWidth: activeIvrKey === "key2" ? "2.5" : "1.5",
											strokeDasharray: activeIvrKey === "key2" ? "4 2" : "none",
											className: activeIvrKey === "key2" ? "animate-pulse" : ""
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M 170 170 C 230 170, 230 250, 300 250",
											fill: "none",
											stroke: activeIvrKey === "key3" ? "#1f4d3a" : "#cbd5e1",
											strokeWidth: activeIvrKey === "key3" ? "2.5" : "1.5",
											strokeDasharray: activeIvrKey === "key3" ? "4 2" : "none",
											className: activeIvrKey === "key3" ? "animate-pulse" : ""
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl border-2 border-volt/30 bg-white p-4 shadow-xl max-w-[200px]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between pb-2 border-b border-slate-100",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-bold text-fg text-xs flex items-center gap-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-volt",
														children: "::"
													}), " DTMF (IVR)"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted text-[10px]",
													children: "⋮"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-2 text-[10px] text-slate-500",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold block text-fg",
													children: "Text-to-Speech"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "inline-flex items-center gap-1 text-volt mt-1",
													children: "▶ Please choose one o..."
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-3 space-y-1.5 text-xs font-semibold",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => {
															playKeyTone("1");
															setActiveIvrKey("key1");
														},
														className: cn("w-full text-left px-2 py-1 rounded transition-colors cursor-pointer text-[11px]", activeIvrKey === "key1" ? "bg-volt text-white font-bold" : "text-slate-600 hover:bg-slate-100"),
														children: "Key 1: Account Balance"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => {
															playKeyTone("2");
															setActiveIvrKey("key2");
														},
														className: cn("w-full text-left px-2 py-1 rounded transition-colors cursor-pointer text-[11px]", activeIvrKey === "key2" ? "bg-volt text-white font-bold" : "text-slate-600 hover:bg-slate-100"),
														children: "Key 2: Support Queue"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => {
															playKeyTone("3");
															setActiveIvrKey("key3");
														},
														className: cn("w-full text-left px-2 py-1 rounded transition-colors cursor-pointer text-[11px]", activeIvrKey === "key3" ? "bg-volt text-white font-bold" : "text-slate-600 hover:bg-slate-100"),
														children: "Key 3: VIP Callback"
													})
												]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: cn("rounded-xl border p-3.5 transition-all", activeIvrKey === "key1" ? "border-volt bg-volt-light/50 shadow-md ring-1 ring-volt" : "border-slate-200 bg-white shadow-xs"),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between text-xs font-bold text-fg",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "flex items-center gap-1.5",
														children: "🎵 Play audio"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-muted text-[10px]",
														children: "⋮"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-[11px] text-slate-500",
													children: "TTS: \"Your account balance is $4,850...\""
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: cn("rounded-xl border p-3.5 transition-all", activeIvrKey === "key2" ? "border-volt bg-volt-light/50 shadow-md ring-1 ring-volt" : "border-slate-200 bg-white shadow-xs"),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between text-xs font-bold text-fg",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "flex items-center gap-1.5",
														children: "🔀 Conditions"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-muted text-[10px]",
														children: "⋮"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-[11px] text-slate-500",
													children: "Condition: Customer CSAT > 4.0 → Tier 1"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: cn("rounded-xl border p-3.5 transition-all relative", activeIvrKey === "key3" ? "border-volt bg-volt-light/50 shadow-md ring-1 ring-volt" : "border-slate-200 bg-white shadow-xs"),
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between text-xs font-bold text-fg",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "flex items-center gap-1.5 text-rose-600",
															children: "➡️ Route Queue"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-muted text-[10px]",
															children: "⋮"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-1 text-[11px] text-slate-500 font-mono",
														children: "Queue: VIP Callback Dispatch"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-2 -right-2" })
												]
											})
										]
									})]
								})]
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-volt-border bg-volt-light px-3.5 py-1 text-xs font-semibold text-volt",
								children: "Phone menu"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-display text-3xl font-medium tracking-tight text-fg sm:text-4xl lg:text-5xl leading-tight",
								children: "A menu you can explain in one sentence"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base sm:text-lg text-muted leading-relaxed",
								children: "Drag a greeting, a keypress, and a queue. Press 1 for sales. Press 2 for support. That is the whole setup for most teams. You can add a CRM lookup when you are ready."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap items-center gap-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/pricing",
									className: "rounded-full border border-line-bright px-6 py-2.5 text-sm font-semibold text-fg hover:border-volt hover:text-volt transition-colors",
									children: "Explore Flow Builder >"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/pricing",
									className: "rounded-full bg-volt px-6 py-2.5 text-sm font-semibold text-white hover:bg-volt-hover shadow-md shadow-volt/20 transition-all",
									children: "See plans"
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "omnichannel",
				"data-reveal": true,
				className: "py-20 md:py-28 bg-white border-b border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
					className: "grid gap-12 lg:grid-cols-12 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-volt-border bg-volt-light px-3.5 py-1 text-xs font-semibold text-volt",
								children: "Messages"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-display text-3xl font-medium tracking-tight text-fg sm:text-4xl lg:text-5xl leading-tight",
								children: "The call and the message, side by side"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base sm:text-lg text-muted leading-relaxed",
								children: "Voice is the main line. SMS and the message apps sit in the same screen, so an agent does not switch tools to see what the customer already said. They mark the outcome and move on."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap items-center gap-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/pricing",
									className: "rounded-full border border-line-bright px-6 py-2.5 text-sm font-semibold text-fg hover:border-volt hover:text-volt transition-colors",
									children: "Explore Omnichannel >"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/pricing",
									className: "rounded-full bg-volt px-6 py-2.5 text-sm font-semibold text-white hover:bg-volt-hover shadow-md shadow-volt/20 transition-all",
									children: "See plans"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative rounded-3xl border border-line bg-slate-50 p-6 sm:p-8 shadow-2xl overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-2 border-b border-line pb-4 overflow-x-auto",
								children: OMNI_CHANNELS.map((ch) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setSelectedChannel(ch.id),
									className: cn("flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer shrink-0", selectedChannel === ch.id ? "bg-volt text-white shadow-xs" : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ch.icon }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ch.name })]
								}, ch.id))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "md:col-span-7 space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "size-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm",
													children: "SH"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-bold text-fg text-sm",
													children: "Sabrina Hawkins"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] text-muted",
													children: "WhatsApp · +44 7874 484 817"
												})] })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200",
												children: "Sample contact"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-3 p-4 rounded-2xl bg-white border border-slate-200 text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "rounded-xl bg-blue-50 border border-blue-100 p-3 text-slate-800 leading-relaxed",
												children: "\"Hi Sabrina — your renewal is ready. I can email the order summary to billing today.\""
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "rounded-xl bg-slate-100 p-3 text-slate-800 leading-relaxed max-w-[85%] ml-auto text-right",
												children: "\"Please send it. Thank you.\""
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl bg-white p-4 border border-slate-200 text-xs shadow-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-bold text-fg text-[11px] mb-2 uppercase tracking-wider text-muted",
												children: "Call Disposition"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => setDispositionChecked(!dispositionChecked),
													className: cn("w-full flex items-center justify-between p-2 rounded-lg font-bold cursor-pointer transition-colors text-left", dispositionChecked ? "bg-blue-50 text-volt" : "bg-slate-50 text-slate-700 hover:bg-slate-100"),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: cn("size-3.5", dispositionChecked ? "text-volt" : "opacity-0") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Renewal booked" })]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "relative" })]
												}), [
													"Satisfaction survey",
													"New product offer",
													"Promotion offer",
													"Payment reminder"
												].map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2 p-2 rounded-lg text-slate-600 hover:bg-slate-50",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-3.5 rounded-full border border-slate-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: d })]
												}, i))]
											})]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "md:col-span-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoisoDarkDialer, {
										contactName: "Sabrina Hawkins",
										phoneNumber: "+44 7874 484 817",
										initialTime: "04:12"
									})
								})]
							})]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "integrations",
				"data-reveal": true,
				className: "py-20 md:py-28 bg-[#0B1118] text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
					className: "grid gap-12 lg:grid-cols-12 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold text-white",
								children: "Integrations"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl leading-tight text-white",
								children: "Your CRM stays the system of record"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base sm:text-lg text-slate-300 leading-relaxed",
								children: "Vela can open the customer record when a call connects, and write the note back when it ends. Salesforce, HubSpot, Zoho, Zendesk, and the tools on the integrations page are the usual ones. We confirm the connector for your edition before you order."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap items-center gap-3.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/pricing",
										className: "rounded-full border border-white/30 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors",
										children: "Explore All Integrations >"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/integrations",
										className: "rounded-full border border-white/30 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors",
										children: "CRM & MicroSIP Setup"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/pricing",
										className: "rounded-full bg-volt px-6 py-2.5 text-sm font-semibold text-white hover:bg-volt-hover shadow-lg shadow-volt/30 transition-all",
										children: "See plans"
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-3 sm:grid-cols-5 gap-3.5",
							children: CRM_INTEGRATIONS.map((crm, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group flex flex-col items-center justify-center p-4 rounded-2xl bg-white text-slate-900 shadow-xl transition-all duration-200 transform hover:-translate-y-1 hover:shadow-volt/20 hover:ring-2 hover:ring-volt cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: cn("size-10 rounded-xl flex items-center justify-center font-black text-sm text-white", crm.bg),
									children: crm.initial
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs font-bold text-center text-slate-800 group-hover:text-volt transition-colors truncate w-full",
									children: crm.name
								})]
							}, i))
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "ai-models",
				"data-reveal": true,
				className: "scroll-mt-24 py-20 md:py-28 bg-white border-b border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-volt/20 bg-volt-light px-3 py-1 text-xs font-semibold text-volt",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Call notes" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-3xl font-medium tracking-tight text-fg sm:text-4xl lg:text-5xl",
								children: "Use the assistant your team already trusts"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base sm:text-lg text-muted leading-relaxed",
								children: "Vela keeps the recording. You can send a transcript to Claude, GPT, Gemini, or a private model for a summary and a CRM note. One model per queue. Audio is not sent until you turn notes on."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: LLM_MODELS.map((model) => {
							const isSelected = selectedLlm === model.id;
							const Logo = model.Logo;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setSelectedLlm(model.id),
								className: cn("flex flex-col justify-between rounded-2xl p-5 text-left transition-all duration-200 border cursor-pointer", isSelected ? "border-volt bg-white shadow-xl shadow-volt/15 ring-2 ring-volt/20" : "border-line bg-white/70 hover:bg-white hover:border-line-bright"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "size-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold uppercase tracking-wider text-muted",
												children: model.provider
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("text-[10px] font-bold px-2 py-0.5 rounded-full border", model.badgeBg),
											children: model.latency
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-lg font-bold text-fg",
										children: model.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs font-semibold text-volt",
										children: model.focus
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-xs text-muted line-clamp-3 leading-relaxed",
									children: model.description
								})]
							}, model.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid gap-8 lg:grid-cols-12 items-stretch",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-7 rounded-3xl border border-line bg-white p-6 sm:p-8 shadow-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(currentLlmData.Logo, { className: "size-7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-xl font-bold text-fg",
										children: [currentLlmData.name, " Playground"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted",
										children: "Illustrative model details · no live audio or AI service is connected"
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: handleRunAnalysis,
									disabled: isAnalyzing,
									className: cn(buttonVariants({
										variant: "primary",
										size: "sm"
									}), "bg-volt text-white hover:bg-volt-hover shadow-md shadow-volt/20 cursor-pointer"),
									children: isAnalyzing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "size-3.5 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Reasoning..." })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Show sample output" })] })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold uppercase tracking-wider text-muted",
										children: "Simulated Customer Call Input"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 rounded-xl bg-slate-50 border border-line p-3.5 text-sm text-fg leading-relaxed",
										children: [
											"\"",
											currentLlmData.samplePrompt,
											"\""
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs font-bold uppercase tracking-wider text-muted flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [currentLlmData.name, " Guidance"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[11px] font-mono text-emerald-600 font-semibold",
											children: ["Latency: ", currentLlmData.latency]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 rounded-xl bg-volt-light/50 border border-volt-border p-4 text-sm font-mono text-fg leading-relaxed",
										children: isAnalyzing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-volt py-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-volt animate-ping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Showing saved sample output..." })]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [analysisDone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-2 flex items-center gap-1.5 text-xs font-semibold text-emerald-600",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sample output · not generated by AI" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: currentLlmData.sampleOutput })] })
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-3 border-t border-line",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold text-muted mb-2",
											children: "Test with your preferred AI Assistant:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-2",
											children: AI_ASSISTANTS.map((ai) => {
												const AssistantLogo = ai.Logo;
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: ai.href,
													target: "_blank",
													rel: "noopener noreferrer",
													className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-line bg-slate-50 text-xs font-medium text-fg hover:border-volt/30 hover:bg-white hover:text-volt transition-colors",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssistantLogo, { className: "size-4" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ai.name }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3 opacity-60" })
													]
												}, ai.name);
											})
										})]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-5 relative overflow-hidden rounded-3xl border border-line shadow-xl bg-slate-900 min-h-[360px] flex flex-col justify-end p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: call_center_agent_default,
									alt: "Support agent on a live call with an AI copilot suggesting the next reply",
									className: "absolute inset-0 size-full object-cover object-top"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative z-10",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5 rounded-full bg-volt px-3 py-1 text-xs font-semibold text-white shadow-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "size-3.5" }), "Multi-Model Orchestration"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "mt-3 text-xl font-bold text-white",
											children: "Example Conversational Co-pilot"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-slate-300 leading-relaxed",
											children: "Example interface only. No live call listening, document search, or real-time AI suggestions are connected."
										})
									]
								})
							]
						})]
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"data-reveal": true,
				className: "py-20 md:py-24 bg-slate-50 border-b border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
					className: "grid items-center gap-12 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-volt/20 bg-volt-light px-3 py-1 text-xs font-semibold text-volt",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Interactive Softphone" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-3xl font-medium tracking-tight text-fg sm:text-4xl",
								children: "Hear the dialer before you order"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base leading-relaxed text-muted",
								children: "Press the keys. You will hear the tones in this browser. Live calls start when your number is active — this screen is the same dialer your agents use."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex flex-wrap gap-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/voice",
									className: cn(buttonVariants({
										variant: "primary",
										size: "md"
									}), "bg-volt text-white hover:bg-volt-hover shadow-md shadow-volt/20"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Full Voice Studio" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto w-full max-w-lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteractiveTelecomIsland, {
								activeTab,
								setActiveTab
							})
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "trust",
				"data-reveal": true,
				className: "scroll-mt-24 py-20 md:py-28 bg-white border-b border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-3xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-volt/20 bg-volt-light px-3 py-1 text-xs font-semibold text-volt",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Why teams switch" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl text-fg",
							children: "One company instead of a stack of contracts"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-base text-muted",
							children: "Most calling teams rent the number, the dialer, the desktop, and the network from different places. Vela sells them together, at the prices on this site."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-[640px] rounded-3xl border border-line bg-white shadow-xl overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-12 gap-4 border-b border-line bg-[#f7f1e4] px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-3",
									children: "What you need"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-5 text-volt font-semibold",
									children: "With Vela"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-4",
									children: "The usual way"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "divide-y divide-line",
							children: COMPARISON_ROWS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-12 gap-4 px-6 py-4 text-sm items-start hover:bg-[#faf7f2] transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-span-3 font-semibold text-fg",
										children: row.feature
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "col-span-5 text-fg flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 size-4 text-volt shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.vela })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-span-4 text-muted",
										children: row.usual
									})
								]
							}, row.feature))
						})]
					})
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"data-reveal": true,
				className: "py-20 md:py-24 bg-slate-50 border-b border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrap, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeatMath, {}) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"data-reveal": true,
				className: "py-20 md:py-28 bg-white border-b border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
					className: "max-w-4xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold uppercase tracking-wider text-volt",
								children: "Questions & Answers"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl",
								children: "Frequently Asked Questions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-base text-muted",
								children: "Straight answers on what you buy, what we need from you, and when a number is ready."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
							type: "single",
							collapsible: true,
							className: "space-y-3",
							children: FAQ.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
								value: `item-${idx}`,
								className: "rounded-2xl border border-line bg-white px-6 py-2 shadow-xs transition-colors data-[state=open]:border-volt/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionTrigger, {
									className: "flex w-full items-center justify-between py-4 text-left font-semibold text-fg hover:text-volt transition-colors [&[data-state=open]>svg]:rotate-180",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 shrink-0 transition-transform duration-200 text-muted" })]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
									className: "pb-4 text-sm text-muted leading-relaxed",
									children: item.a
								})]
							}, idx))
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"data-reveal": true,
				className: "vela-band py-16 md:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
					className: "flex flex-col items-start justify-between gap-8 md:flex-row md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold uppercase tracking-wider text-white/75",
								children: "Start with Lattice"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl text-white",
								children: "Eight seats, three numbers, one desk."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-base text-white/85 leading-relaxed",
								children: "Most teams begin there. Add minutes, cities, or a private server when you need them. We confirm the order and any carrier paperwork before the invoice is due."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex w-full flex-wrap gap-3 md:w-auto md:shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/pricing",
							className: cn(buttonVariants({ size: "lg" }), "bg-white text-volt hover:bg-slate-100 font-bold shadow-xl shadow-black/20"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore Plans" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/console",
							className: cn(buttonVariants({
								variant: "line",
								size: "lg"
							}), "border-white/30 text-white hover:bg-white/10 backdrop-blur-md"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Open Console" })
						})]
					})]
				})
			})
		]
	});
}
function InteractiveTelecomIsland({ activeTab, setActiveTab }) {
	const [dialed, setDialed] = (0, import_react.useState)("+1 (415) 890-4421");
	const [callActive, setCallActive] = (0, import_react.useState)(false);
	const [callTimer, setCallTimer] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		let interval;
		if (callActive) interval = window.setInterval(() => setCallTimer((t) => t + 1), 1e3);
		else setCallTimer(0);
		return () => clearInterval(interval);
	}, [callActive]);
	const handleDigitPress = (d) => {
		playKeyTone(d);
		setDialed((prev) => prev.length < 20 ? prev + d : prev);
	};
	const handleCall = () => {
		if (callActive) setCallActive(false);
		else {
			setCallActive(true);
			const stopRing = playRingbackTone();
			setTimeout(stopRing, 2500);
		}
	};
	const formatSecs = (sec) => {
		const m = Math.floor(sec / 60);
		const s = sec % 60;
		return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl p-6 shadow-2xl bg-white border border-line relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-2 border-b border-line pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 p-1 rounded-xl bg-slate-100",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActiveTab("phone"),
							className: cn("px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer", activeTab === "phone" ? "bg-white text-volt shadow-xs" : "text-muted hover:text-fg"),
							children: "AI Softphone"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActiveTab("edge"),
							className: cn("px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer", activeTab === "edge" ? "bg-white text-volt shadow-xs" : "text-muted hover:text-fg"),
							children: "Global Hubs"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActiveTab("specs"),
							className: cn("px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer", activeTab === "specs" ? "bg-white text-volt shadow-xs" : "text-muted hover:text-fg"),
							children: "Codecs & Audio"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-emerald-500 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-mono text-muted uppercase",
						children: "Opus 48kHz"
					})]
				})]
			}),
			activeTab === "phone" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-slate-900 text-white p-5 text-center relative overflow-hidden shadow-inner",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-xs text-slate-400",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-volt-light",
									children: "Carrier Line: San Francisco DID"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-volt-light",
									children: callActive ? formatSecs(callTimer) : "Ready"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-2xl font-mono font-bold tracking-wider text-white",
								children: dialed || "Enter Phone Number"
							}),
							callActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex h-8 items-center justify-center gap-1.5",
								"aria-label": "Streaming audio wave",
								children: [
									12,
									28,
									18,
									32,
									24,
									16,
									30,
									22,
									14,
									28,
									18,
									30,
									16
								].map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-1 rounded-full bg-volt animate-soundwave",
									style: {
										height: `${h}px`,
										animationDelay: `${i * .08}s`
									}
								}, i))
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-slate-400",
								children: "WebRTC Opus Audio · Direct SIP Trunking"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-2",
						children: [
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
						].map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => handleDigitPress(key),
							className: "h-11 rounded-xl bg-slate-100 hover:bg-slate-200 text-base font-bold text-fg active:scale-95 transition-all flex items-center justify-center cursor-pointer shadow-xs",
							children: key
						}, key))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 pt-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setDialed((prev) => prev.slice(0, -1)),
							className: "h-11 px-4 rounded-xl border border-line text-xs font-bold text-muted hover:text-fg hover:bg-slate-50 transition-all cursor-pointer",
							children: "Clear"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleCall,
							className: cn("flex-1 h-11 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all active:scale-98 cursor-pointer shadow-md", callActive ? "bg-[#EA3943] text-white shadow-rose-900/30 hover:brightness-105" : "bg-emerald-600 text-white shadow-emerald-900/30 hover:brightness-105"),
							children: callActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneOff, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "End Call" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Start Test Call" })] })
						})]
					})
				]
			}),
			activeTab === "edge" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-2 max-h-72 overflow-y-auto pr-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted mb-3",
					children: "Illustrative latency values · no media gateways are connected:"
				}), REGIONS.slice(0, 6).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-line text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-4 text-volt" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-fg",
							children: r.city
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono font-semibold text-emerald-600",
						children: [r.ms, " ms"]
					})]
				}, r.id))]
			}),
			activeTab === "specs" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-3 text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-3.5 rounded-xl bg-slate-50 border border-line",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-bold text-fg",
						children: "Audio Pipeline Specs"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-muted leading-relaxed",
						children: "Opus 48 kHz dynamic bitrate (6–510 kbps) with jitter-buffer concealment and neural background noise suppression."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-3.5 rounded-xl bg-slate-50 border border-line",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-bold text-fg",
						children: "Carrier Interconnect"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-muted leading-relaxed",
						children: "Tier-1 SIP trunks with redundant BGP routing across Ashburn, Frankfurt, Singapore, and Tokyo."
					})]
				})]
			})
		]
	});
}
//#endregion
export { Home as component };
