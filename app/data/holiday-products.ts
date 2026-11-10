
export type HolidayColor = {
  name: string;
  image: string;
};

export type HolidayProduct = {
  id: number;
  title: string;
  brand: string;
  image: string;
  amazonUrl: string;
  colors: HolidayColor[];
};

export const amazonImage = (id: string, size = "SY550") =>
  `https://m.media-amazon.com/images/I/${id}._AC_${size}_.jpg`;

export const holidayProducts: HolidayProduct[] = [
  {
    id: 201,
    title: "Bbonlinedress Halter Cocktail Prom Wedding Guest Dress",
    brand: "Bbonlinedress",
    image: amazonImage("61xHz823hmL"),
    amazonUrl:
      "https://www.amazon.com/dp/B0D5B3RKQQ?tag=izzamazinggg-20",
    colors: [
      {
        name: "Red",
        image: amazonImage("61xHz823hmL"),
      },
      {
        name: "Black",
        image: amazonImage("61jhppfGMCL"),
      },
      {
        name: "White",
        image: amazonImage("61MvoDpBYTL"),
      },
      {
        name: "A-blush",
        image: amazonImage("61Ayejxm3cL"),
      },
      {
        name: "Light Green",
        image: amazonImage("61KVFegztgL"),
      },
      {
        name: "Navy",
        image: amazonImage("61e3jVYm6cL"),
      },
      {
        name: "Royal Blue",
        image: amazonImage("617DXL2H2AL"),
      },
      {
        name: "Burgundy",
        image: amazonImage("61Fn3Q95k2L"),
      },
      {
        name: "Blue",
        image: amazonImage("61sdZ03v4eL"),
      },
      {
        name: "Dark Green",
        image: amazonImage("61S+5CptmML"),
      },
      {
        name: "Yellow",
        image: amazonImage("61v+rCOh9ML"),
      },
      {
        name: "Grape",
        image: amazonImage("61WVt6wbewL"),
      },
    ],
  },
  {
    id: 202,
    title: "TZFNTC Women Velvet Christmas Lolita Dress",
    brand: "TZFNTC",
    image: amazonImage("61BZYCZ0LqL"),
    amazonUrl:
      "https://www.amazon.com/dp/B0HNVZPXDC?tag=izzamazinggg-20",
    colors: [
      {
        name: "Red",
        image: amazonImage("61BZYCZ0LqL"),
      },
      {
        name: "Green",
        image: amazonImage("61oJsWcWLOL"),
      },
    ],
  },
  {
    id: 203,
    title: "Avidlove Women Strapless Christmas Mini Dress",
    brand: "Avidlove",
    image: amazonImage("71OzWKCwoPL"),
    amazonUrl:
      "https://www.amazon.com/dp/B0B8J4PKP6?tag=izzamazinggg-20",
    colors: [
      {
        name: "Green",
        image: amazonImage("71OzWKCwoPL"),
      },
      {
        name: "Red",
        image: amazonImage("61skHANbzGL"),
      },
    ],
  },
  {
    id: 204,
    title: "Topdress Women's Vintage Polka Audrey Dress",
    brand: "Topdress",
    image: amazonImage("71xwDEyvFUL"),
    amazonUrl:
      "https://www.amazon.com/dp/B0BQBQQSRL?tag=izzamazinggg-20",
    colors: [
      {
        name: "Red",
        image: amazonImage("71xwDEyvFUL"),
      },
      {
        name: "Red Polka Dots",
        image: amazonImage("61ogd188pyL"),
      },
      {
        name: "White",
        image: amazonImage("61VFUTfAbKL"),
      },
      {
        name: "Burgundy",
        image: amazonImage("513I2YYyPnL"),
      },
    ],
  },
  {
    id: 205,
    title: "Timormode Women's Halter 1950s Vintage Cocktail Dress",
    brand: "Timormode",
    image: amazonImage("51rfvEhA3eL"),
    amazonUrl:
      "https://www.amazon.com/dp/B0GFDM144K?tag=izzamazinggg-20",
    colors: [
      {
        name: "Red",
        image: amazonImage("51rfvEhA3eL"),
      },
      {
        name: "Green",
        image: amazonImage("51XdmhAT6bL"),
      },
      {
        name: "Dark Green",
        image: amazonImage("51mLjWU4Y6L"),
      },
      {
        name: "Burgundy",
        image: amazonImage("61vvbMbA13L"),
      },
      {
        name: "Small Red White",
        image: amazonImage("71s+hJ1HLDL"),
      },
      {
        name: "Blush",
        image: amazonImage("51UzjAzPzHL"),
      },
    ],
  },
];
