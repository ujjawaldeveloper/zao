// app/components/TopOffers.tsx
'use client';

const topOffers = [
  { id: 1, imgSrc: '/images/offer1.jpg', title: '50% Off on Men\'s Wear' },
  { id: 2, imgSrc: '/images/offer2.jpg', title: 'Buy 1 Get 1 Free - Women\'s Wear' },
  { id: 3, imgSrc: '/images/offer3.jpg', title: 'Up to 70% Off on Accessories' },
  { id: 4, imgSrc: '/images/offer4.jpg', title: 'Flat 30% Off on Footwear' },
];

const TopOffers = () => {
  return (
    <div className="my-8 px-4">
      <h2 className="text-2xl font-semibold mb-4">Top Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {topOffers.map((offer) => (
          <div
            key={offer.id}
            className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-md"
          >
            <img
              src={offer.imgSrc}
              alt={offer.title}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
            <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
              {offer.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopOffers;
