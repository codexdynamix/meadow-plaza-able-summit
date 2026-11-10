import { createFileRoute } from "@tanstack/react-router";
import { DeskPanel } from "@/components/desk-panel";
import { Wrap } from "@/components/shell";

export const Route = createFileRoute("/desk")({
  head: () => ({
    meta: [
      { title: "Virtual Desktops — Vela Communications Cloud" },
      {
        name: "description",
        content: "Hosted Windows desks for Vela agents, reached over your private tunnel.",
      },
    ],
  }),
  component: DeskPage,
});

function DeskPage() {
  return (
    <div>
      <header className="border-b border-line py-12 md:py-16">
        <Wrap>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs text-muted backdrop-blur-md mb-3">
              <span className="size-1.5 rounded-full bg-ios-purple animate-pulse" />
              <span className="font-semibold text-white">Agent desks</span>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-white">
              A Windows desk for the people on the phones.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              Each desk runs the dialer, the CRM, and call notes. Agents reach it over the Vela tunnel. When you cancel, we delete the desk.
            </p>
          </div>
        </Wrap>
      </header>

      <Wrap className="py-10 md:py-14">
        <DeskPanel />
      </Wrap>
    </div>
  );
}
