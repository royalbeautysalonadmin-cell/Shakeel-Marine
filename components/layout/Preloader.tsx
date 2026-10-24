'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hide = () => {
      window.setTimeout(() => setVisible(false), 450);
    };

    if (document.readyState === 'complete') {
      hide();
      return;
    }

    window.addEventListener('load', hide, { once: true });
    const fallback = window.setTimeout(hide, 2500);

    return () => {
      window.removeEventListener('load', hide);
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          aria-label="Loading Shakeel Marine"
          role="status"
        >
          <div className="flex flex-col items-center gap-6">
            <Image
              src="/images/logo.png"
              alt="Shakeel Marine"
              width={260}
              height={121}
              priority
              className="h-auto w-52 sm:w-64"
            />
            <span className="h-0.5 w-20 overflow-hidden rounded-full bg-white/15">
              <motion.span
                className="block h-full w-1/2 rounded-full bg-ocean"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity }}
              />
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
