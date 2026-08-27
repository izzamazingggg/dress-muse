type SectionTitleProps = {
  subtitle: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  subtitle,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-16 max-w-3xl">

      <p className="mb-4 text-xs uppercase tracking-[6px] text-gray-500">
        {subtitle}
      </p>

      <h2 className="font-serif text-5xl leading-tight text-black md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          {description}
        </p>
      )}

    </div>
  );
}