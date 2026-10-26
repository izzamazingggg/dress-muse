import Link from "next/link";
import { seasonalCollections } from "../data/seasonal";

export default function SeasonalPage() {
  const activeCollections = seasonalCollections.filter(
    (collection) => collection.active
  );

  return (
    <main className="bg-[#FAF8F5] text-[#171717]">

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:px-12 md:pb-28 md:pt-24">

        <div className="max-w-4xl">

          <p className="mb-5 text-[9px] uppercase tracking-[4px] text-[#A3B18A]">
            The Seasonal Edit
          </p>

          <h1 className="font-serif text-6xl leading-[0.95] tracking-[-2px] md:text-8xl">
            Seasonal
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-[#666666] md:text-base">
            Discover thoughtfully curated dresses inspired by the seasons,
            celebrations, and moments worth dressing for.
          </p>

        </div>

      </section>


      {/* ACTIVE SEASONAL COLLECTIONS */}
      <section className="border-y border-[#E3E0DB] bg-[#F1EFE9]">

        <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">

          <div className="mb-12">

            <p className="text-[9px] uppercase tracking-[4px] text-[#A3B18A]">
              Shop The Season
            </p>

            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              Current Collections
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#666666]">
              Explore the latest seasonal edits from Dress Muse.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-2">

            {activeCollections.map((collection) => (

              <Link
                key={collection.slug}
                href={`/seasonal/${collection.slug}`}
                className="group block"
              >

                <article className="relative overflow-hidden bg-[#E5DED4]">

                  <div className="aspect-[4/5] flex items-center justify-center">

                    <div className="px-8 text-center">

                      <p className="text-[9px] uppercase tracking-[4px] text-[#777064]">
                        {collection.eyebrow}
                      </p>

                      <h3 className="mt-5 font-serif text-5xl text-[#4D483F] transition duration-300 group-hover:scale-[1.02] md:text-6xl">
                        {collection.title}
                      </h3>

                      <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#777064]">
                        {collection.description}
                      </p>

                      <span className="mt-8 inline-flex border border-[#4D483F] px-7 py-3 text-[9px] uppercase tracking-[3px] transition duration-300 group-hover:bg-[#4D483F] group-hover:text-white">
                        Explore Collection →
                      </span>

                    </div>

                  </div>

                </article>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* EDITORIAL INTRO */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">

        <p className="text-[9px] uppercase tracking-[4px] text-[#A3B18A]">
          The Dress Muse
        </p>

        <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
          Dresses for every season, thoughtfully curated.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#666666]">
          From rich autumn tones to festive celebrations, explore seasonal
          edits designed to make finding the right dress feel effortless.
        </p>

        <Link
          href="/shop"
          className="mt-8 inline-flex border border-[#171717] px-8 py-4 text-[9px] uppercase tracking-[3px] transition hover:bg-[#171717] hover:text-white"
        >
          Shop The Edit
        </Link>

      </section>

    </main>
  );
}