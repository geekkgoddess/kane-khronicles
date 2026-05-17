import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Genre from './pages/Genre';
import Admin from './pages/Admin';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/index.css';

const DEFAULT_BOOKS = {
  romance: [
    {
      id: 'blood-bloom',
      title: 'Blood & Bloom',
      subtitle: 'Dark Mafia Romance',
      author: 'Lyonah Kane',
      genre: 'romance',
      cover: 'https://via.placeholder.com/300x450/2d1f1f/d4af37?text=Blood+%26+Bloom',
      synopsis: 'When secrets bleed and power blooms in the shadows, can love survive the inferno? A dark mafia romance where loyalty is currency and passion is the ultimate crime.',
      amazonLink: 'https://amazon.com/s?k=blood+bloom+lyonah+kane',
      reviews: [
        { rating: 5, text: 'Absolutely captivating. The tension never stops.' },
        { rating: 5, text: 'Darkly romantic and dangerously addictive.' },
        { rating: 4, text: 'Complex characters and intricate plot.' },
      ],
    },
    {
      id: 'crimson-affair',
      title: 'Crimson Affair',
      subtitle: 'Dark Mafia Romance',
      author: 'Lyonah Kane',
      genre: 'romance',
      cover: 'https://via.placeholder.com/300x450/1a0f0f/d4af37?text=Crimson+Affair',
      synopsis: 'In a world of blood oaths and obsession, she becomes his greatest prize. A gripping tale of forbidden love and dangerous consequences.',
      amazonLink: 'https://amazon.com/s?k=crimson+affair+lyonah+kane',
      reviews: [
        { rating: 5, text: 'Dark, sensual, and utterly compelling.' },
        { rating: 5, text: 'The chemistry is scorching.' },
      ],
    },
  ],
  scifi: [
    {
      id: 'sooxy-kane',
      title: 'SOOXY: The Celestial Frontier',
      subtitle: 'Space Opera',
      author: 'Sooxy Kane',
      genre: 'scifi',
      cover: 'https://via.placeholder.com/300x450/0f1a2e/e8e8e8?text=SOOXY+Kane',
      synopsis: 'Explore distant galaxies where technology meets destiny. An epic space opera of discovery, survival, and the vast mysteries of the cosmos.',
      amazonLink: 'https://amazon.com/s?k=sooxy+kane+space+opera',
      reviews: [
        { rating: 5, text: 'Mind-bending worldbuilding and unforgettable characters.' },
        { rating: 5, text: "The best sci-fi I've read in years." },
        { rating: 4, text: 'Expansive universe with incredible imagination.' },
      ],
    },
    {
      id: 'stellar-protocol',
      title: 'Stellar Protocol',
      subtitle: 'Sci-Fi Thriller',
      author: 'Sooxy Kane',
      genre: 'scifi',
      cover: 'https://via.placeholder.com/300x450/1f0f1f/e8e8e8?text=Stellar+Protocol',
      synopsis: "When humanity reaches for the stars, they discover they're not alone. A pulse-pounding thriller about first contact and the stakes of survival.",
      amazonLink: 'https://amazon.com/s?k=stellar+protocol+sooxy+kane',
      reviews: [
        { rating: 5, text: "Gripping from page one. Couldn't put it down." },
        { rating: 5, text: 'First contact done right.' },
      ],
    },
    {
      id: 'void-walker',
      title: 'The Void Walker',
      subtitle: 'Space Adventure',
      author: 'Sooxy Kane',
      genre: 'scifi',
      cover: 'https://via.placeholder.com/300x450/0a0a15/e8e8e8?text=Void+Walker',
      synopsis: 'A lone explorer navigates the void between worlds, discovering that the greatest discovery is herself. Epic, intimate, and breathtaking.',
      amazonLink: 'https://amazon.com/s?k=void+walker+sooxy+kane',
      reviews: [
        { rating: 5, text: 'Lyrical and profound. A masterpiece.' },
        { rating: 5, text: 'The introspection is as vast as space itself.' },
      ],
    },
  ],
};

const DEFAULT_SOCIAL_LINKS = {
  romance: {
    instagram: '',
    facebook: '',
    goodreads: '',
  },
  scifi: {
    instagram: '',
    facebook: '',
    goodreads: '',
  },
};

function App() {
  const [books, setBooks] = useState(DEFAULT_BOOKS);
  const [socialLinks, setSocialLinks] = useState(DEFAULT_SOCIAL_LINKS);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    const storedBooks = localStorage.getItem('khrons_books');
    if (storedBooks) {
      try { setBooks(JSON.parse(storedBooks)); } catch (e) { /* ignore */ }
    }

    const storedSocial = localStorage.getItem('khrons_social_links');
    if (storedSocial) {
      try { setSocialLinks(JSON.parse(storedSocial)); } catch (e) { /* ignore */ }
    }

    const adminToken = localStorage.getItem('khrons_admin_token');
    if (adminToken === 'khrons_authenticated') {
      setIsAdminLoggedIn(true);
    }
  }, []);

  const updateBooks = (newBooks) => {
    setBooks(newBooks);
    localStorage.setItem('khrons_books', JSON.stringify(newBooks));
  };

  const updateSocialLinks = (newLinks) => {
    setSocialLinks(newLinks);
    localStorage.setItem('khrons_social_links', JSON.stringify(newLinks));
  };

  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true);
    localStorage.setItem('khrons_admin_token', 'khrons_authenticated');
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem('khrons_admin_token');
  };

  return (
    <Router>
      <div className="bg-kane-dark text-kane-silver min-h-screen flex flex-col">
        <Header isAdminLoggedIn={isAdminLoggedIn} onAdminLogout={handleAdminLogout} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home books={books} />} />
            <Route path="/genre/:genre" element={<Genre books={books} />} />
            <Route
              path="/admin"
              element={
                <Admin
                  books={books}
                  onUpdateBooks={updateBooks}
                  socialLinks={socialLinks}
                  onUpdateSocialLinks={updateSocialLinks}
                  isLoggedIn={isAdminLoggedIn}
                  onLogin={handleAdminLogin}
                />
              }
            />
          </Routes>
        </main>

        <Footer socialLinks={socialLinks} />
      </div>
    </Router>
  );
}

export default App;
