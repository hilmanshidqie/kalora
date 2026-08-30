export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-6 md:px-8">
      <a
        href="/"
        className="text-xl font-bold tracking-tight"
      >
        KALORA
      </a>

      <div className="flex gap-6 text-sm">
        <a href="/">Home</a>

        <a href="/products">
          Shop
        </a>

        <a href="/cart">
          Cart
        </a>
      </div>
    </nav>
  );
}