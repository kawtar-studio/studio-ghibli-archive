import "./Legacy.css";


const legacySections = [

    {
        title: "The Birth of a Dream",

        text: `
Studio Ghibli was created in 1985 with a simple but ambitious belief:
animation could be more than entertainment.

It could become a form of storytelling capable of expressing
human emotions, exploring complex ideas, and capturing the beauty
hidden inside everyday life.

Founded by Hayao Miyazaki, Isao Takahata, and producer Toshio Suzuki,
the studio began creating films that valued imagination, craftsmanship,
and emotional honesty.

Instead of following traditional formulas, Ghibli created worlds where
quiet moments mattered just as much as grand adventures.
`
    },


    {
        title: "A Different Philosophy of Animation",

        text: `
What makes Studio Ghibli unique is not only its visual beauty,
but the way it understands people.

Its characters are rarely perfect heroes or simple villains.
They are complicated, emotional, and constantly changing.

Ghibli stories allow characters to be afraid, uncertain, curious,
and vulnerable. Growing up is not shown as losing innocence,
but as learning how to see the world with deeper understanding.

The studio's films remind audiences that small moments can carry
as much meaning as the biggest adventures.
`
    },


    {
        title: "The Power of Handcrafted Worlds",

        text: `
In an industry increasingly shaped by technology, Studio Ghibli
represents the beauty of human touch.

Every background, movement, and expression begins with artists
who carefully create each detail by hand.

The result is a feeling that digital perfection cannot always replace:
warmth.

A simple room, a quiet street, or a passing cloud can feel alive
because every frame carries intention and emotion.
`
    },


    {
        title: "A Legacy Beyond Japan",

        text: `
Although Studio Ghibli began as a Japanese animation studio,
its stories reached audiences across the entire world.

People from different cultures found themselves connected to the
same emotions: the fear of growing up, the search for belonging,
the importance of friendship, and the relationship between humanity
and nature.

Ghibli became more than a studio.
It became a shared language of imagination.
`
    },


    {
        title: "Why Ghibli Still Matters",

        text: `
Decades after its first films, Studio Ghibli continues to inspire
new generations.

Its stories remain timeless because they do not depend on trends.
They focus on emotions that never disappear:
love, curiosity, memory, loss, hope, and the desire to understand
the world around us.

Perhaps the greatest achievement of Studio Ghibli is not creating
fantasy worlds.

It is showing audiences the magic that already exists in our own.
`
    }

];



export default function Legacy() {


    return (

        <main className="legacy-page">


            <header className="legacy-header">


                <p className="section-label">
                    ARCHIVE ESSAY
                </p>


                <h1>
                    Studio Ghibli Legacy
                </h1>


                <p>
                    Beyond animation, Studio Ghibli became a symbol
                    of imagination, humanity, and timeless storytelling.
                </p>


                <div className="legacy-divider">
                    ✦ ✦ ✦
                </div>


            </header>





            <section className="legacy-introduction">


                <h2>
                    A Studio That Became A Memory
                </h2>


                <p>
                    Studio Ghibli's legacy is not only measured through
                    awards, popularity, or influence. It exists in the
                    emotions its stories leave behind and the generations
                    that continue to discover them.
                </p>


            </section>






            <section className="legacy-content">


                {legacySections.map((section, index) => (


                    <article
                        className="legacy-section"
                        key={index}
                    >


                        <span>
                            CHAPTER {String(index + 1).padStart(2, "0")}
                        </span>


                        <h2>
                            {section.title}
                        </h2>


                        <p>
                            {section.text}
                        </p>


                    </article>


                ))}


            </section>





            <footer className="legacy-ending">


                <p>
                    "Some stories end when the screen fades.
                    Others continue living inside us."
                </p>


            </footer>



        </main>

    );

}