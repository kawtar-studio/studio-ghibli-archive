import MovieMeta from "../../components/MovieMeta/MovieMeta";
import "./Home.css";


export default function Home() {

    return (

        <section className="home">


            <div className="featured">


                <div className="panel-window">


                    <div className="panel-topbar">

                        <div className="panel-controls">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>


                        <small>
                            FEATURED ARCHIVE
                        </small>

                    </div>



                    <div className="featured-body">


                        <div className="poster-placeholder">

                            <div className="poster-inner">

                                <span>
                                    STUDIO GHIBLI
                                </span>


                                <strong>
                                    SPIRITED AWAY
                                </strong>


                                <small>
                                    2001
                                </small>


                            </div>

                        </div>




                        <div className="featured-info">


                            <h2>
                                Spirited Away
                            </h2>


                            <div className="movie-meta">

                                <span>
                                    ★★★★★
                                </span>

                                <span>
                                    2001
                                </span>

                                <span>
                                    125 min
                                </span>

                            </div>



                            <p>
                                Chihiro enters a mysterious spirit world where every encounter transforms her understanding of courage and identity.
                            </p>


                            <MovieMeta />



                            <div className="archive-line">

                                <span>
                                    ARCHIVE ID: GH-001
                                </span>

                                <span>
                                    STATUS: COMPLETE
                                </span>

                            </div>



                            <div className="featured-buttons">

                                <button>
                                    Open Archive
                                </button>


                                <button>
                                    Gallery
                                </button>


                            </div>


                        </div>


                    </div>


                </div>


            </div>



        </section>

    );

}