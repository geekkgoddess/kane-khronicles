import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Edit2, Trash2, Plus, Save, X, LogOut, Instagram, Facebook, BookMarked, Flame, Sparkles } from 'lucide-react';
import AdminLoginForm from '../components/AdminLoginForm';

export default function Admin({ books, onUpdateBooks, socialLinks, onUpdateSocialLinks, isLoggedIn, onLogin }) {
  const navigate = useNavigate();
  const [mainTab, setMainTab] = useState('books');
  const [genreTab, setGenreTab] = useState('romance');
  const [editingBook, setEditingBook] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({ title: '', subtitle: '', author: '', synopsis: '', amazonLink: '' });
  const [socialForm, setSocialForm] = useState(socialLinks);
  const [socialSaved, setSocialSaved] = useState(false);

  if (!isLoggedIn) {
    return <AdminLoginForm onLogin={onLogin} />;
  }

  const currentBooks = books[genreTab];

  const handleLogout = () => {
    localStorage.removeItem('khrons_admin_token');
    navigate('/');
  };

  const handleEdit = (book) => {
    setEditingBook(book.id);
    setFormData({ title: book.title, subtitle: book.subtitle, author: book.author, synopsis: book.synopsis, amazonLink: book.amazonLink });
    setShowAddForm(false);
  };

  const handleAddNew = () => {
    setEditingBook(null);
    setFormData({ title: '', subtitle: '', author: '', synopsis: '', amazonLink: '' });
    setShowAddForm(true);
  };

  const handleSave = () => {
    if (!formData.title || !formData.author || !formData.synopsis) {
      alert('Please fill in all required fields');
      return;
    }
    const newBooks = { ...books };
    if (editingBook) {
      const idx = newBooks[genreTab].findIndex((b) => b.id === editingBook);
      if (idx > -1) newBooks[genreTab][idx] = { ...newBooks[genreTab][idx], ...formData };
    } else if (showAddForm) {
      const newId = `${formData.title.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`;
      newBooks[genreTab].push({
        id: newId,
        genre: genreTab,
        cover: `https://via.placeholder.com/300x450/2d1f1f/d4af37?text=${encodeURIComponent(formData.title)}`,
        reviews: [],
        ...formData,
      });
    }
    onUpdateBooks(newBooks);
    setEditingBook(null);
    setShowAddForm(false);
    setFormData({ title: '', subtitle: '', author: '', synopsis: '', amazonLink: '' });
    alert('Book saved successfully!');
  };

  const handleDelete = (bookId) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      onUpdateBooks({ ...books, [genreTab]: books[genreTab].filter((b) => b.id !== bookId) });
    }
  };

  const handleCancel = () => {
    setEditingBook(null);
    setShowAddForm(false);
    setFormData({ title: '', subtitle: '', author: '', synopsis: '', amazonLink: '' });
  };

  const handleSocialChange = (genre, platform, value) => {
    setSocialForm((prev) => ({ ...prev, [genre]: { ...prev[genre], [platform]: value } }));
  };

  const handleSaveSocial = () => {
    onUpdateSocialLinks(socialForm);
    setSocialSaved(true);
    setTimeout(() => setSocialSaved(false), 3000);
  };

  const inputClass = 'w-full px-4 py-2 bg-kane-dark text-kane-silver border border-kane-gold/20 rounded focus:border-kane-gold focus:outline-none font-light text-sm';

  const socialPlatforms = [
    { key: 'instagram', label: 'Instagram', icon: <Instagram size={16} />, placeholder: 'https://instagram.com/yourhandle' },
    { key: 'facebook', label: 'Facebook', icon: <Facebook size={16} />, placeholder: 'https://facebook.com/yourpage' },
    { key: 'goodreads', label: 'Goodreads', icon: <BookMarked size={16} />, placeholder: 'https://goodreads.com/author/show/yourname' },
  ];

  return (
    <div className="min-h-screen bg-kane-gradient py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-kane-radial opacity-30"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-display text-5xl font-bold text-kane-gold mb-2">Admin Panel</h1>
            <p className="text-kane-silver/70 font-light">Manage your Kane Khrons content</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3 bg-kane-crimson text-white rounded hover:bg-kane-crimson/80 transition-colors font-light"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>

        {/* Main section tabs: Books | Social Links */}
        <div className="flex gap-2 mb-8 border-b border-kane-gold/20">
          {[
            { key: 'books', label: 'Books' },
            { key: 'social', label: 'Social Links' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setMainTab(key)}
              className={`px-6 py-3 font-display text-lg transition-colors ${
                mainTab === key
                  ? 'text-kane-gold border-b-2 border-kane-gold'
                  : 'text-kane-silver/50 hover:text-kane-silver'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* ── BOOKS SECTION ── */}
        {mainTab === 'books' && (
          <>
            {/* Genre sub-tabs */}
            <div className="flex gap-4 mb-6 border-b border-kane-gold/10">
              {['romance', 'scifi'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setGenreTab(tab); handleCancel(); }}
                  className={`px-6 py-3 font-display text-base transition-colors ${
                    genreTab === tab
                      ? tab === 'romance'
                        ? 'text-kane-crimson border-b-2 border-kane-crimson'
                        : 'text-kane-gold border-b-2 border-kane-gold'
                      : 'text-kane-silver/50 hover:text-kane-silver'
                  }`}
                >
                  {tab === 'romance' ? 'Romance' : 'Sci-Fi'}
                </button>
              ))}
            </div>

            {/* Book list */}
            <div className="bg-kane-deep/50 rounded-lg p-6 mb-8 border border-kane-gold/10">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-display text-2xl text-kane-silver">
                  {genreTab === 'romance' ? 'Romance' : 'Sci-Fi'} Books
                </h2>
                <button
                  onClick={handleAddNew}
                  className="flex items-center gap-2 px-4 py-2 bg-kane-gold text-kane-dark rounded hover:bg-kane-gold/80 transition-colors font-light"
                >
                  <Plus size={20} /> Add New Book
                </button>
              </div>

              <div className="space-y-4">
                {currentBooks.map((book) => (
                  <div key={book.id} className="flex justify-between items-start p-4 bg-kane-dark/50 rounded border border-kane-gold/10 hover:border-kane-gold/30 transition-colors">
                    <div className="flex-grow">
                      <h3 className="font-display text-lg text-kane-silver mb-1">{book.title}</h3>
                      <p className="text-kane-gold text-sm">{book.author}</p>
                      <p className="text-kane-silver/60 text-sm font-light mt-2 line-clamp-2">{book.synopsis}</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button onClick={() => handleEdit(book)} className="p-2 bg-kane-gold/10 text-kane-gold hover:bg-kane-gold/20 rounded transition-colors">
                        <Edit2 size={18} />
                      </button>
                      <button onClick={() => handleDelete(book.id)} className="p-2 bg-kane-crimson/10 text-kane-crimson hover:bg-kane-crimson/20 rounded transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
                {currentBooks.length === 0 && (
                  <p className="text-kane-silver/50 text-center py-8 font-light">
                    No {genreTab === 'romance' ? 'romance' : 'sci-fi'} books yet. Add one to get started!
                  </p>
                )}
              </div>
            </div>

            {/* Edit / Add form */}
            {(editingBook || showAddForm) && (
              <div className="bg-kane-deep/50 rounded-lg p-8 border border-kane-gold/10">
                <h2 className="font-display text-2xl text-kane-silver mb-6">
                  {editingBook ? 'Edit Book' : 'Add New Book'}
                </h2>
                <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="space-y-6">
                  {[
                    { key: 'title', label: 'Title *', placeholder: 'Book title', type: 'text' },
                    { key: 'subtitle', label: 'Subtitle', placeholder: 'e.g., Dark Mafia Romance', type: 'text' },
                    { key: 'author', label: 'Author *', placeholder: 'Author name', type: 'text' },
                    { key: 'amazonLink', label: 'Amazon Link', placeholder: 'https://amazon.com/...', type: 'url' },
                  ].map(({ key, label, placeholder, type }) => (
                    <div key={key}>
                      <label className="block text-kane-gold font-light mb-2">{label}</label>
                      <input
                        type={type}
                        value={formData[key]}
                        onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                        className={inputClass}
                        placeholder={placeholder}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-kane-gold font-light mb-2">Synopsis *</label>
                    <textarea
                      value={formData.synopsis}
                      onChange={(e) => setFormData({ ...formData, synopsis: e.target.value })}
                      className={`${inputClass} h-32 resize-none`}
                      placeholder="Book description"
                    />
                  </div>
                  <div className="flex gap-4 pt-4">
                    <button type="submit" className="flex items-center gap-2 px-6 py-3 bg-kane-gold text-kane-dark rounded hover:bg-kane-gold/80 transition-colors font-light">
                      <Save size={20} /> Save Book
                    </button>
                    <button type="button" onClick={handleCancel} className="flex items-center gap-2 px-6 py-3 bg-kane-silver/10 text-kane-silver rounded hover:bg-kane-silver/20 transition-colors font-light">
                      <X size={20} /> Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </>
        )}

        {/* ── SOCIAL LINKS SECTION ── */}
        {mainTab === 'social' && (
          <div className="space-y-8">
            {/* Romance */}
            <div className="bg-kane-deep/50 rounded-lg p-8 border border-kane-crimson/20">
              <h2 className="font-display text-2xl text-kane-crimson mb-1 flex items-center gap-2">
                <Flame size={20} /> Romance Social Links
              </h2>
              <p className="text-kane-silver/50 text-sm font-light mb-6">Lyonah Kane — shown in the footer under Romance</p>
              <div className="space-y-5">
                {socialPlatforms.map(({ key, label, icon, placeholder }) => (
                  <div key={key}>
                    <label className="flex items-center gap-2 text-kane-crimson font-light mb-2">
                      {icon} {label}
                    </label>
                    <input
                      type="url"
                      value={socialForm.romance[key] || ''}
                      onChange={(e) => handleSocialChange('romance', key, e.target.value)}
                      className={inputClass}
                      placeholder={placeholder}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Sci-Fi */}
            <div className="bg-kane-deep/50 rounded-lg p-8 border border-kane-gold/20">
              <h2 className="font-display text-2xl text-kane-gold mb-1 flex items-center gap-2">
                <Sparkles size={20} /> Sci-Fi Social Links
              </h2>
              <p className="text-kane-silver/50 text-sm font-light mb-6">Sooxy Kane — shown in the footer under Sci-Fi</p>
              <div className="space-y-5">
                {socialPlatforms.map(({ key, label, icon, placeholder }) => (
                  <div key={key}>
                    <label className="flex items-center gap-2 text-kane-gold font-light mb-2">
                      {icon} {label}
                    </label>
                    <input
                      type="url"
                      value={socialForm.scifi[key] || ''}
                      onChange={(e) => handleSocialChange('scifi', key, e.target.value)}
                      className={inputClass}
                      placeholder={placeholder}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Save button */}
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={handleSaveSocial}
                className="flex items-center gap-2 px-8 py-3 bg-kane-gold text-kane-dark rounded hover:bg-kane-gold/80 transition-colors font-display font-bold"
              >
                <Save size={20} /> Save Social Links
              </button>
              {socialSaved && (
                <span className="text-kane-gold font-light text-sm animate-slide-in">
                  ✓ Saved successfully
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
