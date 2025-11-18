import React, { useEffect } from "react";
import { ShoppingBag, Star, Zap, Leaf } from "lucide-react";

export default function MainSection() {
  // All animations here
  const animationStyles = `
    @keyframes pulse { 
      0%, 100% { transform: scale(1); } 
      50% { transform: scale(1.1); } 
    }
    @keyframes slow-pulse { 
      0%, 100% { transform: scale(1); } 
      50% { transform: scale(0.9); } 
    }

    .animate-pulse { animation: pulse 6s infinite ease-in-out; }
    .animate-slow-pulse { animation: slow-pulse 8s infinite ease-in-out; }
  `;

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = animationStyles;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // USP data
  const features = [
    {
      name: "Authentic Recipes",
      description:
        "Handcrafted snacks using age-old Bihari recipes passed down through generations.",
      icon: Leaf,
    },
    {
      name: "Farm-to-Table Quality",
      description:
        "Finest ingredients ensuring every bite is fresh, natural and premium.",
      icon: Star,
    },
    {
      name: "Naturally Healthy",
      description:
        "Natural sweeteners (jaggery) & healthy roasting methods for guilt-free snacking.",
      icon: Zap,
    },
    {
      name: "Fast Pan-India Delivery",
      description: "Quick and reliable delivery right to your doorstep.",
      icon: ShoppingBag,
    },
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-12">

          {/* Text */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block text-blue-600">Taste the Heritage,</span>
              <span className="block">Snack the Future.</span>
            </h1>

            <p className="mt-4 text-gray-600 text-lg sm:text-xl">
              Authentic Bihari Thekua, artisanal Namkeen & healthy Flavoured Makhana.
              Traditional taste with modern quality.
            </p>

            <button
              onClick={() => (window.location.href = "/shop")}
              className="mt-8 px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-md flex items-center sm:mx-auto lg:mx-0"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Shop Our Snacks
            </button>
          </div>

          {/* Graphics */}
          <div className="mt-12 lg:mt-0 lg:col-span-6 relative h-80 sm:h-96 lg:h-full flex justify-center items-center">

            {/* Thekua Card */}
            <div className="absolute top-0 left-0 w-48 h-48 bg-amber-100 rounded-3xl p-4 shadow-xl rotate-[-10deg] transition hover:rotate-[-12deg]">
              <p className="font-bold text-amber-700 text-lg">Thekua Delight</p>
              <p className="text-sm text-amber-600 mt-1">Made with Jaggery & Ghee.</p>
              <div className="absolute bottom-[-20px] right-[-20px] text-6xl opacity-80">🍪</div>
            </div>

            {/* Makhana Card */}
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-teal-100 rounded-3xl p-4 shadow-xl rotate-[15deg] transition hover:rotate-[18deg]">
              <p className="font-bold text-teal-700 text-lg">Flavoured Makhana</p>
              <p className="text-sm text-teal-600 mt-1">Light, crunchy & high protein.</p>
              <div className="absolute top-[-20px] left-[-20px] text-6xl opacity-80">🌱</div>
            </div>

            {/* BG Animation */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply blur-xl opacity-30 animate-pulse"></div>
              <div className="w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply blur-xl opacity-30 animate-slow-pulse"></div>
            </div>
          </div>

        </div>
      </section>

      {/* USP SECTION */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:text-center">
          <h2 className="text-base text-blue-600 font-semibold uppercase">Why Choose Varsha Snacks?</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            The Difference is Taste & Tradition
          </p>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item) => (
              <div key={item.name} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-[1.05] transition">
                <div className="flex justify-center">
                  <item.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{item.name}</h3>
                <p className="mt-2 text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="py-16 sm:py-24 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Bestsellers</h2>
        <p className="mt-4 text-lg text-gray-500">From Bihari delicacy to healthy modern snacks.</p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto px-4">
          {/* Thekua */}
          <div className="bg-orange-50 p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <div className="text-6xl">🍯</div>
            <h3 className="text-2xl font-semibold text-orange-700 mt-4">Thekua Classic</h3>
            <p className="mt-2 text-gray-600">Crispy, sweet & made with pure jaggery.</p>
            <button className="mt-4 text-blue-600 hover:text-blue-800" onClick={() => (window.location.href = "/shop")}>
              View Product →
            </button>
          </div>

          {/* Namkeen */}
          <div className="bg-yellow-50 p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <div className="text-6xl">🌶️</div>
            <h3 className="text-2xl font-semibold text-yellow-700 mt-4">Spicy Nimki Mix</h3>
            <p className="mt-2 text-gray-600">Savory, crunchy & perfectly spiced.</p>
            <button className="mt-4 text-blue-600 hover:text-blue-800" onClick={() => (window.location.href = "/shop")}>
              View Product →
            </button>
          </div>

          {/* Makhana */}
          <div className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <div className="text-6xl">🌿</div>
            <h3 className="text-2xl font-semibold text-green-700 mt-4">Peri Peri Makhana</h3>
            <p className="mt-2 text-gray-600">Roasted fox nuts with spicy peri peri.</p>
            <button className="mt-4 text-blue-600 hover:text-blue-800" onClick={() => (window.location.href = "/shop")}>
              View Product →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
