interface PaginationProps {
    currentPage: number;
    totalPages: number;
  }
  
  const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
    return (
      <div className="flex justify-center items-center gap-2 mt-8">
        <button className="w-10 h-10 flex items-center justify-center rounded border">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`w-10 h-10 flex items-center justify-center rounded ${
              currentPage === i + 1 ? "bg-[#2874f0] text-white" : "border"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button className="w-10 h-10 flex items-center justify-center rounded border">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    );
  };
  
  export default Pagination;
  