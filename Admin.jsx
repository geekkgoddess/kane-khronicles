import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Edit2, Trash2, Plus, Save, X, LogOut } from 'lucide-react';
import AdminLoginForm from '../components/AdminLoginForm';

const ADMIN_PASSWORD = 'kane2024'; // Change this to your secure password

export default function Admin({ books, onUpdateBooks, isLoggedIn, onLogin }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('romance');
  const [editingBook, setEditingBook] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    author: '',
    synopsis: '',
    amazonLink: '',
  });

  if (!isLoggedIn) {
    return <AdminLoginForm onLogin={onLogin} />;
  }

  const currentBooks = books[activeTab];

  const handleLogout = () => {
    localStorage.removeItem('kane_admin_token');
    navigate('/');
  };

  const handleEdit = (book) => {
    setEditingBook(book.id);
    setFormData({
      title: book.title,
      subtitle: book.subtitle,
      author: book.author,
      synopsis: book.synopsis,
      amazonLink: book.amazonLink,
    });
    setShowAddForm(false);
  };

  const handleAddNew = () => {
    setEditingBook(null);
    setFormData({
      title: '',
      subtitle: '',
      author: '',
      synopsis: '',
      amazonLink: '',
    });
    setShowAddForm(true);
  };

  const handleSave = () => {
    if (!formData.title || !formData.author || !formData.synopsis) {
      alert('Please fill in all required fields');
      return;
    }

    const newBooks = { ...books };

    if (editingBook) {
      // Update existing book
      const bookIndex = newBooks[activeTab].findIndex((b) => b.id === editingBook);
      if (bookIndex > -1) {
        newBooks[activeTab][bookIndex] = {
          ...newBooks[activeTab][bookIndex],
          ...formData,
        };
      }
    } else if (showAddForm) {
      // Add new book
      const newId = `${formData.title.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`;
      newBooks[activeTab].push({
        id: newId,
        genre: activeTab,
        cover: `https://via.placeholder.com/300x450/2d1f1f/d4af37?text=${encodeURIComponent(formData.title)}`,
        reviews: [],
        ...formData,
      });
    }

    onUpdateBooks(newBooks);
    setEditingBook(null);
    setShowAddForm(false);
    setFormData({
      title: '',
      subtitle: '',
      author: '',
      synopsis: '',
      amazonLink: '',
    });
    alert('Book updated successfully!');
  };

  const handleDelete = (bookId) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      const newBooks = {
        ...books,
        [activeTab]: books[activeTab].filter((b) => b.id !== bookId),
      };
      onUpdateBooks(newBooks);
      alert('Book deleted successfully!');
    }
  };

  const handleCancel = () => {
    setEditingBook(null);
    setShowAddForm(false);
    setFormData({
      title: '',
      subtitle: '',
      author: '',
      synopsis: '',
      amazonLink: '',
    });
  };

  return (
    <div className="min-h-screen bg-kane-gradient py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-kane-radial opacity-30"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-display text-5xl font-bold text-kane-gold mb-2">Admin Panel</h1>
            <p className="text-kane-silver/70 font-light">Manage your Kane Khrons books</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3 bg-kane-crimson text-white rounded hover:bg-kane-crimson/80 transition-colors font-light"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-kane-gold/20">
          {['romance', 'scifi'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-display text-lg transition-colors ${
                activeTab === tab
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

        {/* Books List */}
        <div className="bg-kane-deep/50 rounded-lg p-6 mb-8 border border-kane-gold/10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-display text-2xl text-kane-silver">
              {activeTab === 'romance' ? 'Romance' : 'Sci-Fi'} Books
            </h2>
            <button
              onClick={handleAddNew}
              className="flex items-center gap-2 px-4 py-2 bg-kane-gold text-kane-dark rounded hover:bg-kane-gold/80 transition-colors font-light"
            >
              <Plus size={20} />
              Add New Book
            </button>
          </div>

          <div className="space-y-4">
            {currentBooks.map((book) => (
              <div
                key={book.id}
                className="flex justify-between items-start p-4 bg-kane-dark/50 rounded border border-kane-gold/10 hover:border-kane-gold/30 transition-colors"
              >
                <div className="flex-grow">
                  <h3 className="font-display text-lg text-kane-silver mb-1">{book.title}</h3>
                  <p className="text-kane-gold text-sm">{book.author}</p>
                  <p className="text-kane-silver/60 text-sm font-light mt-2 line-clamp-2">
                    {book.synopsis}
                  </p>
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => handleEdit(book)}
                    className="p-2 bg-kane-gold/10 text-kane-gold hover:bg-kane-gold/20 rounded transition-colors"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(book.id)}
                    className="p-2 bg-kane-crimson/10 text-kane-crimson hover:bg-kane-crimson/20 rounded transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
            {currentBooks.length === 0 && (
              <p className="text-kane-silver/50 text-center py-8 font-light">
                No {activeTab === 'romance' ? 'romance' : 'sci-fi'} books yet. Add one to get started!
              </p>
            )}
          </div>
        </div>

        {/* Edit/Add Form */}
        {(editingBook || showAddForm) && (
          <div className="bg-kane-deep/50 rounded-lg p-8 border border-kane-gold/10">
            <h2 className="font-display text-2xl text-kane-silver mb-6">
              {editingBook ? 'Edit Book' : 'Add New Book'}
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSave();
              }}
              className="space-y-6"
            >
              <div>
                <label className="block text-kane-gold font-light mb-2">Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 bg-kane-dark text-kane-silver border border-kane-gold/20 rounded focus:border-kane-gold focus:outline-none"
                  placeholder="Book title"
                />
              </div>

              <div>
                <label className="block text-kane-gold font-light mb-2">Subtitle</label>
                <input
                  type="text"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  className="w-full px-4 py-2 bg-kane-dark text-kane-silver border border-kane-gold/20 rounded focus:border-kane-gold focus:outline-none"
                  placeholder="e.g., Dark Mafia Romance"
                />
              </div>

              <div>
                <label className="block text-kane-gold font-light mb-2">Author *</label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full px-4 py-2 bg-kane-dark text-kane-silver border border-kane-gold/20 rounded focus:border-kane-gold focus:outline-none"
                  placeholder="Author name"
                />
              </div>

              <div>
                <label className="block text-kane-gold font-light mb-2">Synopsis *</label>
                <textarea
                  value={formData.synopsis}
                  onChange={(e) => setFormData({ ...formData, synopsis: e.target.value })}
                  className="w-full px-4 py-2 bg-kane-dark text-kane-silver border border-kane-gold/20 rounded focus:border-kane-gold focus:outline-none h-32 resize-none"
                  placeholder="Book description"
                />
              </div>

              <div>
                <label className="block text-kane-gold font-light mb-2">Amazon Link</label>
                <input
                  type="url"
                  value={formData.amazonLink}
                  onChange={(e) => setFormData({ ...formData, amazonLink: e.target.value })}
                  className="w-full px-4 py-2 bg-kane-dark text-kane-silver border border-kane-gold/20 rounded focus:border-kane-gold focus:outline-none"
                  placeholder="https://amazon.com/..."
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3 bg-kane-gold text-kane-dark rounded hover:bg-kane-gold/80 transition-colors font-light"
                >
                  <Save size={20} />
                  Save Book
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex items-center gap-2 px-6 py-3 bg-kane-silver/10 text-kane-silver rounded hover:bg-kane-silver/20 transition-colors font-light"
                >
                  <X size={20} />
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
