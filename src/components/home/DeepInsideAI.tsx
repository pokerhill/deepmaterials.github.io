const materialHighlights = [
  {
    name: "FlexiMetal™",
    description:
      "Metallic TIM performance without liquid-metal migration, shorting, or process-control risk.",
  },
  {
    name: "High-Rebound Pads",
    description:
      "Designed for memory, SSDs, and mechanically challenging applications.",
  },
  {
    name: "Low-Oil Thermal Gels",
    description:
      "Industry-leading solutions for enterprise SSDs and high-reliability electronics.",
  },
  {
    name: "Advanced Thermal Materials",
    description:
      "Greases, gap fillers, PCMs, and custom-engineered solutions for AI infrastructure.",
  },
] as const;

const leaderReasons = [
  "Proven at hyperscale",
  "Enterprise SSD market leadership",
  "Next-generation metallic TIM technology",
  "Global manufacturing footprint",
  "Engineering support from concept through production",
] as const;

const trustedApplications = [
  "AI Accelerators",
  "Enterprise SSDs",
  "High-Performance Servers",
  "Liquid-Cooled Systems",
  "Networking and Optical Modules",
] as const;

function AccentListItem({ children }: { readonly children: string }) {
  return (
    <li className="flex gap-3 text-sm sm:text-base leading-relaxed text-dm-gray-light">
      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-dm-accent" />
      <span>{children}</span>
    </li>
  );
}

export default function DeepInsideAI() {
  return (
    <section className="relative overflow-hidden bg-dm-midnight pt-20 pb-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-3xl font-semibold uppercase tracking-[0.24em] text-dm-accent sm:text-4xl lg:text-5xl">
            Deep Inside AI
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-dm-white sm:text-4xl">
            The Materials Behind AI Performance
          </h2>
          <p className="mt-5 text-base leading-relaxed text-dm-gray-light sm:text-lg">
            From enterprise SSDs to next-generation AI accelerators, Deep
            Materials delivers the thermal solutions that enable higher compute
            density, lower operating temperatures, and greater system
            reliability.
          </p>
        </div>

        <div className="mt-12 border-y border-dm-accent/15 py-8">
          <h3 className="text-center text-2xl font-semibold text-dm-white">
            One Company. Every Thermal Interface.
          </h3>
          <div className="mt-7 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {materialHighlights.map((item) => (
              <div key={item.name} className="border-l border-dm-accent/30 pl-4">
                <h4 className="text-lg font-semibold text-dm-accent-light">
                  {item.name}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-dm-gray">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="lg:border-r lg:border-dm-accent/15 lg:pr-10">
            <h3 className="text-2xl font-semibold text-dm-white">
              Why AI Leaders Choose Deep Materials
            </h3>
            <ul className="mt-6 space-y-4">
              {leaderReasons.map((reason) => (
                <AccentListItem key={reason}>{reason}</AccentListItem>
              ))}
            </ul>
          </div>

          <div className="lg:pl-2">
            <h3 className="text-2xl font-semibold text-dm-white">
              Trusted Where Heat Matters Most
            </h3>
            <p className="mt-4 leading-relaxed text-dm-gray-light">
              Deep Materials is a leading provider of advanced thermal
              interface materials for:
            </p>
            <ul className="mt-6 space-y-4">
              {trustedApplications.map((application) => (
                <AccentListItem key={application}>{application}</AccentListItem>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-dm-gray-light">
              Our technologies are deployed in millions of devices powering the
              world&apos;s most demanding compute environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
