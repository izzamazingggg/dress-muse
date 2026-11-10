export type SeasonalCollection = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  active: boolean;
};

export const seasonalCollections: SeasonalCollection[] = [
  {
    slug: "fall",
    title: "Fall",
    eyebrow: "The Autumn Edit",
    description:
      "Rich tones, elegant silhouettes, and effortless dresses for the season ahead.",
    active: true,
  },
  {
    slug: "halloween",
    title: "Halloween",
    eyebrow: "The Halloween Edit",
    description:
      "Feminine, playful, and statement-making looks for Halloween parties and celebrations.",
    active: true,
  },

  // Future collections — currently hidden
  {
    slug: "thanksgiving",
    title: "Thanksgiving",
    eyebrow: "The Thanksgiving Edit",
    description:
      "Polished dresses and outfits for Thanksgiving dinners and gatherings.",
    active: false,
  },

  {
    slug: "holiday",
    title: "Holiday",
    eyebrow: "The Holiday Edit",
    description:
      "Elegant festive looks for Christmas parties and holiday celebrations.",
    active: true,
  },

  {
    slug: "new-years-eve",
    title: "New Year's Eve",
    eyebrow: "The NYE Edit",
    description:
      "Sparkle, shimmer, and standout dresses for New Year's Eve.",
    active: false,
  },
];