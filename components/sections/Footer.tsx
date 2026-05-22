export function Footer() {
  return (
    <footer className="border-t border-[#2C2C2A] py-8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 flex flex-col items-center gap-3 md:flex-row md:justify-between">
        <span className="font-[var(--font-display)] text-lg text-[#F1EFE8] tracking-widest">
          GP
        </span>
        <p className="text-[#F1EFE8] text-[11px] tracking-wider text-center">
          © 2026 · Built with obsession
        </p>
        <p className="text-[#F1EFE8] text-[11px] tracking-wider">
          Goa, India
        </p>
      </div>
    </footer>
  );
}
