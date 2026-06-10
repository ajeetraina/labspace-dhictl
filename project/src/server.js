const express = require("express");
const { products } = require("./products");

const app = express();

// The workspace container owns the PORT env var, so the catalog hard-codes 3000.
const PORT = 3000;

app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.get("/products", (req, res) => {
  const { category } = req.query;
  const result = category
    ? products.filter((p) => p.category === category)
    : products;
  res.json({ count: result.length, products: result });
});

app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p.id === Number(req.params.id));
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.json(product);
});

app.get("/", (req, res) => {
  res.type("html").send(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Product Catalog</title>
    <style>
      body { font-family: system-ui, sans-serif; margin: 2rem auto; max-width: 720px; }
      h1 { display: flex; align-items: center; gap: .5rem; }
      .card { border: 1px solid #ddd; border-radius: 8px; padding: 1rem; margin: .75rem 0; }
      .price { color: #0b6; font-weight: 600; }
      .out { color: #c33; font-size: .85rem; }
      code { background: #f4f4f4; padding: .1rem .3rem; border-radius: 4px; }
    </style>
  </head>
  <body>
    <h1>🐳 Product Catalog</h1>
    <p>A tiny demo API. Try <code>/products</code>, <code>/products/1</code>, or <code>/health</code>.</p>
    ${products
      .map(
        (p) => `<div class="card">
        <strong>${p.name}</strong> <span class="price">$${p.price.toFixed(2)}</span>
        <div>${p.category}${p.inStock ? "" : ' &mdash; <span class="out">out of stock</span>'}</div>
      </div>`
      )
      .join("")}
    <p>Running on Node.js <code>${process.version}</code></p>
  </body>
</html>`);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Product Catalog listening on http://0.0.0.0:${PORT} (Node ${process.version})`);
});
