import Link from 'next/link';
import Typewriter from '@/components/Typewriter';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-greeting">👋 Hello, I&apos;m</p>
          <h1 className="hero-name">
            <span className="gradient-text">Soumyadip Maity</span>
          </h1>
          <Typewriter />
          <p className="hero-description">
            A passionate developer crafting clean &amp; creative digital experiences with modern technologies.
          </p>

          <div className="hero-buttons">
            <Link href="/projects" className="btn btn-primary">
              <i className="fas fa-rocket"></i> View My Work
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              <i className="fas fa-paper-plane"></i> Get In Touch
            </Link>
          </div>

          <div className="hero-social">
            <a href="mailto:maitysoumya108@gmail.com" className="social-link" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://github.com/Maitysoumya12345" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/soumyadip-maity-996686353" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://leetcode.com/u/_soumya__dip_/" target="_blank" rel="noopener noreferrer" className="social-link" title="LeetCode">
              <i className="fas fa-code"></i>
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Scroll Down</span>
        </div>
      </section>
    </>
  );
}
