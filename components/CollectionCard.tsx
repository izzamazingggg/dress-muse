import Link from "next/link";

type CollectionCardProps = {
  title: string;
  image: string;
  href: string;
};

export default function CollectionCard({
  title,
  image,
  href,
}: CollectionCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative overflow-hidden rounded-3xl">
        <img
          src={image}
          alt={title}
          className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/30" />

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h3 className="font-serif text-3xl text-white">
            {title}
          </h3>

          <p className="mt-3 text-xs uppercase tracking-[3px] text-white">
            Explore Collection →
          </p>
        </div>
      </div>
    </Link>
  );
}