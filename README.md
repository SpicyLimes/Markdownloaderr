# 🍋 Markdownloaderr

### *Convert any webpage into AI-ready Markdown instantly.*

**Markdownloaderr** is a high-performance web tool designed for developers and AI enthusiasts. It strips away the clutter of modern websites—ads, navigation, and scripts—leaving you with clean, structured Markdown perfectly formatted for Large Language Models (LLMs) like Claude, GPT-4, and Gemini.

---

## ✨ Features

- **⚡ Instant Conversion**: Just paste a URL and get Markdown in seconds.
- **🧠 AI-Optimized**: Uses `@mozilla/readability` to ensure only the core article content is extracted.
- **🎨 Premium Aesthetics**: A sleek "Spicy Lime" glassmonism design with dark mode and neon accents.
- **📥 One-Click Download**: Save your conversions directly as `.md` files.
- **🛡️ 100% Client-Side**: Your data never touches a backend. All parsing happens directly in your browser using a secure CORS proxy.

---

## 🛠️ How to Use

1.  **Visit the App**: Open the [live site](https://markdownloaderr.com/).
2.  **Enter a URL**: Paste the link to an article or blog post you want to convert.
3.  **Click Convert**: The app will fetch and parse the content.
4.  **Copy or Download**: Use the "Copy" button for quick pasting or "Download .md" to save a file.

> [!TIP]
> This tool works best on articles, blog posts, and documentation pages. Complex web apps or login-walled pages may not be accessible via the public proxy.

---

## 🏗️ For Developers

### Tech Stack
- **Frontend**: React + Vite
- **Styling**: Tailwind CSS v3 (Custom Dark Theme)
- **Logic**: Readability.js, Turndown.js
- **Deployment**: Automated via GitHub Actions

### Local Development
1. Clone the repository.
2. Navigate to the `client` directory: `cd client`.
3. Install dependencies: `npm install`.
4. Start dev server: `npm run dev`.

---

© 2026 **SpicyLimes.io** | Designed by *SpicyLimes* | Created with **Google Antigravity**
