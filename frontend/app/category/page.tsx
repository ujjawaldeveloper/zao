import FiltersSidebar from "@/components/category/FiltersSidebar";
import SortBar from "@/components/category/SortBar";
import ProductCard from "@/components/category/ProductCard";
import Pagination from "@/components/category/Pagination";

const CategoryPage = () => {
  return (
    <main id="ProductListPage" className="bg-gray-100 min-h-screen pt-4">
      <div className="h-16 md:h-16"></div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Filters Sidebar */}
          <FiltersSidebar />

          {/* Product List */}
          <div className="flex-1">
            {/* Sort Bar */}
            <SortBar title="Smartphones" />

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <ProductCard
                name="Samsung Galaxy S21"
                price={49999}
                originalPrice={59999}
                discount={16}
                rating={4.5}
                reviews={2345}
              />
              <ProductCard
                name="iPhone 13"
                price={69999}
                originalPrice={79999}
                discount={12}
                rating={4.7}
                reviews={3142}
              />
              <ProductCard
                name="OnePlus 9 Pro"
                price={54999}
                originalPrice={64999}
                discount={15}
                rating={4.6}
                reviews={1876}
              />
            </div>

            {/* Pagination */}
            <Pagination currentPage={1} totalPages={3} />
          </div>
        </div>
      </div>
      <div className="h-16 md:h-16"></div>
    </main>
  );
};

export default CategoryPage;
