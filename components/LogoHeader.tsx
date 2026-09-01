// Place official logo at /public/tapovana-logo.png or /public/tapovana-logo.svg
// When ready, replace the placeholder div with:
// <Image src="/tapovana-logo.png" alt="Tapovana Farmland" width={180} height={64} className="object-contain" priority />

export function LogoHeader() {
  return (
    <header className="text-center pt-10 pb-8">
      <div className="flex justify-center mb-8">
        <div className="px-8 py-4 border border-tapovana-green-border rounded-2xl bg-white/70 shadow-sm">
          <p className="text-tapovana-green font-bold text-sm tracking-[0.3em] uppercase">
            TAPOVANA FARMLAND
          </p>
          <p className="text-tapovana-muted text-[10px] tracking-wider mt-1 text-center">
            Official Logo Placeholder
          </p>
        </div>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold text-tapovana-charcoal mb-3 tracking-tight">
        Official Payment Details
      </h1>
      <p className="text-tapovana-muted text-base leading-relaxed max-w-sm mx-auto">
        Please transfer the applicable payment amount to the bank account provided below.
      </p>
    </header>
  );
}
