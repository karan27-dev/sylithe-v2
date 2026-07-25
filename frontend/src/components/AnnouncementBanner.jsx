import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Site-wide notification banner.
 * The entire strip is clickable and redirects to /signup.
 */
export default function AnnouncementBanner() {
  return (
    <Link
      to="/signup"
      className="group block w-full bg-[#08292f] text-white hover:bg-[#062125] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-center gap-3 text-center flex-wrap">
        <span className="shrink-0 inline-flex items-center rounded-full bg-gradient-to-r from-[#0fa958] via-[#34d399] to-[#a4fca1] text-[#08292f] text-[10px] font-extrabold tracking-[0.12em] uppercase px-2.5 py-0.5 shadow-[0_0_12px_rgba(52,211,153,0.6)] animate-pulse">
          New
        </span>
        <span className="text-xs sm:text-sm font-medium leading-snug">
          🌳 DMRV for ARR &amp; REDD+ | Trusted geospatial monitoring and carbon intelligence for nature-based projects
        </span>
        <span className="shrink-0 inline-flex items-center gap-1 text-xs sm:text-sm font-bold tracking-[0.08em] uppercase text-[#a4fca1] underline underline-offset-4 decoration-2 group-hover:gap-2 transition-all">
          Get Started
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
