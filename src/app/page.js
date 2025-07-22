import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Notification Bar */}
      <div className="bg-white border-b border-gray-200 px-4 py-2 text-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-gray-600">
            현재 계신 국가에 맞는 콘텐츠를 확인하거나 온라인 쇼핑을 하려면 해당 국가 또는 지역을 선택하세요.
          </span>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-800">대한민국</span>
            </div>
            <button className="bg-black text-white px-4 py-1 rounded text-sm">계속</button>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-semibold">🍎</div>
            <div className="hidden md:flex space-x-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-gray-900">Store</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Mac</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">iPad</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">iPhone</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Watch</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Vision</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">AirPods</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">TV & Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Entertainment</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Accessories</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Support</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-4 pt-16 pb-24 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">
            MacBook Air
          </h1>
          <div className="text-xl md:text-2xl text-gray-600 mb-8 space-y-2">
            <p>13" 및 15"</p>
            <p>M3 칩 탑재</p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors">
              구매하기
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-600 hover:text-white transition-colors">
              더 알아보기
            </button>
          </div>

          {/* MacBook Air Images */}
          <div className="relative">
            <div className="relative w-full max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* MacBook Air 13" */}
                <div className="relative">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">MacBook Air 13"</h3>
                    <p className="text-gray-600">M3 칩 탑재</p>
                  </div>
                  <div className="relative w-full h-80 bg-gradient-to-b from-gray-100 to-gray-200 rounded-3xl shadow-2xl transform rotate-2">
                    {/* Screen */}
                    <div className="absolute inset-4 bg-gradient-to-br from-blue-400 via-blue-300 to-blue-500 rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-400 to-blue-200 opacity-80">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>
                    </div>
                    
                    {/* Keyboard Area */}
                    <div className="absolute bottom-4 left-4 right-4 h-12 bg-gray-800 rounded-lg">
                      <div className="grid grid-cols-10 gap-1 p-2">
                        {Array.from({ length: 10 }, (_, i) => (
                          <div key={i} className="h-1.5 bg-gray-600 rounded"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* MacBook Air 15" */}
                <div className="relative">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">MacBook Air 15"</h3>
                    <p className="text-gray-600">M3 칩 탑재</p>
                  </div>
                  <div className="relative w-full h-80 bg-gradient-to-b from-gray-100 to-gray-200 rounded-3xl shadow-2xl transform -rotate-2">
                    {/* Screen */}
                    <div className="absolute inset-4 bg-gradient-to-br from-green-400 via-green-300 to-green-500 rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-400 to-green-200 opacity-80">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>
                    </div>
                    
                    {/* Keyboard Area */}
                    <div className="absolute bottom-4 left-4 right-4 h-12 bg-gray-800 rounded-lg">
                      <div className="grid grid-cols-12 gap-1 p-2">
                        {Array.from({ length: 12 }, (_, i) => (
                          <div key={i} className="h-1.5 bg-gray-600 rounded"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Reflection */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-gradient-to-t from-gray-200/50 to-transparent rounded-full blur-sm"></div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto px-4 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">M3 칩</h3>
              <p className="text-gray-600">최대 2배 빠른 성능</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Touch ID</h3>
              <p className="text-gray-600">안전하고 빠른 인증</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">무료 배송</h3>
              <p className="text-gray-600">모든 Mac 구매 시</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center pb-16">
          <p className="text-2xl md:text-3xl font-medium text-gray-900">
            Apple Intelligence로{' '}
            <span className="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
              더욱 강력해진
            </span>
            {' '}MacBook Air
          </p>
        </div>
      </main>
    </div>
  )
}
