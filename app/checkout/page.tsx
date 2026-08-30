"use client";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold">
          Checkout
        </h1>

        <div className="mt-10 space-y-6">
          <div>
            <label className="text-sm font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Your name"
              className="mt-2 w-full rounded-xl border p-4"
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl border p-4"
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Address
            </label>

            <textarea
              placeholder="Your address"
              className="mt-2 min-h-32 w-full rounded-xl border p-4"
            />
          </div>

          <button
  onClick={() => {
    window.location.href = "/success";
  }}
  className="w-full rounded-full bg-black px-8 py-4 text-white"
>
  Place Order
</button>
        </div>
      </div>
    </main>
  );
}