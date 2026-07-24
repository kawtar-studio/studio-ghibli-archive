import "./Home.css";

export default function Home() {
    return (
        <section className="home">

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

                        <div className="featured-image">

                            <div className="poster-placeholder">
                                Poster
                            </div>

                        </div>

                        <div className="featured-info">

                            <h2>Spirited Away</h2>

                            <div className="movie-meta">
                                <span>★★★★★</span>
                                <span>2001</span>
                                <span>125 min</span>
                            </div>

                            <p>
                                Chihiro enters a mysterious spirit world where every encounter
                                transforms her understanding of courage, friendship and identity.
                            </p>

                            <div className="featured-buttons">

                                <button>Open Archive</button>

                                <button>Gallery</button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="panel info">
                <span className="panel-label">STUDIO</span>

                <h3>Studio Ghibli</h3>

                <p>
                    Founded in 1985 by Hayao Miyazaki, Isao Takahata and Toshio Suzuki.
                </p>
            </div>

            <div className="panel timeline">
                <span className="panel-label">TIMELINE</span>

                <ul>
                    <li>1985 • Studio founded</li>
                    <li>1988 • Totoro</li>
                    <li>1997 • Princess Mononoke</li>
                    <li>2001 • Spirited Away</li>
                </ul>
            </div>

            <div className="panel quote">
                <span className="panel-label">QUOTE</span>

                <blockquote>
                    "Always believe in yourself."
                </blockquote>
            </div>

            <div className="panel collection">
                <span className="panel-label">COLLECTION</span>

                <p>24 Films Archived</p>
            </div>

            <div className="panel facts">
                <span className="panel-label">FACTS</span>

                <ul>
                    <li>Academy Award Winner</li>
                    <li>Hand Drawn Animation</li>
                    <li>Worldwide Recognition</li>
                </ul>
            </div>

        </section>
    );
}