import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'newsletter',
          email: email,
        }).toString(),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Thanks for subscribing! Check your inbox for book updates.');
        setEmail('');
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setStatus('error');
      setMessage('Connection error. Please try again.');
    }
  };

  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-kane-deep">
      <div className="absolute inset-0 bg-kane-radial opacity-40"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-kane-crimson/5 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <Mail className="w-12 h-12 text-kane-gold" />
        </div>

        <h2 className="font-display text-5xl sm:text-6xl font-bold text-kane-silver mb-4">
          Subscribe for Book Updates
        </h2>

        <p className="text-kane-silver/70 text-lg font-light mb-8">
          Be the first to know about new releases, exclusive excerpts, and special offers.
        </p>

        <form onSubmit={handleSubmit} className="relative">
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-6 py-4 sm:py-5 bg-kane-dark border-2 border-kane-gold/30 rounded text-kane-silver placeholder-kane-silver/50 focus:border-kane-gold focus:outline-none transition-colors text-base"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-kane-gold text-kane-dark font-display font-bold rounded hover:bg-kane-gold/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>

        {/* Hidden Netlify form */}
        <form name="newsletter" method="POST" hidden>
          <input type="email" name="email" />
        </form>

        {/* Status Message */}
        {message && (
          <div
            className={`mt-6 p-4 rounded flex items-center gap-3 animate-slide-in ${
              status === 'success'
                ? 'bg-kane-gold/10 border border-kane-gold text-kane-gold'
                : 'bg-kane-crimson/10 border border-kane-crimson text-kane-crimson'
            }`}
          >
            {status === 'success' && <Check size={20} />}
            <span className="font-light">{message}</span>
          </div>
        )}

        <p className="text-kane-silver/50 text-sm font-light mt-6">
          Unsubscribe at any time. No spam, ever.
        </p>
      </div>
    </section>
  );
}
