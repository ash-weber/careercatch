import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingEnrollButton from '@/components/common/FloatingEnrollButton'
import HeroBanner from '@/components/sections/HeroBanner'
import Introduction from '@/components/sections/Introduction'
import PopularCourses from '@/components/sections/PopularCourses'
import TechnologiesMarquee from '@/components/sections/TechnologiesMarquee'
import WhyLearnWithUs from '@/components/sections/WhyLearnWithUs'
import LearningMethodology from '@/components/sections/LearningMethodology'
import CourseHighlights from '@/components/sections/CourseHighlights'
import HandsOnProjects from '@/components/sections/HandsOnProjects'
import IndustrySkills from '@/components/sections/IndustrySkills'
import StudentAchievements from '@/components/sections/StudentAchievements'
import TrainersMentors from '@/components/sections/TrainersMentors'
import Testimonials from '@/components/sections/Testimonials'
import CareerOpportunities from '@/components/sections/CareerOpportunities'
import FAQ from '@/components/sections/FAQ'
import EnquiryCTA from '@/components/sections/EnquiryCTA'

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* S01: Hero Banner */}
        <HeroBanner />

        {/* S02: Popular Courses */}
        <PopularCourses />

        {/* S03: Introduction */}
        <Introduction />

        {/* S07: Technologies We Teach */}
        <TechnologiesMarquee />

        {/* S08: Why Learn With Us */}
        <WhyLearnWithUs />

        {/* S09: Learning Methodology */}
        <LearningMethodology />

        {/* S10: Course Highlights */}
        <CourseHighlights />

        {/* S11: Hands-on Projects */}
        <HandsOnProjects />

        {/* S12: Industry-Relevant Skills */}
        <IndustrySkills />

        {/* S13: Student Achievements */}
        <StudentAchievements />

        {/* S14: Trainers / Mentors */}
        <TrainersMentors />

        {/* S15: Student Testimonials */}
        <Testimonials />

        {/* S16: Career Opportunities */}
        <CareerOpportunities />

        {/* S17: Frequently Asked Questions */}
        <FAQ />

        {/* S18: Enquiry / Join Now CTA */}
        <EnquiryCTA />
      </main>

      {/* S19: Footer */}
      <Footer />

      {/* Floating Sticky Enroll CTA */}
      <FloatingEnrollButton />
    </>
  )
}
