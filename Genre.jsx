import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import { ArrowLeft } from 'lucide-react';

export default function Genre({ books }) {
  const { genre } = useParams();
  const [expandedReviews, setExpandedReviews] = useState({});

  const genreBooks = books[genre] || [];
  const genreTitle = genre === 'romance' ? 'Romance' : 'Sci-Fi';
  const genreColor = genre === 'romance' ? 'kane-crimson' : 'kane-gold';

  const toggleReviews = (bookId) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [bookId]: !prev[bookId],
    }));
  };

  return (
    <div className="min-h-screen bg-kane-gradient py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-kane-radial opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-kane-gold hover:text-kane-silver transition-colors mb-8 font-light"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <h1 className={`font-display text-6xl sm:text-7xl font-bold mb-4 bg-gradient-to-r ${
            genre === 'romance'
              ? 'from-kane-crimson to-kane-gold'
              : 'from-kane-gold to-kane-silver'
          } bg-clip-text text-transparent`}>
            {genreTitle} Stories
          </h1>

          <p className="text-kane-silver text-lg font-light max-w-2xl">
            {genre === 'romance'
              ? 'Passion, danger, and dark obsession await.'
              : 'Explore the cosmos and discover what lies beyond the stars.'}
          </p>
        </div>

        {/* Books Grid */}
        {genreBooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {genreBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                isExpanded={expandedReviews[book.id]}
                onToggleReviews={() => toggleReviews(book.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-kane-silver text-xl font-light">
              Coming soon... New {genreTitle.toLowerCase()} stories are on the horizon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
