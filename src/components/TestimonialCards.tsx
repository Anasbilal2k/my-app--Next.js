"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote: "Learning to code has opened up a world of opportunities for me. I can now build my own projects and bring my ideas to life!",
    name: "Alice Johnson",
    title: "Software Engineer at Tech Innovations"
  },
  {
    quote: "The journey of learning to code was challenging but rewarding. It has empowered me to solve problems creatively.",
    name: "Brian Smith",
    title: "Full-Stack Developer"
  },
  {
    quote: "I never thought I could learn coding, but with the right resources, I was able to transition into a tech career successfully.",
    name: "Catherine Lee",
    title: "Data Analyst"
  },
  {
    quote: "Coding is not just about writing code; it's about thinking logically and solving complex problems. It's a skill worth mastering!",
    name: "David Kim",
    title: "Technical Lead at Code Solutions"
  },
  {
    quote: "Thanks to coding bootcamps, I was able to switch careers and find a job I love in tech. The community support was invaluable.",
    name: "Emily Davis",
    title: "Junior Developer"
  },
  {
    quote: "Every line of code is a step towards creating something amazing. Coding has become my passion and my career.",
    name: "Frank Thompson",
    title: "Web Developer"
  }
];

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-black to-gray-800">
      <h2 className="text-3xl font-bold text-center mb-8 z-10 text-white">Hear our Harmony: Voices of Success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-4">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;