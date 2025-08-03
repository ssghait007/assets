# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Build Commands
- `npm run build` - Generates static HTML from templates and data
- `npm run dev` - Builds and starts local development server on port 8000
- `npm run preview` - Starts local server without rebuilding
- `npm run deploy` - Builds and deploys to Netlify production

### Local Development
The project uses Python's built-in HTTP server for local development:
```bash
python3 -m http.server 8000
```

## Architecture Overview

This is a **data-driven portfolio website** built with vanilla JavaScript ES modules and template literals. The architecture separates concerns into three main layers:

### 1. Data Layer (`src/data/portfolio.js`)
- **Single source of truth** for all portfolio content
- Exports structured objects: `personal`, `experience`, `education`, `skills`, `projects`, `achievements`, `languages`, `interests`
- All content changes should start here

### 2. Template Layer (`src/templates/sections.js`)
- **Template literal functions** that transform data into HTML
- Each function corresponds to a page section: `heroSection`, `navSection`, `aboutSection`, etc.
- Uses modern ES6 template literals with embedded expressions

### 3. Application Layer (`src/main.js`)
- **Orchestrates** data and templates
- `generateHTML()` - Combines all sections into complete body content
- `generateJS()` - Generates client-side JavaScript for animations and interactions
- Handles scroll animations, smooth navigation, and active state management

### 4. Build System (`build.js`)
- **Static site generator** that produces final `index.html`
- Extracts existing styles from HTML template
- Injects generated content and JavaScript
- Single-file output approach for simple deployment

## File Structure Patterns

```
src/
├── data/portfolio.js      # All content data (modify content here)
├── templates/sections.js  # HTML template functions (modify layout here)
└── main.js               # Application logic and build coordination
```

## Content Management Workflow

1. **Update Content**: Modify data objects in `src/data/portfolio.js`
2. **Adjust Layout**: Edit template functions in `src/templates/sections.js` 
3. **Rebuild**: Run `npm run build` to generate new `index.html`
4. **Preview**: Use `npm run dev` or `npm run preview` to test locally

## Deployment Configuration

### Netlify Settings (`netlify.toml`)
- **Build command**: `npm run build`
- **Publish directory**: `.` (root, since `index.html` is generated at root)
- **Node version**: 18
- **Security headers**: CSP, XSS protection, frame options configured
- **Asset caching**: CSS/JS/SVG cached for 1 year

### Key Dependencies
- **Runtime**: Vanilla JavaScript (no frameworks)
- **Build**: Node.js 18+ (ES modules required)
- **Development**: Python 3 for local server
- **External**: Google Fonts, FontAwesome (via CDN)

## Development Notes

- The project uses **ES modules** (`"type": "module"` in package.json)
- All JavaScript uses modern syntax (template literals, arrow functions, destructuring)
- **No bundling** or transpilation - runs directly in modern browsers
- SVG icons are stored as separate files in root directory
- Generated `index.html` includes inlined CSS and JavaScript for optimal performance
- The build system preserves existing styles while updating content sections

## Performance Considerations

- Single HTML file output minimizes HTTP requests
- Inlined CSS and JavaScript for faster initial load
- Image placeholders use external service (placehold.co)
- FontAwesome and Google Fonts loaded from CDN
- Intersection Observer API used for efficient scroll animations