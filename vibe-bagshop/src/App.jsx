import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// Simple Box component instead of loading GLB
function Box() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-indigo-600">VibeBag</h1>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-indigo-600">로그인</button>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                장바구니 (0)
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-6">
              <div>
                <div style={{ height: '500px', width: '100%' }}>
                  <Canvas>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <Suspense fallback={<div>로딩 중...</div>}>
                      <Box />
                    </Suspense>
                    <OrbitControls enableZoom={false} autoRotate />
                  </Canvas>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">프리미엄 백팩</h2>
                <p className="text-gray-600 mb-6">고품질 소재로 제작된 내구성 있는 백팩입니다. 일상적인 사용에 적합하며, 수납공간이 넉넉합니다.</p>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-indigo-600">159,000원</span>
                  <span className="ml-2 text-sm text-gray-500 line-through">199,000원</span>
                  <span className="ml-2 text-sm text-red-500">20% 할인</span>
                </div>
                <div className="flex space-x-4 mb-6">
                  <button className="flex-1 bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700">
                    장바구니에 추가
                  </button>
                  <button className="flex-1 bg-white border border-indigo-600 text-indigo-600 py-3 rounded-md hover:bg-indigo-50">
                    찜하기
                  </button>
                </div>
                <div className="text-sm text-gray-500 space-y-2">
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 무료 배송
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 30일 이내 무료 반품
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 안전 결제
                  </p>
                </div>
              </div>
            </div>
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