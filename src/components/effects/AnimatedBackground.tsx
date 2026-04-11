export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Base background */}
      <div className="absolute inset-0 bg-[#0A0F1E]" />

      {/* Animated gradient orbs */}
      <div className="absolute -top-[300px] -left-[200px] w-[600px] h-[600px] rounded-full bg-indigo-500/[0.07] blur-[120px] animate-float-slow" />
      <div className="absolute -bottom-[200px] -right-[200px] w-[500px] h-[500px] rounded-full bg-cyan-500/[0.05] blur-[120px] animate-float-slower" />
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-purple-500/[0.04] blur-[120px] animate-float-slowest" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />
    </div>
  );
}
