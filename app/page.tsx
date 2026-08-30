import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/products";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="grid min-h-[80vh] grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:gap-16 md:px-8">
  <div>
    <h1 className="max-w-4xl text-6xl font-bold tracking-tight md:text-8xl">
      MOVE WITH PURPOSE
    </h1>

    <p className="mt-6 max-w-xl text-lg text-gray-600">
      Activewear designed for movement.
    </p>

    <button className="mt-8 rounded-full bg-gray-900 px-7 py-4 font-medium text-white transition hover:scale-105">
      Explore Collection
    </button>
  </div>

 <div className="h-[400px] overflow-hidden rounded-3xl md:h-[500px]">
  <img
    src="/images/hero.jpg"
    alt="KALORA activewear"
    className="h-full w-full object-cover"
  />
</div>


</section>

<section className="px-6 py-20 md:px-8">
  <div className="mb-10">
    <h2 className="text-4xl font-bold tracking-tight">
      OUR COLLECTION
    </h2>

    <p className="mt-3 text-gray-600">
      Explore our latest products.
    </p>
  </div>

  <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
    {products.map((product) => (
  <ProductCard
    key={product.name}
    slug={product.slug}
    name={product.name}
    price={product.price}
    image={product.image}
  />
))}
  </div>
</section>

    </main>
  );
}
