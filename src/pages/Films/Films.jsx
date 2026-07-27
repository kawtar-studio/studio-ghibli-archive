import "./Films.css";
import { Link } from "react-router-dom";
import films from "../../data/films";

export default function Films() {

    const decades = [
        {
            title: "1980s",
            films: films.filter(
                film => film.year >= 1980 && film.year <= 1989
            )
        },

        {
            title: "1990s",
            films: films.filter(
                film => film.year >= 1990 && film.year <= 1999
            )
        },

        {
            title: "2000s",
            films: films.filter(
                film => film.year >= 2000 && film.year <= 2009
            )
        },

        {
            title: "2010s",
            films: films.filter(
                film => film.year >= 2010 && film.year <= 2019
            )
        },

        {
            title: "2020s",
            films: films.filter(
                film => film.year >= 2020
            )
        }
    ];


    let archiveNumber = 1;


    return (

        <main className="films-page">


            <header className="films-header">


                <p className="section-label">
                    COMPLETE FILM ARCHIVE
                </p>


                <h1>
                    The Worlds of Studio Ghibli
                </h1>


                <p>
                    Every Studio Ghibli film is its own little universe.
                    Some tell quiet stories about everyday life, while
                    others take us through enchanted forests, floating
                    kingdoms and magical worlds. Together they create one
                    of the most beloved collections of animated films ever made.
                </p>


            </header>




            <section className="films-intro">


                <div>

                    <h2>
                        Archive Overview
                    </h2>


                    <p>
                        From <strong>Nausicaä of the Valley of the Wind</strong>
                        in 1984 to <strong>The Boy and the Heron</strong> in 2023,
                        Studio Ghibli has created films that continue to inspire
                        audiences through unforgettable stories, breathtaking
                        animation and timeless characters.
                    </p>

                </div>



                <div>

                    <h2>
                        Inside This Collection
                    </h2>


                    <ul>

                        <li>24 Feature Films</li>

                        <li>5 Different Decades</li>

                        <li>6 Visionary Directors</li>

                        <li>Hundreds of Memorable Characters</li>

                    </ul>

                </div>


            </section>






            {decades.map((decade) => (

                <section
                    key={decade.title}
                    className="decade-section"
                >


                    <h2 className="decade-title">

                        {decade.title}

                    </h2>




                    <div className="films-grid">


                        {decade.films.map((film) => (

                            <Link

                                key={film.id}

                                to={`/films/${film.id}`}

                                className="film-card"

                            >


                                <p className="film-number">

                                    ARCHIVE #{String(archiveNumber++).padStart(3, "0")}

                                </p>




                                <h3>

                                    {film.title}

                                </h3>




                                <div className="film-meta">

                                    <span>
                                        {film.year}
                                    </span>

                                    <span>
                                        •
                                    </span>

                                    <span>
                                        {film.director}
                                    </span>

                                </div>





                                <p className="film-genre">

                                    {film.genre.join(" • ")}

                                </p>





                                <div className="film-details">


                                    <div>

                                        <strong>
                                            Duration
                                        </strong>


                                        <span>

                                            {film.duration || "—"}

                                        </span>

                                    </div>





                                    <div>

                                        <strong>
                                            Themes
                                        </strong>


                                        <span>

                                            {film.themes.join(" • ")}

                                        </span>

                                    </div>



                                </div>





                            </Link>


                        ))}


                    </div>



                </section>


            ))}



        </main>

    );

}