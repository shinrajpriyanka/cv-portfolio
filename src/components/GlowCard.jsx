import React, { useRef } from 'react'

const GlowCard = ({card, children, index}) => {
    const cardRefs = useRef([]);
    const handleMouseMove = (index) => (e) => {
        const card = cardRefs.current[index];
        if(!card) return;
        //get mouse position relative to card
        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width /2;
        const mouseY = e.clientY - rect.top - rect.height /2;
        
        //calc angle from the center of the card
        let angle = Math.atan2(mouseY, mouseX) * (180/ Math.PI);
        angle = (angle + 360) % 360;
        card.style.setProperty('--start', angle + 60)
    }
  return (
    <div ref={(el) => (cardRefs.current[index] = el)} onMouseMove={handleMouseMove(index)} className='card card-border timeline-card rounded-xl p-10'>
      <div className='glow'/>
      <div className='flex items-center gap-1 mb-5'>
        {Array.from({length: 1}, (_, i)=> (
            <div className='flex items-center justify-center' key={i}>
            <img src="/cv-portfolio/images/star.png" alt="star" className='size-4'/>
            <span className='text-white-50 text-lg pl-2.5'>{card.review}</span>
            </div>
        ))}
      </div>
      {children}
    </div>
  )
}

export default GlowCard
