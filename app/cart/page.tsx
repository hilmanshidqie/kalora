"use client";

import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState<any>(null);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
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

              <p className="mt-4 text-gray-600">
                Product added to your cart.
              </p>
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