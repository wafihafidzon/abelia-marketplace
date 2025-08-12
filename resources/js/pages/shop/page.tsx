import Footer from '@/components/home/Footer';
import Navbar from '../../components/home/Navbar';
import ShopFilter from '../../components/shop/ShopFilter';
import ShopPagination from '../../components/shop/ShopPagination';
import ShopProductList from '../../components/shop/ShopProductList';

export default function ShopPage({ products }) {
    console.log(products);
    return (
        <main className="min-h-screen bg-white">
            {/* <ShopHeader /> */}
            <Navbar />
            <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 md:flex-row">
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
