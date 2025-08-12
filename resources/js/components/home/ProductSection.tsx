"use client";

const categories = [
  {
    name: "Collector choise",
    products: [1, 2, 3, 4],
  },
  {
    name: "New Hybrid",
    products: [1, 2, 3, 4],
  },
  {
    name: "Hot Item",
    products: [1, 2, 3, 4],
  },
];

const ProductSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-8 md:py-16 px-2 md:px-8">
      {categories.map((cat) => (
        <div key={cat.name} className={`mb-16`}>
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">{cat.name}</h2>
            <button className="bg-[#E0D2B3] text-black rounded-full px-6 py-2 font-medium text-base">View All</button>
          </div>
          {/* Product Row: horizontal scroll on mobile, grid on sm+ */}
          <div className="flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 md:grid-cols-4 sm:gap-6 sm:overflow-visible">
            {cat.products.map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-3 flex flex-col relative group min-w-[70vw] max-w-[80vw] sm:min-w-0 sm:max-w-none"
              >
                {/* Image + Floating Buttons */}
                <div className="relative w-full aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden mb-3 flex items-center justify-center">
                  {/* Replace with <Image ... /> */}
                  <span className="text-gray-400 text-2xl">[Image]</span>
                  <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
                    <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center border shadow text-lg hover:bg-gray-100">♡</button>
                    <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center border shadow text-lg hover:bg-gray-100">👁️</button>
                  </div>
                </div>
                {/* Product Info */}
                <div className="font-semibold text-base md:text-lg mb-1">Anthurium Papilillaminum BVIT x (Zara x)</div>
                <div className="flex gap-2 items-center mb-1">
                  <span className="text-green-900 font-bold">$166</span>
                  <span className="line-through text-gray-400">$360</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductSection; 