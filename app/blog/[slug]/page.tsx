import Link from "next/link";

const stories: Record<
  string,
  {
    category: string;
    title: string;
    intro: string;
    image: string;
    paragraphs: string[];
    accent: string;
    layout: "wedding" | "summer" | "cocktail" | "vacation";
  }
> = {
  "wedding-guest-dresses": {
    category: "WEDDING",
    title: "What to Wear to a Wedding",
    intro:
      "A thoughtful edit of elegant dresses for ceremonies, celebrations, and every beautiful moment in between.",
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1800&q=85",
    accent: "#7d8b78",
    layout: "wedding",
    paragraphs: [
      "Finding the right wedding guest dress does not have to be complicated. The best pieces balance elegance, comfort, and a sense of occasion.",
      "Look for silhouettes that feel polished without being overly formal. Soft florals, flattering midi lengths, and graceful details can make an outfit feel special while remaining effortless.",
      "Whether the celebration is an afternoon ceremony or an evening reception, a well-chosen dress can become one of those pieces you reach for again and again.",
    ],
  },

  "summer-dresses": {
    category: "SUMMER",
    title: "The Summer Dress Edit",
    intro:
      "Easy dresses for sunny days, warm evenings, weekend plans, and everything that makes summer feel effortless.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1800&q=85",
    accent: "#c99b72",
    layout: "summer",
    paragraphs: [
      "Summer dressing should feel easy. Lightweight fabrics, relaxed silhouettes, and beautiful colors make getting dressed feel much less complicated.",
      "From casual daytime dresses to pieces that transition beautifully into dinner, the right summer wardrobe is built around versatility.",
      "Choose styles that make you feel comfortable and confident, then let the accessories do the rest.",
    ],
  },

  "cocktail-dresses": {
    category: "COCKTAIL",
    title: "The Cocktail Edit",
    intro:
      "Polished silhouettes and statement dresses for dinners, parties, celebrations, and evenings worth dressing up for.",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1800&q=85",
    accent: "#8c7b82",
    layout: "cocktail",
    paragraphs: [
      "A cocktail dress is the perfect middle ground between everyday dressing and full eveningwear. It should feel elevated without feeling excessive.",
      "Classic silhouettes are particularly easy to style. Add simple jewelry, a small handbag, and a pair of heels for a look that feels considered without being overworked.",
      "The most memorable evening looks are often the simplest ones. Start with a beautiful dress and let the details complement it.",
    ],
  },

  "vacation-dresses": {
    category: "VACATION",
    title: "Dresses for Your Next Escape",
    intro:
      "Relaxed dresses for beach days, city breaks, dinners, and all the beautiful moments on your next itinerary.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=85",
    accent: "#8da6a0",
    layout: "vacation",
    paragraphs: [
      "A good vacation wardrobe should be easy to pack and even easier to wear. Dresses are one of the simplest ways to create complete looks without bringing an entire closet.",
      "Flowing silhouettes work beautifully for warm destinations, while versatile midi dresses can move effortlessly from daytime exploring to dinner.",
      "The goal is simple: pieces that feel beautiful, comfortable, and ready for wherever the day takes you.",
    ],
  },
};

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = stories[slug];

  if (!story) {
    return (
      <main className="min-h-screen bg-[#faf8f5] px-6 py-32 text-center text-[#171717]">
        <p className="mb-6 text-xs tracking-[0.35em] text-[#7d8b78]">
          THE DRESS MUSE JOURNAL
        </p>

        <h1 className="font-serif text-5xl md:text-7xl">
          Story not found
        </h1>

        <Link
          href="/blog"
          className="mt-10 inline-block border-b border-[#222] pb-2 text-xs tracking-[0.25em]"
        >
          BACK TO JOURNAL →
        </Link>
      </main>
    );
  }

  /* =========================================================
     WEDDING JOURNAL
     Elegant / editorial / refined
  ========================================================= */

  if (story.layout === "wedding") {
    return (
      <main className="bg-[#faf8f5] text-[#171717]">
        <section className="px-6 pb-20 pt-24 md:px-12 md:pb-28 md:pt-32">
          <div className="mx-auto grid max-w-[1200px] items-end gap-12 md:grid-cols-2">
            <div>
              <p className="mb-7 text-xs tracking-[0.35em] text-[#7d8b78]">
                THE DRESS MUSE JOURNAL
              </p>

              <h1 className="font-serif text-5xl leading-[0.95] tracking-[-0.03em] md:text-7xl lg:text-8xl">
                {story.title}
              </h1>
            </div>

            <div className="pb-2 md:pl-8">
              <p className="text-base leading-8 text-[#666] md:text-lg">
                {story.intro}
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12">
          <div className="mx-auto max-w-[1400px]">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={story.image}
                alt={story.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                <span className="bg-[#faf8f5] px-5 py-3 text-xs tracking-[0.3em]">
                  WEDDING EDIT
                </span>
              </div>
            </div>
          </div>
        </section>

        <article className="px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-[760px]">
            <div className="mb-16 border-l border-[#7d8b78] pl-6 md:pl-10">
              <p className="font-serif text-2xl leading-relaxed md:text-3xl">
                Dressing for a wedding is about finding the balance between
                feeling special and feeling completely yourself.
              </p>
            </div>

            {story.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="mb-8 text-base leading-8 text-[#444] md:text-lg md:leading-9"
              >
                {paragraph}
              </p>
            ))}

            <Link
              href="/wedding-guest-dresses"
              className="mt-8 inline-block border-b border-[#222] pb-2 text-xs tracking-[0.25em]"
            >
              SHOP WEDDING GUEST DRESSES →
            </Link>
          </div>
        </article>

        <JournalFooter />
      </main>
    );
  }

  /* =========================================================
     SUMMER JOURNAL
     Light / airy / relaxed / warm
  ========================================================= */

  if (story.layout === "summer") {
    return (
      <main className="bg-[#f4efe7] text-[#28251f]">
        <section className="px-6 pb-16 pt-20 md:px-12 md:pb-20 md:pt-28">
          <div className="mx-auto max-w-[1200px] text-center">
            <p className="mb-5 text-xs tracking-[0.4em] text-[#b17e51]">
              SUMMER 2026
            </p>

            <h1 className="mx-auto max-w-5xl font-serif text-6xl leading-[0.92] tracking-[-0.04em] md:text-8xl lg:text-9xl">
              {story.title}
            </h1>

            <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-[#716b61] md:text-lg">
              {story.intro}
            </p>
          </div>
        </section>

        <section className="px-6 md:px-12">
          <div className="mx-auto max-w-[1100px]">
            <div className="aspect-[3/4] overflow-hidden md:aspect-[4/5]">
              <img
                src={story.image}
                alt={story.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto grid max-w-[1000px] gap-16 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs tracking-[0.35em] text-[#b17e51]">
                THE SUMMER NOTE
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                Less effort.
                <br />
                More ease.
              </h2>
            </div>

            <div>
              {story.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-8 text-base leading-8 text-[#5f5a52] md:text-lg md:leading-9"
                >
                  {paragraph}
                </p>
              ))}

              <Link
                href="/summer-dresses"
                className="mt-4 inline-block border-b border-[#28251f] pb-2 text-xs tracking-[0.25em]"
              >
                SHOP SUMMER DRESSES →
              </Link>
            </div>
          </div>
        </section>

        <JournalFooter />
      </main>
    );
  }

  /* =========================================================
     COCKTAIL JOURNAL
     Dark / dramatic / evening
  ========================================================= */

  if (story.layout === "cocktail") {
    return (
      <main className="bg-[#1b1a1b] text-[#f4f0eb]">
        <section className="relative overflow-hidden px-6 pb-24 pt-24 md:px-12 md:pb-32 md:pt-32">
          <div className="mx-auto max-w-[1200px]">
            <p className="mb-8 text-xs tracking-[0.4em] text-[#b9a6ad]">
              THE DRESS MUSE JOURNAL / 03
            </p>

            <h1 className="max-w-5xl font-serif text-6xl leading-[0.9] tracking-[-0.04em] md:text-8xl lg:text-9xl">
              {story.title}
            </h1>

            <p className="mt-10 max-w-xl text-base leading-8 text-[#bdb8b9] md:text-lg">
              {story.intro}
            </p>
          </div>
        </section>

        <section className="px-6 md:px-12">
          <div className="mx-auto grid max-w-[1300px] gap-5 md:grid-cols-[1.25fr_0.75fr]">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={story.image}
                alt={story.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="hidden items-end justify-center border border-[#403c3f] p-10 md:flex">
              <div>
                <p className="text-xs tracking-[0.35em] text-[#b9a6ad]">
                  AFTER DARK
                </p>

                <p className="mt-5 font-serif text-4xl leading-tight">
                  For evenings
                  <br />
                  worth remembering.
                </p>
              </div>
            </div>
          </div>
        </section>

        <article className="px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-2xl">
            {story.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="mb-8 text-base leading-8 text-[#c9c4c5] md:text-lg md:leading-9"
              >
                {paragraph}
              </p>
            ))}

            <Link
              href="/cocktail-dresses"
              className="mt-6 inline-block border-b border-[#f4f0eb] pb-2 text-xs tracking-[0.25em]"
            >
              SHOP COCKTAIL DRESSES →
            </Link>
          </div>
        </article>

        <JournalFooter dark />
      </main>
    );
  }

  /* =========================================================
     VACATION JOURNAL
     Image-led / travel / relaxed luxury
  ========================================================= */

  return (
    <main className="bg-[#eef1ed] text-[#202723]">
      <section className="px-6 pb-16 pt-20 md:px-12 md:pb-20 md:pt-28">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-6 text-xs tracking-[0.4em] text-[#6e877e]">
            THE DRESS MUSE JOURNAL
          </p>

          <div className="grid gap-10 md:grid-cols-[1fr_0.65fr] md:items-end">
            <h1 className="font-serif text-6xl leading-[0.9] tracking-[-0.04em] md:text-8xl lg:text-9xl">
              {story.title}
            </h1>

            <p className="max-w-md text-base leading-8 text-[#68736e] md:pb-2 md:text-lg">
              {story.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={story.image}
              alt={story.title}
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10">
              <span className="bg-[#eef1ed] px-5 py-3 text-xs tracking-[0.3em]">
                ESCAPE EDIT
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-16 flex items-center gap-6">
            <span className="h-px flex-1 bg-[#cbd3ce]" />
            <p className="text-xs tracking-[0.35em] text-[#6e877e]">
              PACK LIGHT / DRESS BEAUTIFULLY
            </p>
            <span className="h-px flex-1 bg-[#cbd3ce]" />
          </div>

          <div className="grid gap-14 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-5xl leading-tight md:text-6xl">
                Wherever you go,
                <br />
                dress for the moment.
              </h2>
            </div>

            <div>
              {story.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-8 text-base leading-8 text-[#58635e] md:text-lg md:leading-9"
                >
                  {paragraph}
                </p>
              ))}

              <Link
                href="/vacation-dresses"
                className="mt-4 inline-block border-b border-[#202723] pb-2 text-xs tracking-[0.25em]"
              >
                SHOP VACATION DRESSES →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <JournalFooter />
    </main>
  );
}

/* =========================================================
   SHARED JOURNAL FOOTER
========================================================= */

function JournalFooter({ dark = false }: { dark?: boolean }) {
  return (
    <section
      className={
        dark
          ? "border-t border-[#403c3f] px-6 py-24 text-center md:px-12 md:py-32"
          : "border-t border-[#d5dbd6] px-6 py-24 text-center md:px-12 md:py-32"
      }
    >
      <p
        className={
          dark
            ? "mb-6 text-xs tracking-[0.35em] text-[#b9a6ad]"
            : "mb-6 text-xs tracking-[0.35em] text-[#7d8b78]"
        }
      >
        THE DRESS MUSE JOURNAL
      </p>

      <h2
        className={
          dark
            ? "font-serif text-4xl text-[#f4f0eb] md:text-6xl"
            : "font-serif text-4xl md:text-6xl"
        }
      >
        More from the Journal
      </h2>

      <Link
        href="/blog"
        className={
          dark
            ? "mt-8 inline-block border-b border-[#f4f0eb] pb-2 text-xs tracking-[0.25em]"
            : "mt-8 inline-block border-b border-[#222] pb-2 text-xs tracking-[0.25em]"
        }
      >
        BACK TO JOURNAL →
      </Link>
    </section>
  );
}