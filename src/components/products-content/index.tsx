"use client";
import { useState } from "react";
import List from "./list";
import productsTypes from "../../utils/data/products-types";
import datapool from "src/utils/data/products";

const ProductsContent = () => {
  const [orderProductsOpen, setOrderProductsOpen] = useState(false);
  const [stockFilter, setStockFilter] = useState("In Stock");
  const [sortOption, setSortOption] = useState("Featured");

  // State to store products with their stock count
  const [products, setProducts] = useState(datapool);

  // Handle product purchase (decrement stock)
  const handlePurchase = (productId: string) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        (product as any).id === productId && (product as any).inStock > 0
        ? { ...product, inStock: (product as any).inStock - 1 }
        : product,
      ),
    );
  };

  // Filter products based on stock status
  const filteredProducts = products.filter((product) =>
    stockFilter === "In Stock" ? product.quantityAvailable > 0 : product.quantityAvailable === 0,
  );

  // Sort products based on the selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "Alphabetically (A-Z)":
      return a.name.localeCompare(b.name);
      case "Alphabetically (Z-A)":
      return b.name.localeCompare(a.name);
      case "Price (high to low)":
      return (b as any).price - (a as any).price;
      case "Price (low to high)":
      return (a as any).price - (b as any).price;
      case "Date (new to old)":
      return new Date(b?.date).getTime() - new Date(a?.date).getTime();
      case "Date (old to new)":
      return new Date(a?.date).getTime() - new Date(b?.date).getTime();
      default:
      return 0; 
    }
  });

  // Calculate total products dynamically (your original code)
  const totalProducts = productsTypes.reduce(
    (total, type) => total + parseInt(type.count, 10),
    0,
  );

  return (
    <section className="products-content">
      <div className="products-content__intro">
        <h2>
          Products <span>({totalProducts})</span>
        </h2>
        <button
          type="button"
          onClick={() => setOrderProductsOpen(!orderProductsOpen)}
          className="products-filter-btn"
        >
          <i className="icon-filters" />
        </button>
        <form
          className={`products-content__filter ${
            orderProductsOpen ? "products-order-open" : ""
          }`}
        >
          <div className="products__filter__select">
            <h4>Show products: </h4>
            <div className="select-wrapper">
              <select
                value={stockFilter}
                onChange={(e) => setStockFilter(e.target.value)}
              >
                <option value="In Stock">In Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>
          </div>
          <div className="products__filter__select">
            <h4>Sort by: </h4>
            <div className="select-wrapper">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option>Featured</option>
                <option>Alphabetically (A-Z)</option>
                <option>Alphabetically (Z-A)</option>
                <option>Price (high to low)</option>
                <option>Price (low to high)</option>
                <option>Date (new to old)</option>
                <option>Date (old to new)</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      {/* Pass sortedProducts and the handlePurchase function to the List component */}
      <div className="products-list-wrapper">
        <List products={sortedProducts} onPurchase={handlePurchase} />
      </div>
    </section>
  );
};

export default ProductsContent;
