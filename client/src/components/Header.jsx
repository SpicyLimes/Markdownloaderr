import logo from '../assets/logo.png';

export default function Header() {
    return (
        <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
                <img
                    src={logo}
                    alt="SpicyLimes Logo"
                    className="w-24 h-24 object-contain drop-shadow-[0_0_20px_rgba(163,230,53,0.6)]"
                />
                <h1 className="text-5xl font-bold tracking-tight text-white">
                    Mark<span className="text-[#a3e635]">download</span><span className="text-[#ff5200] drop-shadow-[0_0_10px_rgba(255,82,0,0.8)]">err</span>
                </h1>
            </div>
            <p className="text-xl text-[var(--text-secondary)] font-light max-w-2xl mx-auto">
                Convert any webpage URL into <span className="text-white font-medium">AI-ready Markdown</span> instantly.
            </p>
        </div>
    );
}
