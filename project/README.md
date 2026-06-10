# Product Catalog

A tiny Express-based Product Catalog REST API used in the **dhictl & Docker Hardened Images** labspace.

## Endpoints

| Method | Path             | Description                            |
| ------ | ---------------- | -------------------------------------- |
| GET    | `/`              | HTML catalog page                      |
| GET    | `/health`        | Health check                           |
| GET    | `/products`      | List products (optional `?category=`)  |
| GET    | `/products/:id`  | Get a single product                   |

## Run locally

```bash
docker build -t product-catalog .
docker run --rm -p 8090:3000 product-catalog
```

## Files

- `src/server.js` the Express app (hard-coded to port 3000)
- `src/products.js` in-memory catalog data
- `Dockerfile` container build definition
- `scripts/introduce-vulnerabilities.sh` downgrades the base image to surface CVEs

This project is part of the labspace and is meant to be explored from the lab instructions.
