
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../data/products";
import {
  fallProducts,
  halloweenProducts,
} from "../../data/seasonal-products";
import { holidayProducts } from "../../data/holiday-products";
import type { Product } from "../../types/product";
import ProductDetails from "../../../components/ProductDetails";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return [
    ...products,
    ...fallProducts,
    ...halloweenProducts,
    ...holidayProducts,
  ].map((product) => ({
    id: String(product.id),
  }));
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const existingProduct = products.find(
    (item) => String(item.id) === id
  );

  const fallProduct = fallProducts.find(
    (item) => String(item.id) === id
  );

  const halloweenProduct = halloweenProducts.find(
    (item) => String(item.id) === id
  );

  const holidayProduct = holidayProducts.find(
    (item) => String(item.id) === id
  );

  const seasonalProduct = fallProduct ?? halloweenProduct;

  if (!existingProduct && !seasonalProduct && !holidayProduct) {
    notFound();
  }

  const validCategories: Product["category"][] = [
    "Wedding Guest Dresses",
    "Summer Dresses",
    "Cocktail Dresses",
    "Vacation Dresses",
    "Date Night Dresses",
    "Fall Dresses",
    "Halloween Dresses",
    "Holiday Dresses",
  ];

  function isValidCategory(
    category: string
  ): category is Product["category"] {
    return validCategories.some(
      (validCategory) => validCategory === category
    );
  }

  if (
    existingProduct &&
    !isValidCategory(existingProduct.category)
  ) {
    throw new Error(
      `Unsupported product category: ${existingProduct.category}`
    );
  }

  const product: Product = existingProduct
    ? {
        ...existingProduct,
        category: existingProduct.category as Product["category"],
      }
    : holidayProduct
      ? {
          id: holidayProduct.id,
          title: holidayProduct.title,
          brand: holidayProduct.brand,
          category: "Holiday Dresses",
          price: 0,
          rating: 0,
          reviews: 0,
          image: holidayProduct.image,
          amazonUrl: holidayProduct.amazonUrl,
          description:
            "Discover a thoughtfully curated dress for Christmas celebrations, festive gatherings, and memorable holiday occasions.",
          variants: holidayProduct.colors.map((color) => ({
            color: color.name,
            image: color.image,
            amazonUrl: holidayProduct.amazonUrl,
          })),
        }
      : {
          id: seasonalProduct!.id,
          title: seasonalProduct!.title,
          brand: seasonalProduct!.brand,
          category:
            seasonalProduct!.category as Product["category"],
          price: seasonalProduct!.price,
          rating: seasonalProduct!.rating,
          reviews: seasonalProduct!.reviews,
          image: seasonalProduct!.image,
          amazonUrl: seasonalProduct!.amazonUrl,
          description: seasonalProduct!.description,
          variants: seasonalProduct!.variants,
        };

  const collectionHref = holidayProduct
    ? "/seasonal/holiday"
    : halloweenProduct
      ? "/seasonal/halloween"
      : fallProduct
        ? "/seasonal/fall"
        : "/shop";

  const collectionName = holidayProduct
    ? "Holiday Collection"
    : halloweenProduct
      ? "Halloween Collection"
      : fallProduct
        ? "Fall Collection"
        : "Shop";

  const availableColors = holidayProduct
    ? holidayProduct.colors.map((color) => color.name)
    : seasonalProduct?.colors ?? [];

  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-12">
        <nav className="mb-10 text-xs text-[#777064]">
          <Link href="/" className="hover:underline">
            Home
          </Link>

          <span className="mx-3">/</span>

          <Link
            href={collectionHref}
            className="hover:underline"
          >
            {collectionName}
          </Link>

          <span className="mx-3">/</span>

          <span className="text-[#171717]">
            {product.brand}
          </span>
        </nav>

        <ProductDetails
          product={product}
          availableColors={availableColors}
        />
      </div>
    </main>
  );
}
