interface WishlistHeaderProps {
  itemCount: number;
  onSortChange: (sortValue: string) => void;
}

const WishlistHeader: React.FC<WishlistHeaderProps> = ({ itemCount, onSortChange }) => {
  return (
    <div className="bg-white rounded-sm shadow-sm p-4 mb-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium">My Wishlist ({itemCount})</h1>
        <div className="flex items-center gap-2">
          <select
            className="border rounded p-2 text-sm"
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option>Sort by: Price - Low to High</option>
            <option>Sort by: Price - High to Low</option>
            <option>Sort by: Recently Added</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default WishlistHeader;
