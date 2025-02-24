import ProductCard from './ProductCard';

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      {/* Repeat as needed */}
    </div>
  );
};

export default ProductGrid;