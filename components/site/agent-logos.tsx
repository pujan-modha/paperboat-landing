import { LogoLoop } from "@/components/LogoLoop";

// Placeholder logos — swap each `node` with the real agent SVG when available.
const PLACEHOLDER_COUNT = 10;

const logos = Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => ({
  node: (
    <span className="flex h-7 items-center gap-2 rounded-md border border-dashed border-border px-3 text-sm font-medium text-muted-foreground">
      <span className="size-3 rounded-sm bg-muted-foreground/30" aria-hidden="true" />
      Agent {i + 1}
    </span>
  ),
  title: `Agent ${i + 1}`,
  ariaLabel: `Agent ${i + 1}`,
}));

export function AgentLogos() {
  return (
    <LogoLoop
      logos={logos}
      speed={60}
      direction="left"
      logoHeight={28}
      gap={48}
      pauseOnHover
      fadeOut
      fadeOutColor="var(--background)"
      ariaLabel="Supported agents"
    />
  );
}
