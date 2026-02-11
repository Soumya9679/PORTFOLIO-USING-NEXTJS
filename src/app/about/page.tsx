import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata: Metadata = {
  title: 'About | Soumyadip Maity',
};

export default function AboutPage() {
  return (
    <>
      <section id="about">
        <RevealOnScroll>
          <div className="about-card">
            <Image
              src="/images/profilePic.jpg"
              alt="Soumyadip Maity"
              width={280}
              height={350}
              className="about-img"
              priority
            />
            <div className="about-text">
              <h2>About Me</h2>
              <p>
                Hi there! I&apos;m <strong>Soumyadip Maity</strong>, a passionate developer who loves turning ideas into reality through code.
                My focus is on creating modern, interactive, and accessible applications that make a difference.
              </p>
              <p>
                I enjoy solving complex problems and continuously learning new technologies to stay at the forefront of web development.
              </p>
              <div className="about-tags">
                <span className="tag"><i className="fas fa-laptop-code"></i> Web Development</span>
                <span className="tag"><i className="fas fa-mobile-alt"></i> Responsive Design</span>
                <span className="tag"><i className="fas fa-brain"></i> Problem Solving</span>
                <span className="tag"><i className="fas fa-graduation-cap"></i> Continuous Learning</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <div className="center-btn">
        <Link href="/skills" className="btn btn-primary">
          <i className="fas fa-code"></i> See My Skills
        </Link>
      </div>
    </>
  );
}
