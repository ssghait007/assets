# Portfolio Website

Modern, data-driven portfolio website built with ES modules and template literals.

## 🚀 Quick Start

```bash
# Build the site
npm run build

# Local development
npm run dev

# Deploy to Netlify
npm run deploy
```

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── data/portfolio.js      # All portfolio data
│   ├── templates/sections.js  # Template literal functions
│   └── main.js                # Main app logic
├── build.js                   # Build script
├── netlify.toml              # Netlify configuration
├── package.json              # Dependencies & scripts
└── index.html                # Generated output
```

## ✨ Features

- **Data-driven**: All content in organized JSON-like structures
- **Modern architecture**: ES modules, template literals
- **Framework-ready**: Easy migration to React/Vue/Svelte
- **Performance optimized**: Minimal bundle, fast loading
- **Responsive design**: Mobile-first approach
- **SEO friendly**: Semantic HTML, proper meta tags

## 🔧 Development

### Adding New Content

1. **Update data**: Edit `src/data/portfolio.js`
2. **Modify templates**: Edit `src/templates/sections.js`
3. **Rebuild**: Run `npm run build`

### Deployment

#### Netlify (Recommended)

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login & Deploy**:
   ```bash
   netlify login
   netlify init
   npm run deploy
   ```

#### GitHub Pages

1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to main branch

#### Manual Deployment

1. Run `npm run build`
2. Upload `index.html` and assets to any static hosting

## 🎨 Customization

- **Colors**: Update CSS custom properties in the style section
- **Fonts**: Modify Google Fonts imports
- **Layout**: Edit template functions in `src/templates/`
- **Data**: Update `src/data/portfolio.js`

## 📦 Dependencies

- **Runtime**: None (vanilla JavaScript)
- **Build**: Node.js 18+
- **Development**: Python 3 (for local server)

## 🌐 Browser Support

- Chrome/Edge 88+
- Firefox 78+
- Safari 14+

---

Built with ❤️ by Sachin Ghait