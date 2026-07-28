import MovieMeta from "../../components/MovieMeta/MovieMeta";

export default function Home() {

    return (

        <section className="home">

            <div className="home-content">


                <div className="panel featured">


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
                            22 animated films archived
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



            </div>


        </section>

    );

}