import Image from 'next/image';

const teamMembers = [
  {
    name: 'CA.Navdeep Bansal',
    image: '/m2.png',
    role: 'Director',
  },
  {
    name: 'CA. Anshuman Goyal',
    image: '/m1.png',
    role: 'Director',
  },
  {
    name: 'CA. Ria Goyal',
    image: '/m3.png',
    role: 'CEO Audit & Finance',
  },
  {
    name: 'Adv. Ayushi Bansal',
    image: '/m4.png',
    role: 'CEO Audit & Finance',
  },
];

const Team = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2> */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center group"
            >
              <div className="relative w-full h-48 sm:h-96 mb-4 overflow-hidden rounded-lg shadow-md transition-transform duration-300 ease-in-out group-hover:scale-105">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-center">{member.name}</h3>
              {member.role && (
                <p className="text-gray-600 text-center mt-2">{member.role}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
