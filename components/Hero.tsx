
import Link from "next/link";

const occasions = [
  {
    label: "Wedding Guest",
    href: "/wedding-guest-dresses",
  },
  {
    label: "Holiday Party",
    href: "/seasonal",
  },
  {
    label: "Cocktail",
    href: "/cocktail-dresses",
  },
  {
    label: "Vacation",
    href: "/vacation-dresses",
  },
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left */}
        <div className="min-w-0">
          <p className="mb-5 text-xs uppercase tracking-[4px] text-neutral-600">
            Wedding guest, holiday &amp; cocktail dresses
          </p>

          <h1 className="font-serif text-5xl leading-[1.05] text-black md:text-6xl xl:text-7xl">
            Dresses for
            <br />
            every occasion.
          </h1>

          <p className="mt-10 max-w-md text-lg leading-8 text-neutral-700">
            Discover beautifully curated dresses inspired by modern elegance.
            From weddings to vacations, Dress Muse brings together fashion
            you&apos;ll actually want to wear.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4">
            <Link
              href="/shop"
              className="inline-flex min-h-12 items-center justify-center bg-black px-8 py-4 text-center text-sm font-medium uppercase tracking-[2px] text-white transition-colors hover:bg-neutral-800"
            >
              Shop all dresses
            </Link>

            <Link
              href="/blog"
              className="border-b border-transparent pb-1 text-sm uppercase tracking-[2px] text-black transition-colors hover:border-black"
            >
              Read the Journal
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="min-w-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1400"
            alt="Woman in an elegant dress, Dress Muse curated dresses"
            className="h-[420px] w-full object-cover md:h-[560px] lg:h-[640px]"
            loading="eager"
          />
        </div>
      </div>

      {/* Occasion tiles */}
      <nav
        aria-label="Shop by occasion"
        className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
      >
        {occasions.map((occasion) => (
          <Link
            key={occasion.href}
            href={occasion.href}
            className="flex min-h-[64px] min-w-0 items-center justify-center border border-neutral-300 px-3 py-5 text-center text-xs uppercase leading-5 tracking-[3px] text-black transition-colors hover:border-black hover:bg-black hover:text-white sm:px-4"
          >
            {occasion.label}
          </Link>
        ))}
      </nav>
    </section>
  );
}
