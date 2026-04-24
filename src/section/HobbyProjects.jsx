import React, { useRef } from 'react';
import TitleHeader from '../components/TitleHeader';
import { hobbyProjects } from '../constants';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HobbyProjectCard = ({ project, index }) => {
    return (
        <div className="hobby-card card card-border rounded-xl overflow-hidden group">
            <div className="hobby-card-image-wrapper">
                {project.imgPath ? (
                    <img
                        src={project.imgPath}
                        alt={project.title}
                        className="hobby-card-image"
                    />
                ) : (
                    <div className="hobby-card-placeholder">
                        <span>{project.icon || '💡'}</span>
                    </div>
                )}
                <div className="hobby-card-overlay" />
            </div>
            <div className="hobby-card-content p-6 flex flex-col gap-3">
                <div className="flex flex-wrap gap-2">
                    {project.tags && project.tags.map((tag, i) => (
                        <span key={i} className="hobby-tag">{tag}</span>
                    ))}
                </div>
                <h3 className="text-white font-bold text-xl leading-snug group-hover:text-blue-50 transition-colors duration-300">
                    {project.title}
                </h3>
                <p className="text-white-50 text-sm leading-relaxed">{project.description}</p>
                <div className="flex gap-3 mt-2">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hobby-btn hobby-btn-primary"
                        >
                            Live Demo →
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hobby-btn hobby-btn-secondary"
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const HobbyProjects = () => {
    useGSAP(() => {
        gsap.utils.toArray('.hobby-card').forEach((card, i) => {
            gsap.from(card, {
                y: 80,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                },
            });
        });
    }, []);

    return (
        <section id="hobby-projects" className="w-full md:pt-40 pt-20 section-padding xl:px-0">
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader title="Hobby Projects" sub="Things I build for fun" />
                <div className="mt-16 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {hobbyProjects.map((project, index) => (
                        <HobbyProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HobbyProjects;
