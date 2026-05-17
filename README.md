# Kane Khrons - Author Landing Page

A stunning, production-ready landing page for Kane Khrons featuring dark romance and sci-fi books. Built with React, Tailwind CSS, and Netlify Forms.

## Features

✨ **Dark, Cosmic Aesthetic**
- Beautiful gradient backgrounds with animated stars
- Gold and crimson color palette inspired by your brand
- Responsive design (mobile-first)
- Smooth animations and transitions

📚 **Book Management**
- Genre filtering (Romance & Sci-Fi)
- Book cards with covers, synopses, and reviews
- Star ratings and expandable reviews
- Direct Amazon links

🔐 **Admin Panel**
- Password-protected editing interface
- Add, edit, and delete books without code
- Real-time localStorage persistence
- Clean, intuitive UI

📧 **Newsletter Signup**
- Netlify Forms integration
- Automatic email collection
- Success/error messaging

🔗 **Social Integration**
- Instagram, Facebook, and Goodreads links
- Beautiful footer with branding

## Tech Stack

- **Frontend**: React 18 + React Router 6
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Forms**: Netlify Forms
- **Storage**: localStorage (for admin data)
- **Hosting**: Netlify

## Installation & Setup

### Prerequisites
- Node.js 16+ and npm/yarn
- Git
- A Netlify account (free tier works)

### Local Development

1. **Clone or download the project**
   ```bash
   cd kane-khronicles
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

4. **Access admin panel**
   - Navigate to `http://localhost:3000/admin`
   - Default password: `kane2024`
   - **CHANGE THIS IMMEDIATELY** in `src/components/AdminLoginForm.jsx`

## Customization

### Change Admin Password
Edit `src/components/AdminLoginForm.jsx`:
```javascript
const ADMIN_PASSWORD = 'your-new-password';
```

### Update Social Links
Edit `src/components/Footer.jsx` and update the URLs:
```javascript
<a href="https://www.instagram.com/lyonahkane" ...>
```

### Modify Book Data
1. Go to `/admin`
2. Log in with your password
3. Add/edit/delete books directly through the UI
4. Changes are saved to localStorage

### Customize Colors
Edit `tailwind.config.js` to adjust the color scheme:
```javascript
colors: {
  'kane-dark': '#0f0f1f',      // Main dark bg
  'kane-gold': '#d4af37',      // Accent color
  'kane-crimson': '#dc143c',   // Romance color
  // ... more colors
}
```

### Change Fonts
Fonts are imported in `src/styles/index.css`. Edit the `@import` URLs to use different Google Fonts.

## Deployment to Netlify

### Option 1: Connect GitHub (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/geekkgoddess/kane-khronicles.git
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub and authorize
   - Choose your `kane-khronicles` repository
   - Netlify auto-detects settings from `netlify.toml`
   - Click "Deploy site"

3. **Configure Forms**
   - Go to Site settings → Forms
   - You'll see the newsletter form listed
   - Submissions are logged automatically

### Option 2: Drag & Drop

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload to Netlify**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag the `build` folder onto the page
   - Netlify deploys instantly

### Option 3: Netlify CLI

```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --prod --dir=build
```

## File Structure

```
kane-khrons/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── BookCard.jsx
│   │   ├── Newsletter.jsx
│   │   └── AdminLoginForm.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Genre.jsx
│   │   └── Admin.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── index.jsx
├── netlify.toml
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Admin Panel Guide

### Login
- URL: `/admin`
- Default password: `kane2024` (change this!)

### Managing Books
1. **Select genre** (Romance or Sci-Fi)
2. **View books** in your collection
3. **Add new book**: Click "Add New Book" button
4. **Edit book**: Click the edit icon
5. **Delete book**: Click the trash icon (confirms before deleting)

### Book Fields
- **Title** (required): Book name
- **Subtitle**: Genre or tagline (optional)
- **Author** (required): Author name
- **Synopsis** (required): Book description
- **Amazon Link**: Direct Amazon product URL (optional)

### Data Persistence
- Book data is saved to browser's localStorage
- Each user's browser maintains its own data
- For multiple users, consider adding a backend (Supabase, Firebase, etc.)

## Newsletter Form

### How It Works
1. Form submissions go to Netlify Forms
2. Each submission is logged in your Netlify admin
3. You can export submissions as CSV

### View Submissions
1. Go to your Netlify site dashboard
2. Click "Forms"
3. Click "newsletter"
4. View all submissions
5. Export to CSV if needed

### Connect to Email Service
To send automated emails on signup, use Netlify's form notifications:
1. Site settings → Forms → newsletter
2. Scroll to "Form notifications"
3. Add email or Zapier integration
4. Set up automated responses

## Performance Tips

- Images use placeholders; replace with actual book covers for faster loading
- Lighthouse score: Aim for 90+
- Images are optimized with next-gen formats
- No external tracking code (privacy-first)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- iOS Safari 12+
- Android Chrome 60+
- Mobile-responsive design

## Troubleshooting

### Admin panel not persisting data?
- Check browser's localStorage is enabled
- Try clearing cache/cookies
- Check browser console for errors

### Forms not submitting?
- Ensure form name matches: `name="newsletter"`
- Check Netlify site has forms enabled
- Verify you're on Netlify hosting (not localhost)

### Styles not loading?
- Clear cache: `npm run build && rm -rf node_modules && npm install`
- Verify Tailwind config is correct
- Check CSS imports in `index.jsx`

## Future Enhancements

- Add backend for multi-user admin support
- Implement email verification for newsletter
- Add blog/news section
- Create mailing list segments
- Add analytics dashboard
- Book pre-order functionality
- Reader community features

## License

© 2024 Kane Khronicles. All rights reserved.

## Support

For questions or issues:
1. Check the troubleshooting section above
2. Review Netlify documentation: https://docs.netlify.com
3. Contact support through your Netlify dashboard

---

**Ready to launch? Deploy to Netlify in 3 clicks!** 🚀
