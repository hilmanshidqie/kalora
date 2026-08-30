"use client";

import Navbar from "@/components/Navbar";

type Product = {
  slug: string;
  name: string;
  price: string;
  image: string;
  description: string;
};

type ProductDetailProps = {
  product: Product;
};

export default function ProductDetail({
  product,
}: ProductDetailProps) {
  return (
    <main className="min-h-screen">
  <Navbar />

  <div className="p-8"></div>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm uppercase tracking-widest text-gray-500">
            Kalora Collection
          </p>

          <h1 className="text-5xl font-bold tracking-tight">
            {product.name}
          </h1>

          <p className="mt-4 text-2xl">
            {product.price}
          </p>

          <p className="mt-6 max-w-md text-gray-600">
            {product.description}
          </p>

          <button
            onClick={() => {
  const savedCart = localStorage.getItem("cart");

  const cart = savedCart ? JSON.parse(savedCart) : [];

  const existingProduct = cart.find(
    (item: any) => item.slug === product.slug
  );

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart!");
}}
            className="mt-8 w-fit rounded-full bg-black px-8 py-4 text-white"
          >
            Add to Cart
          </button>

          <a
            href="/cart"
            className="mt-4 w-fit rounded-full border border-gray-300 px-8 py-4"
          >
            View Cart
          </a>
        </div>
      </div>
    </main>
  );
}