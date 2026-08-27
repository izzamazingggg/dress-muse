export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-10 py-20 lg:py-28">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Left */}
        <div>
          <p className="mb-6 text-xs uppercase tracking-[8px] text-neutral-500">
            SPRING / SUMMER 2026
          </p>

          <h1 className="font-serif text-6xl leading-[0.95] text-black md:text-7xl xl:text-8xl">
            Timeless
            <br />
            Style
            <br />
            Begins Here.
          </h1>

          <p className="mt-10 max-w-md text-lg leading-8 text-neutral-600">
            Discover beautifully curated dresses inspired by modern elegance.
            From weddings to vacations, Dress Muse brings together fashion
            you'll actually want to wear.
          </p>

          <div className="mt-12 flex gap-10">
            <a
              href="#"
              className="border-b border-black pb-1 text-sm uppercase tracking-[2px]"
            >
              Explore Collection
            </a>

            <a
              href="#"
              className="border-b border-transparent pb-1 text-sm uppercase tracking-[2px] hover:border-black"
            >
              Fashion Journal
            </a>
          </div>
        </div>

        {/* Right */}

        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1400"
            alt="Editorial Fashion"
            className="h-[760px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}