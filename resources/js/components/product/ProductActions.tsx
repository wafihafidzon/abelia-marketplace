const ProductActions = () => (
  <div className="flex items-center gap-4 mt-4">
    <button className="bg-green-900 text-white px-8 py-3 rounded-full font-bold">Add to Cart</button>
    <button className="bg-gray-200 text-green-900 px-4 py-3 rounded-full font-bold">♡ Wishlist</button>
    <div className="flex items-center gap-2 ml-4">
      <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">-</button>
      <span className="px-2">1</span>
      <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">+</button>
    </div>
  </div>
);

export default ProductActions; 