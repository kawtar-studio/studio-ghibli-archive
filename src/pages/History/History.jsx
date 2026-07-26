import "./History.css";

const timeline = [
    {
        year: "1985",
        title: "THE FIRST PAGE",
        text: "Studio Ghibli is founded by Hayao Miyazaki, Isao Takahata and Toshio Suzuki. A small studio begins with a simple dream: creating animation filled with humanity and imagination.",
        note: "Every great story begins with a small idea."
    },

    {
        year: "1988",
        title: "A WORLD OF CHILDHOOD",
        text: "My Neighbor Totoro introduces a gentle world of forests, friendship and childhood wonder, while Grave of the Fireflies shows the emotional power of animation.",
        note: "Two stories. Two emotions. One unforgettable year."
    },

    {
        year: "1997",
        title: "THE FOREST AWAKENS",
        text: "Princess Mononoke explores the fragile relationship between nature and humanity, becoming one of Studio Ghibli's most ambitious films.",
        note: "A story where humans, spirits and nature collide."
    },

    {
        year: "2001",
        title: "ENTERING THE SPIRIT WORLD",
        text: "Spirited Away opens a magical doorway into a mysterious world and becomes one of the most celebrated animated films of all time.",
        note: "A journey about courage, identity and remembering who you are."
    },

    {
        year: "2004",
        title: "CASTLES IN THE SKY",
        text: "Howl's Moving Castle brings together magic, war, love and transformation through another unforgettable world.",
        note: "A moving castle, a mysterious wizard, and a story about change."
    },

    {
        year: "TODAY",
        title: "A LASTING LEGACY",
        text: "Studio Ghibli continues inspiring generations through its unique storytelling, breathtaking artwork and unforgettable characters.",
        note: "More than animation. A collection of memories."
    }
];


export default function History() {

    return (

        <main className="history-page">

            <header className="history-header">

                <p className="section-label">
                    SPECIAL FEATURE
                </p>

                <h1>
                    Ghibli Chronicles
                </h1>

                <p>
                    A journey through the studio, the artists and the worlds they created.
                </p>

                <div className="history-divider">
                    ✦ ✦ ✦
                </div>

            </header>


            <section className="timeline">

                {timeline.map((item, index) => (

                    <article
                        className="timeline-entry"
                        key={index}
                    >

                        <div className="timeline-year">
                            {item.year}
                        </div>


                        <div className="timeline-content">

                            <p className="archive-label">
                                ARCHIVE ENTRY {String(index + 1).padStart(2, "0")}
                            </p>

                            <h2>
                                {item.title}
                            </h2>

                            <p>
                                {item.text}
                            </p>


                            <div className="archive-note">

                                <strong>
                                    ✿ Archive Note
                                </strong>

                                <p>
                                    {item.note}
                                </p>

                            </div>

                        </div>

                    </article>

                ))}

            </section>

        </main>

    );

}