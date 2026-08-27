import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import { products } from "../data/products";

export default function CocktailDressesPage() {
  const cocktailDresses = products.filter(
    (product) => product.category === "Cocktail Dresses"
  );

  return (
    <>
      <Navbar />

      <main className="bg-white pt-20">

        {/* Editorial Header */}
        <section className="mx-auto max-w-7xl px-10 py-28">
          <p className="mb-6 text-xs uppercase tracking-[6px] text-neutral-500">
            THE EVENING EDIT
          </p>

          <h1 className="max-w-4xl font-serif text-6xl leading-[1.05] text-black md:text-8xl">
            Cocktail
            <br />
            Dresses
          </h1>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-lg leading-8 text-neutral-600">
              Refined silhouettes, elegant details, and effortless pieces for
              dinners, celebrations, parties, and nights worth dressing for.
            </p>

            <p className="text-xs uppercase tracking-[3px] text-neutral-500">
              {cocktailDresses.length} styles
            </p>
          </div>
        </section>

        {/* Editorial Image */}
        <section className="mx-auto max-w-7xl px-10">
          <div className="relative h-[500px] overflow-hidden md:h-[650px]">
            <img
              src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=1800"
              alt="Elegant cocktail fashion"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute bottom-10 left-10 max-w-md text-white">
              <p className="mb-3 text-xs uppercase tracking-[4px]">
                AFTER DARK
              </p>

              <h2 className="font-serif text-4xl md:text-5xl">
                Dress for the occasion.
              </h2>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="mx-auto max-w-7xl px-10 py-28">

          <div className="mb-10 flex items-center justify-between border-b border-neutral-200 pb-5">
            <p className="text-xs uppercase tracking-[3px] text-neutral-500">
              CURATED EVENING FINDS
            </p>

            <button
              type="button"
              className="text-xs uppercase tracking-[2px] text-black transition hover:opacity-50"
            >
              Sort
            </button>
          </div>

          {cocktailDresses.length > 0 ? (
            <div className="grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
              {cocktailDresses.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="font-serif text-3xl text-neutral-800">
                New evening styles are coming soon.
              </p>

              <p className="mt-4 text-neutral-500">
                Check back soon for our latest curated finds.
              </p>
            </div>
          )}

        </section>

        {/* Editorial Closing */}
        <section className="border-t border-neutral-200 bg-[#FAF8F5]">
          <div className="mx-auto max-w-7xl px-10 py-28 text-center">

            <p className="mb-5 text-xs uppercase tracking-[5px] text-neutral-500">
              THE EVENING EDIT
            </p>

            <h2 className="mx-auto max-w-3xl font-serif text-5xl leading-tight text-black md:text-6xl">
              A little drama
              <br />
              never hurts.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-neutral-600">
              Discover elegant cocktail dresses designed to make an entrance
              without trying too hard.
            </p>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}