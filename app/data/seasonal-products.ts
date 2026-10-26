
import type { ProductVariant } from "../types/product";

export type SeasonalProduct = {
  id: number;
  title: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  amazonUrl: string;
  description?: string;
  colors?: string[];
  variants?: ProductVariant[];
};

const amazonImage = (id: string, size = "SY550") =>
  `https://m.media-amazon.com/images/I/${id}._AC_${size}_.jpg`;

function makeVariants(
  colors: string[],
  images: string[],
  amazonUrl: string
): ProductVariant[] {
  if (colors.length !== images.length) {
    throw new Error("Fall product colors and images do not match.");
  }

  return colors.map((color, index) => ({
    color,
    image: images[index],
    amazonUrl,
  }));
}

const fallData = [
  {
    id: 101,
    title: "ANRABESS Oversized Cable Knit Sweater Dress",
    brand: "ANRABESS",
    image: amazonImage("81TMCw2iDcL"),
    amazonUrl: "https://www.amazon.com/dp/B09H2LJKRP?tag=izzamazinggg-20",
    description:
      "Stay cozy and stylish with the ANRABESS Oversized Cable Knit Sweater Dress. Its chunky knit texture and relaxed silhouette make it a lovely choice for crisp fall days, casual outings, and comfortable autumn layering.",
    colors: [
      "Brown", "Beige", "White", "Apricot", "Deep Green",
      "Purple", "Rust Orange", "Pink", "Opal", "Khaki",
      "Wine Red", "Red Pink", "Cherry", "Black", "Navy",
      "Red", "Deep Gray", "Blue",
    ],
    images: [
      amazonImage("81TMCw2iDcL"),
      amazonImage("81IvK7RUpiL"),
      amazonImage("81JpM5HaUDL"),
      amazonImage("81bHvCXVV0L"),
      amazonImage("81eTmjHZ+KL"),
      amazonImage("81DPVEtmXhL"),
      amazonImage("817sNQivfsL"),
      amazonImage("81WCZpl1rCL"),
      amazonImage("81HyR6aMv8L"),
      amazonImage("719Hkn5MHHL"),
      amazonImage("818fmgyDuyL"),
      amazonImage("81of05rUFuL"),
      amazonImage("81yLUj70maL"),
      amazonImage("61aDm7FX9RL"),
      amazonImage("61nkjJS3V9L"),
      amazonImage("814+zVmEqTL"),
      amazonImage("81WB6wvWAsL"),
      amazonImage("81j+O10i1FL"),
    ],
  },
  {
    id: 102,
    title: "OFEEFAN Mock Neck Tie Waist Ribbed Knit Midi Dress",
    brand: "OFEEFAN",
    image: amazonImage("61jDUj9YvEL", "SY879"),
    amazonUrl: "https://www.amazon.com/dp/B0H466YXRB?tag=izzamazinggg-20",
    description:
      "The OFEEFAN Mock Neck Tie Waist Ribbed Knit Midi Dress brings effortless elegance to autumn dressing. With its refined ribbed texture and waist-defining tie, this versatile midi dress is a beautiful option for fall gatherings, work outfits, and dinner dates.",
    colors: [
      "Apricot", "Black", "Coffee", "Caramel", "Green",
      "Khaki", "Blue", "Dark Red", "Leopard Print", "Khaki Plaid",
    ],
    images: [
      amazonImage("61jDUj9YvEL", "SY879"),
      amazonImage("61UzMv0lGlL"),
      amazonImage("61y1JGarCUL"),
      amazonImage("61zLRsR4wnL"),
      amazonImage("61kFyeR04FL"),
      amazonImage("71U8vfvAS1L"),
      amazonImage("61zsefj1uNL"),
      amazonImage("61HzPgerHsL"),
      amazonImage("71N+aoWLtyL"),
      amazonImage("71cwp+xWakL"),
    ],
  },
  {
    id: 103,
    title: "ZESICA Fall Mock Neck Mini Sweater Dress",
    brand: "ZESICA",
    image: amazonImage("71VcJooi6vL", "SX569"),
    amazonUrl: "https://www.amazon.com/dp/B0CCDF52LV?tag=izzamazinggg-20",
    description:
      "Refresh your autumn wardrobe with the ZESICA Fall Mock Neck Mini Sweater Dress. Featuring a cozy knit look, relaxed fit, and long sleeves, this sweater dress pairs beautifully with boots and simple accessories for effortless fall styling.",
    colors: [
      "Wine", "Black", "Almond", "Apricot", "White",
      "Army Green", "Brown", "Khaki", "Dark Violet", "Navy", "Red",
    ],
    images: [
      amazonImage("71VcJooi6vL", "SX569"),
      amazonImage("71vbHZzDDTL"),
      amazonImage("71IVlRrmVDL"),
      amazonImage("71DQ9ETkj3L"),
      amazonImage("71+MAR+a8HL"),
      amazonImage("71db4uZcKNL"),
      amazonImage("81YjwYEueML"),
      amazonImage("71zM9-RQDTL"),
      amazonImage("71uYkHdbxSL"),
      amazonImage("713Do0kx3qL"),
      amazonImage("71V2FaEfGhL"),
    ],
  },
  {
    id: 104,
    title: "ZESICA Tie Waist Ribbed Knit Sweater Maxi Dress",
    brand: "ZESICA",
    image: amazonImage("81uphGeVfCL"),
    amazonUrl: "https://www.amazon.com/dp/B0D9GT5NBZ?tag=izzamazinggg-20",
    description:
      "Discover elegant autumn style with the ZESICA Tie Waist Ribbed Knit Sweater Maxi Dress. Its long sleeves, waist tie, and flowing skirt create a graceful silhouette suited to seasonal celebrations, cozy dinners, and polished everyday looks.",
    colors: [
      "Apricot", "Teal", "Dusty Blue", "Khaki", "Brown",
      "Eggplant", "Grey", "Black", "Pink", "Burgundy", "Coffee Brown",
    ],
    images: [
      amazonImage("81uphGeVfCL"),
      amazonImage("71huyZm7wnL"),
      amazonImage("71iLiAR0ynL"),
      amazonImage("713tfvAkA-L"),
      amazonImage("71obhmqIhiL"),
      amazonImage("71zkj2hFslL"),
      amazonImage("712SpVn0q7L"),
      amazonImage("61PiBYMUlgL"),
      amazonImage("71LAzvbG5nL"),
      amazonImage("716xYOIg8JL"),
      amazonImage("71Ud10v8oSL"),
    ],
  },
  {
    id: 105,
    title: "ANRABESS Long Sleeve Casual Maxi Dress with Pockets",
    brand: "ANRABESS",
    image: amazonImage("71TSTl+ut1L"),
    amazonUrl: "https://www.amazon.com/dp/B0D4DK8GMC?tag=izzamazinggg-20",
    description:
      "The ANRABESS Long Sleeve Casual Maxi Dress with Pockets combines comfort with relaxed autumn style. Its flowing maxi silhouette and practical pockets make it a versatile choice for casual outings, weekend gatherings, and everyday fall outfits.",
    colors: [
      "Khaki", "Black", "Black Floral", "Royal Blue", "Deep Green",
      "Dark Gray", "Lake Green", "Red", "Army Green",
      "Navy Blue", "Hot Pink",
    ],
    images: [
      amazonImage("71TSTl+ut1L"),
      amazonImage("61uAhxKk8jL"),
      amazonImage("81n6+3-dMcL"),
      amazonImage("61wW5nHxSCL"),
      amazonImage("61JRf0ZTTbL"),
      amazonImage("610DzGdhdWL"),
      amazonImage("71tThAt9rCL"),
      amazonImage("71HqdY+hVaL"),
      amazonImage("71MVUOEAoJL"),
      amazonImage("61WWDC2I32L"),
      amazonImage("7167faAmpWL"),
    ],
  },
  {
    id: 106,
    title: "ANRABESS Fall Long Sleeve Midi Dress with Pockets",
    brand: "ANRABESS",
    image: amazonImage("81fRPsQK2hL", "SY741"),
    amazonUrl: "https://www.amazon.com/dp/B0F7XJTTRZ?tag=izzamazinggg-20",
    description:
      "Add warm autumn color to your wardrobe with the ANRABESS Fall Long Sleeve Midi Dress. Its comfortable silhouette, long sleeves, and practical pockets make it an easy choice for seasonal outings, weekend plans, and everyday styling with boots.",
    colors: [
      "Burnt Orange", "Blue", "Burgundy", "Black", "Dark Brown",
      "Grey", "Purple", "Light Khaki", "Tan", "Navy Blue", "Green",
    ],
    images: [
      amazonImage("81fRPsQK2hL", "SY741"),
      amazonImage("81h03c22H5L"),
      amazonImage("71I4ByfK7+L"),
      amazonImage("81LSq+RhndL"),
      amazonImage("81vG950wMlL"),
      amazonImage("81jbkmmmkxL"),
      amazonImage("815x8KToZZL"),
      amazonImage("714WKb3IxML"),
      amazonImage("81Zbrhli74L"),
      amazonImage("81O3QHqLsWL"),
      amazonImage("81+U6SRhtLL"),
    ],
  },
  {
    id: 107,
    title: "PRETTYGARDEN Long Sleeve Pleated Sweater Dress",
    brand: "PRETTYGARDEN",
    image: amazonImage("71fwIbwjDLL", "SY879"),
    amazonUrl: "https://www.amazon.com/dp/B0GWM983JS?tag=izzamazinggg-20",
    description:
      "The PRETTYGARDEN Long Sleeve Pleated Sweater Dress offers a refined autumn look with its pleated skirt and waist-defining tie. Style this elegant dress with ankle boots or heels for fall dinners, gatherings, and seasonal occasions.",
    colors: [
      "Wine Red", "Brown", "Dark Green", "Black",
      "Blue Grey", "Light Khaki", "Navy Blue", "White",
    ],
    images: [
      amazonImage("71fwIbwjDLL", "SY879"),
      amazonImage("71E6IOldIvL"),
      amazonImage("71Gg193iMHL"),
      amazonImage("71I2KAS6eqL"),
      amazonImage("71YiEf6SmtL"),
      amazonImage("71QmpZlKOXL"),
      amazonImage("71q45i54azL"),
      amazonImage("71uRMJgpAdL"),
    ],
  },
  {
    id: 108,
    title: "BTFBM Bodycon Mermaid Cocktail Dress",
    brand: "BTFBM",
    image: amazonImage("61O3xesrizL", "SY741"),
    amazonUrl: "https://www.amazon.com/dp/B0FDKTCS7L?tag=izzamazinggg-20",
    description:
      "Make a statement with the BTFBM Bodycon Mermaid Cocktail Dress. Its fitted silhouette and cascading ruffle details create an elegant look for autumn weddings, cocktail parties, date nights, and special evening celebrations.",
    colors: [
      "Caramel", "White", "Navy", "Dark Green", "Royal Blue",
      "Wine Red", "Beige", "Lake Blue", "Grey Pink",
      "Rose Red", "Khaki", "Light Blue", "Pink",
      "Grey Blue", "Red", "Black", "Army Green",
      "Brown", "Coffee",
    ],
    images: [
      amazonImage("61O3xesrizL", "SY741"),
      amazonImage("61EhDPuWqAL"),
      amazonImage("61pJoK0169L"),
      amazonImage("61eg5bs4E1L"),
      amazonImage("612eYY6TX-L"),
      amazonImage("61AGYYrgzUL"),
      amazonImage("61+8VCrWFBL"),
      amazonImage("613HoUYqPnL"),
      amazonImage("61eayQR1LlL"),
      amazonImage("61SE26MjRSL"),
      amazonImage("61WwwBkuQuL"),
      amazonImage("6189kk+vBoL"),
      amazonImage("615Zy4f3H3L"),
      amazonImage("61Uyg0K0fQL"),
      amazonImage("61Jr8Q8pdlL", "SY500"),
      amazonImage("61Ms7BP-WRL"),
      amazonImage("61NhjdXVs-L"),
      amazonImage("61tAf1P-neL"),
      amazonImage("612QmYv+BgL"),
    ],
  },
];

