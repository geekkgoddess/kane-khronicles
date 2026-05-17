import React from 'react';
import { Instagram, Facebook, BookMarked, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-kane-dark border-t border-kane-gold/20 py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-kane-radial opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-kane-gold mb-3">
              Kane Khrons
            </h3>
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

          {/* Social & Info */}
          <div>
            <h4 className="font-display text-lg font-bold text-kane-silver mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://instagram.com/kyanephillips"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-kane-gold/10 text-kane-gold hover:bg-kane-gold/20 rounded transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/kyanephillips"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-kane-gold/10 text-kane-gold hover:bg-kane-gold/20 rounded transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://goodreads.com/author/show/kyanephillips"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-kane-gold/10 text-kane-gold hover:bg-kane-gold/20 rounded transition-colors"
                aria-label="Goodreads"
              >
                <BookMarked size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-kane-gold/20 to-transparent mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-kane-silver/50 font-light">
          <p>
            © 2024 Kane Khrons. All rights reserved. Built with passion and stardust.
          </p>
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
