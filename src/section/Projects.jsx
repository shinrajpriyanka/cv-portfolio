import React, { useRef, useState } from 'react';
import TitleHeader from '../components/TitleHeader';
import { workProjects, hobbyProjects } from '../constants';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WorkProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);

    return (
        <div
            ref={cardRef}
            className="work-project-card card card-border rounded-2xl p-7 flex flex-col gap-5"
        >
            <div className="glow" />
            <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="work-project-icon-wrapper">
                        <span className="work-project-icon">{project.icon}</span>
                    </div>
                    <div>
                        <span className="work-project-domain-badge">{project.domain}</span>
                        <h3 className="text-white font-bold text-xl mt-1 leading-snug">{project.title}</h3>
                    </div>
                </div>
            </div>

            <div className="work-project-meta">
                <div className="flex items-center gap-2">
                    <img src={project.companyLogo} alt={project.company} className="work-company-logo" />
                    <div>
                        <p className="text-white font-semibold text-sm">{project.company}</p>
                        <p className="text-blue-50 text-xs">{project.duration}</p>
                    </div>
                </div>
            </div>

            <ul className="work-project-bullets flex flex-col gap-2 mt-1">
                {project.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                        <span className="work-bullet-dot mt-1.5 flex-shrink-0">◈</span>
                        <span className="text-white-50 text-sm leading-relaxed">{point}</span>
                    </li>
                ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, i) => (
                    <span key={i} className="work-tech-tag">{tag}</span>
                ))}
            </div>
        </div>
    );
};

const HobbyProjectCard = ({ project, index }) => {
    return (
        <div className="hobby-card card card-border rounded-2xl overflow-hidden group">
            <div className="hobby-card-image-wrapper">
                {project.imgPath ? (
                    <img src={project.imgPath} alt={project.title} className="hobby-card-image" />
                ) : (
                    <div className="hobby-card-placeholder">
                        <span className="hobby-placeholder-icon">{project.icon || '💡'}</span>
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

const Projects = () => {
    const [activeTab, setActiveTab] = useState('work');
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.utils.toArray('.work-project-card').forEach((card, i) => {
            gsap.from(card, {
                y: 60,
                opacity: 0,
                duration: 0.7,
                delay: i * 0.12,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                },
            });
        });

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
        <section id="projects" className="w-full md:pt-40 pt-20 section-padding xl:px-0" ref={sectionRef}>
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader title="My Projects" sub="Work & Passion Projects" />

                {/* Tab Switch */}
                <div className="projects-tab-wrapper mt-12">
                    <div className="projects-tab-switcher">
                        <button
                            className={`projects-tab-btn ${activeTab === 'work' ? 'active' : ''}`}
                            onClick={() => setActiveTab('work')}
                        >
                            <span className="tab-icon">💼</span>
                            <span>Work Projects</span>
                        </button>
                        <button
                            className={`projects-tab-btn ${activeTab === 'hobby' ? 'active' : ''}`}
                            onClick={() => {
                                setActiveTab('hobby');
                                import('../utils/confetti').then(({ triggerSprinkler }) => {
                                    triggerSprinkler(2000); // 2 seconds of sprinkler
                                });
                            }}
                        >
                            <span className="tab-icon">🚀</span>
                            <span>Hobby Projects</span>
                        </button>
                    </div>
                </div>

                {/* Work Projects */}
                {activeTab === 'work' && (
                    <div className="mt-10 grid xl:grid-cols-2 grid-cols-1 gap-8">
                        {workProjects.map((project, index) => (
                            <WorkProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>
                )}

                {/* Hobby Projects */}
                {activeTab === 'hobby' && (
                    <div className="mt-10 grid xl:grid-cols-2 grid-cols-1 gap-8">
                        {hobbyProjects.map((project, index) => (
                            <HobbyProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
