import Image from 'next/image';

export function LogoHeader() {
  return (
    <header className="text-center pt-10 pb-8">
      <div className="flex justify-center mb-8">
        <Image
          src="/tapovana-logo.png"
          alt="Tapovana Farmland"
          width={280}
          height={100}
          className="object-contain w-auto h-20 sm:h-24"
          priority
        />
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
