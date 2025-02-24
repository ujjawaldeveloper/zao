const Breadcrumb = () => {
    return (
      <div className="flex items-center text-sm mb-4">
        <a href="#" className="text-gray-600 hover:text-blue-500">
          Home
        </a>
        <i className="lucide-chevron-right w-4 h-4 mx-2 text-gray-400"></i>
        <span className="text-gray-800">Search Results</span>
      </div>
    );
  };
  
  export default Breadcrumb;