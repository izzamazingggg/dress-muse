export type Product = {
  id: number;
  title: string;
  brand: string;
  category:
    | "Wedding Guest Dresses"
    | "Summer Dresses"
    | "Cocktail Dresses"
    | "Vacation Dresses"
    | "Date Night Dresses";
  price: number;
  rating: number;
  reviews: number;
  image: string;
  amazonUrl: string;
};