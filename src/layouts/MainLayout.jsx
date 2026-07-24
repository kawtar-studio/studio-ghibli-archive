import "./MainLayout.css";
import ArchiveSidebar from "../components/ArchiveSidebar";

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
                    Version 1.0 • Japan • 2004
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

                <ArchiveSidebar />

                <section className="archive-main">

                    {children}

                </section>

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