import "./Themes.css";


const themes = [

    {
        title: "Nature & Humanity",

        description: `
Studio Ghibli often presents nature as something alive, powerful, and deeply
connected to human existence. Forests, oceans, spirits, and landscapes are not
simply backgrounds, but important parts of the story with their own voices,
histories, and emotions.
`,

        films: [
            "Princess Mononoke",
            "My Neighbor Totoro",
            "Nausicaä of the Valley of the Wind",
            "Ponyo"
        ],

        symbolism: [
            "Forests represent balance, mystery, and ancient wisdom.",
            "Natural spirits represent the connection between humans and the world around them.",
            "Environmental destruction reflects the consequences of losing harmony with nature."
        ],

        note: `
Ghibli rarely portrays nature as something humans must control. Instead, its
stories remind us that humanity must learn how to coexist with the natural
world.
`
    },


    {
        title: "Childhood & Growing Up",

        description: `
Many Studio Ghibli stories explore childhood as a time of curiosity,
imagination, and discovery. Young characters often experience magical journeys
that help them understand themselves and the world around them.
`,

        films: [
            "My Neighbor Totoro",
            "Spirited Away",
            "Arrietty",
            "Ponyo"
        ],

        symbolism: [
            "Childhood represents innocence and the ability to see wonder in ordinary things.",
            "Journeys symbolize personal growth and emotional maturity.",
            "Small moments often become the most meaningful memories."
        ],

        note: `
Ghibli understands childhood not as something simple, but as a powerful stage
of life filled with emotions, questions, and unforgettable discoveries.
`
    },


    {
        title: "Flight & Freedom",

        description: `
Flight appears throughout Studio Ghibli as a symbol of dreams, independence,
and the desire to explore beyond limitations. From magical creatures to
beautiful aircraft, the sky represents endless possibilities.
`,

        films: [
            "Castle in the Sky",
            "Kiki's Delivery Service",
            "Porco Rosso",
            "The Wind Rises"
        ],

        symbolism: [
            "Flying represents freedom and the pursuit of dreams.",
            "Aircraft represent both human creativity and responsibility.",
            "The sky represents imagination and endless exploration."
        ],

        note: `
For Miyazaki, flight is more than movement through the sky. It represents the
human desire to create, discover, and become free.
`
    },


    {
        title: "War & Peace",

        description: `
Studio Ghibli often explores the emotional consequences of conflict. Rather
than glorifying war, these films focus on the lives affected by violence and
the importance of compassion.
`,

        films: [
            "Grave of the Fireflies",
            "Howl's Moving Castle",
            "The Wind Rises",
            "Castle in the Sky"
        ],

        symbolism: [
            "Machines of war represent the dangers of uncontrolled ambition.",
            "Peace represents understanding and empathy between different worlds.",
            "Ordinary people reveal the true cost of conflict."
        ],

        note: `
Ghibli's stories show that behind every historical event are individual lives,
dreams, and emotions.
`
    },


    {
        title: "Home & Belonging",

        description: `
A recurring idea in Studio Ghibli is the search for a place where characters
feel accepted and understood. Homes are not only physical locations, but spaces
where people discover identity and connection.
`,

        films: [
            "Kiki's Delivery Service",
            "Whisper of the Heart",
            "From Up on Poppy Hill",
            "Arrietty"
        ],

        symbolism: [
            "Homes represent safety, memories, and personal identity.",
            "New environments represent growth and transformation.",
            "Belonging comes from relationships rather than places alone."
        ],

        note: `
Many Ghibli stories are ultimately about finding where you belong and the
people who make that place feel like home.
`
    },


    {
        title: "Memory, Time & Loss",

        description: `
Studio Ghibli frequently explores the passing of time and the memories that
shape who we become. Its stories often capture moments that cannot be returned
to, but can always remain meaningful.
`,

        films: [
            "Only Yesterday",
            "When Marnie Was There",
            "The Tale of the Princess Kaguya",
            "The Boy and the Heron"
        ],

        symbolism: [
            "Memories connect the past with the present.",
            "Time represents both beauty and inevitable change.",
            "Loss teaches characters acceptance and emotional growth."
        ],

        note: `
Ghibli reminds viewers that even temporary moments can leave permanent marks
on our hearts.
`
    }

];


export default function Themes() {


    return (

        <main className="themes-page">


            <header className="themes-header">


                <p className="section-label">
                    ARCHIVE STUDY
                </p>


                <h1>
                    Themes & Symbolism
                </h1>


                <p>
                    The invisible threads connecting every Studio Ghibli story,
                    exploring nature, humanity, dreams, memories, and what it
                    means to be alive.
                </p>


                <div className="themes-divider">
                    ✦ ✦ ✦
                </div>


            </header>



            <section className="themes-introduction">


                <h2>
                    The Heart Behind The Stories
                </h2>


                <p>
                    Behind every magical world, unforgettable character, and
                    emotional journey are deeper ideas about life, identity,
                    connection, and the relationship between humans and the
                    world around them.
                </p>


            </section>




            <section className="themes-grid">


                {themes.map((theme, index) => (


                    <article
                        className="theme-card"
                        key={index}
                    >


                        <h2>
                            {theme.title}
                        </h2>


                        <p className="theme-description">
                            {theme.description}
                        </p>



                        <h3 className="theme-section-title">
                            Featured Films
                        </h3>


                        <div className="film-tags">


                            {theme.films.map((film, filmIndex) => (

                                <span
                                    key={filmIndex}
                                    className="film-tag"
                                >
                                    {film}
                                </span>

                            ))}


                        </div>




                        <h3 className="theme-section-title">
                            Symbolism
                        </h3>



                        <div className="symbolism-list">


                            {theme.symbolism.map((item, itemIndex) => (

                                <div
                                    key={itemIndex}
                                    className="symbolism-item"
                                >

                                    {item}

                                </div>

                            ))}


                        </div>




                        <div className="theme-note">


                            <strong>
                                ✿ Archive Note
                            </strong>


                            <p>
                                {theme.note}
                            </p>


                        </div>



                    </article>


                ))}


            </section>


        </main>

    );

}