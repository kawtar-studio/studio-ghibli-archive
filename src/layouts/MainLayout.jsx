import "./MainLayout.css";

export default function MainLayout({ children }) {
    return (
        <div className="app-window">

            <header className="window-titlebar">

                <div className="title-left">
                    <span className="window-dot"></span>

                    <h1>
                        Studio Ghibli Encyclopedia CD-ROM
                    </h1>
                </div>

                <div className="title-right">
                    <span>
                        Version 1.0 • Japan • 2004
                    </span>
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

                <div className="archive-badge">

                    <span>
                        ARCHIVE SYSTEM
                    </span>

                    <strong>
                        GHIBLI DIGITAL ENCYCLOPEDIA
                    </strong>

                    <small>
                        日本 • 2004
                    </small>

                </div>


                {children}

            </main>


            <footer className="window-statusbar">

                <span>
                    Archive Loaded
                </span>

                <span>
                    Version 1.0 • Japan • 2004
                </span>

            </footer>

        </div>
    );
}