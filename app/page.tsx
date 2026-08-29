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

    </main>
  );
}
