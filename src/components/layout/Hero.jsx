import React from "react";
export default function Hero(){
  return (
    <div className="bg-gradient-to-r from-yellow-50 to-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold">Thekua & Co. — Authentic Bihari Snacks</h1>
          <p className="mt-4 text-slate-600">Handmade thekua, crunchy namkeen, and flavourful makhana — small-batch, lovingly packed.</p>
          <div className="mt-6 flex gap-3">
            <a href="#shop" className="px-4 py-3 bg-brand-500 text-white rounded-md">Shop Now</a>
            <a href="#about" className="px-4 py-3 border rounded-md">Learn More</a>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg overflow-hidden"><img src="/imgs/thekua-hero.jpg" alt="thekua" /></div>
            <div className="rounded-lg overflow-hidden"><img src="/imgs/makhana-hero.jpg" alt="makhana" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
