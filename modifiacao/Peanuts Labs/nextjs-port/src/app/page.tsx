import { Navbar } from "@/components/Navbar";
import { StatusBar } from "@/components/StatusBar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <StatusBar />
      <Navbar />
      <main style={{ paddingTop: 26 }}>
        <Hero />
        <Marquee />
        <Services />
        <HowItWorks />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
