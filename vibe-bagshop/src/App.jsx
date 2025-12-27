import BagShowcase from './components/BagShowcase';
import PopularItems from './components/PopularItems';

function App() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans leading-normal tracking-normal">
      {/* 1. Navigation Menu */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-3xl font-bold text-gray-900">Vibe Bagshop</h1>
            <ul className="hidden md:flex items-center space-x-8 font-semibold text-gray-600">
              <li><a href="#" className="hover:text-purple-700 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="hover:text-purple-700 transition-colors duration-300">Shop</a></li>
              <li><a href="#" className="hover:text-purple-700 transition-colors duration-300">About</a></li>
              <li><a href="#" className="hover:text-purple-700 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        {/* 2. MD's Recommendation Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">MD's Pick</h2>
            <p className="text-lg text-gray-600 mb-12">디자이너의 손길로 완성된 시그니처 아이템</p>
            <BagShowcase />
          </div>
        </section>

        {/* 3. Popular Items Section */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Popular Items</h2>
              <button className="font-semibold text-purple-600 hover:text-purple-800 transition-colors">더보기 &rarr;</button>
            </div>
            <PopularItems />
          </div>
        </section>
      </main>

      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Vibe Bagshop. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}

export default App
