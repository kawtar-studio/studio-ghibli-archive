import MovieMeta from "../../components/MovieMeta/MovieMeta";
import howlsMovingCastle from "../../assets/images/howls-moving-castle.jpg";
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

                            <img
                                src={howlsMovingCastle}
                                alt="Howl's Moving Castle"
                            />

                        </div>




                        <div className="featured-info">


                            <h2>
                                Howl's Moving Castle
                            </h2>



                            <div className="movie-meta">

                                <span>
                                    ★★★★★
                                </span>

                                <span>
                                    2004
                                </span>

                                <span>
                                    119 min
                                </span>

                            </div>



                            <p>
                                Sophie is transformed by a mysterious curse and finds herself inside Howl's magical moving castle, discovering friendship, courage, and the power of change.
                            </p>



                            <MovieMeta />



                            <div className="archive-data">


                                <div>
                                    <span>
                                        DIRECTOR
                                    </span>

                                    <strong>
                                        Hayao Miyazaki
                                    </strong>
                                </div>



                                <div>
                                    <span>
                                        RELEASED
                                    </span>

                                    <strong>
                                        2004 • Japan
                                    </strong>
                                </div>



                                <div>
                                    <span>
                                        RUNTIME
                                    </span>

                                    <strong>
                                        119 minutes
                                    </strong>
                                </div>



                                <div>
                                    <span>
                                        CATALOG
                                    </span>

                                    <strong>
                                        GH-002
                                    </strong>
                                </div>


                            </div>




                            <div className="archive-line">

                                <span>
                                    DATABASE STATUS : COMPLETE
                                </span>


                                <span>
                                    DIGITAL ARCHIVE VERIFIED
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



            <div className="archive-widgets">


                <div className="widget">

                    <span>
                        DATABASE
                    </span>


                    <h3>
                        Film Library
                    </h3>


                    <p>
                        22 animated films archived.
                    </p>

                </div>



                <div className="widget">


                    <span>
                        ARCHIVE NOTE
                    </span>


                    <h3>
                        Today's Fact
                    </h3>


                    <p>
                        Hand drawn animation preserved since 1985.
                    </p>


                </div>


            </div>



        </section>

    );

}