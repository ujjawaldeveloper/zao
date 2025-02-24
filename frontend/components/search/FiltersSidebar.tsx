const FiltersSidebar = () => {
  return (
    <div className="lg:w-1/4 bg-white rounded-lg shadow p-4">
      <div className="border-b pb-3">
        <h3 className="font-medium text-lg mb-2">Filters</h3>
        <button className="text-blue-500 text-sm">CLEAR ALL</button>
      </div>

      <div className="border-b py-3">
        <h4 className="font-medium mb-2">CATEGORIES</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-500" />
            <span className="ml-2 text-sm">Electronics</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-500" />
            <span className="ml-2 text-sm">Mobiles</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-500" />
            <span className="ml-2 text-sm">Fashion</span>
          </label>
        </div>
      </div>

      <div className="border-b py-3">
        <h4 className="font-medium mb-2">PRICE</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-500" />
            <span className="ml-2 text-sm">Under ₹1,000</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-500" />
            <span className="ml-2 text-sm">₹1,000 - ₹5,000</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-500" />
            <span className="ml-2 text-sm">Over ₹5,000</span>
          </label>
        </div>
      </div>

      <div className="py-3">
        <h4 className="font-medium mb-2">BRAND</h4>
        <input
          type="text"
          placeholder="Search Brand"
          className="w-full p-2 border rounded mb-2 text-sm"
        />
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-500" />
            <span className="ml-2 text-sm">Samsung</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-500" />
            <span className="ml-2 text-sm">Apple</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-500" />
            <span className="ml-2 text-sm">Mi</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FiltersSidebar;