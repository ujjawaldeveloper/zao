const Pagination = () => (
    <div className="flex justify-center mt-6 gap-2">
      <button className="w-10 h-10 flex items-center justify-center rounded border">
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded bg-[#2874f0] text-white">1</button>
      <button className="w-10 h-10 flex items-center justify-center rounded border">2</button>
      <button className="w-10 h-10 flex items-center justify-center rounded border">3</button>
      <button className="w-10 h-10 flex items-center justify-center rounded border">
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
  
  export default Pagination;
  