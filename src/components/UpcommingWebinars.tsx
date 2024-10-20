'use client';
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcommingWebinars() {
  const featuredWebinars = [
    {
      title: "Introduction to JavaScript",
      description: "Learn the basics of JavaScript, the programming language of the web.",
      link: "https://example.com/webinar1", // Changed to string
    },
    {
      title: "Understanding React Hooks",
      description: "Dive deep into React Hooks and how to manage state in functional components.",
      link: "https://example.com/webinar2", // Changed to string
    },
    {
      title: "CSS Grid and Flexbox",
      description: "Master layout techniques using CSS Grid and Flexbox for responsive design.",
      link: "https://example.com/webinar3", // Changed to string
    },
    {
      title: "Building RESTful APIs with Node.js",
      description: "Learn how to create RESTful APIs using Node.js and Express.",
      link: "https://example.com/webinar4", // Changed to string
    },
    {
      title: "TypeScript for Beginners",
      description: "Get started with TypeScript and understand its advantages over JavaScript.",
      link: "https://example.com/webinar5", // Changed to string
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6"></div>
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          Featured Webinars
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Enhance Your Coding Journey
        </p>
      </div>
      <div className="mt-10">
        <HoverEffect
          items={featuredWebinars.map(webinar => ({
            title: webinar.title,
            description: webinar.description,
            link: webinar.link, // Now a string URL
          }))}
        />
      </div>
      <div className="mt-10 text-center">
        <Link href="/" className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
          View All Webinars
        </Link>
      </div>
    </div>
  );
}

export default UpcommingWebinars;