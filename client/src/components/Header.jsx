import { Zap } from 'lucide-react';

export default function Header() {
    return (
        <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
                <Zap className="w-10 h-10 text-[#a3e635] drop-shadow-[0_0_15px_rgba(163,230,53,0.5)]" />
                <h1 className="text-5xl font-bold tracking-tight text-white">
                    Mark<span className="text-[#a3e635]">downloaderr</span>
                </h1>
            </div>
            <p className="text-xl text-[var(--text-secondary)] font-light max-w-2xl mx-auto">
                Convert any webpage URL into <span className="text-white font-medium">AI-ready Markdown</span> instantly.
            </p>
        </div>
    );
}
