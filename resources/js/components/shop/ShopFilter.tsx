'use client';
import { useState } from 'react';
import { FiFilter } from 'react-icons/fi';

const categories = [
  'All',
  'Anthurium',
  'Monstera',
  'Philodendron',
  'Aglaonema',
  'Others',
];
const ratings = [
  { label: '5 Stars', value: 5 },
  { label: '4 Stars ke atas', value: 4 },
  { label: '3 Stars ke atas', value: 3 },
];
const promos : {label: string, value: string}[] = [
  { label: 'Diskon', value: 'discount' },
  { label: 'Gratis Ongkir', value: 'free_shipping' },
];

const ShopFilter = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['All']);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [selectedPromos, setSelectedPromos] = useState<string[]>([]);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const handleCategory = (cat: string) => {
    if (cat === 'All') {
      setSelectedCategories(['All']);
    } else {
      setSelectedCategories((prev) => {
        const filtered = prev.filter((c) => c !== 'All');
        if (filtered.includes(cat)) {
          return filtered.filter((c) => c !== cat);
        } else {
          return [...filtered, cat];
        }
      });
    }
  };

  const handleReset = () => {
    setMinPrice('');
    setMaxPrice('');
    setSelectedCategories(['All']);
    setSelectedRatings([]);
    setSelectedPromos([]);
  };

  // Filter panel content
  const filterPanel = (
    <div className="bg-gray-100 rounded-lg p-4 w-full max-w-xs mx-auto">
      <h2 className="text-xl font-semibold mb-4">Filter</h2>
      {/* Harga */}
      <div className="mb-4">
        <div className="font-medium mb-2">Harga</div>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            className="w-1/2 px-2 py-1 rounded border border-gray-300"
            value={minPrice}
            onChange={e => setMinPrice(e.target.value)}
            min={0}
          />
          <span className="self-center">-</span>
          <input
            type="number"
            placeholder="Max"
            className="w-1/2 px-2 py-1 rounded border border-gray-300"
            value={maxPrice}
            onChange={e => setMaxPrice(e.target.value)}
            min={0}
          />
        </div>
      </div>
      {/* Kategori */}
      <div className="mb-4">
        <div className="font-medium mb-2">Kategori</div>
        <div className="flex flex-col gap-1">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategory(cat)}
                className="accent-green-900"
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>
      </div>
      {/* Rating */}
      <div className="mb-4">
        <div className="font-medium mb-2">Rating</div>
        <div className="flex flex-col gap-1">
          {ratings.map((r) => (
            <label key={r.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedRatings.includes(r.value)}
                onChange={() => setSelectedRatings((prev) => prev.includes(r.value) ? prev.filter(v => v !== r.value) : [...prev, r.value])}
                className="accent-yellow-500"
              />
              <span>{r.label}</span>
            </label>
          ))}
        </div>
      </div>
      {/* Promo */}
      <div className="mb-4">
        <div className="font-medium mb-2">Promo</div>
        <div className="flex flex-col gap-1">
          {promos.map((p) => (
            <label key={p.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedPromos.includes(p.value)}
                onChange={() => setSelectedPromos((prev) => prev.includes(p.value) ? prev.filter(v => v !== p.value) : [...prev, p.value])}
                className="accent-green-700"
              />
              <span>{p.label}</span>
            </label>
          ))}
        </div>
      </div>
      {/* Tombol */}
      <div className="flex gap-2 mt-4">
        <button onClick={handleReset} className="flex-1 py-2 rounded bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300">Reset</button>
        <button className="flex-1 py-2 rounded bg-green-900 text-white font-semibold hover:bg-green-800" onClick={() => setShowMobileFilter(false)}>Terapkan</button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile: judul + ikon filter, panel muncul saat klik */}
      <div className="flex items-center justify-between mb-4 md:hidden">
        <h1 className="text-2xl font-bold">Rare Roots Shop</h1>
        <button onClick={() => setShowMobileFilter(true)} className="text-3xl p-2"><FiFilter /></button>
      </div>
      {showMobileFilter && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/40">
          <div className="flex-1" onClick={() => setShowMobileFilter(false)} />
          <div className="bg-white rounded-t-2xl p-4 pb-8 shadow-lg animate-slide-up">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-lg">Filter</span>
              <button onClick={() => setShowMobileFilter(false)} className="text-2xl">&times;</button>
            </div>
            {filterPanel}
          </div>
          <style jsx>{`
            @keyframes slide-up {
              from { transform: translateY(100%); }
              to { transform: translateY(0); }
            }
            .animate-slide-up {
              animation: slide-up 0.2s ease-out;
            }
          `}</style>
        </div>
      )}
      {/* Desktop: filter panel selalu tampil */}
      <div className="hidden md:block">
        {filterPanel}
      </div>
    </>
  );
};

export default ShopFilter;
