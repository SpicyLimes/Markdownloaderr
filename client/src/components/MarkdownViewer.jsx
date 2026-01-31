import { useState } from 'react';
import { Copy, Check, FileText } from 'lucide-react';

export default function MarkdownViewer({ markdown, title, metadata }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(markdown);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    if (!markdown) return null;

    return (
        <div className="glass-panel max-w-4xl mx-auto overflow-hidden animate-fade-in">
            <div className="flex items-center justify-between p-4 border-b border-[var(--glass-border)] bg-[rgba(0,0,0,0.2)]">
                <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-[var(--accent-color)]" />
                    <span className="font-medium text-sm text-gray-300 truncate max-w-md">
                        {title || 'Converted Article'}
                    </span>
                </div>
                <button
                    onClick={handleCopy}
                    className={`btn flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${copied
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : 'bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] text-white border border-transparent'
                        }`}
                >
                    {copied ? (
                        <>
                            <Check className="w-4 h-4" />
                            <span>Copied!</span>
                        </>
                    ) : (
                        <>
                            <Copy className="w-4 h-4" />
                            <span>Copy Markdown</span>
                        </>
                    )}
                </button>
            </div>
            <div className="p-0 relative">
                <textarea
                    readOnly
                    value={markdown}
                    className="w-full h-[600px] bg-[rgba(0,0,0,0.3)] text-gray-300 font-mono text-sm p-6 outline-none resize-none border-none custom-scrollbar"
                    style={{ fontFamily: '"JetBrains Mono", monospace' }}
                />
            </div>
        </div>
    );
}
