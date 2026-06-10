// In-memory product catalog. In a real app this would come from a database.
const products = [
  {
    id: 1,
    name: "Moby Dock Plush Toy",
    category: "toys",
    price: 19.99,
    inStock: true,
  },
  {
    id: 2,
    name: "Container Coffee Mug",
    category: "drinkware",
    price: 12.5,
    inStock: true,
  },
  {
    id: 3,
    name: "Hardened Hoodie",
    category: "apparel",
    price: 49.0,
    inStock: false,
  },
  {
    id: 4,
    name: "Whale Sticker Pack",
    category: "accessories",
    price: 4.99,
    inStock: true,
  },
  {
    id: 5,
    name: "DHI Enamel Pin",
    category: "accessories",
    price: 6.5,
    inStock: true,
  },
];

module.exports = { products };
