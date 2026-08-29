type ProductCardProps = {
  slug: string;
  name: string;
  price: string;
  image: string;
};

export default function ProductCard({
  slug,
  name,
  price,
  image,
}: ProductCardProps) {
  return (
    <a href={`/products/${slug}`} >
      <div className="h-[400px] overflow-hidden rounded-3xl">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      <h3 className="mt-4 text-lg font-semibold">
        {name}
      </h3>

      <p className="mt-1 text-gray-600">
        {price}
      </p>
    </a>
  );
}