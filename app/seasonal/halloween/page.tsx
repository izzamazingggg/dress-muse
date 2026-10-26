
import Link from "next/link";
import { halloweenProducts } from "../../data/seasonal-products";

export const metadata = {
  title: "Halloween Costumes & Dresses | Dress Muse",
  description:
    "Discover curated Halloween costume dresses, gothic styles, Renaissance outfits, and statement looks at Dress Muse.",
};

export default function HalloweenPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#171717]">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-8 pt-8 md:px-12 lg:px-16">
        <div className="relative h-[520px] overflow-hidden bg-[#292126] md:h-[650px]">
          <img
            src="https://images.unsplash.com/photo-1642290460481-76a5f2e18c3e?q=80&w=2000&auto=format&fit=crop"
            alt="Halloween costume inspiration"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-65"
          />

          <div className="absolute inset-0 bg-black/35" />

          <div className="absolute inset-0 flex items-end">
            <div className="px-8 pb-10 text-white md:px-12 md:pb-14 lg:px-16">
              <p className="text-[11px] uppercase tracking-[5px]">
                THE HALLOWEEN EDIT
              </p>

              <h1 className="mt-5 max-w-3xl font-serif text-6xl leading-[0.88] md:text-7xl lg:text-8xl">
                A little
                <br />
                dark magic.
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL INTRO */}
      <section className="mx-auto max-w-7xl px-8 py-20 md:px-12 md:py-24 lg:px-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[5px] text-[#888888]">
              THE SEASONAL EDIT
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-[1] md:text-6xl lg:text-7xl">
              Dress for
              <br />
              the unexpected.
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-base leading-8 text-[#666666] md:text-lg">
              Enter a world of gothic romance, Renaissance
              elegance, playful fantasy, and unforgettable
              Halloween costumes. Discover statement pieces
              curated for your most magical October moments.
            </p>

            <p className="mt-10 text-[11px] uppercase tracking-[5px] text-[#777777]">
              {halloweenProducts.length} STYLES
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-7xl px-8 pb-28 md:px-12 lg:px-16">
        <div className="mb-10 flex items-end justify-between border-b border-[#E3E0DB] pb-5">
          <p className="text-[11px] uppercase tracking-[5px] text-[#777777]">
            CURATED FOR YOU
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2">
          {halloweenProducts.map((product) => (
            <article key={product.id} className="group">
              <Link
                href={`/product/${product.id}`}
                className="block"
              >
                <div className="aspect-[3/4] overflow-hidden bg-[#F1EEE8]">
                  <img
                    src={product.image}
                    alt={`${product.brand} ${product.title}`}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.025]"
                  />
                </div>

                <p className="mt-5 text-[11px] uppercase tracking-[4px] text-[#888888]">
                  {product.brand}
                </p>

                <h3 className="mt-3 font-serif text-xl leading-snug md:text-2xl">
                  {product.title}
                </h3>

                <span className="mt-5 inline-block border-b border-[#333333] pb-2 text-[11px] uppercase tracking-[3px]">
                  View Details →
                </span>
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-12 text-xs leading-6 text-[#888888]">
          As an Amazon Associate, Dress Muse earns from
          qualifying purchases. Product availability and
          prices may change on Amazon.
        </p>
      </section>

      {/* JOURNAL */}
      <section className="border-t border-[#E3E0DB] bg-[#F3F0EA]">
        <div className="mx-auto max-w-7xl px-8 py-24 md:px-12 md:py-28 lg:px-16">
          <p className="text-[11px] uppercase tracking-[5px] text-[#888888]">
            THE DRESS MUSE JOURNAL
          </p>

          <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-end">
            <h2 className="font-serif text-5xl leading-[1] md:text-6xl lg:text-7xl">
              A night to
              <br />
              remember.
            </h2>

            <div>
              <p className="max-w-xl text-base leading-8 text-[#666666]">
                Explore Halloween outfit inspiration,
                costume styling ideas, and creative ways
                to make your October celebrations
                unforgettable.
              </p>

              <Link
                href="/blog"
                className="mt-8 inline-block border-b border-[#333333] pb-2 text-[11px] uppercase tracking-[4px]"
              >
                Read the Journal →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
