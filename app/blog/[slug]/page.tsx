import Link from "next/link";

const stories: Record<
  string,
  {
    category: string;
    title: string;
    intro: string;
    image: string;
    paragraphs: string[];
  }
> = {
  "wedding-guest-dresses": {
    category: "WEDDING",
    title: "What to Wear to a Wedding",
    intro:
      "A thoughtful edit of elegant dresses for ceremonies, celebrations, and every beautiful moment in between.",
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1800&q=85",
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
      <main className="min-h-screen bg-[#faf8f5] px-6 py-32 text-center">
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

  return (
    <main className="bg-[#faf8f5] text-[#171717]">
      {/* ARTICLE HEADER */}
      <section className="px-6 pb-16 pt-24 md:px-12 md:pb-20 md:pt-32">
        <div className="mx-auto max-w-[1000px] text-center">
          <p className="mb-6 text-xs tracking-[0.35em] text-[#7d8b78]">
            {story.category}
          </p>

          <h1 className="mx-auto max-w-5xl font-serif text-5xl leading-[0.95] tracking-[-0.03em] md:text-7xl lg:text-8xl">
            {story.title}
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#666] md:text-lg">
            {story.intro}
          </p>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="px-6 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="aspect-[16/9] overflow-hidden bg-[#e8e4de]">
            <img
              src={story.image}
              alt={story.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-2xl">
          {story.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="mb-8 text-base leading-8 text-[#444] md:text-lg md:leading-9"
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-14">
            <Link
              href="/shop"
              className="inline-block border-b border-[#222] pb-2 text-xs tracking-[0.25em]"
            >
              SHOP THE COLLECTION →
            </Link>
          </div>
        </div>
      </article>

      {/* BACK TO JOURNAL */}
      <section className="border-t border-[#ddd8d1] px-6 py-20 text-center md:py-28">
        <p className="mb-6 text-xs tracking-[0.35em] text-[#7d8b78]">
          THE DRESS MUSE JOURNAL
        </p>

        <h2 className="font-serif text-4xl md:text-6xl">
          More from the Journal
        </h2>

        <Link
          href="/blog"
          className="mt-8 inline-block border-b border-[#222] pb-2 text-xs tracking-[0.25em]"
        >
          BACK TO JOURNAL →
        </Link>
      </section>
    </main>
  );
}