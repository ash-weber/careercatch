import Navbar from './components/layout/Navbar'
import HeroBanner from './components/sections/HeroBanner'
import MainCourseCTA from './components/sections/MainCourseCTA'
import Introduction from './components/sections/Introduction'
import PopularCourses from './components/sections/PopularCourses'
import CourseCategories from './components/sections/CourseCategories'
import TechnologiesMarquee from './components/sections/TechnologiesMarquee'
import WhyLearnWithUs from './components/sections/WhyLearnWithUs'
import LearningMethodology from './components/sections/LearningMethodology'
import CourseHighlights from './components/sections/CourseHighlights'
import HandsOnProjects from './components/sections/HandsOnProjects'
import IndustrySkills from './components/sections/IndustrySkills'
import StudentAchievements from './components/sections/StudentAchievements'
import TrainersMentors from './components/sections/TrainersMentors'
import Testimonials from './components/sections/Testimonials'
import CareerOpportunities from './components/sections/CareerOpportunities'
import FAQ from './components/sections/FAQ'
import EnquiryCTA from './components/sections/EnquiryCTA'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-['Inter_Tight'] selection:bg-[#1D4ED8]/15 selection:text-[#0F172A]">
      <Navbar />

      <main>
        {/* S02: Hero Banner */}
        <HeroBanner />

        {/* S03: Main Course CTA */}
        <MainCourseCTA />

        {/* S04: Introduction */}
        <Introduction />

        {/* S05: Popular Courses */}
        <PopularCourses />

        {/* S06: Course Categories */}
        <CourseCategories />

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
    </div>
  )
}
