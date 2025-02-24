const Pagination = () => {
    return (
      <div className="flex justify-center items-center mt-8">
        <button className="px-4 py-2 border rounded-l hover:bg-gray-100">Previous</button>
        <button className="px-4 py-2 border-t border-b bg-blue-500 text-white">1</button>
        <button className="px-4 py-2 border-t border-b hover:bg-gray-100">2</button>
        <button className="px-4 py-2 border-t border-b hover:bg-gray-100">3</button>
        <button className="px-4 py-2 border rounded-r hover:bg-gray-100">Next</button>
      </div>
    );
  };
  
  export default Pagination;