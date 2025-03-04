import Image from 'next/image';

const AboutZed = () => {
  return (
    <section className="bg-[#0A2942] text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-6">About Zed</h2>
            <p className="text-lg">
              The Zero Defect, Zero Effect (ZED) certification program is a transformative initiative by the
              Ministry of Micro, Small and Medium Enterprises (MSME) aimed at enhancing the quality and
              sustainability of India's manufacturing sector. The program encourages MSMEs to adopt world
              class standards by focusing on two key principles:
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="bg-gray-200/20 rounded-full py-3 px-6">
                <span className="font-semibold">1. Zero Defect</span>
                <p className="text-sm mt-1">
                  Ensuring the production of high-quality products that conform to global standards.
                </p>
              </div>
              
              <div className="bg-gray-200/20 rounded-full py-3 px-6">
                <span className="font-semibold">2. Zero Effect</span>
                <p className="text-sm mt-1">
                  Ensuring the production of high-quality products with minimal environmental impact.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Grid Layout */}
          <div className="grid grid-cols-12 gap-4 h-full">
            {/* Main Image - Woman with Clipboard */}
            <div className="col-span-7 row-span-2">
              <div className=" h-full">
                <Image
                  src="/z1.png"
                  alt="Woman holding clipboard"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Stats Card */}
            <div className="col-span-5 row-span-1">
              <div className="bg-white rounded-2xl p-4 h-full text-black">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-bold">30,000+</h3>
                    <p className="text-sm text-gray-600">Sales in July 2021 with 5 star ratings and happy clients.</p>
                  </div>
                  <div className="text-green-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mt-4">
                  {['😊', '🌟', '🎉', '💪', '🚀', '💡', '🎯', '✨'].map((emoji, i) => (
                    <div key={i} className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
                      <span className="text-lg">{emoji}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Person with Phone Image */}
            <div className="col-span-5 row-span-1">
              <div className="h-full">
                <Image
                  src="/z-2.png"
                  alt="Woman with phone"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Emoji Reactions Card */}
            {/* <div className="col-span-7 row-span-1">
              <div className="bg-white rounded-2xl p-4 text-black">
                <p className="font-semibold mb-2">Best Ratings</p>
                <div className="flex gap-1">
                  {['😍', '😊', '😄', '😃', '😎'].map((emoji, i) => (
                    <span key={i} className="text-2xl">{emoji}</span>
                  ))}
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutZed;
