import "./FilmDetails.css";

import { Link, useParams } from "react-router-dom";

import films from "../../data/films";


export default function FilmDetails() {

    const { id } = useParams();

    const film = films.find(movie => movie.id === id);


    if (!film) {

        return (

            <main className="film-details-page">

                <h1>
                    Film Not Found
                </h1>


                <Link
                    to="/films"
                    className="back-button"
                >
                    ← Return to Archive
                </Link>


            </main>

        );

    }



    return (

        <main className="film-details-page">



            <Link
                to="/films"
                className="back-button"
            >
                ← Back to Film Archive
            </Link>





            <section className="film-hero">



                <div className="film-poster">


                    {film.poster && (

                        <img
                            src={film.poster}
                            alt={film.title}
                        />

                    )}


                </div>





                <div className="film-header">



                    <p className="section-label">
                        ARCHIVE ENTRY
                    </p>




                    <h1>
                        {film.title}
                    </h1>




                    <p className="film-year">

                        {film.year} • Directed by {film.director}

                    </p>





                    <div className="film-description">

                        {film.curatorNotes}

                    </div>





                    <div className="film-info-grid">



                        <div className="info-chip">

                            <small>
                                Duration
                            </small>

                            <strong>
                                {film.duration || "—"}
                            </strong>

                        </div>





                        <div className="info-chip">

                            <small>
                                Genre
                            </small>

                            <strong>
                                {film.genre?.join(" • ")}
                            </strong>

                        </div>





                        <div className="info-chip">

                            <small>
                                Studio
                            </small>

                            <strong>
                                {film.studio}
                            </strong>

                        </div>





                        <div className="info-chip">

                            <small>
                                Japanese Title
                            </small>

                            <strong>
                                {film.japaneseTitle}
                            </strong>

                        </div>



                    </div>



                </div>



            </section>









            <section className="info-card">



                <p className="section-label">
                    STORY
                </p>



                <h2>
                    Story Breakdown
                </h2>





                {Array.isArray(film.storyBreakdown) ? (


                    film.storyBreakdown.map((part, index) => (


                        <div
                            key={index}
                            className="story-part"
                        >

                            <p>
                                {part}
                            </p>


                        </div>


                    ))



                ) : (


                    <p>
                        {film.storyBreakdown}
                    </p>


                )}



            </section>









            <section className="info-card">



                <p className="section-label">
                    THEMES
                </p>




                <h2>
                    Themes
                </h2>





                <div className="themes">



                    {film.themes?.map((theme, index) => (


                        <span
                            key={index}
                            className="theme-pill"
                        >

                            {theme}


                        </span>



                    ))}



                </div>




            </section>









            <section className="info-card">



                <p className="section-label">
                    SYMBOLISM
                </p>




                <h2>
                    Meaning & Symbolism
                </h2>





                <div className="facts-grid">



                    {film.symbolism?.map((item, index) => (


                        <div
                            key={index}
                            className="fact-card"
                        >


                            <span>
                                ✦
                            </span>



                            <p>
                                {item}
                            </p>


                        </div>


                    ))}




                </div>



            </section>









            <section className="info-card">



                <p className="section-label">
                    PRODUCTION
                </p>




                <h2>
                    Behind the Film
                </h2>




                <p>
                    {film.productionNotes}
                </p>





                <h2>
                    Soundtrack
                </h2>




                <p>
                    {film.soundtrack}
                </p>




            </section>









            <section className="info-card">



                <p className="section-label">
                    BEHIND THE SCENES
                </p>




                <h2>
                    Production Stories
                </h2>





                <div className="facts-grid">



                    {film.behindTheScenesFacts?.map((fact, index) => (


                        <div
                            key={index}
                            className="fact-card"
                        >


                            <span>
                                ✦
                            </span>



                            <p>
                                {fact}
                            </p>



                        </div>



                    ))}




                </div>



            </section>









            <section className="info-card">



                <p className="section-label">
                    COLLECTION NOTES
                </p>



                <h2>
                    Fun Facts
                </h2>





                <div className="facts-grid">



                    {film.funFacts?.map((fact, index) => (


                        <div
                            key={index}
                            className="fact-card"
                        >


                            <span>
                                ✦
                            </span>



                            <p>
                                {fact}
                            </p>



                        </div>



                    ))}




                </div>




            </section>









            <section className="info-card">



                <p className="section-label">
                    RECOGNITION
                </p>




                <h2>
                    Awards & Legacy
                </h2>





                <div className="awards-grid">



                    {film.awards?.map((award, index) => (


                        <div
                            key={index}
                            className="award-card"
                        >

                            🏆


                            <p>
                                {award}
                            </p>



                        </div>



                    ))}



                </div>





                <p className="legacy-text">

                    {film.legacy}

                </p>




            </section>





        </main>

    );

}