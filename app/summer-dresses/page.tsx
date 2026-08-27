import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import { products } from "../data/products";

export default function SummerDressesPage() {
  const summerDresses = products.filter(
    (product) => product.category === "Summer Dresses"
  );

  return (
    <>
      <Navbar />

      <main className="bg-[#FAF8F5] pt-20">

        {/* Summer Editorial Intro */}
        <section className="mx-auto max-w-7xl px-10 py-24 lg:py-32">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_420px]">

            <div>
              <p className="mb-6 text-xs uppercase tracking-[6px] text-neutral-500">
                SUMMER 2026
              </p>

              <h1 className="font-serif text-7xl leading-[0.9] text-black md:text-9xl">
                Sun
                <br />
                Drenched
                <br />
                Days.
              </h1>
            </div>

            <div className="pb-2">
              <p className="text-lg leading-8 text-neutral-600">
                Easy dresses for warm afternoons, seaside escapes, garden
                lunches, and those long summer evenings when you don't want
                the day to end.
              </p>

              <p className="mt-8 text-xs uppercase tracking-[3px] text-neutral-500">
                {summerDresses.length} curated styles
              </p>
            </div>

          </div>
        </section>

        {/* Large Summer Image */}
        <section className="mx-auto max-w-7xl px-10">
          <div className="grid gap-6 md:grid-cols-[1.4fr_0.6fr]">

            <div className="h-[650px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600"
                alt="Summer dress editorial"
                className="h-full w-full object-cover transition duration-700 hover:scale-[1.02]"
              />
            </div>

            <div className="flex items-end bg-[#E9E1D5] p-10 md:p-12">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[4px] text-neutral-500">
                  THE SUMMER MOOD
                </p>

                <h2 className="font-serif text-4xl leading-tight text-black">
                  Light fabrics.
                  <br />
                  Bare shoulders.
                  <br />
                  No plans.
                </h2>
              </div>
            </div>

          </div>
        </section>

        {/* Product Collection */}
        <section className="mx-auto max-w-7xl px-10 py-28">

          <div className="mb-12 flex flex-col gap-4 border-b border-neutral-300 pb-6 md:flex-row md:items-end md:justify-between">

            <div>
              <p className="text-xs uppercase tracking-[4px] text-neutral-500">
                THE SUMMER EDIT
              </p>

              <h2 className="mt-3 font-serif text-4xl text-black">
                Easy pieces for warm days
              </h2>
            </div>

            <p className="text-xs uppercase tracking-[2px] text-neutral-500">
              {summerDresses.length} styles
            </p>

          </div>

          {summerDresses.length > 0 ? (
            <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
              {summerDresses.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="font-serif text-3xl text-neutral-800">
                New summer styles are coming soon.
              </p>
            </div>
          )}

        </section>

        {/* Summer Styling */}
        <section className="border-y border-neutral-200 bg-white">
          <div className="mx-auto max-w-7xl px-10 py-28">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div>
                <p className="mb-5 text-xs uppercase tracking-[5px] text-neutral-500">
                  STYLE NOTE
                </p>

                <h2 className="font-serif text-5xl leading-tight text-black md:text-6xl">
                  The art of
                  <br />
                  effortless dressing.
                </h2>
              </div>

              <div>
                <p className="max-w-lg text-lg leading-8 text-neutral-600">
                  Pair a simple silhouette with understated accessories,
                  natural textures, and barely-there sandals. The goal is
                  relaxed, not overdone.
                </p>

                <a
                  href="/blog"
                  className="mt-8 inline-block border-b border-black pb-2 text-xs uppercase tracking-[3px]"
                >
                  Read the style journal →
                </a>
              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}