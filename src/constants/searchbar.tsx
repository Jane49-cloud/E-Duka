import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar: React.FC = () => {
  const [category, setCategory] = useState<string>("all");
  const [subcategory, setSubcategory] = useState<string>("all");
  const [minPrice, setMinPrice] = useState<string>("0");
  const [maxPrice, setMaxPrice] = useState<string>("100000000");
  const navigate = useNavigate();

  // Handle category change event to update subcategories
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategory(event.target.value);
    // Implement subcategory updates based on the selected category
  };

  // Handle search button click event
  const handleSearch = () => {
    // Implement your search functionality here using the selected values
    console.log("Category:", category);
    console.log("Subcategory:", subcategory);
    console.log("Min Price:", minPrice);
    console.log("Max Price:", maxPrice);
  };

  return (
    <div
      className="flex items-center gap-10 shadow-custom p-3
     bg-primary-orange w-screen"
    >
      <button
        className="p-2 bg-white rounded w-[200px]"
        onClick={() => navigate("/ads")}
      >
        View All
      </button>

      <select
        id="categorySelect"
        value={category}
        onChange={handleCategoryChange}
        className="p-2 border rounded w-[200px] bg-white outline-none shadow-custom "
      >
        <option value="all">Select Category</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        {/* Add more category options as needed */}
      </select>

      <select
        id="subcategorySelect"
        value={subcategory}
        onChange={(e) => setSubcategory(e.target.value)}
        className="p-2 border rounded  w-[200px] bg-white outline-none shadow-custom "
      >
        <option value="all">Select Subcategory</option>
        {/* Populate subcategories based on the selected category using JavaScript */}
      </select>

      <select
        id="minPriceSelect"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="p-2 border rounded w-[200px] bg-white outline-none shadow-custom "
      >
        <option value="">Select Min Price:</option>{" "}
        <option value="200">200</option>
        <option value="400">400</option>
        <option value="800">800</option>
        {/* Add more price options as needed */}
      </select>

      <select
        id="maxPriceSelect"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="p-2 border rounded w-[200px] bg-white outline-none shadow-custom "
      >
        <option value="100000000">select max price </option>
        <option value="100000000">100,000,000</option>
        <option value="200000000">200,000,000</option>
        <option value="400000000">400,000,000</option>
        <option value="800000000">800,000,000</option>
        {/* Add more price options as needed */}
      </select>
      <select
        id="brand"
        // value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="p-2 border rounded w-[200px] bg-white outline-none shadow-custom "
      >
        <option value="All">select brand</option>
        <option value="100000000">Innovia</option>
        <option value="200000000">Innovia</option>
        <option value="400000000">Innovia</option>
        <option value="800000000">Innovia</option>
        {/* Add more price options as needed */}
      </select>

      <button
        onClick={handleSearch}
        className="bg-black text-white p-2 rounded hover:bg-secondary-orange transition-colors delay-300 w-[250px] outline-none shadow-custom "
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
