import Link from "next/link";
import ProductCard from "../../components/ProductCard";
import { products } from "../data/products";

export default function VacationDressesPage() {
  const categoryProducts = products.filter(
    (product) => product.category === "Vacation Dresses"
  );

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#171717]">
      <section className="mx-auto max-w-7xl px-8 pb-20 pt-20 md:px-12 lg:px-16">
        <p className="text-xs uppercase tracking-[5px] text-[#888888]">
          THE RESORT EDIT
        </p>

        <h1 className="mt-6 font-serif text-6xl leading-none md:text-7xl lg:text-8xl">
          Vacation
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-8 text-[#666666]">
          Relaxed dresses for resort mornings, seaside afternoons,
          sunset dinners, and wherever your next escape takes you.
        </p>

        <div className="mt-12 flex justify-between border-b border-[#E3E0DB] pb-5">
          <span className="text-xs uppercase tracking-[3px] text-[#777777]">
            {categoryProducts.length} Styles
          </span>

          <Link
            href="/shop"
            className="text-xs uppercase tracking-[3px] text-[#777777] hover:text-black"
          >
            View All →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 pb-24 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}