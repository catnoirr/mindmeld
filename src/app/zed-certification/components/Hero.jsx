import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full min-h-[600px] bg-gradient-to-r from-[#9AADC4] to-[#E2EAEE] px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                Certify with Confidence, Lead with
                <div className="text-[#1B3B5C]">Excellence.</div>
              </h1>
            </div>
            
            <p className="text-gray-600 text-lg max-w-xl">
              Validate expertise, enhance credibility, unlock opportunities, and lead with
              confidence in your industry.
            </p>

            <button className="bg-[#1B3B5C] text-white px-8 py-3 rounded-3xl font-medium hover:bg-[#152f49] transition-colors flex items-center gap-2">
              Explore
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[
                  '/associate1.jpg',
                  '/associate2.jpg', 
                  '/associate3.jpg'
                ].map((imgSrc, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                  >
                    <Image
                      src={imgSrc}
                      alt={`Associate ${index + 1}`}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-semibold">1.3M</p>
                <p className="text-gray-600">Associates</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] mt-8 lg:mt-0">
            {/* Background shape */}
            <div className="absolute inset-0 bg-[#E2EAEE] rounded-[2rem] transform rotate-3"></div>
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
              <Image
                src="/hero-image.png"
                alt="Professional with folder"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
                quality={85}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 