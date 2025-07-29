import Navbar from "../../components/home/Navbar";
import ShopFilter from "../../components/shop/ShopFilter";
import ShopProductList from "../../components/shop/ShopProductList";
import ShopPagination from "../../components/shop/ShopPagination";
import Footer from "@/components/home/Footer";

export default function ShopPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* <ShopHeader /> */}
      <Navbar />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 py-8 px-4">
        <aside className="w-full md:w-1/4">
          <ShopFilter />
        </aside>
        <section className="flex-1">
          <ShopProductList />
          <ShopPagination />
        </section>
      </div>
      <Footer />
    </main>
  );
} 