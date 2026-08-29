export default function Home() {
  return (
    <main>
      <nav className="flex items-center justify-between border-b border-gray-200 px-8 py-6">
      
        <div className="text-xl font-bold tracking-tight">
  KALORA
</div>

        <div className="flex gap-12">
  <a href="#">Shop</a>
  <a href="#">About</a>
  <a href="#">Collection</a>
</div>


        <button className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white">
  Shop Now
</button>

      </nav>

      <section className="grid min-h-[80vh] grid-cols-2 items-center gap-16 px-8 py-16">

  <div>
    <h1 className="max-w-4xl text-8xl font-bold tracking-tight">
      MOVE WITH PURPOSE
    </h1>

    <p className="mt-6 max-w-xl text-lg text-gray-600">
      Activewear designed for movement.
    </p>

    <button className="mt-8 rounded-full bg-gray-900 px-7 py-4 font-medium text-white transition hover:scale-105">
      Explore Collection
    </button>
  </div>

  <div className="h-[500px] overflow-hidden rounded-3xl">
  <img
    src="/images/hero.jpg"
    alt="KALORA activewear"
    className="h-full w-full object-cover"
  />
</div>


</section>

    </main>
  );
}
