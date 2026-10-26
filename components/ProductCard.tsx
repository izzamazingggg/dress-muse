
"use client";

import Link from "next/link";
import type { Product } from "../app/types/product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  const productUrl = `/product/${product.id}`;

  return (
    <article className="group w-full">

      {/* MAIN PRODUCT IMAGE */}
      <Link
        href={productUrl}
        className="relative block overflow-hidden bg-[#F1EEE8]"
        aria-label={`View details for ${product.title}`}
      >
        <div className="aspect-[3/4] overflow-hidden bg-[#F1EEE8]">
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />
        </div>

        {/* SUBTLE HOVER OVERLAY */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-white/95 px-5 py-4 text-center transition-transform duration-300 group-hover:translate-y-0 group-focus-within:translate-y-0">
          <span className="text-[10px] uppercase tracking-[2.5px] text-[#171717]">
            View Details →
          </span>
        </div>
      </Link>

      {/* PRODUCT INFORMATION */}
      <div className="pt-4">

        {/* BRAND */}
        <p className="text-[10px] uppercase tracking-[2px] text-[#999999]">
          {product.brand}
        </p>

        {/* PRODUCT NAME */}
        <Link
          href={productUrl}
          className="block"
        >
          <h2 className="mt-2 font-serif text-lg leading-snug text-[#171717] transition-colors hover:text-[#777064]">
            {product.title}
          </h2>
        </Link>

        {/* VIEW DETAILS LINK */}
        <Link
          href={productUrl}
          className="mt-4 inline-flex items-center gap-2 border-b border-[#B8B2A8] pb-1 text-[10px] uppercase tracking-[2px] text-[#555555] transition-colors hover:border-[#171717] hover:text-[#171717]"
        >
          View Details
          <span aria-hidden="true">→</span>
        </Link>

      </div>
    </article>
  );
}
