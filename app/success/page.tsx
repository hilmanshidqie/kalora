export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <div className="text-center">
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Order Complete
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Thank You!
        </h1>

        <p className="mx-auto mt-4 max-w-md text-gray-600">
          Your order has been successfully placed.
        </p>

        <a
          href="/"
          className="mt-8 inline-block rounded-full bg-black px-8 py-4 text-white"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}