import "./MainLayout.css";

export default function MainLayout({ children }) {
    return (
        <div className="app-window">
            <header className="window-titlebar">
                <div className="title-left">
                    <span className="window-dot"></span>
                    <h1>Studio Ghibli Archive</h1>
                </div>

                <div className="title-right">
                    <span>2004 Edition</span>
                </div>
            </header>

            <nav className="window-nav">
                <a href="/">Home</a>
                <a href="/films">Films</a>
                <a href="/history">History</a>
                <a href="/themes">Themes</a>
                <a href="/art-style">Art Style</a>
                <a href="/legacy">Legacy</a>
                <a href="/references">Archive</a>
            </nav>

            <main className="window-content">
                {children}
            </main>

            <footer className="window-statusbar">
                <span>Status : Ready</span>
                <span>Studio Ghibli Encyclopedia</span>
            </footer>
        </div>
    );
}