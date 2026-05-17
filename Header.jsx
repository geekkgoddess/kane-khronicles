import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

export default function Header({ isAdminLoggedIn, onAdminLogout }) {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-kane-dark/95 backdrop-blur-sm border-b border-kane-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <BookOpen size={28} className="text-kane-gold group-hover:text-kane-silver transition-colors" />
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold text-kane-gold group-hover:text-kane-silver transition-colors">
                Kane
              </span>
              <span className="font-display text-xs tracking-widest text-kane-crimson/80 -mt-1">
                KHRONS
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6 sm:gap-8">
            <Link
              to="/genre/romance"
              className={`font-light text-sm transition-colors ${
                location.pathname.includes('romance')
                  ? 'text-kane-crimson'
                  : 'text-kane-silver hover:text-kane-gold'
              }`}
            >
              Romance
            </Link>
            <Link
              to="/genre/scifi"
              className={`font-light text-sm transition-colors ${
                location.pathname.includes('scifi')
                  ? 'text-kane-gold'
                  : 'text-kane-silver hover:text-kane-gold'
              }`}
            >
              Sci-Fi
            </Link>
            
            {isAdminLoggedIn ? (
              <Link
                to="/admin"
                className={`font-light text-sm px-3 py-2 rounded transition-colors ${
                  location.pathname === '/admin'
                    ? 'bg-kane-gold/20 text-kane-gold'
                    : 'text-kane-silver hover:bg-kane-gold/10'
                }`}
              >
                Admin
              </Link>
            ) : (
              <Link
                to="/admin"
                className="font-light text-sm text-kane-silver hover:text-kane-gold transition-colors"
              >
                Admin
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
