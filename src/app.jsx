import React from 'react'
import Hero from './section/Hero'
import ShowCaseSection from './section/ShowCaseSection'
import NavBar from './components/NavBar'
import LogoSection from './components/HeroModel/LogoSection'
import FeatureCard from './section/FeatureCard'
import ExperienceCards from './section/ExperienceCards'
import Techstack from './section/Techstack'
import Contact from './section/Contact'

const App = () => {
  return (
    <>
    <NavBar></NavBar>
    <Hero></Hero>
    <ExperienceCards></ExperienceCards>      
    <Techstack></Techstack>
    <FeatureCard></FeatureCard>    
    <Contact></Contact>
    <LogoSection></LogoSection>
    </>   
  )
}

export default App
