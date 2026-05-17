import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, Flame } from 'lucide-react';
import Newsletter from '../components/Newsletter';

export default function Home({ books }) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-kane-gradient overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-kane-radial opacity-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-kane-gold/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-kane-crimson/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-kane-gold rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
                animation: `pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-slide-in">
            {/* Main Title */}
            <div className="mb-8 animate-float" style={{ animationDelay: '0s' }}>
              <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-bold mb-4">
                <span className="bg-gradient-to-r from-kane-gold via-kane-silver to-kane-gold bg-clip-text text-transparent">
                  Kane
                </span>
                <br />
                <span className="bg-gradient-to-r from-kane-crimson to-kane-gold bg-clip-text text-transparent">
                  Khrons
                </span>
              </h1>
              <p className="text-kane-gold text-lg sm:text-xl tracking-widest uppercase font-light">
                Where Cosmos Meets Passion
              </p>
            </div>

            {/* Subtitle */}
            <p className="text-kane-silver text-lg sm:text-xl mb-12 leading-relaxed font-light max-w-2xl mx-auto">
              Explore dark mafia romance and epic space opera. Stories that blur the line between heartbreak and transcendence.
            </p>

            {/* CTA Button */}
            <div className="mb-16">
              <a
                href="#genres"
                className="inline-block px-8 py-4 border-2 border-kane-gold text-kane-gold hover:bg-kane-gold hover:text-kane-dark transition-all duration-300 font-display text-lg uppercase tracking-wider hover:shadow-kane-glow"
              >
                Explore Stories
              </a>
            </div>

            {/* Decorative element */}
            <div className="flex justify-center gap-4 mb-8">
              <div className="w-12 h-12 border border-kane-gold rounded-full flex items-center justify-center animate-pulse-glow">
                <Sparkles size={24} className="text-kane-gold" />
              </div>
              <div className="w-12 h-12 border border-kane-crimson rounded-full flex items-center justify-center animate-pulse">
                <Flame size={24} className="text-kane-crimson" />
              </div>
              <div className="w-12 h-12 border border-kane-gold rounded-full flex items-center justify-center animate-pulse-glow">
                <BookOpen size={24} className="text-kane-gold" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Genre Selection Section */}
      <section id="genres" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-kane-deep">
        <div className="absolute inset-0 bg-kane-radial opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="font-display text-5xl sm:text-6xl font-bold text-center mb-4 text-kane-silver">
            Choose Your Journey
          </h2>
          <p className="text-center text-kane-gold text-lg mb-16 font-light">
            Two universes. Infinite stories.
          </p>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Romance Card */}
            <Link to="/genre/romance" className="group">
              <div className="relative h-96 rounded-lg overflow-hidden border-2 border-kane-crimson/30 hover:border-kane-crimson hover:shadow-kane-crimson-glow transition-all duration-500 cursor-pointer">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-kane-crimson/10 to-kane-dark"></div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8 bg-gradient-to-t from-kane-dark via-kane-dark/50 to-transparent">
                  <Flame className="w-16 h-16 text-kane-crimson mb-4 group-hover:animate-float" />
                  <h3 className="font-display text-4xl font-bold text-kane-crimson mb-2 group-hover:text-white transition-colors">
                    Romance
                  </h3>
                  <p className="text-kane-silver/80 font-light">
                    Dark passion. Dangerous love. Stories that burn.
                  </p>
                  <p className="text-kane-gold text-sm mt-4">
                    {books.romance.length} {books.romance.length === 1 ? 'Book' : 'Books'}
                  </p>
                </div>
              </div>
            </Link>

            {/* Sci-Fi Card */}
            <Link to="/genre/scifi" className="group">
              <div className="relative h-96 rounded-lg overflow-hidden border-2 border-kane-gold/30 hover:border-kane-gold hover:shadow-kane-glow transition-all duration-500 cursor-pointer">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-kane-gold/10 to-kane-dark"></div>
                
                {/* Stars */}
                <div className="absolute inset-0">
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-kane-gold rounded-full"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: Math.random() * 0.5 + 0.2,
                      }}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8 bg-gradient-to-t from-kane-dark via-kane-dark/50 to-transparent">
                  <Sparkles className="w-16 h-16 text-kane-gold mb-4 group-hover:animate-float" />
                  <h3 className="font-display text-4xl font-bold text-kane-gold mb-2 group-hover:text-kane-silver transition-colors">
                    Sci-Fi
                  </h3>
                  <p className="text-kane-silver/80 font-light">
                    Cosmic wonders. Infinite possibilities. Beyond the stars.
                  </p>
                  <p className="text-kane-gold text-sm mt-4">
                    {books.scifi.length} {books.scifi.length === 1 ? 'Book' : 'Books'}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}
