import "./History.css";


const founders = [
    {
        name: "Hayao Miyazaki",
        role: "Director & Storyteller",
        text: "Known for his imaginative worlds, unforgettable characters and stories that explore nature, childhood, flight and humanity."
    },

    {
        name: "Isao Takahata",
        role: "Director & Creative Visionary",
        text: "A filmmaker celebrated for emotional storytelling and his ability to find beauty in ordinary human experiences."
    },

    {
        name: "Toshio Suzuki",
        role: "Producer & Studio Partner",
        text: "A key figure who helped guide Studio Ghibli from a small animation studio into a worldwide cultural phenomenon."
    }
];


const timeline = [

    {
        year: "BEFORE 1985",
        title: "THE DREAM BEFORE THE STUDIO",
        text: "Before Studio Ghibli existed, Hayao Miyazaki and Isao Takahata were already developing their unique approach to animation. Their shared belief was that animated films could explore deep emotions, humanity and the beauty of everyday life.",
        note: "The story of Ghibli began long before the name existed."
    },


    {
        year: "1985",
        title: "THE FIRST PAGE",
        text: "Studio Ghibli is founded by Hayao Miyazaki, Isao Takahata and Toshio Suzuki. The studio begins with a simple dream: creating animation filled with imagination, emotion and stories that respect audiences of all ages.",
        note: "Every great story begins with a small idea."
    },


    {
        year: "1986",
        title: "A CASTLE IN THE SKY",
        text: "Castle in the Sky becomes Studio Ghibli's first official feature film. With floating islands, ancient technology and unforgettable adventures, it establishes the studio's love for wonder and exploration.",
        note: "The first journey into a world created entirely by Ghibli."
    },


    {
        year: "1988",
        title: "A WORLD OF CHILDHOOD",
        text: "My Neighbor Totoro introduces a gentle world of forests, friendship and childhood wonder, while Grave of the Fireflies demonstrates the emotional power and seriousness animation can achieve.",
        note: "Two stories. Two emotions. One unforgettable year."
    },


    {
        year: "1997",
        title: "THE FOREST AWAKENS",
        text: "Princess Mononoke explores the fragile relationship between nature and humanity. The film becomes one of Studio Ghibli's most ambitious works, combining mythology, conflict and environmental themes.",
        note: "A story where humans, spirits and nature collide."
    },


    {
        year: "2001",
        title: "ENTERING THE SPIRIT WORLD",
        text: "Spirited Away opens a magical doorway into a mysterious world filled with spirits, forgotten names and personal transformation. The film introduces Studio Ghibli to millions of viewers around the world.",
        note: "A journey about courage, identity and remembering who you are."
    },


    {
        year: "2005",
        title: "A HOME FOR STORIES",
        text: "The Studio Ghibli Museum becomes a place where visitors can experience the creativity, imagination and handmade spirit behind the studio's films.",
        note: "A museum created not just to display animation, but to celebrate imagination."
    },


    {
        year: "2010s",
        title: "NEW GENERATIONS",
        text: "Studio Ghibli continues exploring different styles and stories through films such as Arrietty, The Wind Rises, The Tale of the Princess Kaguya and When Marnie Was There.",
        note: "A new era while preserving the heart of Ghibli."
    },


    {
        year: "2023",
        title: "THE BOY AND THE HERON",
        text: "Hayao Miyazaki returns with The Boy and the Heron, a deeply personal film exploring grief, imagination and the meaning of life.",
        note: "A reflection on memories, dreams and moving forward."
    },


    {
        year: "TODAY",
        title: "A LASTING LEGACY",
        text: "Studio Ghibli remains one of the most respected animation studios in the world, continuing to inspire generations through its stories, artwork and unforgettable characters.",
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



            <section className="founders-section">


                <p className="section-label">
                    THE DREAMERS
                </p>


                <h2>
                    The People Behind The Studio
                </h2>



                <div className="founders-grid">


                    {founders.map((founder, index) => (


                        <article
                            key={index}
                            className="founder-card"
                        >

                            <h3>
                                {founder.name}
                            </h3>


                            <span>
                                {founder.role}
                            </span>


                            <p>
                                {founder.text}
                            </p>


                        </article>


                    ))}


                </div>


            </section>
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