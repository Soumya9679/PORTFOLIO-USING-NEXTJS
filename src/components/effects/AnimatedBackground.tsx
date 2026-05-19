export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[var(--bg-base)]" />
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(17, 21, 19, 0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 21, 19, 0.045) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div className="absolute inset-x-0 top-0 h-[460px] bg-[linear-gradient(135deg,rgba(15,118,110,0.14),rgba(245,247,244,0)_42%,rgba(47,95,215,0.1))]" />
      <div className="absolute inset-x-0 bottom-0 h-[360px] bg-[linear-gradient(180deg,rgba(245,247,244,0),rgba(233,238,240,0.78))]" />
    </div>
  );
}
