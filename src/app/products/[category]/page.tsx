import Link from "next/link";
import { getAllProductSlugs, getProductBySlug } from "@/lib/products";
import ProductDetail from "@/components/products/ProductDetail";

export function generateStaticParams() {
  return getAllProductSlugs().map((category) => ({ category }));
}

interface PageProps {
  readonly params: { category: string };
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = getProductBySlug(params.category);

  if (!product) {
    return (
      <section className="min-h-screen bg-dm-midnight flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-dm-white mb-4">
            Product Not Found
          </h1>
          <p className="text-dm-gray mb-8">
            The product you are looking for does not exist.
          </p>
          <Link
            href="/products"
            className="text-dm-accent hover:text-dm-accent-light transition-colors font-medium"
          >
            &larr; Back to Products
          </Link>
        </div>
      </section>
    );
  }

  return <ProductDetail product={product} />;
}
