"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
  const savedCart = localStorage.getItem("cart");

if (savedCart) {
  setCart([JSON.parse(savedCart)]);
}
}, []);

  return (
  <main className="min-h-screen">
    <Navbar />

    <div className="p-8">
      <h1 className="text-4xl font-bold">
        Your Cart
      </h1>

      {cart.length > 0 ? (
        <div className="mt-10">
          {cart.map((item) => (
          <div className="grid max-w-4xl gap-8 md:grid-cols-2">
            <img
              src={item.image}
              alt={item.name}
              className="h-[400px] w-full rounded-3xl object-cover"
            />

            <div>
              <h2 className="text-3xl font-bold">
                {item.name}
              </h2>

              <p className="mt-4 text-xl">
  {item.price}
</p>

<p className="mt-4 text-2xl font-bold">
  Total: Rp{" "}
  {(
    Number(item.price.replace(/\D/g, "")) * quantity
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
    ))}
  </div>
) : (
        <p className="mt-4 text-gray-600">
          Your cart is currently empty.
        </p>
      )}
      </div>
    </main>
  );
}