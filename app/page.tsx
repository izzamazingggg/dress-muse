import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FAF8F5] text-[#171717]">

        {/* ================= HERO ================= */}
        <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#E8E4DE]">

          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=2000&q=90"
            alt="Elegant fashion editorial"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-end px-8 py-16 md:px-12 lg:px-16">

            <div className="max-w-2xl text-white">

              <p className="mb-5 text-xs uppercase tracking-[6px]">
                THE DRESS MUSE EDIT
              </p>

              <h1 className="font-serif text-6xl leading-[0.95] md:text-7xl lg:text-8xl">
                Dresses
                <br />
                worth
                <br />
                discovering.
              </h1>

              <p className="mt-7 max-w-lg text-sm leading-7 md:text-base">
                A curated edit of beautiful dresses for weddings,
                summer days, evenings, vacations, and everything
                in between.
              </p>

              <Link
                href="/shop"
                className="mt-8 inline-block border border-white px-8 py-4 text-xs uppercase tracking-[3px] transition hover:bg-white hover:text-black"
              >
                Shop the collection
              </Link>

            </div>
          </div>
        </section>


        {/* ================= INTRO ================= */}
        <section className="mx-auto max-w-7xl px-8 py-28 md:px-12 lg:px-16">

          <div className="grid gap-12 md:grid-cols-2 md:items-end">

            <div>
              <p className="text-xs uppercase tracking-[5px] text-[#8A8A8A]">
                WELCOME TO DRESS MUSE
              </p>

              <h2 className="mt-6 max-w-2xl font-serif text-5xl leading-tight md:text-6xl">
                A considered wardrobe,
                <br />
                one dress at a time.
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-base leading-8 text-[#666666]">
                We believe finding a beautiful dress should feel inspiring,
                not overwhelming. Dress Muse brings together carefully
                selected styles from Amazon so you can discover your next
                favorite look with ease.
              </p>

              <Link
                href="/shop"
                className="mt-7 inline-block border-b border-black pb-2 text-xs uppercase tracking-[3px]"
              >
                Explore all dresses →
              </Link>
            </div>

          </div>
        </section>


        {/* ================= FEATURED COLLECTION ================= */}
        <section className="bg-white py-28">

          <div className="mx-auto max-w-7xl px-8 md:px-12 lg:px-16">

            <div className="flex items-end justify-between">

              <div>
                <p className="text-xs uppercase tracking-[5px] text-[#8A8A8A]">
                  THE COLLECTION
                </p>

                <h2 className="mt-4 font-serif text-5xl md:text-6xl">
                  Shop by occasion
                </h2>
              </div>

              <Link
                href="/shop"
                className="hidden border-b border-black pb-2 text-xs uppercase tracking-[3px] md:block"
              >
                View all →
              </Link>

            </div>


            <div className="mt-16 grid gap-6 md:grid-cols-2">

              {/* WEDDING */}
              <Link
                href="/wedding-guest-dresses"
                className="group relative block overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=90"
                  alt="Wedding guest dresses"
                  className="h-[600px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/25" />

                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <p className="text-xs uppercase tracking-[4px]">
                    COLLECTION 01
                  </p>

                  <h3 className="mt-3 font-serif text-4xl">
                    Wedding Guest
                  </h3>

                  <p className="mt-4 text-xs uppercase tracking-[3px]">
                    Discover →
                  </p>
                </div>
              </Link>


              {/* SUMMER */}
              <Link
                href="/summer-dresses"
                className="group relative block overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=90"
                  alt="Summer dresses"
                  className="h-[600px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/25" />

                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <p className="text-xs uppercase tracking-[4px]">
                    COLLECTION 02
                  </p>

                  <h3 className="mt-3 font-serif text-4xl">
                    Summer
                  </h3>

                  <p className="mt-4 text-xs uppercase tracking-[3px]">
                    Discover →
                  </p>
                </div>
              </Link>

            </div>


            <div className="mt-6 grid gap-6 md:grid-cols-2">

              {/* COCKTAIL */}
              <Link
                href="/cocktail-dresses"
                className="group relative block overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=1200&q=90"
                  alt="Cocktail dresses"
                  className="h-[600px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/25" />

                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <p className="text-xs uppercase tracking-[4px]">
                    COLLECTION 03
                  </p>

                  <h3 className="mt-3 font-serif text-4xl">
                    Cocktail
                  </h3>

                  <p className="mt-4 text-xs uppercase tracking-[3px]">
                    Discover →
                  </p>
                </div>
              </Link>


              {/* VACATION */}
              <Link
                href="/vacation-dresses"
                className="group relative block overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=90"
                  alt="Vacation dresses"
                  className="h-[600px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/25" />

                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <p className="text-xs uppercase tracking-[4px]">
                    COLLECTION 04
                  </p>

                  <h3 className="mt-3 font-serif text-4xl">
                    Vacation
                  </h3>

                  <p className="mt-4 text-xs uppercase tracking-[3px]">
                    Discover →
                  </p>
                </div>
              </Link>

            </div>

          </div>
        </section>


        {/* ================= EDITORIAL STATEMENT ================= */}
        <section className="mx-auto max-w-7xl px-8 py-32 md:px-12 lg:px-16">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-xs uppercase tracking-[5px] text-[#8A8A8A]">
                THE MUSE NOTE
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
                Style should feel
                <br />
                effortless.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-[#666666]">
                From romantic silhouettes to effortless summer dresses,
                we curate pieces that make getting dressed feel a little
                more special. Consider this your destination for discovering
                beautiful fashion without the endless scrolling.
              </p>

              <Link
                href="/shop"
                className="mt-8 inline-block border-b border-black pb-2 text-xs uppercase tracking-[3px]"
              >
                Discover the edit →
              </Link>
            </div>

          </div>
        </section>


        {/* ================= FULL WIDTH IMAGE ================= */}
        <section className="relative h-[75vh] min-h-[500px] overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=2000&q=90"
            alt="Fashion editorial"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="relative flex h-full items-center justify-center px-8 text-center text-white">

            <div>

              <p className="text-xs uppercase tracking-[6px]">
                DRESS MUSE
              </p>

              <h2 className="mt-6 font-serif text-5xl md:text-7xl">
                Find your dress.
              </h2>

              <Link
                href="/shop"
                className="mt-8 inline-block border border-white px-8 py-4 text-xs uppercase tracking-[3px] transition hover:bg-white hover:text-black"
              >
                Shop now
              </Link>

            </div>

          </div>
        </section>


        {/* ================= FINAL CTA ================= */}
        <section className="bg-[#F1EEE8] px-8 py-32 text-center">

          <p className="text-xs uppercase tracking-[5px] text-[#777777]">
            YOUR NEXT LOOK AWAITS
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
            Because every occasion
            <br />
            deserves a beautiful dress.
          </h2>

          <Link
            href="/shop"
            className="mt-10 inline-block bg-black px-10 py-5 text-xs uppercase tracking-[3px] text-white transition hover:bg-[#333333]"
          >
            Shop the collection →
          </Link>

        </section>

      </main>
    </>
  );
}