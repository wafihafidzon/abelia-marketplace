const products = [
  {
    name: "Anthurium Papilillaminum BVIT x (Zara x)",
    price: 166,
    oldPrice: 360,
    rating: 5,
    reviews: 65,
  },
  {
    name: "Anthurium Portillae Xdf x Self",
    price: 323,
    oldPrice: 1160,
    rating: 5,
    reviews: 65,
  },
  {
    name: "Anthurium Red Crystal Michelle",
    price: 160,
    oldPrice: 170,
    rating: 5,
    reviews: 65,
  },
  {
    name: "Anthurium Red Crystal Venom",
    price: 360,
    oldPrice: null,
    rating: 5,
    reviews: 65,
  },
];

const ShopProductList = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
    {products.map((p, i) => (
      <div key={i} className="bg-white border rounded-lg shadow p-3 flex flex-col relative group items-start">
        {/* Image + Floating Buttons */}
        <div className="relative w-full aspect-[4/5] bg-gray-200 rounded mb-3 flex items-center justify-center overflow-hidden">
          {/* Replace with <Image ... /> */}
          <span className="text-gray-400 text-2xl">[Image]</span>
          <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center border shadow text-lg hover:bg-gray-100">♡</button>
            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center border shadow text-lg hover:bg-gray-100">👁️</button>
          </div>
        </div>
        {/* Product Info */}
        <div className="font-semibold text-base mb-1">{p.name}</div>
        <div className="flex gap-2 items-center mb-1">
          <span className="text-green-900 font-bold">${p.price}</span>
          {p.oldPrice && <span className="line-through text-gray-400">${p.oldPrice}</span>}
        </div>
        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm mb-1">
          {Array.from({ length: p.rating }).map((_, idx) => <span key={idx}>★</span>)}
          <span className="text-gray-400 ml-1">({p.reviews})</span>
        </div>
      </div>
    ))}
  </div>
);

export default ShopProductList; 