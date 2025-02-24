const Filters = () => (
    <div className="bg-white rounded-sm shadow-sm p-4 mb-4">
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <input
            type="text"
            placeholder="Search your orders"
            className="w-full border rounded p-2"
          />
        </div>
        <select className="border rounded p-2">
          <option>Last 30 days</option>
          <option>2024</option>
          <option>2023</option>
          <option>2022</option>
        </select>
        <select className="border rounded p-2">
          <option>All Orders</option>
          <option>On the way</option>
          <option>Delivered</option>
          <option>Cancelled</option>
        </select>
      </div>
    </div>
  );
  
  export default Filters;
  