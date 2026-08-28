import Link from "next/link";
import ProductCard from "../../components/ProductCard";
import { products } from "../data/products";

export default function SummerDressesPage() {
  const categoryProducts = products.filter(
    (product) => product.category === "Summer Dresses"
  );

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#171717]">

      {/* ================= SUMMER HERO ================= */}
      <section className="mx-auto max-w-7xl px-8 pt-8 md:px-12 lg:px-16">
        <div className="relative h-[65vh] min-h-[500px] overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=2000&q=90"
            alt="Summer fashion"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/15" />

          <div className="relative flex h-full items-end px-8 py-10 text-white md:px-12 md:py-12">
            <div>

              <p className="text-xs uppercase tracking-[5px]">
                SUMMER 2026
              </p>

              <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.9] md:text-7xl lg:text-8xl">
                Sun Drenched
                <br />
                Days.
              </h1>

            </div>
          </div>
        </div>
      </section>

      {/* ================= SUMMER INTRO ================= */}
      <section className="mx-auto max-w-7xl px-8 py-20 md:px-12 lg:px-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-end">

          <div>
            <p className="text-xs uppercase tracking-[5px] text-[#8A8A8A]">
              THE SUMMER EDIT
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
              Made for the
              <br />
              sunniest days.
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-base leading-8 text-[#666666]">
              Light, effortless dresses for warm afternoons,
              seaside escapes, garden lunches, and long summer
              evenings.
            </p>

            <p className="mt-8 text-xs uppercase tracking-[4px] text-[#777777]">
              {categoryProducts.length} CURATED STYLES
            </p>
          </div>

        </div>
      </section>

      {/* ================= SUMMER PRODUCTS ================= */}
      <section className="mx-auto max-w-7xl px-8 pb-28 md:px-12 lg:px-16">

        <div className="mb-12 flex items-end justify-between border-b border-[#E3E0DB] pb-5">

          <div>
            <p className="text-xs uppercase tracking-[5px] text-[#8A8A8A]">
              THE EDIT
            </p>

            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              Summer favorites
            </h2>
          </div>

          <Link
            href="/shop"
            className="hidden border-b border-black pb-2 text-xs uppercase tracking-[3px] md:block"
          >
            View all →
          </Link>

        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {categoryProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </section>

      {/* ================= SUMMER JOURNAL ================= */}
      <section className="bg-[#F1EEE8]">
        <div className="mx-auto max-w-7xl px-8 py-28 md:px-12 lg:px-16">

          <div className="grid gap-12 md:grid-cols-2 md:items-end">

            <div>
              <p className="text-xs uppercase tracking-[5px] text-[#8A8A8A]">
                THE SUMMER JOURNAL
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
                What to wear when
                <br />
                the sun is shining.
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-base leading-8 text-[#666666]">
                From breezy afternoons to sunset dinners, discover
                easy styling ideas for making the most of summer.
              </p>

              <Link
                href="/blog"
                className="mt-8 inline-block border-b border-black pb-2 text-xs uppercase tracking-[3px]"
              >
                Read the summer journal →
              </Link>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}