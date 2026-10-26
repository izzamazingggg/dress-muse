
"use client";

import { useState } from "react";
import type { Product } from "../app/types/product";

type ProductDetailsProps = {
  product: Product;
  availableColors?: string[];
};

export default function ProductDetails({
  product,
  availableColors = [],
}: ProductDetailsProps) {
  const variants = product.variants ?? [];

  const [selectedVariantIndex, setSelectedVariantIndex] =
    useState(0);

  const [showAllColors, setShowAllColors] =
    useState(false);

  const selectedVariant = variants[selectedVariantIndex];

  const currentImage =
    selectedVariant?.image || product.image;

  const amazonUrl =
    selectedVariant?.amazonUrl || product.amazonUrl;

  const hasImageVariants = variants.length > 0;

  const colorOptions = hasImageVariants
    ? variants.map((variant) => variant.color)
    : availableColors;

  const visibleColors = showAllColors
    ? colorOptions
    : colorOptions.slice(0, 6);

  const remainingColors = Math.max(
    colorOptions.length - 6,
    0
  );

  function selectVariant(index: number) {
    if (hasImageVariants) {
      setSelectedVariantIndex(index);
    }
  }

  return (
    <div className="grid items-start gap-10 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

      {/* LARGE PRODUCT IMAGE */}
      <div className="lg:sticky lg:top-8">
        <div className="aspect-[3/4] overflow-hidden bg-[#F1EEE8]">
          <img
            src={currentImage}
            alt={`${product.title}${
              selectedVariant
                ? ` in ${selectedVariant.color}`
                : ""
            }`}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* PRODUCT INFORMATION */}
      <div className="pt-2 lg:pt-5">

        <p className="text-[10px] uppercase tracking-[3px] text-[#9B948A]">
          The Dress Muse Edit
        </p>

        <p className="mt-7 text-[11px] uppercase tracking-[2px] text-[#777777]">
          {product.brand}
        </p>

        <h1 className="mt-3 font-serif text-3xl leading-tight text-[#171717] md:text-4xl">
          {product.title}
        </h1>

        <p className="mt-4 text-[11px] uppercase tracking-[1.5px] text-[#999999]">
          {product.category}
        </p>

        {/* AVAILABLE COLORS */}
        {colorOptions.length > 0 && (
          <div className="mt-9 border-t border-[#E5E1DA] pt-7">
            <div className="flex items-center justify-between gap-3">

              <p className="text-[11px] uppercase tracking-[1.5px] text-[#777777]">
                {hasImageVariants ? "Color:" : "Available Colors"}
                {hasImageVariants && (
                  <span className="ml-1 text-[#171717]">
                    {selectedVariant?.color}
                  </span>
                )}
              </p>

              <span className="text-[10px] text-[#999999]">
                {colorOptions.length}{" "}
                {colorOptions.length === 1
                  ? "option"
                  : "options"}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">

              {hasImageVariants
                ? visibleColors.map((color, index) => {
                    const variant = variants[index];

                    return (
                      <button
                        key={`${color}-${index}`}
                        type="button"
                        onClick={() => selectVariant(index)}
                        aria-label={`Select ${color}`}
                        aria-pressed={
                          selectedVariantIndex === index
                        }
                        title={color}
                        className={`h-[64px] w-[48px] shrink-0 overflow-hidden border bg-[#F5F3EF] p-[2px] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717] ${
                          selectedVariantIndex === index
                            ? "border-[#171717]"
                            : "border-[#E8E5DF] hover:border-[#999999]"
                        }`}
                      >
                        <img
                          src={variant.image}
                          alt={`${color} dress`}
                          loading="lazy"
                          className="h-full w-full object-contain"
                        />
                      </button>
                    );
                  })
                : visibleColors.map((color, index) => (
                    <span
                      key={`${color}-${index}`}
                      className="inline-flex min-h-[36px] items-center border border-[#E5E1DA] bg-[#F5F3EF] px-3 py-2 text-xs text-[#555555]"
                    >
                      {color}
                    </span>
                  ))}

              {remainingColors > 0 && (
                <button
                  type="button"
                  onClick={() =>
                    setShowAllColors((previous) => !previous)
                  }
                  aria-expanded={showAllColors}
                  className="flex min-h-[36px] min-w-[48px] items-center justify-center border border-[#E8E5DF] px-2 text-xs text-[#555555] transition hover:border-[#171717]"
                >
                  {showAllColors
                    ? "−"
                    : `+${remainingColors}`}
                </button>
              )}
            </div>

            {remainingColors > 0 && (
              <button
                type="button"
                onClick={() =>
                  setShowAllColors((previous) => !previous)
                }
                aria-expanded={showAllColors}
                className="mt-4 text-[10px] uppercase tracking-[1.5px] text-[#777777] underline-offset-4 hover:text-[#171717] hover:underline"
              >
                {showAllColors
                  ? "Show fewer colors"
                  : "View all colors"}
              </button>
            )}

            {!hasImageVariants && (
              <p className="mt-4 text-xs leading-6 text-[#888888]">
                Color availability may vary. Select your preferred
                color on Amazon before purchasing.
              </p>
            )}
          </div>
        )}

        {/* PRODUCT DESCRIPTION */}
        {product.description && (
          <p className="mt-7 text-sm leading-7 text-[#666666]">
            {product.description}
          </p>
        )}

        {/* BUY ON AMAZON */}
        <a
          href={amazonUrl}
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          className="mt-10 flex w-full items-center justify-center gap-3 bg-[#171717] px-6 py-5 text-[11px] uppercase tracking-[2.5px] text-white transition hover:bg-[#4D483F]"
        >
          Buy on Amazon
          <span aria-hidden="true">↗</span>
        </a>

        <p className="mt-4 text-center text-xs leading-6 text-[#888888]">
          Check current prices, available sizes, and
          customer reviews on Amazon.
        </p>

        {/* AFFILIATE DISCLOSURE */}
        <p className="mt-8 border-t border-[#E5E1DA] pt-6 text-xs leading-6 text-[#888888]">
          As an Amazon Associate, Dress Muse earns
          from qualifying purchases.
        </p>

        {/* WHY WE LOVE THIS DRESS */}
        <div className="mt-10 border-t border-[#E5E1DA] pt-8">
          <h2 className="font-serif text-2xl text-[#171717]">
            Why We Love This Dress
          </h2>

          <p className="mt-4 text-sm leading-8 text-[#666666]">
            A thoughtfully curated Dress Muse find
            for your wardrobe. Explore the available
            colors and discover more details,
            measurements, and customer feedback on
            Amazon.
          </p>
        </div>
      </div>
    </div>
  );
}
