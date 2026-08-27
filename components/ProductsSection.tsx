import ProductCard from "./ProductCard";
import { products } from "../app/data/products";

export default function ProductsSection() {
  return (
    <section className="mx-auto max-w-7xl px-10 py-32">
      <div className="mb-16 flex items-end justify-between gap-8">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[6px] text-neutral-500">
            THE EDIT
          </p>

          <h2 className="font-serif text-5xl text-black md:text-6xl">
            Dresses We Love
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
            Carefully selected fashion finds for your next occasion.
          </p>
        </div>

        <a
          href="#"
          className="hidden border-b border-black pb-1 text-sm uppercase tracking-[2px] md:block"
        >
          View All →
        </a>
      </div>

      <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}