import React from 'react';
import { Star, ExternalLink, ChevronDown } from 'lucide-react';

export default function BookCard({ book, isExpanded, onToggleReviews }) {
  const averageRating = book.reviews.length > 0
    ? (book.reviews.reduce((sum, r) => sum + r.rating, 0) / book.reviews.length).toFixed(1)
    : 5;

  return (
    <div className="flex flex-col h-full rounded-lg overflow-hidden border border-kane-gold/20 hover:border-kane-gold/60 transition-all duration-300 bg-kane-deep/30 hover:shadow-kane-glow group">
      {/* Cover Image */}
      <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-kane-gold/10 to-kane-dark">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-kane-dark via-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="flex-grow flex flex-col p-6 sm:p-8">
        {/* Title & Author */}
        <div className="mb-4">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-kane-silver mb-2 group-hover:text-kane-gold transition-colors line-clamp-2">
            {book.title}
          </h3>
          {book.subtitle && (
            <p className="text-kane-gold/60 text-sm font-light italic mb-2">
              {book.subtitle}
            </p>
          )}
          <p className="text-kane-gold text-sm font-light">
            by {book.author}
          </p>
        </div>

        {/* Synopsis */}
        <p className="text-kane-silver/70 text-sm sm:text-base font-light leading-relaxed mb-6 flex-grow">
          {book.synopsis}
        </p>

        {/* Reviews Section */}
        {book.reviews.length > 0 && (
          <div className="mb-6 border-t border-kane-gold/10 pt-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < Math.round(averageRating)
                          ? 'fill-kane-gold text-kane-gold'
                          : 'text-kane-gold/30'
                      }
                    />
                  ))}
                </div>
                <span className="text-kane-gold text-sm font-light">
                  {averageRating} ({book.reviews.length})
                </span>
              </div>
              <button
                onClick={onToggleReviews}
                className="flex items-center gap-1 text-kane-gold/60 hover:text-kane-gold transition-colors text-sm font-light"
              >
                <span>{isExpanded ? 'Hide' : 'Show'} Reviews</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                />
              </button>
            </div>

            {/* Expanded Reviews */}
            {isExpanded && (
              <div className="space-y-3 animate-slide-in">
                {book.reviews.map((review, idx) => (
                  <div key={idx} className="bg-kane-dark/50 rounded p-3 border border-kane-gold/10">
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={
                            i < review.rating
                              ? 'fill-kane-gold text-kane-gold'
                              : 'text-kane-gold/30'
                          }
                        />
                      ))}
                    </div>
                    <p className="text-kane-silver/60 text-sm font-light italic">
                      "{review.text}"
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* CTA Button */}
        <a
          href={book.amazonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-kane-gold/20 to-kane-crimson/20 text-kane-silver border border-kane-gold/30 hover:border-kane-gold hover:from-kane-gold/40 hover:to-kane-crimson/40 transition-all duration-300 rounded font-light text-sm hover:shadow-kane-glow"
        >
          Read on Amazon
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}