export const fallProducts: SeasonalProduct[] = fallData.map((item) => ({
  id: item.id,
  title: item.title,
  brand: item.brand,
  category: "Fall Dresses",
  price: 0,
  rating: 0,
  reviews: 0,
  image: item.image,
  amazonUrl: item.amazonUrl,
  description: item.description,
  colors: item.colors,
  variants: makeVariants(item.colors, item.images, item.amazonUrl),
}));

// ================= HALLOWEEN COLLECTION =================
// Color-to-image order follows the image URLs supplied for each product.
const halloweenData = [
  {
    id: 109,
    title: "LANSHULAN Gothic Slim Lace Fishtail Long Dress",
    brand: "LANSHULAN",
    amazonUrl: "https://www.amazon.com/dp/B0CXMF1HZJ?tag=izzamazinggg-20",
    description:
      "A dramatic gothic-inspired long dress with romantic lace detailing and a fishtail silhouette, curated for witch-inspired Halloween looks and costume parties.",
    colors: ["Black"],
    images: [amazonImage("71-PdY96pzL", "SX569")],
  },
  {
    id: 110,
    title: "LANSHULAN Gothic Sleeve Fishtail Dress",
    brand: "LANSHULAN",
    amazonUrl: "https://www.amazon.com/dp/B0CMQDLTV3?tag=izzamazinggg-20",
    description:
      "A gothic-inspired fishtail dress with a dramatic silhouette, suited to Halloween styling and dark romantic costume looks.",
    colors: ["Selected Style"],
    images: [amazonImage("61a7H1y3BUL", "SX569")],
  },
  {
    id: 111,
    title: "Zhitunemi Renaissance Costume Dress for Women",
    brand: "Zhitunemi",
    amazonUrl: "https://www.amazon.com/dp/B07X6CV4H8?tag=izzamazinggg-20",
    description:
      "A Renaissance-inspired costume dress for Halloween, themed events, and fantasy or fairy-inspired looks, available in a range of colors.",
    colors: ["Green With Black", "Purple", "Black Green", "Black", "Green", "Blue", "Wine Red", "Red"],
    images: [
      amazonImage("71ArjD9Ds4L"),
      amazonImage("71Z1ptu-1EL"),
      amazonImage("71C9Y3Ef-FL"),
      amazonImage("71V82jBaZ2L"),
      amazonImage("71RLZM4freL"),
      amazonImage("71U4FIj+tHL"),
      amazonImage("71SzQpnWrWL"),
      amazonImage("71FByONib5L"),
    ],
  },
  {
    id: 112,
    title: "daizbella Medieval Renaissance Costume Dress",
    brand: "daizbella",
    amazonUrl: "https://www.amazon.com/dp/B0CXXS2HLS?tag=izzamazinggg-20",
    description:
      "A medieval and Renaissance-inspired costume dress with gradient color options for fantasy-themed Halloween celebrations and costume events.",
    colors: ["Gradient Blue", "Gradient Gray", "Gradient Green", "Gradient Pink", "Gradient Purple"],
    images: [
      amazonImage("715eZv5VlEL"),
      amazonImage("614aokF+0HL", "SX425"),
      amazonImage("71ju0liDVEL", "SX425"),
      amazonImage("718sTY6eEtL", "SX425"),
      amazonImage("71M9RJhCX4L", "SX425"),
    ],
  },
  {
    id: 113,
    title: "Halo Opal Renaissance Costume Women 6 Piece Medieval Outfit",
    brand: "Halo Opal",
    amazonUrl: "https://www.amazon.com/dp/B0H6WB2BZ5?tag=izzamazinggg-20",
    description:
      "A Renaissance-inspired six-piece medieval costume outfit for Halloween parties, themed celebrations, and historical fantasy looks.",
    colors: ["Army Green", "Wine Red", "Brown"],
    images: [
      amazonImage("71XznCu+fHL", "SX522"),
      amazonImage("71zYbfaT59L", "SX522"),
      amazonImage("715cMyrwpPL", "SX522"),
    ],
  },
  {
    id: 114,
    title: "Spanish Pirate Halloween Costume",
    brand: "Brand to confirm",
    amazonUrl: "https://www.amazon.com/dp/B00CBAYRK6?tag=izzamazinggg-20",
    description:
      "A pirate-themed costume for Halloween parties and dress-up events, bringing a bold character-inspired look to the seasonal edit.",
    colors: ["Selected Style"],
    images: [amazonImage("61PktK+OirL", "SY741")],
  },
  {
    id: 115,
    title: "Leg Avenue Wonderland Halloween Costume",
    brand: "Leg Avenue",
    amazonUrl: "https://www.amazon.com/dp/B01CJNBKL8?tag=izzamazinggg-20",
    description:
      "A playful Wonderland-inspired Halloween costume for themed parties, character looks, and festive dress-up occasions.",
    colors: ["Selected Style"],
    images: [amazonImage("71Fwp5iQJ0L", "SY741")],
  },
  {
    id: 116,
    title: "Leg Avenue Women's Halloween Costume",
    brand: "Leg Avenue",
    amazonUrl: "https://www.amazon.com/dp/B01CJNCV6Q?tag=izzamazinggg-20",
    description:
      "A character-inspired Halloween costume from Leg Avenue, selected for festive parties and playful seasonal dressing.",
    colors: ["Selected Style"],
    images: [amazonImage("71SvBZ5OGEL", "SY741")],
  },
];

export const halloweenProducts: SeasonalProduct[] = halloweenData.map((item) => ({
  id: item.id,
  title: item.title,
  brand: item.brand,
  category: "Halloween Costumes",
  price: 0,
  rating: 0,
  reviews: 0,
  image: item.images[0],
  amazonUrl: item.amazonUrl,
  description: item.description,
  colors: item.colors,
  variants: item.colors.length > 1
    ? makeVariants(item.colors, item.images, item.amazonUrl)
    : undefined,
}));
