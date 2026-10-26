
export type ProductVariant = {
  color: string;
  hex?: string;
  image: string;
  amazonUrl: string;
};

export type Product = {
  id: number;
  title: string;
  brand: string;
  category:
    | "Wedding Guest Dresses"
    | "Summer Dresses"
    | "Cocktail Dresses"
    | "Vacation Dresses"
    | "Date Night Dresses"
    | "Fall Dresses"
    | "Halloween Dresses"
    | "Holiday Dresses";

  price: number;
  rating: number;
  reviews: number;
  image: string;
  amazonUrl: string;

  description?: string;
  gallery?: string[];
  variants?: ProductVariant[];
};
