import { useState } from 'react';
import { Readability } from '@mozilla/readability';
import TurndownService from 'turndown';
import Header from './components/Header';
import UrlInput from './components/UrlInput';
import MarkdownViewer from './components/MarkdownViewer';

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleConvert = async (url) => {
    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      // Use allorigins.win as a CORS proxy
      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;

      const response = await fetch(proxyUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch content (Status: ${response.status})`);
      }

      const htmlText = await response.text();

      // Parse HTML in the browser
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, "text/html");

      // Check if the document looks empty or failed
      if (!doc.body.textContent.trim()) {
        throw new Error("the fetched content seems empty.");
      }

      // Fix relative links before parsing
      const baseElement = doc.createElement('base');
      baseElement.href = url;
      doc.head.appendChild(baseElement);

      // Use Readability to extract main content
      const reader = new Readability(doc);
      const article = reader.parse();

      if (!article) {
        throw new Error('Failed to parse article content. The page might strictly block scraping.');
      }

      // Convert to Markdown
      const turndownService = new TurndownService({
        headingStyle: 'atx',
        codeBlockStyle: 'fenced'
      });

      const markdown = turndownService.turndown(article.content);
      const finalMarkdown = `# ${article.title}\n\n${markdown}`;

      setData({
        title: article.title,
        markdown: finalMarkdown,
        excerpt: article.excerpt
      });

    } catch (err) {
      console.error(err);
      setError(`Error: ${err.message}. Note: Some websites block cross-origin scraping.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-10 px-4 flex flex-col items-center">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#a3e635] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="w-full max-w-5xl relative z-10">
        <Header />

        <UrlInput onConvert={handleConvert} isLoading={isLoading} />

        {error && (
          <div className="max-w-2xl mx-auto mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-200 text-center animate-fade-in glass-panel">
            {error}
          </div>
        )}

        {data && (
          <MarkdownViewer
            markdown={data.markdown}
            title={data.title}
          />
        )}

        <footer className="mt-20 text-center text-gray-500 text-sm font-light">
          <p>© 2026 SpicyLimes.io | All Rights Reserved | <a href="https://github.com/SpicyLimes/Markdownloaderr" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors">GitHub</a></p>
          <p className="mt-2">Designed by <span className="text-gray-400 italic">SpicyLimes</span> | Created with <strong>Google Antigravity</strong></p>
        </footer>
      </div>
    </div>
  );
}

export default App;
