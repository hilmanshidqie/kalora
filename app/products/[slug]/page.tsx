

import { products } from "@/products";
import ProductDetail from "@/components/ProductDetail";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = products.find(
    (product) => product.slug === slug
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetail product={product} />;
}