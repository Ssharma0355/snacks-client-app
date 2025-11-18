import React from "react";

export default function ProductCard({ p }){
  return (
    <div className="bg-white rounded-xl p-4 shadow-soft hover:shadow-lg transition">
      <div className="aspect-[4/3] rounded-lg overflow-hidden mb-3 bg-slate-50 flex items-center justify-center">
        <img src={p.img} alt={p.title} className="object-cover w-full h-full" />
      </div>
      <h3 className="font-semibold">{p.title}</h3>
      <p className="text-sm text-slate-500">{p.category}</p>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <div className="font-bold">₹{p.price}</div>
          <div className="text-xs text-slate-500">Rating {p.rating}</div>
        </div>
        <button className="px-3 py-2 rounded-md bg-brand-500 text-white">Add</button>
      </div>
    </div>
  );
}
