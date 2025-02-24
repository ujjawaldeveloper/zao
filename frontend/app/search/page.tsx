import FiltersSidebar from "@/components/category/FiltersSidebar";
import Pagination from "@/components/order/Pagination";
import Breadcrumb from "@/components/search/Breadcrumb";
import ProductGrid from "@/components/search/ProductGrid";
import SortControls from "@/components/search/SortControls";

const SearchResultPage = () => {
  return (
    <section id="SearchResults" className="w-full bg-gray-100 min-h-screen py-4">
      <div className="h-16 md:h-16"></div>
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb />
        <div className="flex flex-col lg:flex-row gap-4">
          <FiltersSidebar />
          <div className="lg:w-3/4">
            <SortControls />
            <ProductGrid />
            <Pagination />
          </div>
        </div>
      </div>
      <div className="h-16 md:h-16"></div>
    </section>
  );
};

export default SearchResultPage;