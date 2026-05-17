import React, { useState } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';

const ADMIN_PASSWORD = 'kane2024'; // Change this password

export default function AdminLoginForm({ onLogin }) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      onLogin();
      setPassword('');
      setError('');
    } else {
      setError('Invalid password. Try again.');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-kane-gradient flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-kane-radial opacity-30"></div>

      <div className="relative z-10 w-full max-w-md">
        {/* Card */}
        <div className="bg-kane-deep/50 border border-kane-gold/20 rounded-lg p-8 sm:p-10 shadow-2xl">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-kane-gold/10 rounded-lg border border-kane-gold/30">
              <Lock className="w-8 h-8 text-kane-gold" />
            </div>
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl font-bold text-center text-kane-silver mb-2">
            Admin Access
          </h1>
          <p className="text-center text-kane-silver/60 font-light mb-8">
            Enter the password to manage your books
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-3 bg-kane-dark border border-kane-gold/30 rounded text-kane-silver placeholder-kane-silver/50 focus:border-kane-gold focus:outline-none transition-colors pr-12"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-kane-gold hover:text-kane-gold/80 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-kane-crimson/10 border border-kane-crimson text-kane-crimson text-sm rounded font-light">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-kane-gold to-kane-gold hover:from-kane-gold/80 hover:to-kane-gold/80 text-kane-dark font-display font-bold rounded transition-all duration-300 hover:shadow-kane-glow"
            >
              Access Admin Panel
            </button>
          </form>

          {/* Hint */}
          <p className="text-center text-kane-silver/40 text-xs font-light mt-6">
            Default password: kane2024 (Change in AdminLoginForm.jsx)
          </p>
        </div>
      </div>
    </div>
  );
}
