
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "The Edit", href: "/shop" },
  { label: "Wedding", href: "/wedding-guest-dresses" },
  { label: "Summer", href: "/summer-dresses" },
  { label: "Cocktail", href: "/cocktail-dresses" },
  { label: "Vacation", href: "/vacation-dresses" },
  { label: "Seasonal", href: "/seasonal" },
  { label: "Journal", href: "/blog" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [seasonalOpen, setSeasonalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
    setSeasonalOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#E3E0DB] bg-[#FAF8F5]/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-16">
          {/* LOGO */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-serif text-3xl tracking-[-0.5px] text-[#171717]"
          >
            Dress Muse
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 lg:flex"
          >
            {navigation
              .filter((item) => item.href !== "/")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[10px] uppercase tracking-[3px] text-[#555555] transition hover:text-black"
                >
                  {item.label}
                </Link>
              ))}
          </nav>

          {/* DESKTOP SHOP LINK */}
          <Link
            href="/shop"
            className="hidden border-b border-[#171717] pb-1 text-[10px] uppercase tracking-[3px] text-[#171717] transition hover:opacity-50 lg:block"
          >
            Shop →
          </Link>

          {/* MOBILE HAMBURGER */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="dress-muse-mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F0E6E1] text-[#171717] transition hover:bg-[#E9DAD2] lg:hidden"
          >
            {menuOpen ? (
              <svg
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M5 5L19 19M19 5L5 19" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M4 7H20M4 12H20M4 17H20" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN MENU */}
      {menuOpen && (
        <div
          id="dress-muse-mobile-menu"
          className="fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto bg-[#FAF8F5] lg:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex min-h-full max-w-xl flex-col px-8 pb-12 pt-8"
          >
            <div className="flex flex-col">
              {navigation.map((item) => {
                if (item.href === "/seasonal") {
                  return (
                    <div key={item.href}>
                      <div className="flex items-center justify-between">
                        <Link
                          href="/seasonal"
                          onClick={() => setMenuOpen(false)}
                          className="py-3 font-serif text-[27px] text-[#171717]"
                        >
                          Seasonal
                        </Link>

                        <button
                          type="button"
                          aria-label={
                            seasonalOpen
                              ? "Collapse seasonal collections"
                              : "Expand seasonal collections"
                          }
                          aria-expanded={seasonalOpen}
                          onClick={() =>
                            setSeasonalOpen(!seasonalOpen)
                          }
                          className="flex h-11 w-11 items-center justify-center text-[#555555]"
                        >
                          <span className="text-xl">
                            {seasonalOpen ? "−" : "+"}
                          </span>
                        </button>
                      </div>

                      {seasonalOpen && (
                        <div className="mb-3 ml-5 flex flex-col border-l border-[#D9D0C9] pl-5">
                          <Link
                            href="/seasonal/fall"
                            onClick={() => setMenuOpen(false)}
                            className="py-3 text-sm tracking-[1px] text-[#666666]"
                          >
                            Fall Collection
                          </Link>

                          <Link
                            href="/seasonal/halloween"
                            onClick={() => setMenuOpen(false)}
                            className="py-3 text-sm tracking-[1px] text-[#666666]"
                          >
                            Halloween Collection
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="py-3 font-serif text-[27px] text-[#171717] transition hover:text-[#927C70]"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* DECORATIVE FOOTER */}
            <div className="mt-auto border-t border-[#E3E0DB] pt-9">
              <p className="text-[10px] uppercase leading-7 tracking-[4px] text-[#9B8B7F]">
                Beautiful dresses
                <br />
                for every season.
              </p>

              <p className="mt-6 font-serif text-xl italic text-[#A58F83]">
                Curated with love.
              </p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
