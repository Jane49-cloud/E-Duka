const Filters = () => {
  const categoryOptions = [
    "Electronics",
    "Clothing",
    "Furniture",
    "Automobile",
    // Add more category options
  ];

  const subcategoryOptions = [
    "Mobile Phones",
    "Laptops",
    "Men's Clothing",
    "Women's Clothing",
    // Add more subcategory options
  ];

  const budgetOptions = [
    "$100 - $200",
    "$200 - $300",
    "$300 - $400",
    "$400 - $500",
    "$500 - $600",
    "$600 - $700",
    "$700 - $800",
    "$800 - $900",
    "$900 - $1,000",
  ];

  const brandOptions = [
    "Apple",
    "Samsung",
    "Sony",
    "Nike",
    "Adidas",
    "IKEA",
    // Add more brand options
  ];

  return (
    <div className="flex flex-col space-y-4 bg-gray-light mt-5">
      {/* Filter By Category */}
      <div className="bg-gray-100 p-4 ">
        <button className="px-3 py-1 bg-secondary-orange text-white cursor-pointer rounded">
          Filter by Category
        </button>
        <div className="scrollable-list">
          <ul className="space-y-2">
            {categoryOptions.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Filter by Subcategory */}
      {/* <div className="bg-gray-100 p-4">
        <button >Filter by Subcategory</button>
        <div className="scrollable-list">
          <ul className="space-y-2">
            {subcategoryOptions.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      </div> */}

      {/* Filter by Budget */}
      <div className="bg-gray-100 p-4 ">
        <button className="px-3 py-1 bg-secondary-orange text-white cursor-pointer rounded">
          Filter by Budget
        </button>
        <div className="scrollable-list">
          <ul className="space-y-2">
            {budgetOptions.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Filter by Brands */}
      <div className="bg-gray-100 p-4 ">
        <button className="px-3 py-1 bg-secondary-orange text-white cursor-pointer rounded">
          Filter by Brand
        </button>
        <div className="scrollable-list">
          <ul className="space-y-2">
            {brandOptions.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filters;
