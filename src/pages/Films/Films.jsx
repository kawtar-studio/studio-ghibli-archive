import "./Films.css";

const films = [
    {
        title: "Spirited Away",
        year: "2001",
        director: "Hayao Miyazaki",
        description:
            "A young girl enters a mysterious spirit world where she must find courage and discover herself.",
        themes: "Identity, courage, friendship"
    },

    {
        title: "My Neighbor Totoro",
        year: "1988",
        director: "Hayao Miyazaki",
        description:
            "Two sisters discover magical creatures living in the forests surrounding their new home.",
        themes: "Childhood, nature, imagination"
    },

    {
        title: "Howl's Moving Castle",
        year: "2004",
        director: "Hayao Miyazaki",
        description:
            "A young woman enters a world of magic and transformation after meeting a mysterious wizard.",
        themes: "Love, war, transformation"
    },

    {
        title: "Princess Mononoke",
        year: "1997",
        director: "Hayao Miyazaki",
        description:
            "A warrior becomes caught between ancient spirits of the forest and the forces of human civilization.",
        themes: "Nature, conflict, humanity"
    },

    {
        title: "Kiki's Delivery Service",
        year: "1989",
        director: "Hayao Miyazaki",
        description:
            "A young witch leaves home and learns independence while discovering her place in the world.",
        themes: "Growing up, confidence, friendship"
    },

    {
        title: "Ponyo",
        year: "2008",
        director: "Hayao Miyazaki",
        description:
            "A magical friendship between a boy and a sea creature changes two worlds forever.",
        themes: "Childhood, oceans, wonder"
    }
];


export default function Films() {

    return (

        <main className="films-page">

            <header className="films-header">

                <p className="section-label">
                    FILM ARCHIVE
                </p>

                <h1>
                    The Worlds of Studio Ghibli
                </h1>

                <p>
                    A collection of stories, characters and memories preserved through the years.
                </p>

            </header>


            <section className="films-grid">

                {films.map((film, index) => (

                    <article
                        className="film-card"
                        key={film.title}
                    >

                        <p className="film-number">
                            ARCHIVE ENTRY {String(index + 1).padStart(2, "0")}
                        </p>

                        <h2>
                            {film.title}
                        </h2>

                        <span className="film-year">
                            {film.year}
                        </span>

                        <p className="director">
                            Directed by {film.director}
                        </p>

                        <p>
                            {film.description}
                        </p>

                        <div className="film-theme">

                            <strong>
                                Themes
                            </strong>

                            <p>
                                {film.themes}
                            </p>

                        </div>

                    </article>

                ))}

            </section>

        </main>

    );

}