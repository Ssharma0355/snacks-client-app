import React from 'react';
import ProductCard from '../components/products/ProductCard';

// 1. Define dummy data for demonstration
const dummyProducts = [
  {
    id: 1,
    title: "Ergonomic Office Chair",
    category: "Furniture",
    price: 12999,
    rating: 4.7,
    img: "https://via.placeholder.com/400x300?text=Chair+Image" // Placeholder image
  },
  {
    id: 2,
    title: "Noise-Cancelling Headphones",
    category: "Electronics",
    price: 4500,
    rating: 4.5,
    img: "https://via.placeholder.com/400x300?text=Headphones+Image"
  },
  {
    id: 3,
    title: "Travel Backpack (40L)",
    category: "Accessories",
    price: 3200,
    rating: 4.8,
    img: "https://via.placeholder.com/400x300?text=Backpack+Image"
  },
  {
    id: 4,
    title: "Stainless Steel Water Bottle",
    category: "Kitchenware",
    price: 850,
    rating: 4.9,
    img: "https://via.placeholder.com/400x300?text=Bottle+Image"
  },
];

const Shop = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Explore Our Products</h1>
      
      {/* 2. Create a responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* 3. Map over the products and render ProductCard for each */}
        {dummyProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            p={product} // Pass the product object as the 'p' prop
          />
        ))}
      </div>
    </div>
  )
}

export default Shop;