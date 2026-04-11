import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';

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
    icon: Code2,
    href: 'https://leetcode.com/u/_soumya__dip_/',
    label: 'LeetCode',
  },
  {
    icon: Mail,
    href: 'mailto:maitysoumya108@gmail.com',
    label: 'Email',
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-violet-container/20 to-transparent" />

      <div className="bg-nebula-surface/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-10">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Copyright */}
            <div className="flex flex-col items-center md:items-start gap-3 order-2 md:order-1">
              <span className="text-xl font-bold font-display text-gradient-hero">SM</span>
              <p className="text-[#494454] text-sm flex items-center gap-1.5">
                &copy; {new Date().getFullYear()} Soumyadip Maity
              </p>
            </div>

            {/* Built with love */}
            <div className="flex items-center gap-2 text-[#958ea0] text-sm order-3 md:order-2">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
              <span>&amp; modern magic</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 order-1 md:order-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#494454] hover:text-[#e1e2ed] hover:bg-violet-container/10 hover:border-violet-container/20 transition-all duration-300 hover:-translate-y-0.5"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
