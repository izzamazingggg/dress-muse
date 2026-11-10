import Link from "next/link";

export const metadata = {
  title: "The Journal: Style Notes and Dress Ideas",
  description:
    "Style notes, dress-code guidance and curated edits for weddings, parties, summer and travel.",
};

const journalPosts = [
  {
    slug: "wedding-guest-dresses",
    number: "01",
    category: "WEDDING",
    title: "What to Wear to a Wedding",
    description:
      "Elegant wedding guest dresses chosen for celebrations, ceremonies, and everything in between.",
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "summer-dresses",
    number: "02",
    category: "SUMMER",
    title: "The Summer Dress Edit",
    description:
      "Easy, beautiful dresses made for sunny days, warm evenings, and effortless summer style.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "cocktail-dresses",
    number: "03",
    category: "COCKTAIL",
    title: "The Cocktail Edit",
    description:
      "Polished silhouettes and statement pieces for dinners, parties, and special evenings.",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "vacation-dresses",
    number: "04",
    category: "VACATION",
    title: "Dresses for Your Next Escape",
    description:
      "Relaxed vacation styles for beach days, city breaks, dinners, and everything on your itinerary.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-[#faf8f5] text-[#171717]">
      {/* HEADER */}
      <section className="px-6 pb-20 pt-24 md:px-12 md:pb-28 md:pt-32">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-6 text-xs tracking-[0.35em] text-[#7d8b78]">
            THE DRESS MUSE JOURNAL
          </p>

          <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.03em] md:text-7xl lg:text-8xl">
            The Journal
          </h1>

          <div className="mt-10 max-w-2xl">
            <p className="text-base leading-8 text-[#555] md:text-lg">
              A considered collection of style notes, dress inspiration, and
              thoughtful edits to help you find something beautiful to wear.
            </p>
          </div>
        </div>
      </section>

      {/* JOURNAL POSTS */}
      <section className="px-6 pb-28 md:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {journalPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#e8e4de]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-black/10 transition duration-500 group-hover:bg-black/20" />

                    <div className="absolute left-6 top-6">
                      <span className="text-xs tracking-[0.3em] text-white">
                        JOURNAL {post.number}
                      </span>
                    </div>
                  </div>

                  <div className="pt-6">
                    <p className="mb-3 text-xs tracking-[0.3em] text-[#7d8b78]">
                      {post.category}
                    </p>

                    <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                      {post.title}
                    </h2>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#666]">
                      {post.description}
                    </p>

                    <span className="mt-6 inline-block border-b border-[#222] pb-1 text-xs tracking-[0.25em]">
                      READ THE STORY →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="border-t border-[#ddd8d1] px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="mb-6 text-xs tracking-[0.35em] text-[#7d8b78]">
            FIND YOUR NEXT LOOK
          </p>

          <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
            Beautiful dresses, thoughtfully discovered.
          </h2>

          <Link
            href="/shop"
            className="mt-10 inline-block border-b border-[#222] pb-2 text-xs tracking-[0.25em]"
          >
            SHOP THE COLLECTION →
          </Link>
        </div>
      </section>
    </main>
  );
}