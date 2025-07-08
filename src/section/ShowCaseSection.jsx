import React from 'react'
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowCaseSection = () => {
const sectionRef = useRef(null);
const project1Ref = useRef(null);
const project2Ref = useRef(null);


useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current];

    projects.forEach((card, index) => {
    gsap.fromTo(
        card,
        {
            y:50, opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.3 * (index + 1),
            scrollTrigger: {
                trigger: card,
                start: 'top bottom-=100',
            }
        }
    )
});
    gsap.fromTo(sectionRef.current, 
        {opacity: 0},
        {opacity:1, duration: 1.5}
    )
},[])

  return (
    <section ref={sectionRef} id="work" className="app-showcase">
        <div className="w-full">
            <div className="showcaselayout">
                {/*LEFT */}
                <div className='first-project-wrapper'>
                    <div className='image-wrapper'>
                        <img src="/images/project1.png" alt="Ryde" />
                    </div>
                    <div className='text-content'>
                        <h2>
                            On-demand Rides MAde Simple
                        </h2>
                                                    <p className="text-white-50 md:text-xl">

                                                    </p>

                    </div>
                </div>
                {/*Right */}
                <div className='project-list-wrapper overflow-hidden'>
                    <div ref={project1Ref} className="project">
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src="/images/project2.png" alt='Library management Platform'/>
                        </div>
                        <h2>Library management</h2>
                    </div>
                    <div ref={project2Ref} className="project">
                        <div className='image-wrapper bg-[#ffe7eb]'>
                            <img src="/images/project2.png" alt='Library management Platform'/>
                        </div>
                        <h2>Directory management</h2>
                    </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default ShowCaseSection
