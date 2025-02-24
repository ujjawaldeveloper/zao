interface ProductCardProps {
    name: string;
    price: number;
    originalPrice: number;
    discount: number;
    rating: number;
    reviews: number;
  }
  
  const ProductCard: React.FC<ProductCardProps> = ({
    name,
    price,
    originalPrice,
    discount,
    rating,
    reviews,
  }) => {
    return (
      <div className="bg-white p-4 rounded-sm shadow-sm hover:shadow-md transition-shadow">
        <div className="aspect-square bg-gray-100 mb-4"></div>
        <h3 className="font-medium mb-2">{name}</h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-green-600 text-white px-2 py-0.5 text-sm rounded">{rating} ★</span>
          <span className="text-gray-500 text-sm">({reviews})</span>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xl font-medium">₹{price}</span>
            <span className="text-gray-500 line-through">₹{originalPrice}</span>
            <span className="text-green-600">{discount}% off</span>
          </div>
          <div className="text-sm text-gray-500">Free delivery</div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  