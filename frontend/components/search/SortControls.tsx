const SortControls = () => {
    return (
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <div className="flex items-center justify-between">
          <span className="font-medium">Sort By</span>
          <div className="flex space-x-4">
            <button className="text-gray-600 hover:text-blue-500">Popularity</button>
            <button className="text-gray-600 hover:text-blue-500">Price -- Low to High</button>
            <button className="text-gray-600 hover:text-blue-500">Price -- High to Low</button>
            <button className="text-gray-600 hover:text-blue-500">Newest First</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default SortControls;