import React from 'react'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import DemoWork from '../components/DemoWork'
import HomeSection from '../components/HomeSection'
import Navbar from '../components/Navbar'
import ServiceSection from '../components/ServiceSection'
import SkillsSection from '../components/SkillsSection'
import TestimonialSection from '../components/TestimonialSection'
// import WorkSection from '../components/WorkSection'

const Home = () => {
  return (
    <>
    <Navbar/>
    <main className="main">
        <HomeSection/>
        <AboutSection/>
        <SkillsSection/>
        <ServiceSection/>
        {/* <WorkSection/> */}
        <DemoWork/>
        <TestimonialSection/>
        <ContactSection/>
    </main>
    </>
  )
}

export default Home