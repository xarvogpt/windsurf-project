import { useState } from 'react';

// 상품 데이터
const products = [
  {
    id: 3,
    name: '클래식 백팩',
    price: 159000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800',
    description: '어디에나 잘 어울리는 클래식한 디자인의 백팩입니다.'
  },
  {
    id: 4,
    name: '토트백',
    price: 99000,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800',
    description: '수납공간이 넉넉한 토트백입니다.'
  }
];

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-indigo-600">VibeBag</h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-gray-700 relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">인기 상품</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-bold text-indigo-600">{product.price.toLocaleString()}원</span>
                    <button 
                      onClick={addToCart}
                      className="px-3 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700 transition-colors"
                    >
                      장바구니
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2023 VibeBag. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
