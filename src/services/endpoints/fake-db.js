// import { makeIdGenerator, slugify } from "../utils";

export const productsData = [
  {
    id: 1,
    name: "Superdry Sports Men's Winter Puffer Jacket Black",
    slug: "superdry-sports-mens-winter-puffer-jacket-black",
    price: 96,
    images: [
      "images/products/1-1.jpeg",
      "images/products/1-2.jpeg",
      "images/products/1-3.jpeg",
      "images/products/1-4.jpeg",
    ],
    badges: "new",
    rating: 4,
    reviews: 12,
    availability: "in-stock",
    brand: "Superdry",
    categories: ["jackets-&-coats"],
    size: { s: 14, m: 21, xl: 1 },
    attributes: [
      { slug: "color", values: "black" },
      { slug: "type", values: "puffer", featured: true },
      { slug: "material", values: "polyester", featured: true },
    ],
  },
  {
    id: 2,
    name: "Nike Therma Repel Men's Winter Jacket Black",
    slug: "superdry-sports-mens-winter-puffer-jacket-black",
    price: 82.51,
    compareAtPrice: 105.56,
    images: [
      "images/products/2-1.jpeg",
      "images/products/2-2.jpeg",
      "images/products/2-3.jpeg",
    ],
    badges: "sale",
    rating: 4,
    reviews: 12,
    availability: "in-stock",
    brand: "Nike",
    categories: ["jackets-&-coats"],
    size: { xs: 14, m: 21, l: 1 },
    attributes: [
      { slug: "color", values: "black" },
      { slug: "type", values: "athletic", featured: true },
      { slug: "material", values: "polyester", featured: true },
    ],
  },
  {
    id: 3,
    name: "Levi's Men's Denim Winter Jacket Blue",
    slug: "levis-mens-denim-winter-jacket-blue",
    price: 102.51,
    images: [
      "images/products/3-1.jpeg",
      "images/products/3-2.jpeg",
      "images/products/3-3.jpeg",
      "images/products/3-4.jpeg",
    ],
    rating: 5,
    reviews: 121,
    availability: "in-stock",
    brand: "Levi's",
    categories: ["jackets-&-coats"],
    size: { xxs: 14, xs: 14, s: 14, m: 21, l: 1 },
    attributes: [
      { slug: "color", values: "blue" },
      { slug: "type", values: "denim", featured: true },
      { slug: "material", values: "cotton", featured: true },
    ],
  },
  {
    id: 4,
    name: "Tommy Hilfiger Men's Long Sleeve Shirt Blue",
    slug: "tommy-hilfiger-mens-long-sleeve-shirt-blue",
    price: 80.51,
    compareAtPrice: 105.56,
    images: [
      "images/products/4-1.jpeg",
      "images/products/4-2.jpeg",
      "images/products/4-3.jpeg",
      "images/products/4-4.jpeg",
    ],
    rating: 0,
    reviews: 0,
    availability: "in-stock",
    badges: "sale",
    brand: "Tommy Hilfiger",
    categories: ["shirts"],
    size: { xxs: 14, s: 14, m: 21, xl: 1 },
    attributes: [
      { slug: "color", values: "blue" },
      { slug: "sleeve", values: "long", featured: true },
      { slug: "material", values: "cotton", featured: true },
    ],
  },
  {
    id: 5,
    name: "Lacoste Men's Short Sleeve White Shirt",
    slug: "lacoste-mens-short-sleeve-white-shirt",
    price: 100.51,
    compareAtPrice: 105.56,
    images: [
      "images/products/5-1.jpeg",
      "images/products/5-2.jpeg",
      "images/products/5-3.jpeg",
      "images/products/5-4.jpeg",
    ],
    rating: 2,
    reviews: 3,
    availability: "in-stock",
    badges: "sale",
    brand: "Lacoste",
    categories: ["shirts"],
    size: { xxs: 14, s: 14, m: 21, l: 1, xl: 1 },
    attributes: [
      { slug: "color", values: "white" },
      { slug: "sleeve", values: "short", featured: true },
      { slug: "material", values: "cotton", featured: true },
    ],
  },
];