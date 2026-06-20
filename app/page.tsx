import Hero from "@/components/hero";
import Models from "@/components/models";
import Portfolio from "@/components/portfolio";
import Domains from "@/components/domains";
import Principles from "@/components/principles";
import DeepData from "@/components/deepdata";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Models />
      <Domains />
      <Portfolio />
      <Principles />
      <DeepData />
      <Contact />
      <Footer />
    </>
  );
}
