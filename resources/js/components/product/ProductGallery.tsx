const ProductGallery = () => (
  <div className="flex flex-col items-center">
    <div className="w-full aspect-square bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
      <span className="text-gray-400">[Product Image]</span>
    </div>
    <div className="flex gap-4">
      {[1,2,3].map((i) => (
        <div key={i} className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
          <span className="text-gray-300">Thumb {i}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ProductGallery; 