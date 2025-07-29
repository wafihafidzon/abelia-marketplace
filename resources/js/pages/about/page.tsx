import Navbar from "../../components/home/Navbar";
import Footer from "../../components/home/Footer";
import AboutHeader from "../../components/about/AboutHeader";
import AboutImage from "../../components/about/AboutImage";
import AboutContent from "../../components/about/AboutContent";

export default function AboutPage() {
  return (
    <main className="bg-[#F5F5F5] min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 py-16 px-4">
        <section className="flex-1 flex justify-center">
          <AboutImage />
        </section>
        <section className="flex-1">
          <AboutHeader />
          <AboutContent />
        </section>
      </div>
      <Footer />
    </main>
  );
} 