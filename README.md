# CurrenSee Pro Landing Page

A beautiful, modern, and fully responsive landing page for the CurrenSee Pro Flutter currency converter app. Built with HTML5, CSS3, and vanilla JavaScript, featuring dynamic GitHub API integration for automatic APK downloads.

![CurrenSee Pro Landing Page](assets/og-image.png)

## ✨ Features

- **Modern Design**: Clean, professional UI with gradients and smooth animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Dynamic Downloads**: Automatically fetches latest APK from GitHub releases
- **PWA Ready**: Progressive Web App support with service worker
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Optimized loading with lazy animations and efficient caching
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🚀 Quick Start

### 1. Clone or Download

```bash
git clone https://github.com/yourusername/currensee-pro-landing.git
cd currensee-pro-landing
```

### 2. Configure GitHub Repository

Edit `js/app.js` and update the GitHub configuration:

```javascript
const GITHUB_CONFIG = {
    username: 'yourusername', // Your GitHub username
    repository: 'currensee-pro', // Your repository name
    apiUrl: 'https://api.github.com/repos/yourusername/currensee-pro/releases/latest'
};
```

### 3. Update Meta Information

Edit `index.html` and update:
- Open Graph URLs
- Repository links in footer
- App description and keywords

### 4. Add Assets

Place your app assets in the `assets/` directory:
- Favicons (16x16, 32x32, 180x180)
- Social media image (1200x630)
- App screenshots (optional)
- App icons (192x192, 512x512)

### 5. Test Locally

Open `index.html` in your browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

## 📁 Project Structure

```
currensee-pro-landing/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── app.js             # JavaScript functionality
├── assets/
│   ├── favicon-16x16.png  # Small favicon
│   ├── favicon-32x32.png  # Standard favicon
│   ├── apple-touch-icon.png # Apple touch icon
│   ├── og-image.png       # Social media image
│   ├── app-icon-192.png   # PWA icon (192x192)
│   ├── app-icon-512.png   # PWA icon (512x512)
│   └── README.md          # Assets documentation
├── sw.js                  # Service worker
├── manifest.json          # PWA manifest
└── README.md             # This file
```

## 🎨 Customization

### Colors and Theme

Edit CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #8b5cf6;    /* Secondary color */
    --accent-color: #06b6d4;       /* Accent color */
    /* ... more variables */
}
```

### Content

Update the following sections in `index.html`:
- Hero title and description
- Feature cards
- Statistics
- Footer links

### Features

Add or modify features in the features section:

```html
<div class="feature-card">
    <div class="feature-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3 class="feature-title">Feature Title</h3>
    <p class="feature-description">Feature description...</p>
</div>
```

## 🌐 Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main` or `master`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command to empty (static site)
3. Set publish directory to `/` (root)
4. Deploy automatically on push

### Vercel

1. Import your GitHub repository to Vercel
2. Vercel will automatically detect it as a static site
3. Deploy with zero configuration

## 🔧 Configuration

### GitHub API Setup

The landing page automatically fetches the latest release from your GitHub repository. Make sure:

1. Your repository has releases with APK files
2. APK files are named with `.apk` extension
3. Repository is public or you have proper authentication

### Custom Domain

To use a custom domain:

1. Add a `CNAME` file to your repository root:
   ```
   yourdomain.com
   ```

2. Configure DNS settings with your domain provider

3. Update GitHub Pages settings with your custom domain

### Analytics

Add Google Analytics by including the tracking code in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📱 PWA Features

The landing page includes Progressive Web App features:

- **Offline Support**: Service worker caches essential resources
- **Install Prompt**: Users can install the site as an app
- **Push Notifications**: Ready for push notification implementation
- **App-like Experience**: Full-screen mode and native feel

## 🔍 SEO Optimization

The landing page is optimized for search engines with:

- Semantic HTML structure
- Meta tags and Open Graph data
- Structured data markup
- Fast loading times
- Mobile-friendly design
- Accessible navigation

## 🛠️ Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

If you need help or have questions:

- Create an issue on GitHub
- Check the documentation
- Review the code comments

## 🎯 Roadmap

- [ ] Add more animation options
- [ ] Implement search functionality
- [ ] Add multi-language support
- [ ] Create admin panel for content management
- [ ] Add analytics dashboard
- [ ] Implement A/B testing capabilities

---

Built with ❤️ for CurrenSee Pro
