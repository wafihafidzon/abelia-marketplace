import TopHeader from "../../components/home/TopHeader";
import Navbar from "../../components/home/Navbar";
import Hero from "../../components/home/Hero";
import ProductSection from "../../components/home/ProductSection";
import WhyUs from "../../components/home/WhyUs";
import Newsletter from "../../components/home/Newsletter";
import Footer from "../../components/home/Footer";

export default function Home() {
  return (
    <main className="bg-white text-black font-sans">
      <TopHeader />
      <div className="hidden md:block">
        <Navbar />
      </div>
      <Hero />
      <ProductSection />
      <WhyUs />
      <Newsletter />
      <Footer />
    </main>
  );
}
