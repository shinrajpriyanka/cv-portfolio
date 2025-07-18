import React from 'react'
import { words } from '../constants'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import AnimatedCounter from '../components/AnimatedCounter';

const Hero = () => {
useGSAP(() => {
    gsap.fromTo('.hero-text h1', {
     y: 50,
     opacity:0   
    }, {
        y: 0,
     opacity:1,
     stagger: 0.2,
     duration: 1,
     ease:  'power2.inOut'
    })
})
  return (
    <section id="hero" className='relative overflow-hidden'>        
        <div className='hero-layout'>
            {/*left hero content*/}
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                <div className='flex flex-col gap-7'>
                    <div className='hero-text'>                    
                        <h1>Building complex web apps from
                            <span className='slide'>
                                <span className='wrapper'>
                                    {words.map((word) => (
                                        <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                                            <img src={word.imgPath} alt={word.text} className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'/>
                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                        <h1>using Modern JS Framework(React, Angular)</h1>
                        <h1>that solves complex customer problems and delivers results. </h1>
                    </div>
                    <p className="text-white-50 md:text-xl relative z-10 pointer-events-none"> Hi, I'm Priyanka, a developer with a passion for technology and curiosity to learn.</p>                    
                </div>
            </header>
        </div>
        <AnimatedCounter/>
    </section>
  )
}

export default Hero
