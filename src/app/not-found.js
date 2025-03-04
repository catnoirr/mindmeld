import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="relative">
          <h1 
            className="text-[150px] md:text-[200px] font-bold leading-none"
            style={{
              background: 'linear-gradient(to bottom right, #1e3a8a, #312e81, #4c1d95)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Oops!
          </h1>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-2">
          UNDER CONSTRUCTION
        </h2>
        
        <div className="flex items-center justify-center mb-6">
          <div className="h-1 w-16 bg-blue-600 mx-2"></div>
          <span className="text-blue-600 font-semibold">404</span>
          <div className="h-1 w-16 bg-blue-600 mx-2"></div>
        </div>
        
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          We're working on something amazing!<br />
          This page is currently under construction and will be available soon.
        </p>

        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 
              text-white font-semibold rounded-full transition-colors duration-200"
          >
            GO TO HOMEPAGE
          </Link>
          
          <div className="flex justify-center items-center space-x-4 mt-8">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
} 