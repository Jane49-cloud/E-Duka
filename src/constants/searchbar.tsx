// import { BsSearch } from "react-icons/bs";
// import { Shortcuts } from "../data/links";

// function Searchbar() {
//   return (
//     <div className="bg-stone-200 py-2 px-5 w-full flex flex-row items-center justify-center gap-5">
//       <div className=" flex flex-row gap-3 text-stone-500 italic text-sm">
//         {Shortcuts.map((item, index) => (
//           <div key={index}>
//             <p>{item}</p>
//           </div>
//         ))}
//       </div>
//       <div className="bg-stone-100 p-2 rounded-[5px] text-sm text-stone-500 flex flex-row gap-2 items-center">
//         <input
//           className="mr-3"
//           type="text"
//           placeholder="product, seller, price, location?"
//         />
//         <BsSearch className="cursor-pointer hover:text-green-500" />
//       </div>
//     </div>
//   );
// }

// export default Searchbar;

import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [category, setCategory] = useState<string>("all");
  const [subcategory, setSubcategory] = useState<string>("all");
  const [minPrice, setMinPrice] = useState<string>("0");
  const [maxPrice, setMaxPrice] = useState<string>("100000000");

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
      className="flex items-center gap-20 shadow-custom p-3
     bg-primary-orange w-screen"
    >
      <select
        id="categorySelect"
        value={category}
        onChange={handleCategoryChange}
        className="p-2 border rounded w-[250px] bg-white outline-none shadow-custom "
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
        className="p-2 border rounded  w-[250px] bg-white outline-none shadow-custom "
      >
        <option value="all">Select Subcategory</option>
        {/* Populate subcategories based on the selected category using JavaScript */}
      </select>

      <select
        id="minPriceSelect"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="p-2 border rounded w-[250px] bg-white outline-none shadow-custom "
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
        className="p-2 border rounded w-[250px] bg-white outline-none shadow-custom "
      >
        <option value="100000000">select max price </option>
        <option value="100000000">100,000,000</option>
        <option value="200000000">200,000,000</option>
        <option value="400000000">400,000,000</option>
        <option value="800000000">800,000,000</option>
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
