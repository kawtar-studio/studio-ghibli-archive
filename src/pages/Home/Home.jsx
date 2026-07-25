import MovieMeta from "../../components/MovieMeta/MovieMeta";

export default function Home() {
    return (
        <section className="home">

            <div className="featured">

                <div className="panel-topbar">
                    <span>FEATURED ARCHIVE</span>
                </div>


                <div className="featured-body">


                    <div className="poster-placeholder">

                        <div className="poster-inner">
                            <span>STUDIO GHIBLI</span>
                            <strong>SPIRITED AWAY</strong>
                            <small>2001</small>
                        </div>

                    </div>



                    <div className="featured-info">

                        <h1>
                            Spirited Away
                        </h1>


                        <div className="movie-meta">
                            <span>★★★★★</span>
                            <span>2001</span>
                            <span>125 min</span>
                        </div>


                        <p>
                            Chihiro enters a mysterious spirit world where every encounter transforms her understanding of courage and identity.
                        </p>


                        <MovieMeta />


                        <button>
                            Open Archive
                        </button>


                    </div>


                </div>


            </div>


        </section>
    );
}