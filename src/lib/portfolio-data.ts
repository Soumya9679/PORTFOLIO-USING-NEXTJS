export const profile = {
  name: 'Soumyadip Maity',
  role: 'Frontend Developer',
  focus: 'Building polished web interfaces, learning products, and interactive tools with clean code.',
  location: 'India',
  email: 'maitysoumya108@gmail.com',
  resumeHref: '/Soumyadip_Maity_CV.pdf',
  githubHref: 'https://github.com/Soumya9679',
  linkedinHref: 'https://linkedin.com/in/soumyadip-maity-996686353',
  leetcodeHref: 'https://leetcode.com/u/_soumya__dip_/',
};

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks = [
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    username: profile.email,
    kind: 'email',
  },
  {
    label: 'GitHub',
    href: profile.githubHref,
    username: '@Soumya9679',
    kind: 'github',
  },
  {
    label: 'LinkedIn',
    href: profile.linkedinHref,
    username: 'Soumyadip Maity',
    kind: 'linkedin',
  },
  {
    label: 'LeetCode',
    href: profile.leetcodeHref,
    username: '@_soumya__dip_',
    kind: 'leetcode',
  },
] as const;

export const heroStats = [
  { value: '5+', label: 'Projects shipped' },
  { value: 'Next.js', label: 'Current portfolio stack' },
  { value: 'India', label: 'Remote-friendly' },
];

export const principles = [
  'Clear layouts that make information easy to scan.',
  'Responsive interfaces that feel composed on every screen.',
  'Practical features backed by thoughtful UI details.',
  'Clean code structure that stays easy to extend.',
];

export const capabilities = [
  {
    title: 'Frontend Implementation',
    description:
      'Responsive pages, component systems, motion details, and accessible UI built with modern web tools.',
    accent: 'teal',
  },
  {
    title: 'Interactive Products',
    description:
      'Games, learning flows, coding platforms, and small product ideas shaped into usable experiences.',
    accent: 'blue',
  },
  {
    title: 'Problem Solving',
    description:
      'Algorithm practice and programming fundamentals applied to cleaner logic and better user flows.',
    accent: 'gold',
  },
  {
    title: 'Product Polish',
    description:
      'Careful spacing, readable content, purposeful animation, and UI states that make a site feel finished.',
    accent: 'ink',
  },
];

export const techGroups = [
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Programming',
    items: ['C', 'Java', 'Python', 'TypeScript'],
  },
  {
    title: 'Workflow',
    items: ['GitHub', 'Responsive Design', 'Netlify', 'Vercel', 'Form Validation'],
  },
];

export const projects = [
  {
    title: 'PulsePy',
    category: 'Learning Platform',
    description:
      'An AI-inspired Python learning platform with gamified coding challenges and a focused learning experience.',
    image: '/images/pulsepy.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://pulsepy.tech',
    action: 'View live',
    highlight: 'Designed to make Python practice feel more engaging and structured.',
  },
  {
    title: 'Ecolearn',
    category: 'Education Product',
    description:
      'A sustainability learning platform that uses quizzes and gamified content to make environmental topics easier to explore.',
    image: '/images/Ecolearn.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://sih-team-mindoras.netlify.app/',
    action: 'View live',
    highlight: 'Built around approachable education, simple navigation, and visual learning.',
  },
  {
    title: 'Time Capsule Notes',
    category: 'Utility App',
    description:
      'A note-taking experience for writing messages today and revisiting them at a future moment.',
    image: '/images/time-capsule-notes.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://time-capsule-notes.netlify.app/',
    action: 'View live',
    highlight: 'A personal productivity concept with a simple, memorable interaction model.',
  },
  {
    title: 'Tic Tac Toe',
    category: 'Browser Game',
    description:
      'A polished implementation of the classic game with responsive interactions and smooth play flow.',
    image: '/images/tic-tac-toe.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://tic-tac-toe-soumya-project.netlify.app/',
    action: 'Play game',
    highlight: 'Focused on state handling, feedback, and an approachable game UI.',
  },
  {
    title: 'Coinzy Game',
    category: 'Desktop Game',
    description:
      'A fast coin-collecting PC game concept built around simple mechanics and repeatable play.',
    image: '/images/pc-game.png',
    tags: ['Game Dev', 'Desktop'],
    href: 'https://drive.google.com/file/d/1dKZ8j5R4rEuogB-7J6IQ5I7UnuVja2mD/view?usp=drivesdk',
    action: 'Download',
    highlight: 'Explores game loops, timing, and fast user feedback outside the browser.',
  },
];
