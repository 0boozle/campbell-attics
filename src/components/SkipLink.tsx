import React from 'react';

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-1/2 focus:-translate-x-1/2 
                bg-brand-copper text-white px-6 py-2 rounded-full z-50 focus:outline-none focus:ring-2 
                focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-copper"
    >
      Skip to main content
    </a>
  );
}