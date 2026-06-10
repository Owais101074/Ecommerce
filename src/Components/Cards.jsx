import React from "react";

const products = [
  {
    id: 1,
    name: "MacBook Pro",
    price: "$1499",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
  },
  {
    id: 2,
    name: "iPhone 15",
    price: "$999",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: "$299",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
  },
  {
    id: 4,
    name: "Headphones",
    price: "$199",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
  },
  {
    id: 5,
    name: "Gaming Mouse",
    price: "$79",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600",
  },
  {
    id: 6,
    name: "Keyboard",
    price: "$129",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600",
  },
  {
    id: 7,
    name: "Camera",
    price: "$899",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
  },
  {
    id: 8,
    name: "Nike Shoes",
    price: "$149",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
  },
];

const Cards = () => {
  return (
    <section className="py-12 px-6">
      <h2 className="text-4xl font-bold text-center text-amber-400 mb-10">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-slate-800/60 border border-slate-700 rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold text-amber-400 mb-2">
                {product.name}
              </h3>

              <p className="text-slate-300 mb-3">
                Premium quality product with modern design and excellent
                performance.
              </p>

              <p className="text-2xl font-bold text-white mb-4">
                {product.price}
              </p>

              <div className="flex gap-3">
                <button className="flex-1 bg-amber-400 text-slate-900 py-2 rounded-xl font-semibold hover:bg-amber-500 transition">
                  Buy
                </button>

                <button className="flex-1 bg-slate-700 text-white py-2 rounded-xl font-semibold hover:bg-slate-600 transition">
                  Add Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;