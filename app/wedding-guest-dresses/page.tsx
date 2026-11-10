import Link from "next/link";
import ProductCard from "../../components/ProductCard";
import { products } from "../data/products";

export const metadata = {
  title: "Wedding Guest Dresses: Elegant Amazon Finds",
  description:
    "Curated wedding guest dresses from Amazon for garden, formal and evening weddings. Browse styles by occasion and find your look.",
};

export default function WeddingGuestDressesPage() {
  const categoryProducts = products.filter(
    (product) => product.category === "Wedding Guest Dresses"
  );

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#171717]">

      {/* ================= WEDDING HERO ================= */}
      <section className="mx-auto max-w-7xl px-8 pt-8 md:px-12 lg:px-16">
        <div className="relative h-[520px] overflow-hidden md:h-[650px]">

          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=2000&q=90"
            alt="Elegant fashion portrait"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute inset-0 flex items-end">
            <div className="px-8 pb-10 text-white md:px-12 md:pb-14 lg:px-16">

              <p className="text-[11px] uppercase tracking-[5px]">
                DRESS FOR THE MOMENT
              </p>

              <h1 className="mt-5 max-w-2xl font-serif text-6xl leading-[0.88] md:text-7xl lg:text-8xl">
                Effortless
                <br />
                elegance
              </h1>

            </div>
          </div>

        </div>
      </section>

      {/* ================= OCCASION EDIT ================= */}
      <section className="mx-auto max-w-7xl px-8 py-20 md:px-12 md:py-24 lg:px-16">

        <div className="grid gap-12 md:grid-cols-2 md:items-end">

          <div>
            <p className="text-[11px] uppercase tracking-[5px] text-[#888888]">
              THE OCCASION EDIT
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-[1] md:text-6xl lg:text-7xl">
              Made for the
              <br />
              beautiful invitation.
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-base leading-8 text-[#666666] md:text-lg">
              Elegant dresses for ceremonies, garden weddings,
              destination celebrations, and every beautiful moment
              in between.
            </p>

            <p className="mt-10 text-[11px] uppercase tracking-[5px] text-[#777777]">
              {categoryProducts.length} STYLES
            </p>
          </div>

        </div>

      </section>

      {/* ================= CURATED PRODUCTS ================= */}
      <section className="mx-auto max-w-7xl px-8 pb-28 md:px-12 lg:px-16">

        <div className="mb-10 flex items-end justify-between border-b border-[#E3E0DB] pb-5">

          <div>
            <p className="text-[11px] uppercase tracking-[5px] text-[#777777]">
              CURATED FOR YOU
            </p>
          </div>

          <Link
            href="/shop"
            className="hidden text-[11px] uppercase tracking-[4px] text-[#555555] transition hover:text-black md:block"
          >
            SORT
          </Link>

        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2">
          {categoryProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </section>

      {/* ================= JOURNAL ================= */}
      <section className="border-t border-[#E3E0DB] bg-[#F3F0EA]">

        <div className="mx-auto max-w-7xl px-8 py-24 md:px-12 md:py-28 lg:px-16">

          <p className="text-[11px] uppercase tracking-[5px] text-[#888888]">
            THE DRESS MUSE JOURNAL
          </p>

          <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-end">

            <h2 className="font-serif text-5xl leading-[1] md:text-6xl lg:text-7xl">
              What to wear when
              <br />
              the invitation arrives.
            </h2>

            <div>
              <p className="max-w-xl text-base leading-8 text-[#666666]">
                Discover thoughtful styling ideas, dress-code guidance,
                and inspiration for your next beautiful occasion.
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