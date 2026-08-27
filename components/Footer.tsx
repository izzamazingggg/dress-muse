import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#DDD9D2] bg-[#171717] text-white">
      {/* MAIN FOOTER */}
      <div className="mx-auto grid max-w-7xl gap-16 px-8 py-20 md:grid-cols-2 lg:grid-cols-4 lg:px-16">

        {/* BRAND */}
        <div className="lg:col-span-2">
          <Link
            href="/"
            className="font-serif text-4xl tracking-tight"
          >
            Dress Muse
          </Link>

          <p className="mt-6 max-w-md text-sm leading-7 text-[#BDBDBD]">
            A curated destination for discovering beautiful dresses,
            thoughtful style inspiration, and fashion finds worth adding
            to your wardrobe.
          </p>

          <p className="mt-8 text-[10px] uppercase tracking-[4px] text-[#888888]">
            Curated with intention.
          </p>
        </div>

        {/* SHOP */}
        <div>
          <h3 className="text-[10px] uppercase tracking-[4px] text-[#888888]">
            Shop
          </h3>

          <div className="mt-6 flex flex-col gap-4">
            <Link
              href="/shop"
              className="text-sm text-[#D5D5D5] transition hover:text-white"
            >
              All Dresses
            </Link>

            <Link
              href="/wedding-guest-dresses"
              className="text-sm text-[#D5D5D5] transition hover:text-white"
            >
              Wedding Guest
            </Link>

            <Link
              href="/summer-dresses"
              className="text-sm text-[#D5D5D5] transition hover:text-white"
            >
              Summer
            </Link>

            <Link
              href="/cocktail-dresses"
              className="text-sm text-[#D5D5D5] transition hover:text-white"
            >
              Cocktail
            </Link>

            <Link
              href="/vacation-dresses"
              className="text-sm text-[#D5D5D5] transition hover:text-white"
            >
              Vacation
            </Link>
          </div>
        </div>

        {/* EXPLORE */}
        <div>
          <h3 className="text-[10px] uppercase tracking-[4px] text-[#888888]">
            Explore
          </h3>

          <div className="mt-6 flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm text-[#D5D5D5] transition hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/shop"
              className="text-sm text-[#D5D5D5] transition hover:text-white"
            >
              The Edit
            </Link>

            <Link
              href="/blog"
              className="text-sm text-[#D5D5D5] transition hover:text-white"
            >
              Journal
            </Link>
          </div>
        </div>
      </div>

      {/* AMAZON DISCLOSURE */}
      <div className="border-t border-[#333333]">
        <div className="mx-auto max-w-7xl px-8 py-6 lg:px-16">
          <p className="max-w-3xl text-[11px] leading-6 text-[#999999]">
            As an Amazon Associate I earn from qualifying purchases.
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-[#333333]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-8 py-6 text-[10px] uppercase tracking-[2px] text-[#777777] md:flex-row md:items-center md:justify-between lg:px-16">
          <p>
            © 2026 Dress Muse. All rights reserved.
          </p>

          <p>
            Amazon Affiliate Site
          </p>
        </div>
      </div>
    </footer>
  );
}