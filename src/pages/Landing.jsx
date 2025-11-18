import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import Footer from "../components/layout/Footer";
import ProductGrid from "../components/products/ProductGrid";

export default function Landing(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <section id="offers" className="max-w-6xl mx-auto p-6">
        <h2 className="text-xl font-bold mb-4">Special Offers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl shadow-soft">Buy 2 get 1 free on Makhana</div>
          <div className="p-4 rounded-xl shadow-soft">Festival box: Thekua combo</div>
        </div>
      </section>

      <section className="py-8">
        <ProductGrid />
      </section>

      <Footer />
    </div>
  );
}
