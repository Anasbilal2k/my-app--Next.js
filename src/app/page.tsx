import FeaturedCourses from "@/components/FeaturedCourses"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import Instructors from "@/components/Instructors"
import TestimonialCards from "@/components/TestimonialCards"
import WhyChooseUs from "@/components/ui/WhyChooseUs"
import UpcommingWebinars from "@/components/UpcommingWebinars"
import React from "react"
const page = () => {
  return (
    <div>
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialCards/>
      <UpcommingWebinars/>
      <Instructors/>
      <Footer />
    </div>
  )
}

export default page
