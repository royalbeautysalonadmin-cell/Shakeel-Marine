import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Anchor } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-navy-deep px-4">
      <div className="text-center max-w-lg">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Anchor className="w-20 h-20 text-ocean/30" strokeWidth={1} />
            <span className="absolute inset-0 flex items-center justify-center text-6xl font-heading font-bold text-white/10">
              404
            </span>
          </div>
        </div>
        <h1 className="text-white font-heading font-bold text-4xl md:text-5xl mb-4">
          This Page Went Off Course
        </h1>
        <p className="text-white/60 text-lg mb-10">
          The page you&apos;re looking for couldn&apos;t be found.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="primary" size="lg">
            Back Home
          </Button>
          <Button href="/services" variant="outline" size="lg">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}
