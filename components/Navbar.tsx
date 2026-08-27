import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E3E0DB] bg-[#FAF8F5]/95 backdrop-blur">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8 md:px-12 lg:px-16">

        {/* LOGO */}
        <Link
          href="/"
          className="font-serif text-3xl tracking-[-0.5px] text-[#171717]"
        >
          Dress Muse
        </Link>


        {/* NAVIGATION */}
        <nav className="hidden items-center gap-8 lg:flex">

          <Link
            href="/shop"
            className="text-[10px] uppercase tracking-[3px] text-[#555555] transition hover:text-black"
          >
            The Edit
          </Link>

          <Link
            href="/wedding-guest-dresses"
            className="text-[10px] uppercase tracking-[3px] text-[#555555] transition hover:text-black"
          >
            Wedding
          </Link>

          <Link
            href="/summer-dresses"
            className="text-[10px] uppercase tracking-[3px] text-[#555555] transition hover:text-black"
          >
            Summer
          </Link>

          <Link
            href="/cocktail-dresses"
            className="text-[10px] uppercase tracking-[3px] text-[#555555] transition hover:text-black"
          >
            Cocktail
          </Link>

          <Link
            href="/vacation-dresses"
            className="text-[10px] uppercase tracking-[3px] text-[#555555] transition hover:text-black"
          >
            Vacation
          </Link>

          <Link
            href="/blog"
            className="text-[10px] uppercase tracking-[3px] text-[#555555] transition hover:text-black"
          >
            Journal
          </Link>

        </nav>


        {/* RIGHT SIDE */}
        <Link
          href="/shop"
          className="hidden border-b border-[#171717] pb-1 text-[10px] uppercase tracking-[3px] text-[#171717] transition hover:opacity-50 md:block"
        >
          Shop →
        </Link>

      </div>

    </header>
  );
}