import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata: Metadata = {
  title: 'Projects | Soumyadip Maity',
};

const projects = [
  {
    title: 'PulsePy',
    description: 'A AI based python coding platform with gamified learning and some Challenges.',
    image: '/images/pulsepy.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://team-coffee-code.netlify.app/',
    type: 'link',
  },
  {
    title: 'Ecolearn',
    description: 'A Gamified learning platform focused on environmental education.',
    image: '/images/Ecolearn.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://sih-team-mindoras.netlify.app/',
    type: 'link',
  },
  {
    title: 'Tic Tac Toe Game',
    description: 'Simple yet addictive Tic Tac Toe built with JavaScript. Challenge your friends!',
    image: '/images/tic-tac-toe.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://tic-tac-toe-soumya-project.netlify.app/',
    type: 'link',
  },
  {
    title: 'Coinzy Game',
    description: 'A fast, fun, and addictive coin-grabbing PC game with exciting gameplay.',
    image: '/images/pc-game.png',
    tags: ['Game Dev', 'PC'],
    link: 'https://drive.google.com/file/d/1dKZ8j5R4rEuogB-7J6IQ5I7UnuVja2mD/view?usp=drivesdk',
    type: 'download',
  },
  {
    title: 'Time Capsule Notes',
    description: 'A digital time capsule where you can write notes today and revisit them later.',
    image: '/images/time-capsule-notes.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://time-capsule-notes.netlify.app/',
    type: 'link',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section id="projects" className="projects">
        <RevealOnScroll>
          <h2>My Projects</h2>
          <div className="projects-container">
            {projects.map((project) => (
              <div key={project.title} className="project-card">
                <div className="project-img-wrapper">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="project-img"
                  />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                  >
                    <i className={project.type === 'download' ? 'fas fa-download' : 'fas fa-external-link-alt'}></i>
                    {project.type === 'download' ? ' Download for PC' : ' View Project'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      <div className="center-btn">
        <Link href="/contact" className="btn btn-primary">
          <i className="fas fa-paper-plane"></i> Get in Touch
        </Link>
      </div>
    </>
  );
}
