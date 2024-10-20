'use client';
import coursedata from '@/data/code_courses.json';
import { BackgroundGradient } from './ui/background-gradient';
import Link from 'next/link';

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: string;
  instructor: string;
  isFeatured: boolean;
}

const FeaturedCourses = () => {
  const featuredCourses = coursedata.courses.filter((course: Course) => course.isFeatured);

  return (
    <div className='py-12 bg-grey-900'>
      <div className='text-center'>
        <h1 className='text-teal-600 font-semibold tracking-wide text-3xl sm:text-4xl'>
          Featured Courses
        </h1>
        <p className='mt-2 text-2xl font-extrabold text-white sm:text-3xl'>
          Learn with the best
        </p>
        <p className='mt-4 text-lg text-neutral-400'>
          Choose from a range of handpicked courses curated by top instructors.
        </p>
      </div>

      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {featuredCourses.map((course: Course) => (
          <div key={course.id} className='flex justify-center'>
            <BackgroundGradient className='flex flex-col rounded-[22px] bg-zinc-900 overflow-hidden h-full max-w-sm shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className='p-4 sm:p-6 flex flex-col items-center text-center'>
                {/* Course Title */}
                <p className='text-lg sm:text-xl mt-4 mb-2 text-neutral-200 font-semibold'>
                  {course.title}
                </p>
                {/* Course Description */}
                <p className='text-sm text-neutral-400 mb-4'>
                  {course.description}
                </p>
                {/* Course Price and Instructor */}
                <p className='text-sm text-teal-300'>
                  {course.instructor}
                </p>
                <p className='text-lg font-bold text-teal-500'>
                  {course.price}
                </p>
                {/* Learn More Link */}
                <Link href={`/courses/${course.slug}`}>
                  <span className='mt-3 text-teal-400 hover:underline'>
                    Learn more
                  </span>
                </Link>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>

      {/* View All Courses Button */}
      <div className='mt-8 flex justify-center'>
        <Link href='/courses'>
          <span className='px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-teal-700 text-white font-semibold hover:from-teal-600 hover:to-teal-800 transition duration-300'>
            View All Courses
          </span>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
