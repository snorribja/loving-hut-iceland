import padthai from "@/assets/dish-padthai.jpg";
import pho from "@/assets/dish-pho.jpg";
import curry from "@/assets/dish-curry.jpg";
import burger from "@/assets/dish-burger.jpg";
import springrolls from "@/assets/dish-springrolls.jpg";
import ricebowl from "@/assets/dish-ricebowl.jpg";

export type MenuItem = {
  name: string;
  nameIs?: string;
  description: string;
  descriptionIs?: string;
  price: string;
  image?: string;
  tags?: string[];
};

export type MenuCategory = {
  id: string;
  title: string;
  titleIs: string;
  items: MenuItem[];
};

export const featuredImages = { padthai, pho, curry, burger, springrolls, ricebowl };

export const menu: MenuCategory[] = [
  {
    id: "starters",
    title: "Starters",
    titleIs: "Forréttir",
    items: [
      {
        name: "Crispy Spring Rolls",
        nameIs: "Stökkir vorrúllur",
        description: "Golden rolls filled with cabbage, carrot and glass noodles, peanut dip.",
        price: "kr 1,590",
        image: springrolls,
        tags: ["popular"],
      },
      {
        name: "Edamame",
        nameIs: "Edamame baunir",
        description: "Steamed soybeans tossed with sea salt.",
        price: "kr 1,290",
        tags: ["gluten-free"],
      },
      {
        name: "Crispy Tofu Bites",
        nameIs: "Stökkur tófúbiti",
        description: "Marinated tofu, sesame, sweet chili glaze.",
        price: "kr 1,690",
      },
    ],
  },
  {
    id: "soups",
    title: "Soups",
    titleIs: "Súpur",
    items: [
      {
        name: "Vegan Pho",
        nameIs: "Vegan Pho",
        description: "Aromatic broth, rice noodles, tofu, mushrooms, fresh basil.",
        price: "kr 2,690",
        image: pho,
        tags: ["popular", "gluten-free"],
      },
      {
        name: "Miso Ramen",
        nameIs: "Miso ramen",
        description: "Rich miso broth, ramen noodles, corn, scallion, chili oil.",
        price: "kr 2,890",
        tags: ["spicy"],
      },
    ],
  },
  {
    id: "noodles",
    title: "Noodles",
    titleIs: "Núðlur",
    items: [
      {
        name: "Pad Thai",
        nameIs: "Pad Thai",
        description: "Rice noodles, tofu, bean sprouts, peanuts, tamarind sauce, lime.",
        price: "kr 2,790",
        image: padthai,
        tags: ["popular", "gluten-free"],
      },
      {
        name: "Chow Mein",
        nameIs: "Chow Mein",
        description: "Wok-fried noodles with seasonal vegetables and soy glaze.",
        price: "kr 2,690",
      },
    ],
  },
  {
    id: "rice",
    title: "Rice dishes",
    titleIs: "Hrísgrjónaréttir",
    items: [
      {
        name: "Bibimbap Bowl",
        nameIs: "Bibimbap skál",
        description: "Steamed rice, marinated tofu, pickled vegetables, sesame, gochujang.",
        price: "kr 2,890",
        image: ricebowl,
        tags: ["popular"],
      },
      {
        name: "Thai Coconut Curry",
        nameIs: "Taílenskt kókoscurry",
        description: "Yellow curry with tofu, vegetables and jasmine rice.",
        price: "kr 2,990",
        image: curry,
        tags: ["spicy", "gluten-free"],
      },
    ],
  },
  {
    id: "burgers",
    title: "Burgers & Wraps",
    titleIs: "Borgarar og vefjur",
    items: [
      {
        name: "Loving Hut Burger",
        nameIs: "Loving Hut borgari",
        description: "Plant-based patty, vegan cheese, lettuce, tomato, house sauce, fries.",
        price: "kr 2,990",
        image: burger,
        tags: ["popular", "kids"],
      },
      {
        name: "Teriyaki Wrap",
        nameIs: "Teriyaki vefja",
        description: "Grilled tofu, crunchy slaw, teriyaki, soft flatbread.",
        price: "kr 2,590",
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks & Desserts",
    titleIs: "Drykkir og eftirréttir",
    items: [
      {
        name: "Thai Iced Tea",
        nameIs: "Taílenskt ísté",
        description: "Sweet, creamy, oat-milk based.",
        price: "kr 890",
      },
      {
        name: "Mango Sticky Rice",
        nameIs: "Mangó klístraðar hrísgrjón",
        description: "Sweet sticky rice, ripe mango, toasted sesame.",
        price: "kr 1,590",
        tags: ["gluten-free"],
      },
    ],
  },
];
