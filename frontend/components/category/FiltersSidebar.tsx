const FiltersSidebar = () => {
    return (
      <aside className="w-full md:w-64 bg-white p-4 rounded-sm shadow-sm h-fit">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Filters</h2>
          <button className="text-[#2874f0] text-sm font-medium">CLEAR ALL</button>
        </div>
  
        <div className="border-t py-4">
          <h3 className="font-medium mb-3">Price</h3>
          <div className="flex gap-3 mb-3">
            <select className="w-full p-2 border rounded">
              <option>Min</option>
              <option>₹1000</option>
              <option>₹5000</option>
              <option>₹10000</option>
            </select>
            <select className="w-full p-2 border rounded">
              <option>Max</option>
              <option>₹5000</option>
              <option>₹10000</option>
              <option>₹20000</option>
            </select>
          </div>
        </div>
  
        <div className="border-t py-4">
          <h3 className="font-medium mb-3">Brand</h3>
          <div className="space-y-2">
            {["Samsung", "Apple", "OnePlus", "Xiaomi"].map((brand) => (
              <label key={brand} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>{brand}</span>
              </label>
            ))}
          </div>
        </div>
  
        <div className="border-t py-4">
          <h3 className="font-medium mb-3">Customer Ratings</h3>
          <div className="space-y-2">
            {["4★ & above", "3★ & above", "2★ & above"].map((rating) => (
              <label key={rating} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>{rating}</span>
              </label>
            ))}
          </div>
        </div>
      </aside>
    );
  };
  
  export default FiltersSidebar;
  