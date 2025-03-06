import Image from 'next/image';

const teamMembers = [
  {
    name: 'Navdeep Bansal',
    image: '/m2.png',
    role: '',
  },
  {
    name: 'Anshuman Goyal',
    image: '/m1.png',
    role: '',
  },
  {
    name: ' Ria Goyal ',
    image: '/m3.png',
    role: '',
  },
];

const Team = () => {
  return (
    <section className=" pb-16 bg-white">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center"
            >
              <div className="relative w-[350px] h-[440px] mb-4 overflow-hidden rounded-lg ">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={350}
                  height={440}
                  className="object-cover rounded-lg"
                  sizes="200px"
                />
              </div>
              <h3 className="text-xl font-semibold text-center">{member.name}</h3>
              {member.role && (
                <p className="text-gray-600 text-center mt-1">{member.role}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
