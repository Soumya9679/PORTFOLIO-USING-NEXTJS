import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import AnimatedBackground from '@/components/effects/AnimatedBackground';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#06080F',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Soumyadip Maity | Full Stack Developer',
    template: '%s | Soumyadip Maity',
  },
  description:
    'A passionate developer crafting clean & creative digital experiences with modern technologies. Explore my portfolio to see projects, skills, and more.',
  keywords: [
    'Soumyadip Maity',
    'Full Stack Developer',
    'Web Developer',
    'Portfolio',
    'React',
    'Next.js',
    'JavaScript',
    'Frontend Developer',
  ],
  authors: [{ name: 'Soumyadip Maity' }],
  creator: 'Soumyadip Maity',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Soumyadip Maity | Full Stack Developer',
    description:
      'A passionate developer crafting clean & creative digital experiences with modern technologies.',
    siteName: 'Soumyadip Maity Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soumyadip Maity | Full Stack Developer',
    description:
      'A passionate developer crafting clean & creative digital experiences with modern technologies.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans overflow-x-hidden">
        <AnimatedBackground />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
