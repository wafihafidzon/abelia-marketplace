import { FaStar } from 'react-icons/fa';

const ProductInfo = () => (
  <div className="w-full max-w-lg">
    <h1 className="text-3xl font-bold mb-1 flex items-center gap-2">
      Anthurium Heinz <span className="text-green-600 text-xl">🌱</span>
    </h1>
    <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
      By <span className="font-semibold text-green-900">Luxplants</span>
      <span className="flex items-center gap-1 ml-2 text-yellow-500">
        {[...Array(5)].map((_, i) => <FaStar key={i} className="inline" size={14} />)}
      </span>
      <span className="ml-1 text-gray-600">(88)</span>
    </div>
    <div className="text-3xl font-bold text-green-700 mb-2">$192.00</div>
    <div className="text-gray-700 mb-4 text-sm">
      Well rooted mid cut that has been seperated from the main plant a 2 weeks ago, on cataphyll producing a new leaf (pictured). 1 leafer plant
    </div>
    <div className="mb-4 text-sm">
      <div className="flex mb-1">
        <span className="w-24 text-gray-500">Species:</span>
        <span className="font-medium text-green-900">Heinz</span>
      </div>
      <div className="flex mb-1 items-center">
        <span className="w-24 text-gray-500">Size:</span>
        <span className="inline-flex gap-2">
          <span className="px-2 py-0.5 border rounded text-xs">S</span>
          <span className="px-2 py-0.5 border rounded text-xs bg-green-900 text-white">M</span>
          <span className="px-2 py-0.5 border rounded text-xs">L</span>
        </span>
      </div>
      <div className="flex mb-1">
        <span className="w-24 text-gray-500">Variegation:</span>
        <span className="text-green-900">No</span>
      </div>
      <div className="flex mb-1">
        <span className="w-24 text-gray-500">Shipping to:</span>
        <span className="text-green-900">Worldwide</span>
      </div>
    </div>
    <div className="flex items-center gap-2 mt-6">
      <button className="flex-1 bg-green-900 text-white py-3 rounded font-semibold text-lg transition hover:bg-green-800">Buy Now</button>
      <button className="w-12 h-12 border rounded flex items-center justify-center text-2xl text-green-900 bg-white hover:bg-gray-100"><span>♡</span></button>
    </div>
  </div>
);

export default ProductInfo; 