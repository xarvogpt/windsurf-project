import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import BagShowcase from './components/BagShowcase';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">VibeBag</h1>
              <nav className="hidden md:flex ml-10 space-x-8">
                <a href="#" className="text-gray-900 hover:text-indigo-600 font-medium">홈</a>
                <a href="#" className="text-gray-500 hover:text-indigo-600 font-medium">신상품</a>
                <a href="#" className="text-gray-500 hover:text-indigo-600 font-medium">베스트</a>
                <a href="#" className="text-gray-500 hover:text-indigo-600 font-medium">할인상품</a>
                <a href="#" className="text-gray-500 hover:text-indigo-600 font-medium">컬렉션</a>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <User className="h-5 w-5" />
              </button>
              <button className="md:hidden p-2 text-gray-500 hover:text-gray-700">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <BagShowcase />
        
        {/* 추천 상품 섹션 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">이런 상품은 어때요?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="group">
                  <div className="bg-gray-100 rounded-lg aspect-square mb-3 overflow-hidden">
                    <div className="h-full w-full flex items-center justify-center text-gray-300">
                      상품 이미지 {item}
                    </div>
                  </div>
                  <h3 className="font-medium text-gray-900">가방 모델 {item}</h3>
                  <p className="text-indigo-600 font-medium">{(189000 - item * 10000).toLocaleString()}원</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">고객센터</h3>
              <p className="text-gray-300">평일 10:00 ~ 18:00</p>
              <p className="text-gray-300">점심시간 12:30 ~ 13:30</p>
              <p className="text-2xl font-bold mt-2">1588-1234</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">회사소개</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">브랜드 스토리</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">회사 소개</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">채용 정보</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">고객지원</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">공지사항</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">자주 묻는 질문</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">1:1 문의</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">이용안내</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">이용약관</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">개인정보처리방침</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">이용안내</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 VibeBag. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
