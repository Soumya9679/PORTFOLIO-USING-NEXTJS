import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="section-shell flex min-h-screen items-center justify-center py-24">
      <div className="max-w-xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-5 font-display text-5xl font-semibold text-[var(--text-primary)] md:text-7xl">
          Page not found
        </h1>
        <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">
          The page you are looking for does not exist or may have moved.
        </p>
        <Link href="/" className="button-primary mt-8">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
    </div>
  );
}
