import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#fef7ee] text-slate-700 border-t border-orange-200 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-brand-700">Makhnaa 🍪</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            <h1>Founder: Varsha Singh</h1>
            Authentic Bihari Thekua, Namkeen, Makhana & more —  
            delivering traditional taste to your home.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="p-2 bg-orange-100 rounded-full hover:bg-orange-200 transition">
              <FaInstagram className="text-brand-700 text-lg" />
            </a>
            <a href="#" className="p-2 bg-orange-100 rounded-full hover:bg-orange-200 transition">
              <FaFacebook className="text-brand-700 text-lg" />
            </a>
            <a href="#" className="p-2 bg-orange-100 rounded-full hover:bg-orange-200 transition">
              <FaTwitter className="text-brand-700 text-lg" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-brand-700 transition cursor-pointer">About Us</li>
            <li className="hover:text-brand-700 transition cursor-pointer">Contact</li>
            <li className="hover:text-brand-700 transition cursor-pointer">Offers</li>
            <li className="hover:text-brand-700 transition cursor-pointer">FAQs</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-brand-700 transition cursor-pointer">Thekua (Bihari Snack)</li>
            <li className="hover:text-brand-700 transition cursor-pointer">Namkeen</li>
            <li className="hover:text-brand-700 transition cursor-pointer">Flavoured Makhana</li>
            <li className="hover:text-brand-700 transition cursor-pointer">Classic Makhana</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-brand-700 transition cursor-pointer">Privacy Policy</li>
            <li className="hover:text-brand-700 transition cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-brand-700 transition cursor-pointer">Refund Policy</li>
            <li className="hover:text-brand-700 transition cursor-pointer">Shipping Info</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-orange-200 mt-6">
        <p className="text-center text-sm py-4">
          © {new Date().getFullYear()} Makhnaa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
