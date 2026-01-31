# Markdownloaderr

### *A Web App that allows you to input a webpage URL, and convert it to AI compatible/readable Markdown Syntax*

**Live Demo**: [https://SpicyLimes.io/markdownloaderr](https://SpicyLimes.io/markdownloaderr) (Hosted on GitHub Pages)

## Features
- **AI-Ready Markdown**: Converts messy HTML into clean, token-efficient Markdown suitable for LLMs.
- **Rich Aesthetics**: Premium dark mode design with "Spicy Lime" accents and glassmorphism.
- **Client-Side Processing**: No backend required. Uses a CORS proxy (`allorigins.win`) and runs parsing logic entirely in your browser.
- **One-Click Copy**: Easily copy the result to your clipboard.

## Deployment (Automated via GitHub Actions)

This project uses **GitHub Actions** to automatically build and deploy the application.

### One-Time Setup
1. Go to your GitHub Repository **Settings**.
2. Navigate to **Pages** (in the sidebar).
3. Under **Build and deployment**:
   - Set **Source** to **GitHub Actions**.
4. Push your code to the `main` branch.

That's it! GitHub will now automatically build and deploy new changes whenever you push to `main`.

## Manual Build
To build the project files:
```bash
npm run build
```
The output will be in the `dist` folder.

## Technologies
- **Frontend**: React, Vite
- **Styling**: Vanilla CSS (CSS Variables, Flexbox/Grid)
- **Parsing**: `@mozilla/readability`, `turndown`, `DOMParser`
- **Proxy**: `allorigins.win`