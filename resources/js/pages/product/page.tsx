import Navbar from '../../components/home/Navbar';
import ProductGallery from '../../components/product/ProductGallery';
import ProductInfo from '../../components/product/ProductInfo';
import ShopProductList from '../../components/shop/ShopProductList';
import { FiChevronRight } from 'react-icons/fi';
import Footer from '@/components/home/Footer';

export default function ProductDetailPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-2 text-sm text-gray-500 flex items-center gap-2">
        <span>Shops</span>
        <FiChevronRight />
        <span>Anthurium</span>
        <FiChevronRight />
        <span className="text-black font-semibold">Anthurium Heinz</span>
      </div>
      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 py-12 px-4">
        {/* Gallery kiri */}
        <section className="w-full md:w-1/2 flex justify-center">
          <ProductGallery />
        </section>
        {/* Info kanan */}
        <section className="flex-1 flex flex-col gap-6">
          <ProductInfo />
          {/* <ProductActions /> */}
          {/* Free Delivery Box */}
          <div className="border rounded-lg p-4 flex items-center gap-4 bg-white">
            <span className="text-2xl">🚚</span>
            <div>
              <div className="font-semibold">Free Delivery</div>
              <div className="text-xs text-gray-500">
                Enter your postal code for Delivery Availability
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Related Item Section */}
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Related Item</h2>
          <button className="bg-[#E0D2B3] text-black rounded-full px-6 py-2 font-medium text-base">
            View All
          </button>
        </div>
        <ShopProductList />
      </div>
      <Footer />
    </main>
  );
}
