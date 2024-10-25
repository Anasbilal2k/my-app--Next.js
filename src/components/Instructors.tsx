import { WavyBackground } from "./ui/wavy-background";

const instructors = [
  {
    id: 1,
    name: "Alice Johnson",
    designation: "Senior Software Engineer",
  },
  {
    id: 2,
    name: "Brian Smith",
    designation: "Frontend Developer",
  },
  {
    id: 3,
    name: "Catherine Lee",
    designation: "Backend Developer",
  },
  {
    id: 4,
    name: "David Kim",
    designation: "Full Stack Developer",
  },
  {
    id: 5,
    name: "Emily Davis",
    designation: "UI/UX Designer",
  },
  {
    id: 6,
    name: "Frank Thompson",
    designation: "DevOps Engineer",
  },
];

// Ensure that each name is used only once by filtering duplicates
const uniqueInstructors = Array.from(new Set(instructors.map(instructor => instructor.name)))
  .map(name => instructors.find(instructor => instructor.name === name));

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
          {uniqueInstructors.map((instructor) => (
            instructor && ( // Ensure instructor is not undefined
              <div key={instructor.id} className="flex flex-col items-center">
                {/* Removed Image component */}
                <h3 className="text-lg text-white mt-4">{instructor.name}</h3>
                <p className="text-sm text-gray-300">{instructor.designation}</p>
              </div>
            )
          ))}
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;