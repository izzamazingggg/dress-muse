
import Link from "next/link";
import ProductCard from "../../components/ProductCard";
import { products } from "../data/products";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#171717]">

      {/* HEADER */}
      <section className="mx-auto max-w-7xl px-8 pb-20 pt-20 md:px-12 lg:px-16">

        <p className="text-xs uppercase tracking-[5px] text-[#888888]">
          THE DRESS MUSE EDIT
        </p>

        <div className="mt-6 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <h1 className="font-serif text-6xl leading-none md:text-7xl lg:text-8xl">
              The Edit
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#666666]">
              A carefully selected collection of dresses for every
              occasion, from effortless summer days to unforgettable
              evenings.
            </p>
          </div>

          <p className="text-xs uppercase tracking-[3px] text-[#777777]">
            {products.length} Styles
          </p>

        </div>
      </section>


      {/* CATEGORY NAVIGATION */}
      <section className="border-y border-[#E3E0DB] bg-white">

        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-4 px-8 py-5 md:px-12 lg:px-16">

          <span className="text-xs uppercase tracking-[3px] text-black">
            Browse
          </span>

          <Link
            href="/shop"
            className="text-xs uppercase tracking-[2px] text-[#777777] transition hover:text-black"
          >
            All Dresses
          </Link>

          <Link
            href="/wedding-guest-dresses"
            className="text-xs uppercase tracking-[2px] text-[#777777] transition hover:text-black"
          >
            Wedding Guest
          </Link>

          <Link
            href="/summer-dresses"
            className="text-xs uppercase tracking-[2px] text-[#777777] transition hover:text-black"
          >
            Summer
          </Link>

          <Link
            href="/cocktail-dresses"
            className="text-xs uppercase tracking-[2px] text-[#777777] transition hover:text-black"
          >
            Cocktail
          </Link>

          <Link
            href="/vacation-dresses"
            className="text-xs uppercase tracking-[2px] text-[#777777] transition hover:text-black"
          >
            Vacation
          </Link>

          <Link
            href="/seasonal"
            className="text-xs uppercase tracking-[2px] text-[#777777] transition hover:text-black"
          >
            Seasonal
          </Link>

        </div>
      </section>


      {/* PRODUCT GRID */}
      <section className="mx-auto max-w-7xl px-8 py-20 md:px-12 lg:px-16">

        <div className="mb-10 flex items-center justify-between border-b border-[#E3E0DB] pb-5">

          <p className="text-xs uppercase tracking-[3px] text-[#777777]">
            Curated styles
          </p>

          <p className="text-xs uppercase tracking-[3px] text-[#777777]">
            New arrivals
          </p>

        </div>


        <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>


      {/* EDITORIAL CTA */}
      <section className="border-t border-[#E3E0DB] bg-[#F1EEE8]">

        <div className="mx-auto max-w-5xl px-8 py-28 text-center">

          <p className="text-xs uppercase tracking-[5px] text-[#888888]">
            DRESS MUSE
          </p>

          <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
            Your next favorite
            <br />
            dress is waiting.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#666666]">
            Explore our curated collections and discover pieces
            selected for weddings, summer days, evenings, vacations,
            and everything in between.
          </p>

          <Link
            href="/"
            className="mt-8 inline-block bg-black px-9 py-4 text-xs uppercase tracking-[3px] text-white transition hover:bg-[#333333]"
          >
            Back to Dress Muse
          </Link>

        </div>

      </section>

    </main>
  );
}
