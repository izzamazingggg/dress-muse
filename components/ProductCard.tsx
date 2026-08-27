type Product = {
  id: number;
  title: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  amazonUrl: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group">
      <a
        href={product.amazonUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block overflow-hidden bg-[#F1EEE8]"
      >
        <div className="aspect-[3/4] overflow-hidden bg-[#F1EEE8]">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain p-2 transition duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>

        <div className="absolute left-4 top-4">
          <span className="bg-white/95 px-3 py-2 text-[10px] uppercase tracking-[2px] text-[#555555]">
            {product.category}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-white/95 px-5 py-4 text-center transition duration-300 group-hover:translate-y-0">
          <span className="text-[10px] uppercase tracking-[3px] text-[#171717]">
            View on Amazon →
          </span>
        </div>
      </a>

      <div className="pt-5">
        <p className="text-[10px] uppercase tracking-[2.5px] text-[#888888]">
          {product.brand}
        </p>

        <h2 className="mt-2 font-serif text-xl leading-snug text-[#171717]">
          {product.title}
        </h2>

        <div className="mt-4 flex items-center justify-between border-t border-[#E5E1DA] pt-4">
          <p className="text-[10px] uppercase tracking-[2px] text-[#888888]">
            Available on Amazon
          </p>

          <span className="text-[10px] uppercase tracking-[2px] text-[#333333]">
            Shop →
          </span>
        </div>
      </div>
    </article>
  );
}