'use client';

import { useState } from 'react';
import Link from 'next/link';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState('');
  const [statusColor, setStatusColor] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setSending(true);

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbwYxbMEKkY1AzfMSFc7_PjWhOF0ouyQCVuWmyQNqM0IVijTyu56YPxPouzpcYQ56k8f/exec',
        { method: 'POST', body: data, mode: 'no-cors' }
      );
      setFormStatus('✅ Message sent successfully!');
      setStatusColor('#22d3ee');
      form.reset();
    } catch {
      setFormStatus('❌ Failed to send. Please try again.');
      setStatusColor('#ef4444');
    } finally {
      setSending(false);
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  return (
    <>
      <section id="contact" className="contact">
        <RevealOnScroll>
          <h2>Let&apos;s Connect</h2>
          <div className="contact-grid">
            <div className="contact-card info-card">
              <h3>Find Me Online</h3>
              <div className="social-links">
                <a href="mailto:maitysoumya108@gmail.com" title="Email">
                  <i className="fa-solid fa-envelope"></i>
                </a>
                <a href="https://github.com/Maitysoumya12345" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/soumyadip-maity-996686353" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://leetcode.com/u/_soumya__dip_/" target="_blank" rel="noopener noreferrer" title="LeetCode">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>LeetCode</title>
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="contact-card">
              <h3>Send a Message</h3>
              <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit" disabled={sending}>
                  {sending ? (
                    <><i className="fas fa-spinner fa-spin"></i> Sending...</>
                  ) : (
                    <><i className="fas fa-paper-plane"></i> Send Message</>
                  )}
                </button>
              </form>
              {formStatus && (
                <p id="formStatus" style={{ color: statusColor }}>{formStatus}</p>
              )}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <div className="center-btn">
        <Link href="/" className="btn btn-secondary">
          <i className="fas fa-home"></i> Back to Home
        </Link>
      </div>
    </>
  );
}
