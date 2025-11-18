import React, { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import Filters from "./Filters";
import { PRODUCTS } from "../../data/products";

export default function ProductGrid(){
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState(500);
  const [q, setQ] = useState("");

  const categories = useMemo(()=>["all", "thekua", "namkeen", "makhana", "makhana_flavoured"],[]);

  const list = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchCat = category === "all" ? true : p.category === category;
      const matchPrice = p.price <= price;
      const matchQ = (p.title + p.category).toLowerCase().includes(q.toLowerCase());
      return matchCat && matchPrice && matchQ;
    });
  }, [category, price, q]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6">
      <Filters
        categories={categories}
        selected={category}
        onChange={setCategory}
        priceRange={price}
        onPriceChange={setPrice}
        onSearch={setQ}
      />
      <main>
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-slate-600">{list.length} results</div>
          <div className="text-sm">
            Sort: <select className="border rounded p-1 text-sm">
              <option>Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </main>
    </div>
  );
}
