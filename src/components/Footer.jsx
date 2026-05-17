import React from 'react';
import { Instagram, Facebook, BookMarked, ArrowUp, Flame, Sparkles } from 'lucide-react';

function SocialIcons({ links, accentColor }) {
  const iconClass = `p-3 rounded transition-colors ${
    accentColor === 'crimson'
      ? 'bg-kane-crimson/10 text-kane-crimson hover:bg-kane-crimson/20'
      : 'bg-kane-gold/10 text-kane-gold hover:bg-kane-gold/20'
  }`;

  return (
    <div className="flex gap-3">
      {links.instagram && (
        <a href={links.instagram} target="_blank" rel="noopener noreferrer" className={iconClass} aria-label="Instagram">
          <Instagram size={18} />
        </a>
      )}
      {links.facebook && (
        <a href={links.facebook} target="_blank" rel="noopener noreferrer" className={iconClass} aria-label="Facebook">
          <Facebook size={18} />
        </a>
      )}
      {links.goodreads && (
        <a href={links.goodreads} target="_blank" rel="noopener noreferrer" className={iconClass} aria-label="Goodreads">
          <BookMarked size={18} />
        </a>
      )}
      {!links.instagram && !links.facebook && !links.goodreads && (
        <span className="text-kane-silver/30 text-sm font-light italic">Links coming soon</span>
      )}
    </div>
  );
}

export default function Footer({ socialLinks }) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const romance = socialLinks?.romance ?? {};
  const scifi = socialLinks?.scifi ?? {};

  return (
    <footer className="relative bg-kane-dark border-t border-kane-gold/20 py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-kane-radial opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-kane-gold mb-3">Kane Khrons</h3>
            <p className="text-kane-silver/70 font-light text-sm leading-relaxed">
              Where cosmos meets passion. Immerse yourself in dark romance and epic sci-fi adventures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold text-kane-silver mb-4">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/genre/romance" className="text-kane-silver/70 hover:text-kane-crimson transition-colors font-light">
                  Romance Stories
                </a>
              </li>
              <li>
                <a href="/genre/scifi" className="text-kane-silver/70 hover:text-kane-gold transition-colors font-light">
                  Sci-Fi Adventures
                </a>
              </li>
              <li>
                <a href="/#genres" className="text-kane-silver/70 hover:text-kane-gold transition-colors font-light">
                  All Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Romance Social */}
          <div>
            <h4 className="font-display text-lg font-bold text-kane-crimson mb-1 flex items-center gap-2">
              <Flame size={16} /> Romance
            </h4>
            <p className="text-kane-silver/40 text-xs font-light mb-4">Lyonah Kane</p>
            <SocialIcons links={romance} accentColor="crimson" />
          </div>

          {/* Sci-Fi Social */}
          <div>
            <h4 className="font-display text-lg font-bold text-kane-gold mb-1 flex items-center gap-2">
              <Sparkles size={16} /> Sci-Fi
            </h4>
            <p className="text-kane-silver/40 text-xs font-light mb-4">Sooxy Kane</p>
            <SocialIcons links={scifi} accentColor="gold" />
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-kane-gold/20 to-transparent mb-8"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-kane-silver/50 font-light">
          <p>© 2024 Kane Khrons. All rights reserved. Built with passion and stardust.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-kane-gold hover:text-kane-gold/80 transition-colors"
          >
            Back to Top
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
