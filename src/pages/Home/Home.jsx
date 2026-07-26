import "./Home.css";
import homeCover from "../../assets/images/home-cover.jpeg";

export default function Home() {

    return (

        <main className="home-page">


            <section className="opening-spread">


                <div className="issue-bar">

                    <span>GHIBLI DAYS</span>

                    <span>ISSUE 01</span>

                    <span>SPRING 2004</span>

                </div>



                <div className="spread">



                    <article className="left-page">


                        <p className="section-label">
                            EDITOR'S LETTER
                        </p>


                        <h1>
                            Welcome to
                            <br />
                            Ghibli Days
                        </h1>



                        <div className="editorial">


                            <p>
                                Dear Reader,
                            </p>


                            <p>
                                Every Studio Ghibli film feels less like a movie and more like remembering a dream you forgot you had. From quiet countryside mornings to floating castles and endless skies, each story leaves behind small pieces of wonder.
                            </p>


                            <p>
                                This magazine was created as a collector’s archive inspired by Japanese fan magazines from the early 2000s. Rather than browsing another modern website, imagine turning delicate paper pages filled with handwritten notes, illustrations, film reviews and treasured memories carefully preserved over time.
                            </p>


                            <p>
                                Welcome to Ghibli Days.
                            </p>


                        </div>



                        <p className="signature">
                            — The Editorial Team
                        </p>




                        <div className="postcard">


                            <p className="postcard-title">
                                Collector's Note
                            </p>



                            <p>
                                This issue celebrates Studio Ghibli’s most timeless stories through essays, artwork, production notes and carefully preserved fan memorabilia collected across decades.
                            </p>


                        </div>



                    </article>





                    <article className="right-page">



                        <div className="cover-image">


                            <img
                                src={homeCover}
                                alt="Studio Ghibli"
                            />


                        </div>





                        <div className="headline-block">


                            <p className="section-label">
                                FEATURE STORIES
                            </p>



                            <ul>

                                <li>
                                    Why Ghibli Feels Like Childhood
                                </li>

                                <li>
                                    Forest Spirits & Forgotten Gods
                                </li>

                                <li>
                                    The Art of Quiet Moments
                                </li>

                                <li>
                                    Every Hidden Totoro We Found
                                </li>

                                <li>
                                    Dream Homes Across Every Film
                                </li>

                            </ul>



                        </div>







                        <div className="film-month">


                            <p className="section-label">
                                FILM OF THE MONTH
                            </p>



                            <h2>
                                Spirited Away
                            </h2>



                            <p className="film-quote">
                                “Once you’ve met someone, you never really forget them. Even if you can’t remember their name.”
                            </p>



                            <div className="film-divider">
                                ✦ ✦ ✦
                            </div>



                            <p className="film-note">
                                A magical journey about courage, friendship, and finding yourself in a world filled with wonder.
                            </p>



                        </div>



                    </article>



                </div>



            </section>








            <section className="contents">



                <div className="divider"></div>



                <h2>
                    Contents
                </h2>



                <div className="contents-list">


                    {[
                        [
                            "Editor's Letter",
                            "01",
                            "A welcome message and the story behind Ghibli Days."
                        ],
                        [
                            "Film Archive",
                            "12",
                            "Explore every Studio Ghibli feature film and discover timeless classics."
                        ],
                        [
                            "Studio History",
                            "28",
                            "From 1985 to today, follow the journey of Studio Ghibli."
                        ],
                        [
                            "Themes & Symbolism",
                            "43",
                            "Nature, family, courage and the quiet beauty hidden in every story."
                        ],
                        [
                            "Art Gallery",
                            "61",
                            "Background paintings, sketches, posters and concept illustrations."
                        ],
                        [
                            "Legacy",
                            "82",
                            "How Studio Ghibli inspired generations of artists around the world."
                        ]

                    ].map(([title, page, description]) => (

                        <article
                            className="contents-item"
                            key={title}
                        >

                            <div className="contents-header">


                                <h3>
                                    {title}
                                </h3>


                                <span>
                                    {page}
                                </span>


                            </div>



                            <p>
                                {description}
                            </p>


                        </article>

                    ))}


                </div>


            </section>








            <section className="feature-preview">



                <article>

                    <p className="section-label">
                        FEATURE
                    </p>


                    <h2>
                        The Worlds of Hayao Miyazaki
                    </h2>


                    <p>
                        Explore enchanted forests, hidden valleys, floating kingdoms and quiet seaside towns where every landscape feels painted by hand.
                    </p>


                </article>





                <article>

                    <p className="section-label">
                        ESSAY
                    </p>


                    <h2>
                        Why Ghibli Feels Like Home
                    </h2>


                    <p>
                        An editorial exploring nostalgia, stillness and the comforting emotions hidden inside every frame.
                    </p>


                </article>





                <article>

                    <p className="section-label">
                        ARCHIVE
                    </p>


                    <h2>
                        Museum Through Paper
                    </h2>


                    <p>
                        Rare artwork, production notes and collector memorabilia presented as if preserved inside a vintage exhibition catalogue.
                    </p>


                </article>



            </section>








            <footer className="page-footer">


                <span>
                    GHIBLI DAYS
                </span>


                <span>
                    PAGE 01
                </span>


            </footer>





        </main>

    );

}