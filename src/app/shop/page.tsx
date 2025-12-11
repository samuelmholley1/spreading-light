'use client'

import { useState } from 'react';
import Link from 'next/link';
import { products, categories } from '@/data/products';
import { DesignCategory } from '@/data/types';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<DesignCategory | 'all'>('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1f36] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#ffb685] to-[#d4a574] bg-clip-text text-transparent mb-4">
            Shop Our Collection
          </h1>
          <p className="text-xl text-[#f5f5dc] max-w-2xl mx-auto">
            Each piece is handcrafted with bleach art techniques, making every shirt unique
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${selectedCategory === 'all' ? 'btn-primary' : 'btn-secondary'}`}
          >
            All Designs
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as DesignCategory)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${selectedCategory === cat.id ? 'btn-primary' : 'btn-secondary'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card group">
              <div className="relative h-80 overflow-hidden bg-[#2d3748]">
                <div className="absolute inset-0 flex items-center justify-center text-[#ffb685] text-lg">
                  Product Image
                </div>
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">Out of Stock</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-semibold text-[#d4a574] uppercase tracking-wide">
                    {categories.find(c => c.id === product.category)?.name}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#ffb685] mb-2 group-hover:text-[#d4a574] transition-colors">
                  {product.name}
                </h3>
                <p className="text-[#f5f5dc] text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#ffd700]">
                    ${product.price}
                  </span>
                  <Link 
                    href={`/shop/${product.id}`}
                    className={`btn-primary text-sm px-6 py-2 ${!product.inStock && 'opacity-50 cursor-not-allowed'}`}
                  >
                    {product.inStock ? 'View Details' : 'Sold Out'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-[#f5f5dc]">No products found in this category.</p>
          </div>
        )}

        {/* Custom Order CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-[#1a1f36] to-[#2d3748] rounded-2xl p-12 border-2 border-[#ffb685]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ffb685] mb-4">
            Don&apos;t see what you&apos;re looking for?
          </h2>
          <p className="text-xl text-[#f5f5dc] mb-6 max-w-2xl mx-auto">
            We create custom bleach art designs! Share your vision and we&apos;ll bring it to life.
          </p>
          <Link href="/custom" className="btn-primary text-lg px-8 py-4 inline-block">
            Request Custom Design
          </Link>
        </div>
      </div>
    </div>
  );
}
