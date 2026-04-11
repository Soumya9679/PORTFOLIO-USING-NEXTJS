import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/Maitysoumya12345',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/soumyadip-maity-996686353',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:maitysoumya108@gmail.com',
    label: 'Email',
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0A0F1E]/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-slate-500 text-sm flex items-center gap-1.5 order-2 md:order-1">
          &copy; {new Date().getFullYear()} Soumyadip Maity. Built with
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
          &amp; Code
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4 order-1 md:order-2">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="text-slate-500 hover:text-white transition-colors duration-200"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
