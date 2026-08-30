"use client";

import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
  const savedCart = localStorage.getItem("cart");
  const savedQuantity = localStorage.getItem("quantity");

  if (savedCart) {
    setCart(JSON.parse(savedCart));
  }

  if (savedQuantity) {
    setQuantity(Number(savedQuantity));
  }
}, []);

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold">
        Your Cart
      </h1>

      {cart ? (
        <div className="mt-10">
          <div className="grid max-w-4xl gap-8 md:grid-cols-2">
            <img
              src={cart.image}
              alt={cart.name}
              className="h-[400px] w-full rounded-3xl object-cover"
            />

            <div>
              <h2 className="text-3xl font-bold">
                {cart.name}
              </h2>

              <p className="mt-4 text-xl">
  {cart.price}
</p>

<p className="mt-4 text-2xl font-bold">
  Total: Rp{" "}
  {(
    Number(cart.price.replace(/\D/g, "")) * quantity
  ).toLocaleString("id-ID")}
</p>

              <div className="mt-6 flex items-center gap-4">
  <button
    onClick={() => {
  const newQuantity = Math.max(1, quantity - 1);
  setQuantity(newQuantity);
  localStorage.setItem("quantity", String(newQuantity));
}}
    className="flex h-10 w-10 items-center justify-center rounded-full border"
  >
    −
  </button>

  <span className="w-8 text-center">
    {quantity}
  </span>

  <button
    onClick={() => {
  const newQuantity = quantity + 1;
  setQuantity(newQuantity);
  localStorage.setItem("quantity", String(newQuantity));
}}
    className="flex h-10 w-10 items-center justify-center rounded-full border"
  >
    +
  </button>
</div>

              <p className="mt-4 text-gray-600">
                Product added to your cart.
              </p>
              
              <button
  onClick={() => {
    localStorage.removeItem("cart");
    localStorage.removeItem("quantity");
    setCart(null);
  }}
  className="mt-6 rounded-full border border-gray-300 px-6 py-3"
>
  Remove from Cart
</button>
<a
  href="/checkout"
  className="mt-4 inline-block rounded-full bg-black px-8 py-4 text-white"
>
  Checkout
</a>

            </div>
          </div>
        </div>
      ) : (
        <p className="mt-4 text-gray-600">
          Your cart is currently empty.
        </p>
      )}
    </main>
  );
}