import React, { useRef } from 'react';
import TitleHeader from '../components/TitleHeader';
import { happyMoments } from '../constants';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MomentCard = ({ moment, index }) => {
    const cardRef = useRef(null);
    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;
        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
        angle = (angle + 360) % 360;
        card.style.setProperty('--start', angle + 60);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className="moment-card card card-border rounded-xl p-7 flex flex-col gap-4"
        >
            <div className="glow" />
            <div className="moment-icon-wrapper">
                {moment.imgPath ? (
                    <img src={moment.imgPath} alt={moment.title} className="moment-icon-img" />
                ) : (
                    <span className="moment-emoji">{moment.icon || '🏆'}</span>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <span className="moment-type-badge">{moment.type}</span>
                <h3 className="text-white font-semibold text-lg leading-snug">{moment.title}</h3>
                <p className="text-blue-50 text-sm font-medium">{moment.issuer}</p>
                <p className="text-white-50 text-xs mt-1">{moment.date}</p>
                {moment.credentialUrl && (
                    <a
                        href={moment.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="moment-credential-link"
                    >
                        View Credential →
                    </a>
                )}
            </div>
        </div>
    );
};

const HappyMoments = () => {
    useGSAP(() => {
        gsap.utils.toArray('.moment-card').forEach((card, i) => {
            gsap.from(card, {
                y: 60,
                opacity: 0,
                duration: 0.7,
                delay: i * 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                },
            });
        });

        ScrollTrigger.create({
            trigger: "#happy-moments",
            start: "top 70%",
            onEnter: () => {
                import('../utils/confetti').then(({ triggerSprinkler }) => {
                    triggerSprinkler(2500); // 2.5 seconds of sprinkler
                });
            },
            once: true
        });
    }, []);

    return (
        <section id="happy-moments" className="w-full md:pt-40 pt-20 section-padding xl:px-0">
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader title="My Happy Moments" sub="Certifications & Awards" />
                <div className="mt-16 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                    {happyMoments.map((moment, index) => (
                        <MomentCard key={index} moment={moment} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HappyMoments;
