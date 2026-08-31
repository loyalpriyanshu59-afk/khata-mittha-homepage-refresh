import { createFileRoute } from "@tanstack/react-router";

import { FeaturedJuices } from "@/components/site/FeaturedJuices";
import { FinalCta } from "@/components/site/FinalCta";
import { Hero } from "@/components/site/Hero";
import { Process } from "@/components/site/Process";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Story } from "@/components/site/Story";
import { Testimonials } from "@/components/site/Testimonials";
import { WhySection } from "@/components/site/WhySection";
import { useReveal } from "@/hooks/use-reveal";

const TITLE = "Khata MiTtha — Cold-Pressed Fresh Fruit Juice";
const DESCRIPTION =
  "Freshly squeezed, cold-pressed fruit juice from Khata MiTtha. Orange, mosambi, mango, pineapple and mixed fruit — 100% natural, no sugar added, bottled daily.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <FeaturedJuices />
        <WhySection />
        <Process />
        <Story />
        <Testimonials />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
