import MovieMeta from "../../components/MovieMeta/MovieMeta";

export default function Home() {
    return (
        <section className="home">

            <aside className="archive-sidebar">

                <div className="mini-window">

                    <div className="mini-title">
                        <span>ARCHIVE</span>
                    </div>

                    <ul className="archive-menu">
                        <li>📀 Films</li>
                        <li>🌳 Nature</li>
                        <li>👻 Spirits</li>
                        <li>🎵 Music</li>
                        <li>🎨 Art Style</li>
                        <li>📚 History</li>
                    </ul>

                </div>

                <div className="mini-window">

                    <div className="mini-title">
                        <span>TODAY'S FACT</span>
                    </div>

                    <p>
                        Every Studio Ghibli film was traditionally hand-drawn before being digitally finished.
                    </p>

                </div>

            </aside>

            <div className="panel featured">

                <div className="panel-window">

                    <div className="panel-topbar">

                        <div className="panel-controls">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <small>FEATURED ARCHIVE</small>

                    </div>

                    <div className="featured-body">

                        <div className="poster-placeholder">
                            Poster
                        </div>

                        <div className="featured-info">

                            <h2>Spirited Away</h2>

                            <div className="movie-meta">
                                <span>★★★★★</span>
                                <span>2001</span>
                                <span>125 min</span>
                            </div>

                            <p>
                                Chihiro enters a mysterious spirit world where every encounter transforms her understanding of courage and identity.
                            </p>

                            <MovieMeta />

                            <div className="featured-buttons">
                                <button>Open Archive</button>
                                <button>Gallery</button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}