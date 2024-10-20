import Image from 'next/image';
import { WavyBackground } from "./ui/wavy-background";

const instructors = [
  {
    id: 1,
    name: "Alice Johnson",
    designation: "Senior Software Engineer",
    image: "/images/alice-johnson.jpg",
  },
  {
    id: 2,
    name: "Brian Smith",
    designation: "Frontend Developer",
    image: "/images/brian-smith.jpg",
  },
  {
    id: 3,
    name: "Catherine Lee",
    designation: "Backend Developer",
    image: "/images/catherine-lee.jpg",
  },
  {
    id: 4,
    name: "David Kim",
    designation: "Full Stack Developer",
    image: "/images/david-kim.jpg",
  },
  {
    id: 5,
    name: "Emily Davis",
    designation: "UI/UX Designer",
    image: "/images/emily-davis.jpg",
  },
  {
    id: 6,
    name: "Frank Thompson",
    designation: "DevOps Engineer",
    image: "/images/frank-thompson.jpg",
  },
];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-md">
        <h2 className="text-2xl md:text-4xl lg:text-3xl text-white font-bold text-center mb-8">
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Discover the talented professionals who will guide you through your journey.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="flex flex-col items-center">
              <Image
                src={instructor.image}
                alt={instructor.name}
                width={150}
                height={150}
                className="rounded-full"
              />
              <h3 className="text-lg text-white mt-4">{instructor.name}</h3>
              <p className="text-sm text-gray-300">{instructor.designation}</p>
            </div>
          ))}
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;
