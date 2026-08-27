type CategoryCardProps = {
  title: string;
  image: string;
};

export default function CategoryCard({
  title,
  image,
}: CategoryCardProps) {
  return (
    <a
      href="#"
      className="group block"
    >
      <div className="aspect-[3/4] overflow-hidden bg-neutral-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="mt-5 flex items-center justify-between">

        <h3 className="font-serif text-2xl text-black">
          {title}
        </h3>

        <span className="text-xl transition group-hover:translate-x-1">
          →
        </span>

      </div>
    </a>
  );
}