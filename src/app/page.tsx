import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import ProductHighlights from "@/components/home/ProductHighlights";
import Industries from "@/components/home/Industries";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ProductHighlights />
      <Industries />
      <CTA />
    </>
  );
}
