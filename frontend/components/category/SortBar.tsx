interface SortBarProps {
    title: string;
  }
  
  const SortBar: React.FC<SortBarProps> = ({ title }) => {
    return (
      <div className="bg-white p-4 rounded-sm shadow-sm mb-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium">{title}</h1>
          <select className="p-2 border rounded">
            <option>Popularity</option>
            <option>Price -- Low to High</option>
            <option>Price -- High to Low</option>
            <option>Newest First</option>
          </select>
        </div>
      </div>
    );
  };
  
  export default SortBar;
  