import cream from "@/assets/tee-cream.jpg";
import black from "@/assets/tee-black.jpg";
import yellow from "@/assets/tee-yellow.jpg";
import olive from "@/assets/tee-olive.jpg";
import white from "@/assets/tee-white.jpg";
import navy from "@/assets/tee-navy.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  colors: string[];
  description: string;
};

export const products: Product[] = [
  { id: "cream-classic", name: "Cream Classic Oversized Tee", price: 899, image: cream, category: "Oversized", colors: ["Cream"], description: "240 GSM bio-washed cotton oversized tee in soft cream. Drop shoulders, ribbed collar." },
  { id: "midnight-mark", name: "Midnight Mark Tee", price: 999, image: black, category: "Embroidered", colors: ["Black"], description: "Subtle yellow chest mark on a deep black canvas. Heavyweight 240 GSM." },
  { id: "saffron-sun", name: "Saffron Sun Tee", price: 949, image: yellow, category: "Solid", colors: ["Yellow"], description: "Pure mustard yellow oversized fit. The signature Nisarg shade." },
  { id: "olive-rune", name: "Olive Rune Anime Tee", price: 1099, image: olive, category: "Anime", colors: ["Olive"], description: "Hand-drawn anime rune on premium olive cotton. Limited drop." },
  { id: "ivory-mark", name: "Ivory Mark Tee", price: 949, image: white, category: "Embroidered", colors: ["White"], description: "Crisp ivory white tee with embroidered chest mark." },
  { id: "indigo-form", name: "Indigo Form Print Tee", price: 1199, image: navy, category: "Print", colors: ["Navy"], description: "Abstract form print on indigo. Statement piece for the collection." },
];

export const categories = ["All", "Oversized", "Embroidered", "Anime", "Solid", "Print"];
