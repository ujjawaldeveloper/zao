// ProductDetail Component (pages/ProductDetail.tsx)
const ProductDetailPage = () => {
    return (
      <main id="ProductDetailPage" className="bg-gray-100 min-h-screen pt-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Column - Product Images */}
            <div className="w-full md:w-2/5">
              <div className="bg-white p-4 rounded-sm sticky top-20">
                <div className="aspect-square bg-gray-100 mb-4"></div>
                <div className="flex gap-2">
                  <button className="w-20 h-20 border-2 border-[#2874f0] p-1">
                    <div className="w-full h-full bg-gray-100"></div>
                  </button>
                  <button className="w-20 h-20 border p-1">
                    <div className="w-full h-full bg-gray-100"></div>
                  </button>
                  <button className="w-20 h-20 border p-1">
                    <div className="w-full h-full bg-gray-100"></div>
                  </button>
                </div>
                <div className="flex gap-3 mt-6">
                  <button className="flex-1 bg-[#ff9f00] text-white py-4 rounded-sm font-medium">
                    <i className="fa-solid fa-shopping-cart mr-2"></i>ADD TO CART
                  </button>
                  <button className="flex-1 bg-[#fb641b] text-white py-4 rounded-sm font-medium">
                    <i className="fa-solid fa-bolt mr-2"></i>BUY NOW
                  </button>
                </div>
              </div>
            </div>
  
            {/* Right Column - Product Details */}
            <div className="flex-1">
              <div className="bg-white p-6 rounded-sm">
                <div className="space-y-2 border-b pb-4">
                  <h1 className="text-xl">Apple iPhone 13 (128GB) - Midnight</h1>
                  <div className="flex items-center gap-3">
                    <span className="bg-green-600 text-white px-2 py-0.5 text-sm rounded">4.6 ★</span>
                    <span className="text-gray-500">1,23,123 Ratings &amp; 8,421 Reviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-medium">Extra ₹2000 off</span>
                    <img
                      src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                      alt="Flipkart Assured"
                      className="h-5 transition-opacity duration-300 opacity-100"
                      loading="lazy"
                    />
                  </div>
                </div>
  
                <div className="py-4 border-b">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-medium">₹69,999</span>
                    <span className="text-gray-500 line-through">₹79,900</span>
                    <span className="text-green-600">12% off</span>
                  </div>
                  <div className="text-sm mt-2">
                    <span className="font-medium">Available offers</span>
                    <ul className="space-y-2 mt-2">
                      <li className="flex items-start gap-2">
                        <i className="fa-solid fa-tag text-green-600 mt-1"></i>
                        <span>Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="fa-solid fa-tag text-green-600 mt-1"></i>
                        <span>Special Price Get extra ₹2000 off (price inclusive of discount)</span>
                      </li>
                    </ul>
                  </div>
                </div>
  
                {/* Specifications */}
                <div className="py-4 border-b">
                  <h2 className="text-lg font-medium mb-4">Specifications</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-gray-500 mb-2">General</h3>
                      <table className="w-full">
                        <tbody className="space-y-2">
                          <tr>
                            <td className="text-gray-500 w-1/3 py-1">Model Name</td>
                            <td>iPhone 13</td>
                          </tr>
                          <tr>
                            <td className="text-gray-500 w-1/3 py-1">Color</td>
                            <td>Midnight</td>
                          </tr>
                          <tr>
                            <td className="text-gray-500 w-1/3 py-1">Storage</td>
                            <td>128 GB</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
  
                {/* Product Description */}
                <div className="py-4 border-b">
                  <h2 className="text-lg font-medium mb-4">Product Description</h2>
                  <p className="text-gray-700 leading-relaxed">
                    iPhone 13. The most advanced dual-camera system ever on iPhone. Lightning-fast A15 Bionic chip. A big
                    leap in battery life. Durable design. Superfast 5G. And a brighter Super Retina XDR display.
                  </p>
                </div>
  
                {/* Ratings & Reviews */}
                <div className="py-4">
                  <h2 className="text-lg font-medium mb-4">Ratings &amp; Reviews</h2>
                  <div className="flex gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-medium">4.6★</div>
                      <div className="text-sm text-gray-500">1,23,123 Ratings</div>
                    </div>
                    <div className="flex-1">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span>5★</span>
                          <div className="flex-1 bg-gray-200 h-2 rounded-full">
                            <div className="bg-green-500 w-3/4 h-full rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-500">75,000</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>4★</span>
                          <div className="flex-1 bg-gray-200 h-2 rounded-full">
                            <div className="bg-green-500 w-1/2 h-full rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-500">30,000</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>3★</span>
                          <div className="flex-1 bg-gray-200 h-2 rounded-full">
                            <div className="bg-green-500 w-1/4 h-full rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-500">10,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  {/* Review Cards */}
                  <div className="space-y-4">
                    <div className="border-t pt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-green-600 text-white px-2 py-0.5 text-sm rounded">5★</span>
                        <span className="font-medium">Perfect Product!</span>
                      </div>
                      <p className="text-gray-700 mb-2">
                        Really happy with the product. Perfect display and camera quality. Battery backup is also good.
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>John Doe</span>
                        <span>1 month ago</span>
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-green-600 text-white px-2 py-0.5 text-sm rounded">4★</span>
                        <span className="font-medium">Good Purchase</span>
                      </div>
                      <p className="text-gray-700 mb-2">
                        Value for money product. Good build quality and performance.
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>Jane Smith</span>
                        <span>2 weeks ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  };
  export default ProductDetailPage;
  