import { createFileRoute } from "@tanstack/react-router";
import { TunnelPanel } from "@/components/tunnel-panel";
import { Wrap } from "@/components/shell";

export const Route = createFileRoute("/tunnel")({
  head: () => ({
    meta: [
      { title: "Tunnel — Vela Communications Cloud" },
      {
        name: "description",
        content: "A private tunnel for Vela calling traffic. WireGuard, OpenVPN, or IKEv2.",
      },
    ],
  }),
  component: TunnelPage,
});

function TunnelPage() {
  return (
    <div>
      <header className="border-b border-line py-12 md:py-16">
        <Wrap>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs text-muted backdrop-blur-md mb-3">
              <span className="size-1.5 rounded-full bg-ios-green animate-pulse" />
              <span className="font-semibold text-white">Private tunnel</span>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-white">
              Keep call traffic on your own network.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              Twelve exit cities, on the same account as your numbers and desks. OpenVPN or IKEv2 is there when an office network blocks WireGuard.
            </p>
          </div>
        </Wrap>
      </header>

      <Wrap className="py-10 md:py-14">
        <TunnelPanel />
      </Wrap>
    </div>
  );
}
