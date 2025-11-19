import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import MainSection from "./components/layout/MainSection";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content (Later add categories, product grid, modals, etc.) */}
     <MainSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
