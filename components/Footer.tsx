export function Footer() {
  return (
    <footer className="mt-12 pt-8 border-t border-tapovana-border text-center">
      <p className="text-sm font-semibold text-tapovana-secondary tracking-wide">
        Tapovana Farmland
      </p>
      <p className="text-xs text-tapovana-muted mt-1 tracking-wide">
        Agamana Developers
      </p>

      <div className="flex justify-center mt-8 mb-2">
        <div className="inline-flex items-center gap-2 bg-[#1E2A2A] px-5 py-2.5 rounded-full">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7A8F8F]">
            Crafted with by
          </span>
          <a
            href="https://navodita.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-bold text-white hover:text-[#C8DEB5] transition-colors duration-200"
          >
            Navodita
          </a>
        </div>
      </div>
    </footer>
  );
}
