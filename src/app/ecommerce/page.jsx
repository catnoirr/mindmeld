import Image from 'next/image';

const servicesData = [
  {
    country: "United Arab Emirates (UAE)",
    image: "/ecommerse/uae.png",
    description: "We provide comprehensive consultancy services to help businesses establish and grow in the UAE market. Our team of experts specializes in key areas such as indirect tax registration, company formation, product registration, and more.",
  },
  {
    country: "Kingdom of Saudi Arabia (KSA)",   
    image: "/ecommerse/saudi.jpg",
    description: "We offer expert consultancy services to help businesses enter and thrive in the Saudi Arabian market. Whether it's VAT registration or navigating complex import/export regulations, we ensure your business stays compliant with all KSA laws.",
  },
  {
    country: "Germany",
    image: "/ecommerse/germany.png",
    description: "In addition to VAT, businesses operating in Saudi Arabia must comply with local zakat and tax filing requirements. We assist with zakat and income tax registration, preparation, and filing, helping your business maintain compliance with the Kingdom's tax laws.",
  },
  {
    country: "United States of America (USA)",
    image: "/ecommerse/usa.png",
    description: "We provide expert consultancy services to help businesses successfully navigate the complex regulatory environment in the United States. Whether you're looking to comply with FDA regulations.",
  },
  {
    country: "United Kingdom (UK)",
    image: "/ecommerse/uk.png",
    description: "We provide expert consultancy services to help businesses establish and grow in the UK market. From VAT registration to ensuring compliance with UK regulations, our team supports you every step of the way.",
  },
  {
    country: "Other Labelling Compliance Services",
    image: "/ecommerse/other.png",
    description: "As part of our comprehensive consultancy services, we assist businesses with ensuring that their products meet the specific labelling compliance requirements of different markets.",
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-48">
              <Image
                src={service.image}
                alt={service.country}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">{service.country}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                Find More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
