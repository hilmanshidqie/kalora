import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/products";

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="px-6 py-12 md:px-8">
        <h1 className="text-5xl font-bold tracking-tight">
          OUR COLLECTION
        </h1>

        <p className="mt-4 text-gray-600">
          Explore our latest products.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard
                 key={product.slug}
                 slug={product.slug}
                 name={product.name}
                 price={product.price}
                 image={product.image}
/>
            />
          ))}
        </div>
      </section>
    </main>
  );
}