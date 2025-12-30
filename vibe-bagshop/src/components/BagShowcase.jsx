import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model({ color }) {
  const { scene } = useGLTF('/black leather briefcase 3d model.glb');
  
  useEffect(() => {
    if (!scene) return;
    
    // 모델의 모든 메시에 색상 적용
    scene.traverse((child) => {
      if (child.isMesh) {
        if (child.material) {
          // PBR 재질인 경우
          if (child.material.isMeshStandardMaterial) {
            child.material.color.set(color);
            child.material.needsUpdate = true;
          }
          // 기타 재질인 경우
          else if (child.material.color) {
            child.material.color.set(color);
          }
        }
      }
    });
  }, [scene, color]);
  
  return <primitive object={scene} scale={1.5} position={[0, -0.5, 0]} rotation={[0, Math.PI / 4, 0]} />;
}

export default function BagShowcase() {
  const [selectedColor, setSelectedColor] = useState('#6b46c1');
  const [quantity, setQuantity] = useState(1);
  
  const colors = [
    { name: '딥 블루', value: '#2c5282' },
    { name: '버건디 레드', value: '#9b2c2c' },
    { name: '클래식 블랙', value: '#1a202c' },
    { name: '에메랄드 그린', value: '#2f855a' },
  ];

  const product = {
    name: '프리미엄 가죽 서류가방',
    price: '189,000',
    description: '고급 가죽으로 제작된 세련된 디자인의 서류가방입니다. 비즈니스 캐주얼룩에 완벽하게 어울립니다.',
    features: [
      '고급 소가죽 소재',
      '수납공간 다수',
      '조절 가능한 어깨끈',
      '내구성 강화 스티치',
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* 3D 모델 뷰어 */}
        <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
          <div className="h-96 w-full relative">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
              <ambientLight intensity={0.7} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />
              <Suspense fallback={null}>
                <Model color={selectedColor} />
                <OrbitControls 
                  enableZoom={true}
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={1}
                />
              </Suspense>
            </Canvas>
          </div>
          
          {/* 색상 선택 */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">색상 선택</h3>
            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`w-10 h-10 rounded-full border-2 transition-all ${selectedColor === color.value ? 'border-blue-500 scale-110' : 'border-gray-200'}`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 제품 정보 */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-2 text-2xl font-semibold text-indigo-600">{product.price}원</p>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-gray-700">{product.description}</p>
            
            <h3 className="text-lg font-medium text-gray-900 mt-6">제품 특징</h3>
            <ul className="mt-2 space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-md">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <button className="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors">
                장바구니에 추가
              </button>
            </div>
            
            <div className="text-sm text-gray-500">
              <p>무료 배송 및 반품</p>
              <p>재고 있음 (5개 이상)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
