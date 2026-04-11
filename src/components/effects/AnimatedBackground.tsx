export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Deep obsidian base */}
      <div className="absolute inset-0 bg-nebula-base" />

      {/* Primary nebula orb - Electric Violet */}
      <div className="absolute -top-[300px] -left-[200px] w-[700px] h-[700px] rounded-full bg-violet-raw/[0.06] blur-[150px] animate-float-slow" />

      {/* Secondary nebula orb - Vivid Cyan */}
      <div className="absolute -bottom-[200px] -right-[200px] w-[600px] h-[600px] rounded-full bg-cyan-deep/[0.04] blur-[140px] animate-float-slower" />

      {/* Tertiary subtle orb - Deep Violet */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-violet-deep/[0.03] blur-[130px] animate-float-slowest" />

      {/* Accent warm orb */}
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-amber-primary/[0.02] blur-[100px] animate-float-slower" />

      {/* Dot grid pattern  */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(221, 183, 255, 0.5) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 0%, transparent 0%, rgba(6, 8, 15, 0.4) 100%)',
        }}
      />
    </div>
  );
}
