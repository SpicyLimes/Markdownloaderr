import { useState } from 'react';
import { ArrowRight, Loader2, Link as LinkIcon } from 'lucide-react';

export default function UrlInput({ onConvert, isLoading }) {
    const [url, setUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (url.trim()) {
            onConvert(url);
        }
    };

    return (
        <div className="max-w-3xl mx-auto mb-12">
            <form onSubmit={handleSubmit} className="relative group">
                <div className="absolute inset-0 bg-[#a3e635] opacity-20 blur-xl rounded-full group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="glass-panel p-2 flex items-center gap-2 relative z-10 rounded-2xl">
                    <div className="pl-4 text-[var(--text-secondary)]">
                        <LinkIcon className="w-6 h-6" />
                    </div>
                    <input
                        type="url"
                        placeholder="Paste article URL here..."
                        className="w-full bg-transparent border-none outline-none text-white text-lg placeholder:text-gray-500 py-3"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !url}
                        className="btn btn-primary min-w-[140px] py-3 rounded-xl flex items-center justify-center gap-2"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span>Processing</span>
                            </>
                        ) : (
                            <>
                                <span>Convert</span>
                                <ArrowRight className="w-5 h-5" />
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
