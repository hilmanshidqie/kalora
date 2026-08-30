"use client";


import { products } from "@/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = products.find(
    (product) => product.slug === slug
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main className="min-h-screen p-8">
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
    localStorage.setItem("cart", JSON.stringify(product));
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