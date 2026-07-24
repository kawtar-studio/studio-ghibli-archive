import "./ArchiveHome.css";

export default function ArchiveHome() {

    return (

        <div className="archive-home">

            <div className="welcome-panel">

                <div className="panel-label">
                    DIGITAL ARCHIVE SYSTEM
                </div>

                <h2>
                    Studio Ghibli Collection
                </h2>

                <p>
                    Explore films, characters, artwork,
                    history and the world of animation.
                </p>

            </div>



            <div className="menu-grid">

                <button>
                    🎞 Films
                </button>

                <button>
                    🌿 Worlds
                </button>

                <button>
                    🎨 Artwork
                </button>

                <button>
                    📖 History
                </button>

            </div>



            <div className="featured-panel">

                <div className="poster-placeholder">
                    POSTER
                </div>


                <div className="film-info">

                    <span>
                        FEATURED ARCHIVE
                    </span>

                    <h3>
                        Spirited Away
                    </h3>

                    <p>
                        Hayao Miyazaki
                        <br />
                        2001 • 125 min
                    </p>


                    <button className="open-button">
                        OPEN ARCHIVE
                    </button>

                </div>

            </div>


        </div>

    )

}