import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Content (Later add categories, product grid, modals, etc.) */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4">Welcome to Our Snack Store 🍪</h2>
        <p className="text-slate-600">
          Authentic Bihari Thekua, Namkeen, Flavoured Makhana, and more.
        </p>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
