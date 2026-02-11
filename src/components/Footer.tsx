import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <Image
            src="/images/profilePic.jpg"
            alt="SM"
            width={50}
            height={50}
            className="footer-logo-img"
          />
        </div>
        <p>
          © {new Date().getFullYear()} Soumyadip Maity | Crafted with{' '}
          <span className="heart">❤️</span> &amp; Code
        </p>
        <div className="footer-links">
          <a href="https://github.com/Maitysoumya12345" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/soumyadip-maity-996686353" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:maitysoumya108@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
