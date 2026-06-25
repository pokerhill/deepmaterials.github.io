import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import DeepInsideAI from "@/components/home/DeepInsideAI";
import ProductHighlights from "@/components/home/ProductHighlights";
import Industries from "@/components/home/Industries";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <DeepInsideAI />
      <Hero />
      <Stats />
      <ProductHighlights />
      <Industries />
      <CTA />
    </>
  );
}
