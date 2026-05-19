import { Code2, Github, Linkedin, Mail } from 'lucide-react';
import { profile, socialLinks } from '@/lib/portfolio-data';

const iconMap = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
  leetcode: Code2,
} as const;

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="section-shell flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-[var(--text-primary)]">
            {profile.name}
          </p>
          <p className="mt-1 text-sm text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} Portfolio built with Next.js.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {socialLinks.map(({ href, label, kind }) => {
            const Icon = iconMap[kind];

            return (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-secondary)] transition hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
