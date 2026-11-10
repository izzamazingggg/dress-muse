import Link from "next/link";
import ProductCard from "../../components/ProductCard";
import { products } from "../data/products";

export const metadata = {
  title: "Vacation Dresses: Beach and City Break Styles",
  description:
    "Curated vacation dresses from Amazon for beach days, resort trips and city breaks.",
};

export default function VacationDressesPage() {
  const categoryProducts = products.filter(
    (product) => product.category === "Vacation Dresses"
  );

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#171717]">

      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-7xl px-8 pt-8 md:px-12 lg:px-16">
        <div className="relative h-[65vh] min-h-[500px] overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=2000&q=90"
            alt="Vacation dress"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="relative flex h-full items-end px-8 py-10 text-white md:px-12 md:py-12">
            <div>

              <p className="text-xs uppercase tracking-[5px]">
                THE VACATION EDIT
              </p>

              <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
                Somewhere
                <br />
                Beautiful.
              </h1>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-white/90 md:text-base">
                Effortless dresses for beach escapes, resort days,
                romantic dinners, and everywhere your next trip takes you.
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="mx-auto max-w-7xl px-8 py-20 md:px-12 lg:px-16">

        <div className="grid gap-12 md:grid-cols-2 md:items-end">

          <div>

            <p className="text-xs uppercase tracking-[5px] text-[#8A8A8A]">
              THE VACATION EDIT
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
              Dresses made
              <br />
              for getting away.
            </h2>

          </div>

          <div>

            <p className="max-w-xl text-base leading-8 text-[#666666]">
              Relaxed silhouettes, beautiful prints, and easy pieces
              that belong in every suitcase.
            </p>

            <p className="mt-8 text-xs uppercase tracking-[4px] text-[#777777]">
              {categoryProducts.length} CURATED STYLES
            </p>

          </div>

        </div>

      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="mx-auto max-w-7xl px-8 pb-28 md:px-12 lg:px-16">

        <div className="mb-12 flex items-end justify-between border-b border-[#E3E0DB] pb-5">

          <div>

            <p className="text-xs uppercase tracking-[5px] text-[#8A8A8A]">
              THE EDIT
            </p>

            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              Pack these first
            </h2>

          </div>

          <Link
            href="/shop"
            className="hidden border-b border-black pb-2 text-xs uppercase tracking-[3px] md:block"
          >
            View all →
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
      <section className="bg-[#E9E4DC]">

        <div className="mx-auto max-w-7xl px-8 py-28 md:px-12 lg:px-16">

          <div className="grid gap-12 md:grid-cols-2 md:items-end">

            <div>

              <p className="text-xs uppercase tracking-[5px] text-[#8A8A8A]">
                THE TRAVEL JOURNAL
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
                What belongs
                <br />
                in the perfect suitcase?
              </h2>

            </div>

            <div>

              <p className="max-w-xl text-base leading-8 text-[#666666]">
                From airport mornings to sunset dinners, discover
                vacation styling ideas and the dresses worth making
                room for.
              </p>

              <Link
                href="/blog"
                className="mt-8 inline-block border-b border-black pb-2 text-xs uppercase tracking-[3px]"
              >
                Read the travel edit →
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}