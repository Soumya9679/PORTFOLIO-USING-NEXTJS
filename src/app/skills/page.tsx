import type { Metadata } from 'next';
import Link from 'next/link';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata: Metadata = {
  title: 'Skills | Soumyadip Maity',
};

const skills = [
  { name: 'HTML5', icon: 'fab fa-html5', level: '90%' },
  { name: 'CSS3', icon: 'fab fa-css3-alt', level: '80%' },
  { name: 'JavaScript', icon: 'fab fa-js', level: '70%' },
  { name: 'C', icon: 'fas fa-copyright', level: '85%' },
  { name: 'Java', icon: 'fab fa-java', level: '40%' },
  { name: 'Python', icon: 'fab fa-python', level: '30%' },
];

export default function SkillsPage() {
  return (
    <>
      <section id="skills" className="skills">
        <RevealOnScroll>
          <h2>My Skills</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="skill-card"
                style={{ '--level': skill.level } as React.CSSProperties}
              >
                <div className="skill-icon">
                  <i className={skill.icon}></i>
                </div>
                <h3>{skill.name}</h3>
                <span className="skill-level">{skill.level}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      <div className="center-btn">
        <Link href="/projects" className="btn btn-primary">
          <i className="fas fa-project-diagram"></i> View My Projects
        </Link>
      </div>
    </>
  );
}
