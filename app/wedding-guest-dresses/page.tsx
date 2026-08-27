import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import { products } from "../data/products";

export default function WeddingGuestDressesPage() {
  const weddingDresses = products.filter(
    (product) => product.category === "Wedding Guest Dresses"
  );

  return (
    <>
      <Navbar />

      <main className="bg-white pt-20">

        {/* Editorial Header */}
        <section className="mx-auto max-w-7xl px-10 py-28">
          <p className="mb-6 text-xs uppercase tracking-[6px] text-neutral-500">
            THE WEDDING EDIT
          </p>

          <h1 className="max-w-4xl font-serif text-6xl leading-[1.05] text-black md:text-8xl">
            Wedding Guest
            <br />
            Dresses
          </h1>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-lg leading-8 text-neutral-600">
              Elegant dresses for ceremonies, garden weddings, destination
              celebrations, and every beautiful moment in between.
            </p>

            <p className="text-xs uppercase tracking-[3px] text-neutral-500">
              {weddingDresses.length} styles
            </p>
          </div>
        </section>

        {/* Editorial Image */}
        <section className="mx-auto max-w-7xl px-10">
          <div className="relative h-[500px] overflow-hidden md:h-[650px]">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1800"
              alt="Elegant wedding guest fashion"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute bottom-10 left-10 max-w-md text-white">
              <p className="mb-3 text-xs uppercase tracking-[4px]">
                DRESS FOR THE MOMENT
              </p>

              <h2 className="font-serif text-4xl md:text-5xl">
                Effortless elegance
              </h2>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="mx-auto max-w-7xl px-10 py-28">

          <div className="mb-10 flex items-center justify-between border-b border-neutral-200 pb-5">
            <div>
              <p className="text-xs uppercase tracking-[3px] text-neutral-500">
                CURATED FOR YOU
              </p>
            </div>

            <button
              type="button"
              className="text-xs uppercase tracking-[2px] text-black transition hover:opacity-50"
            >
              Sort
            </button>
          </div>

          {weddingDresses.length > 0 ? (
            <div className="grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
              {weddingDresses.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="font-serif text-3xl text-neutral-800">
                New wedding guest styles are coming soon.
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
              THE DRESS MUSE JOURNAL
            </p>

            <h2 className="mx-auto max-w-3xl font-serif text-5xl leading-tight text-black md:text-6xl">
              What to wear when
              <br />
              the invitation arrives.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-neutral-600">
              Discover styling ideas, dress codes, silhouettes, and thoughtful
              outfit inspiration for your next celebration.
            </p>

            <a
              href="/blog"
              className="mt-8 inline-block border-b border-black pb-2 text-xs uppercase tracking-[3px] text-black transition hover:opacity-50"
            >
              Read the Journal →
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}