"use client";

import React from "react";
import ManagerTemplate from "@/components/managerTemplate";
import MenuList from "../menuList";

const categories = [
  { name: "shoes", image: "/image/sepatu.jpg" },
  { name: "shorts", image: "/image/celana.jpg" },
  { name: "hats", image: "/image/topi.jpg" },
];

const shirts = [
  {
    id: 1,
    name: "Kemeja Putih A",
    price: 120000,
    image: "/path/to/image1.jpg",
  },
  {
    id: 2,
    name: "Kemeja Putih B",
    price: 130000,
    image: "/path/to/image2.jpg",
  },
  // Tambahkan item lainnya di sini...
];

const HomePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Banner */}
        <div className="bg-gray-300 p-6 rounded-md text-center mb-8">
          <h2 className="text-2xl font-bold text-black">
            Ubah style mu dengan brand HORIZON
          </h2>
        </div>

        {/* Categories */}
        <div className="flex justify-center space-x-8 mb-8">
          {categories.map((category) => (
            <button
              key={category.name}
              className="flex items-center space-x-4 p-4 bg-gray-300 rounded-md shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <span className="text-black font-semibold text-xl">
                {category.name}
              </span>
            </button>
          ))}
        </div>

        {/* Shirts Section */}
        <h3 className="text-xl font-bold mb-4">Kemeja</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {shirts.map((shirt) => (
            <div
              key={shirt.id}
              className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <img
                src={shirt.image}
                alt={shirt.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-2">{shirt.name}</h4>
                <p className="text-sm text-gray-600">
                  Rp {shirt.price.toLocaleString("id-ID")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
