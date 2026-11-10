import { i as __toESM } from "../_runtime.mjs";
import { v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Menu, Q as ChevronDown, n as X, nt as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-CnmSgr4h.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("relative flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#1f4d3a] p-1.5 shadow-md shadow-[#1f4d3a]/20", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "size-4.5 text-white",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2.3",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" })
		})
	});
}
var PLANS = [
	{
		id: "relay",
		name: "Relay",
		price: 19,
		blurb: "A line, one tunnel, and burst time on a shared desk.",
		seats: 2,
		minutes: 800,
		dids: 1,
		tunnels: "1 device",
		desk: "Shared pool · 8 hours",
		features: [
			"2 voice seats",
			"800 outbound minutes",
			"1 DID included",
			"1 WireGuard device",
			"Shared desk, 8 hours",
			"Manual dialer and SMS"
		]
	},
	{
		id: "lattice",
		name: "Lattice",
		price: 49,
		blurb: "The workspace most teams actually run.",
		seats: 8,
		minutes: 3e3,
		dids: 3,
		tunnels: "5 devices · 12 regions",
		desk: "Dedicated 4 vCPU",
		featured: true,
		features: [
			"8 voice seats",
			"3,000 outbound minutes",
			"3 DIDs included",
			"5 tunnels across 12 regions",
			"Dedicated desk, 4 vCPU / 8 GB",
			"Predictive dialer and IVR"
		]
	},
	{
		id: "foundry",
		name: "Foundry",
		price: 129,
		blurb: "A floor of seats, a pinned exit IP, three desks.",
		seats: 25,
		minutes: 1e4,
		dids: 8,
		tunnels: "Dedicated exit IP",
		desk: "3 desks · up to 8 vCPU",
		features: [
			"25 voice seats",
			"10,000 outbound minutes",
			"8 DIDs included",
			"Dedicated VPN exit address",
			"3 desks, up to 8 vCPU / 32 GB",
			"Recordings kept for the term"
		]
	}
];
var PLAN_RANK = {
	relay: 0,
	lattice: 1,
	foundry: 2
};
function planById(id) {
	return PLANS.find((plan) => plan.id === id) ?? PLANS[1];
}
function effectivePlanId(planId, active) {
	if (!active) return "lattice";
	return planId ?? "lattice";
}
function planAllows(current, min) {
	return PLAN_RANK[current] >= PLAN_RANK[min];
}
function termPrice(monthly, term) {
	if (term === "month") return monthly;
	return Math.round(monthly * 12 * .85);
}
function velaForSeats(seats) {
	if (seats <= 2) return {
		plan: PLANS[0],
		monthly: PLANS[0].price,
		extra: 0
	};
	if (seats <= 8) return {
		plan: PLANS[1],
		monthly: PLANS[1].price,
		extra: 0
	};
	if (seats <= 25) return {
		plan: PLANS[2],
		monthly: PLANS[2].price,
		extra: 0
	};
	const extra = seats - 25;
	return {
		plan: PLANS[2],
		monthly: PLANS[2].price + extra * 6,
		extra
	};
}
var DIDS = [
	{
		id: "+1 212 555 0148",
		city: "New York",
		country: "US",
		monthly: 2
	},
	{
		id: "+44 20 7946 0188",
		city: "London",
		country: "UK",
		monthly: 3
	},
	{
		id: "+49 30 555 0190",
		city: "Berlin",
		country: "DE",
		monthly: 3
	},
	{
		id: "+31 20 555 1180",
		city: "Amsterdam",
		country: "NL",
		monthly: 3
	},
	{
		id: "+65 6555 2204",
		city: "Singapore",
		country: "SG",
		monthly: 4
	},
	{
		id: "+81 3 5550 2291",
		city: "Tokyo",
		country: "JP",
		monthly: 5
	},
	{
		id: "+45 32 55 01 48",
		city: "Copenhagen",
		country: "DK",
		monthly: 3
	},
	{
		id: "+47 21 55 01 48",
		city: "Oslo",
		country: "NO",
		monthly: 3
	},
	{
		id: "+46 8 555 01 48",
		city: "Stockholm",
		country: "SE",
		monthly: 3
	},
	{
		id: "+358 9 555 0148",
		city: "Helsinki",
		country: "FI",
		monthly: 3
	},
	{
		id: "+354 555 0148",
		city: "Reykjavík",
		country: "IS",
		monthly: 4
	},
	{
		id: "+61 2 5550 0148",
		city: "Sydney",
		country: "AU",
		monthly: 4
	},
	{
		id: "+1 416 555 0148",
		city: "Toronto",
		country: "CA",
		monthly: 3
	},
	{
		id: "+55 11 5555 2206",
		city: "São Paulo",
		country: "BR",
		monthly: 3
	},
	{
		id: "+971 4 555 2201",
		city: "Dubai",
		country: "AE",
		monthly: 5
	}
];
function visibleDids(owned, count) {
	const base = DIDS.slice(0, count).map((did) => did.id);
	const extra = owned.filter((id) => !base.includes(id) && DIDS.some((did) => did.id === id));
	return [...base, ...extra];
}
var REGIONS = [
	{
		id: "iad",
		city: "Ashburn",
		ms: 11,
		load: 72
	},
	{
		id: "fra",
		city: "Frankfurt",
		ms: 18,
		load: 64
	},
	{
		id: "ams",
		city: "Amsterdam",
		ms: 20,
		load: 58
	},
	{
		id: "lhr",
		city: "London",
		ms: 22,
		load: 61
	},
	{
		id: "zrh",
		city: "Zurich",
		ms: 24,
		load: 33
	},
	{
		id: "cdg",
		city: "Paris",
		ms: 26,
		load: 49
	},
	{
		id: "arn",
		city: "Stockholm",
		ms: 28,
		load: 27
	},
	{
		id: "sin",
		city: "Singapore",
		ms: 41,
		load: 55
	},
	{
		id: "nrt",
		city: "Tokyo",
		ms: 48,
		load: 44
	},
	{
		id: "gru",
		city: "São Paulo",
		ms: 54,
		load: 38
	},
	{
		id: "syd",
		city: "Sydney",
		ms: 62,
		load: 22
	},
	{
		id: "jnb",
		city: "Johannesburg",
		ms: 71,
		load: 18
	}
];
function regionById(id) {
	return REGIONS.find((region) => region.id === id) ?? REGIONS[1];
}
function tunnelAddress(regionId) {
	const index = REGIONS.findIndex((region) => region.id === regionId);
	return `10.8.${index < 0 ? 4 : index + 4}.14`;
}
var MACHINES = [
	{
		id: "pool-1",
		name: "pool-1",
		cpu: "2 vCPU",
		ram: "4 GB",
		disk: "40 GB",
		os: "Windows 11",
		min: "relay",
		note: "Shared burst desk. Sleeps after the included hours."
	},
	{
		id: "dx-04",
		name: "dx-04",
		cpu: "4 vCPU",
		ram: "8 GB",
		disk: "80 GB NVMe",
		os: "Windows 11",
		min: "lattice",
		note: "Pinned to your callsign for the term. Wiped on cancel."
	},
	{
		id: "dx-09",
		name: "dx-09",
		cpu: "8 vCPU",
		ram: "16 GB",
		disk: "160 GB NVMe",
		os: "Windows 11",
		min: "foundry",
		note: "Second desk. Same gateway, separate volume."
	},
	{
		id: "dx-12",
		name: "dx-12",
		cpu: "8 vCPU",
		ram: "32 GB",
		disk: "240 GB NVMe",
		os: "Windows 11",
		min: "foundry",
		note: "Heavy desk for browsers, CRMs, and call recordings."
	}
];
function machineById(id) {
	return MACHINES.find((machine) => machine.id === id) ?? MACHINES[1];
}
var VPS_PLANS = [
	{
		id: "vps-basic",
		name: "Basic",
		price: 12,
		specs: [
			"4 AMD EPYC cores",
			"8 GB DDR4 ECC",
			"80 GB NVMe · RAID 10",
			"10 Gbps · 5 TB",
			"Windows Server 2019/22",
			"New York or Chicago"
		]
	},
	{
		id: "vps-standard",
		name: "Standard",
		price: 24,
		specs: [
			"6 AMD EPYC cores",
			"16 GB DDR4 ECC",
			"160 GB NVMe · RAID 10",
			"10 Gbps · 10 TB",
			"Windows Server 2019/22",
			"New York or Chicago"
		]
	},
	{
		id: "vps-professional",
		name: "Professional",
		price: 48,
		specs: [
			"12 AMD EPYC cores",
			"32 GB DDR4 ECC",
			"320 GB NVMe · RAID 10",
			"10 Gbps · 20 TB",
			"Windows Server 2019/22",
			"New York or Chicago"
		]
	},
	{
		id: "vps-ultimate",
		name: "Ultimate",
		price: 96,
		specs: [
			"24 AMD EPYC cores",
			"64 GB DDR4 ECC",
			"500 GB NVMe · RAID 10",
			"10 Gbps · 50 TB",
			"Windows Server 2019/22",
			"New York or Chicago"
		]
	}
];
var DEDICATED_PLANS = [
	{
		id: "dedicated-silver",
		name: "Silver",
		price: 70,
		specs: [
			"Intel Xeon X3470 · 4 cores",
			"16 GB ECC",
			"120 GB SSD + 2 TB SATA",
			"1 Gbps · 20 TB",
			"Chicago, Illinois",
			"1 IP · iDRAC/IPMI · 1–3 day setup"
		]
	},
	{
		id: "dedicated-gold",
		name: "Gold",
		price: 85,
		specs: [
			"Dual Intel Xeon L5630 · 8 cores",
			"24 GB ECC",
			"120 GB SSD + 2 TB SATA",
			"1 Gbps · 20 TB",
			"Chicago, Illinois",
			"1 IP · iDRAC/IPMI · 1–3 day setup"
		]
	},
	{
		id: "dedicated-diamond",
		name: "Diamond",
		price: 110,
		specs: [
			"Dual Intel Xeon L5630 · 8 cores",
			"72 GB ECC",
			"120 GB SSD + 2 TB SATA",
			"1 Gbps · 20 TB",
			"Chicago, Illinois",
			"1 IP · iDRAC/IPMI · 1–3 day setup"
		]
	},
	{
		id: "dedicated-platinum",
		name: "Platinum",
		price: 150,
		specs: [
			"Intel Xeon E5-2620 · 12 cores",
			"32 GB ECC",
			"2 × 120 GB SSD + 2 TB SATA",
			"1 Gbps · 20 TB",
			"Chicago, Illinois",
			"1 IP · iDRAC/IPMI · 1–3 day setup"
		]
	}
];
var PROTOCOLS = [
	{
		id: "wg",
		name: "WireGuard",
		detail: "Default. Short handshake, small surface."
	},
	{
		id: "ovpn",
		name: "OpenVPN",
		detail: "UDP 1194, when a network blocks WireGuard."
	},
	{
		id: "ike",
		name: "IKEv2",
		detail: "Native on phones. Roams between cell and wifi."
	}
];
var LEADS = [
	{
		name: "Northwind Goods",
		number: "+1 212 555 0174"
	},
	{
		name: "Harbor & Pine",
		number: "+1 415 555 0138"
	},
	{
		name: "Lumen Clinic",
		number: "+44 20 7946 0123"
	},
	{
		name: "Fieldnote Studio",
		number: "+49 30 555 0192"
	},
	{
		name: "Kite Logistics",
		number: "+65 6555 0144"
	}
];
var FAQ = [
	{
		q: "What am I buying?",
		a: "A monthly plan with voice seats, local phone numbers, a Windows desk for your agents, and a private tunnel. Extra minutes, more cities, and servers are added on the order page before you confirm."
	},
	{
		q: "How does an order work?",
		a: "Build the order on this site. We reply with the invoice and any documents the carrier needs for those countries. Nothing is billed until you approve that invoice."
	},
	{
		q: "What do you need from us?",
		a: "A legal business name, a billing contact, and the countries you will call. Some number countries also ask for an address or an ID. We tell you which, before you pay."
	},
	{
		q: "When is a number ready?",
		a: "Most cities on the list are ready within one business day after the invoice is paid. A few countries take longer. The order summary says which."
	},
	{
		q: "Can agents work from home?",
		a: "Yes. They can use the browser dialer, or the hosted Windows desk with a softphone, over the Vela tunnel. Supervisors see who is on a call."
	},
	{
		q: "How do we cancel?",
		a: "Monthly plans stop at the end of the month. Annual plans are paid up front and cost 15% less. When the term ends, we delete the desks and the recordings you have not exported."
	},
	{
		q: "Do you replace our CRM?",
		a: "No. Vela places the call and can write the note back to Salesforce, HubSpot, Zoho, Zendesk, and the other tools on the integrations page. Your CRM stays the record."
	}
];
var ADJECTIVES = [
	"amber",
	"quiet",
	"north",
	"brass",
	"cedar",
	"iron",
	"still",
	"rapid",
	"keen",
	"low"
];
var NOUNS = [
	"lark",
	"harbor",
	"ridge",
	"kiln",
	"orbit",
	"pine",
	"ledger",
	"spur",
	"vista",
	"mere"
];
function suggestCallsign() {
	return `${ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)]}-${NOUNS[Math.floor(Math.random() * NOUNS.length)]}`;
}
function cleanCallsign(raw) {
	const value = raw.toLowerCase().replace(/[^a-z0-9-]/g, "").replace(/^-+/, "").slice(0, 16);
	if (value.length < 3 || !/^[a-z]/.test(value)) return null;
	return value;
}
function profileText(protocol, regionId, address) {
	const host = `${regionId}.vela.invalid`;
	if (protocol === "ovpn") return `client\ndev tun\nproto udp\nremote ${host} 1194\n# Vela sandbox profile — not a live gateway. Do not import.\n`;
	if (protocol === "ike") return `server: ike.${host}\nremote-id: sandbox\nlocal-address: ${address}\n# Vela sandbox profile — not a live gateway. Do not import.\n`;
	return `[Interface]\nPrivateKey = SANDBOX_DO_NOT_IMPORT\nAddress = ${address}/32\nDNS = 1.1.1.1\n\n[Peer]\nPublicKey = SANDBOX_DO_NOT_IMPORT\nEndpoint = ${host}:51820\nAllowedIPs = 0.0.0.0/0, ::/0\n# Vela sandbox profile — not a live gateway. Do not import.\n`;
}
var dialTimer = null;
function rid() {
	return Math.random().toString(36).slice(2, 10);
}
function clearDial() {
	if (dialTimer) {
		clearTimeout(dialTimer);
		dialTimer = null;
	}
}
var useVela = create()(persist((set, get) => ({
	callsign: "",
	planId: null,
	term: "month",
	recovery: null,
	recoverySeen: false,
	active: false,
	did: DIDS[0].id,
	ownedDids: [],
	includedDids: [],
	callStatus: "idle",
	callPeer: "",
	callDirection: "out",
	callStarted: null,
	muted: false,
	held: false,
	recents: [],
	messages: [],
	regionId: "fra",
	protocol: "wg",
	vpnOn: false,
	killSwitch: true,
	machineId: "dx-04",
	machineIds: [],
	selectedVpsId: null,
	selectedDedicatedId: null,
	deskOpen: false,
	setDid: (id) => set({ did: id }),
	attachDid: (id) => {
		const owned = get().ownedDids;
		set({
			ownedDids: owned.includes(id) ? owned : [...owned, id],
			did: id
		});
	},
	setRegion: (id) => set({ regionId: id }),
	setProtocol: (id) => set({ protocol: id }),
	setKillSwitch: (on) => set({ killSwitch: on }),
	setMachine: (id) => set({ machineId: id }),
	setDeskOpen: (open) => set({ deskOpen: open }),
	toggleMute: () => set({ muted: !get().muted }),
	toggleHold: () => set({ held: !get().held }),
	startCall: (peer) => {
		const trimmed = peer.trim();
		if (!trimmed) return;
		clearDial();
		set({
			callStatus: "dialing",
			callPeer: trimmed,
			callDirection: "out",
			callStarted: null,
			muted: false,
			held: false
		});
		dialTimer = setTimeout(() => {
			const current = get();
			if (current.callStatus === "dialing" && current.callPeer === trimmed) set({
				callStatus: "live",
				callStarted: Date.now()
			});
		}, 850);
	},
	ring: () => {
		clearDial();
		set({
			callStatus: "dialing",
			callPeer: "+1 415 555 0136",
			callDirection: "in",
			callStarted: null,
			muted: false,
			held: false
		});
		dialTimer = setTimeout(() => {
			const current = get();
			if (current.callStatus === "dialing" && current.callDirection === "in") set({
				callStatus: "live",
				callStarted: Date.now()
			});
		}, 4e3);
	},
	answer: () => {
		clearDial();
		if (get().callStatus === "idle") return;
		set({
			callStatus: "live",
			callStarted: Date.now()
		});
	},
	hangup: () => {
		clearDial();
		const current = get();
		if (current.callStatus === "idle") return;
		const seconds = current.callStatus === "live" && current.callStarted ? Math.max(1, Math.round((Date.now() - current.callStarted) / 1e3)) : 0;
		set({
			callStatus: "idle",
			callStarted: null,
			muted: false,
			held: false,
			recents: [{
				id: rid(),
				peer: current.callPeer,
				direction: current.callDirection,
				seconds,
				at: Date.now()
			}, ...current.recents].slice(0, 8)
		});
	},
	sendSms: (to, body) => {
		const trimmedTo = to.trim();
		const trimmedBody = body.trim();
		if (!trimmedTo || !trimmedBody) return;
		set({ messages: [{
			id: rid(),
			to: trimmedTo,
			body: trimmedBody.slice(0, 160),
			at: Date.now()
		}, ...get().messages].slice(0, 12) });
	},
	connectVpn: () => set({ vpnOn: true }),
	disconnectVpn: () => set({ vpnOn: false }),
	ackRecovery: () => set({ recoverySeen: true }),
	resetWorkspace: () => {
		clearDial();
		set({
			callsign: "",
			planId: null,
			active: false,
			recovery: null,
			recoverySeen: false,
			ownedDids: [],
			includedDids: [],
			did: DIDS[0].id,
			vpnOn: false,
			deskOpen: false,
			callStatus: "idle",
			callPeer: "",
			callStarted: null,
			recents: [],
			messages: [],
			machineId: "dx-04",
			machineIds: [],
			selectedVpsId: null,
			selectedDedicatedId: null
		});
	}
}), {
	name: "vela-workspace",
	version: 1,
	migrate: (persistedState, version) => {
		if (version < 1 && persistedState && typeof persistedState === "object") return {
			...persistedState,
			active: false,
			recovery: null,
			recoverySeen: false,
			did: DIDS[0].id,
			ownedDids: [],
			includedDids: [],
			vpnOn: false,
			deskOpen: false,
			recents: [],
			messages: []
		};
		return persistedState;
	},
	skipHydration: true,
	partialize: (state) => ({
		callsign: state.callsign,
		planId: state.planId,
		term: state.term,
		recovery: state.recovery,
		recoverySeen: state.recoverySeen,
		active: false,
		did: state.did,
		ownedDids: state.ownedDids,
		includedDids: state.includedDids,
		recents: state.recents,
		messages: state.messages,
		regionId: state.regionId,
		protocol: state.protocol,
		vpnOn: state.vpnOn,
		killSwitch: state.killSwitch,
		machineId: state.machineId,
		machineIds: state.machineIds,
		selectedVpsId: state.selectedVpsId,
		selectedDedicatedId: state.selectedDedicatedId
	})
}));
function useHydrateVela() {
	(0, import_react.useEffect)(() => {
		useVela.persist.rehydrate();
	}, []);
}
function useHydrated() {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setReady(true), []);
	return ready;
}
var PRODUCT_LINKS = [
	{
		to: "/checkout",
		hash: "phones",
		label: "Phone Numbers"
	},
	{
		to: "/checkout",
		hash: "rdp",
		label: "RDP Plans"
	},
	{
		to: "/checkout",
		hash: "vps",
		label: "VPS Plans"
	},
	{
		to: "/checkout",
		hash: "dedicated",
		label: "Dedicated Servers"
	},
	{
		to: "/checkout",
		hash: "tunnel",
		label: "Secure Tunnel"
	}
];
var HOME_SECTION_LINKS = [
	{
		id: "sales",
		label: "Sales"
	},
	{
		id: "support",
		label: "Support"
	},
	{
		id: "flow-builder",
		label: "Flow Builder"
	},
	{
		id: "omnichannel",
		label: "Omnichannel"
	},
	{
		id: "ai-models",
		label: "Multi-LLM"
	}
];
function Wrap({ className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8", className),
		children
	});
}
function Shell({ children }) {
	useHydrateVela();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-screen flex-col overflow-x-hidden bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none fixed inset-0 -z-10 ios-glow-radial",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-volt focus:px-4 focus:py-2 focus:text-white",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-[#d7c4a8] bg-[#f7f1e4] text-[#3d3428]",
				role: "status",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
					className: "flex flex-col gap-1 py-2 text-xs sm:flex-row sm:items-center sm:justify-between sm:gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: "Vela"
					}), " sells business numbers, agent desks, and a private tunnel on one invoice. Build the order here. We confirm it before anything is billed."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/checkout",
						search: {
							plan: "lattice",
							term: "month"
						},
						className: "shrink-0 font-semibold underline underline-offset-2",
						children: "Start an order"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "content",
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function SiteHeader() {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const hash = useRouterState({ select: (state) => state.location.hash });
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setOpen(false);
		const sectionId = window.location.hash.slice(1);
		if (pathname === "/" && sectionId) requestAnimationFrame(() => {
			document.getElementById(sectionId)?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		});
	}, [pathname]);
	const handleSectionClick = (event, sectionId) => {
		if (pathname !== "/") return;
		event.preventDefault();
		window.history.replaceState(null, "", `/#${sectionId}`);
		document.getElementById(sectionId)?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "sticky top-0 z-40 w-full pt-2 sm:pt-3 pb-2 transition-all",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex h-14 md:h-16 items-center justify-between gap-4 md:gap-6 rounded-full bg-white/92 backdrop-blur-xl border border-slate-200/80 shadow-[0_10px_40px_-24px_rgba(16,24,40,0.45)] px-4 md:px-6 transition-all",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					"aria-label": "Vela home",
					title: "Go to home page",
					className: "inline-flex items-center gap-2.5 text-slate-900 whitespace-nowrap shrink-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "vela-wordmark text-[1.35rem] leading-none",
							children: "Vela"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden 2xl:inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500",
							children: "Communications Cloud"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-0.5 lg:flex",
					"aria-label": "Primary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: cn("inline-flex h-9 items-center rounded-full px-2 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-100/60 hover:text-[#1f4d3a] xl:px-2.5", pathname === "/" && !hash && "bg-blue-50 text-[#1f4d3a]"),
							children: "Home"
						}),
						PRODUCT_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							search: {
								plan: "lattice",
								term: "month"
							},
							hash: link.hash,
							className: cn("inline-flex h-9 items-center rounded-full px-2 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-100/60 hover:text-[#1f4d3a] xl:px-2.5", pathname === link.to && hash === `#${link.hash}` && "bg-blue-50 text-[#1f4d3a]"),
							children: link.label
						}, link.hash)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							className: "group relative hidden xl:block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
								className: "inline-flex h-9 list-none items-center gap-1.5 rounded-full px-3 text-sm font-medium text-slate-600 transition-colors hover:text-[#1f4d3a] hover:bg-slate-100/60 cursor-pointer",
								children: ["Solutions", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3.5 transition-transform group-open:rotate-180" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-0 top-full z-50 w-48 pt-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-2xl border border-slate-200 bg-white p-2 shadow-xl",
									children: HOME_SECTION_LINKS.map(({ id, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `/#${id}`,
										onClick: (event) => handleSectionClick(event, id),
										className: "block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50",
										children: label
									}, id))
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/integrations",
							className: cn("hidden h-9 items-center rounded-full px-2 text-xs font-medium text-slate-600 transition-colors hover:text-[#1f4d3a] hover:bg-slate-100/60 xl:inline-flex", pathname === "/integrations" && "bg-blue-50 text-[#1f4d3a] font-semibold"),
							children: "Integrations"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pricing",
							className: cn("inline-flex h-9 items-center rounded-full px-2 text-xs font-medium text-slate-600 transition-colors hover:text-[#1f4d3a] hover:bg-slate-100/60", pathname === "/pricing" && "bg-blue-50 text-[#1f4d3a] font-semibold"),
							children: "Pricing"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5 shrink-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/console",
							className: cn("hidden xl:inline-flex items-center justify-center text-xs font-semibold text-slate-700 hover:text-[#1f4d3a] px-3.5 py-2 rounded-full hover:bg-slate-100 transition-colors", pathname === "/console" && "text-[#1f4d3a] bg-blue-50"),
							children: "Console"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/checkout",
							search: {
								plan: "lattice",
								term: "month"
							},
							className: "vela-cta inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Order services" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5 opacity-90" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex size-9 items-center justify-center rounded-full text-slate-600 hover:text-slate-900 lg:hidden",
							"aria-expanded": open,
							"aria-controls": "mobile-navigation",
							"aria-label": open ? "Close menu" : "Open menu",
							onClick: () => setOpen((value) => !value),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-navigation",
			className: "mt-2 ios-glass rounded-2xl p-4 lg:hidden animate-in fade-in slide-in-from-top-2 duration-200",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: cn("flex h-11 items-center rounded-xl px-4 text-base font-medium transition-colors", pathname === "/" && !hash ? "ios-pill-active text-fg" : "text-muted hover:text-volt"),
						children: "Home"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-4 pb-1 text-xs font-semibold uppercase tracking-wider text-muted",
						children: "Services"
					}),
					PRODUCT_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						search: {
							plan: "lattice",
							term: "month"
						},
						hash: link.hash,
						className: cn("flex h-11 items-center px-4 rounded-xl text-base font-medium transition-colors", pathname === link.to && hash === `#${link.hash}` ? "ios-pill-active text-fg" : "text-muted hover:text-volt"),
						children: link.label
					}, link.hash)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-4 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-muted",
						children: "Solutions"
					}),
					HOME_SECTION_LINKS.map(({ id, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `/#${id}`,
						onClick: (event) => handleSectionClick(event, id),
						className: "flex h-11 items-center rounded-xl px-4 text-base font-medium text-muted transition-colors hover:text-volt",
						children: label
					}, id)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/integrations",
						className: cn("flex h-11 items-center rounded-xl px-4 text-base font-medium transition-colors", pathname === "/integrations" ? "ios-pill-active text-fg" : "text-muted hover:text-volt"),
						children: "Integrations"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#solutions",
						onClick: (event) => handleSectionClick(event, "solutions"),
						className: "flex h-11 items-center rounded-xl px-4 text-base font-medium text-muted transition-colors hover:text-volt",
						children: "Solutions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#trust",
						onClick: (event) => handleSectionClick(event, "trust"),
						className: "flex h-11 items-center rounded-xl px-4 text-base font-medium text-muted transition-colors hover:text-volt",
						children: "Security"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/pricing",
						className: "flex h-11 items-center rounded-xl px-4 text-base font-medium text-muted transition-colors hover:text-volt",
						children: "Pricing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/checkout",
						search: {
							plan: "lattice",
							term: "month"
						},
						className: "flex h-11 items-center rounded-xl px-4 text-base font-semibold text-volt transition-colors hover:bg-white/5",
						children: "Configure phone numbers & RDP"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-2 border-t border-line" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/console",
						className: "flex h-11 items-center justify-between px-4 rounded-xl text-base font-medium text-white hover:bg-white/5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Console" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted",
							children: "Workspace"
						})]
					})
				]
			})
		}) : null] })
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-20 border-t border-line bg-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
			className: "grid gap-10 py-16 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "vela-wordmark text-[1.25rem] leading-none",
							children: "Vela"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-sm text-sm text-muted leading-relaxed",
						children: "Business phone numbers, a browser dialer, Windows desks for your agents, and a private network tunnel. One company. One monthly price."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-wider text-muted",
					children: "Telephony & Network"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2.5 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/voice",
							className: "text-muted hover:text-white transition-colors",
							children: "Cloud Voice & Dialer"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/tunnel",
							className: "text-muted hover:text-white transition-colors",
							children: "WireGuard Private Tunnel"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/desk",
							className: "text-muted hover:text-white transition-colors",
							children: "Hosted agent desks"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/integrations",
							className: "text-muted hover:text-white transition-colors",
							children: "CRM & MicroSIP Integrations"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-wider text-muted",
					children: "Operations"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2.5 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pricing",
							className: "text-muted hover:text-white transition-colors",
							children: "Workspace Pricing"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/checkout",
							search: {
								plan: "lattice",
								term: "month"
							},
							className: "text-muted hover:text-white transition-colors",
							children: "Configure phone numbers & RDP"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/console",
							className: "text-muted hover:text-white transition-colors",
							children: "Subscriber Console"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line/60 py-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
				className: "flex flex-col gap-3 text-xs text-muted/80 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Vela. Voice, desks, and private lines."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-4 text-faint",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Invoice before billing" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Monthly or annual" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cancel at the end of the term" })
					]
				})]
			})
		})]
	});
}
//#endregion
export { useHydrated as C, visibleDids as E, tunnelAddress as S, velaForSeats as T, planById as _, MACHINES as a, suggestCallsign as b, REGIONS as c, Wrap as d, cleanCallsign as f, planAllows as g, machineById as h, LEADS as i, Shell as l, effectivePlanId as m, DIDS as n, PLANS as o, cn as p, FAQ as r, PROTOCOLS as s, DEDICATED_PLANS as t, VPS_PLANS as u, profileText as v, useVela as w, termPrice as x, regionById as y };
