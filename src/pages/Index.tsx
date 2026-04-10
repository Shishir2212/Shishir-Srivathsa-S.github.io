import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import SubjectsSection from "@/components/SubjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import RolesSection from "@/components/RolesSection";
import CertificationsSection from "@/components/CertificationsSection";
import ExtracurricularSection from "@/components/ExtracurricularSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <SubjectsSection />
    <ExperienceSection />
    <EducationSection />
    <RolesSection />
    <CertificationsSection />
    <ExtracurricularSection />
    {/* <TestimonialsSection /> */}
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
