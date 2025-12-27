import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const popularProducts = [
  { id: 1, name: 'Urban Explorer', price: '128,000원', imageUrl: 'https://via.placeholder.com/300x300.png/a0aec0/ffffff?text=Bag+1' },
  { id: 2, name: 'Classic Tote', price: '98,000원', imageUrl: 'https://via.placeholder.com/300x300.png/94a3b8/ffffff?text=Bag+2' },
  { id: 3, name: 'Modern Crossbag', price: '152,000원', imageUrl: 'https://via.placeholder.com/300x300.png/8b5cf6/ffffff?text=Bag+3' },
  { id: 4, name: 'Daily Backpack', price: '110,000원', imageUrl: 'https://via.placeholder.com/300x300.png/a78bfa/ffffff?text=Bag+4' },
  { id: 5, name: 'Minimal Pouch', price: '64,000원', imageUrl: 'https://via.placeholder.com/300x300.png/c084fc/ffffff?text=Bag+5' },
  { id: 6, name: 'Travel Duffle', price: '189,000원', imageUrl: 'https://via.placeholder.com/300x300.png/e879f9/ffffff?text=Bag+6' },
  { id: 7, name: 'Leather Clutch', price: '135,000원', imageUrl: 'https://via.placeholder.com/300x300.png/f472b6/ffffff?text=Bag+7' },
];

export default function PopularItems() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {popularProducts.slice(0, 6).map((product) => (
          <SwiperSlide key={product.id} className="group pb-8">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 shadow-md group-hover:shadow-xl transition-shadow duration-300">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-center object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
