import React from "react";

export default function Filters({ categories, selected, onChange, priceRange, onPriceChange, onSearch }) {
  return (
    <aside className="space-y-4">
      <input placeholder="Search snacks..." onChange={(e)=>onSearch(e.target.value)}
        className="w-full p-3 rounded-md border" />
      <div>
        <h4 className="font-semibold mb-2">Categories</h4>
        <div className="flex flex-wrap gap-2">
          {categories.map(c => (
            <button key={c} onClick={()=>onChange(c)}
              className={`px-3 py-1 rounded-full border ${selected===c ? "bg-brand-500 text-white" : ""}`}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Price</h4>
        <input type="range" min="50" max="500" value={priceRange} onChange={(e)=>onPriceChange(e.target.value)} />
        <div className="text-sm text-slate-500">Up to ₹{priceRange}</div>
      </div>
    </aside>
  );
}
