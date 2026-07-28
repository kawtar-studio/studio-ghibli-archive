import "./ArtGallery.css";


const backgrounds = Object.values(
    import.meta.glob(
        "../../assets/backgrounds/*",
        {
            eager: true,
            query: "?url",
            import: "default"
        }
    )
);


const characters = Object.values(
    import.meta.glob(
        "../../assets/character-designs/*",
        {
            eager: true,
            query: "?url",
            import: "default"
        }
    )
);


const conceptArt = Object.values(
    import.meta.glob(
        "../../assets/concept-art/*",
        {
            eager: true,
            query: "?url",
            import: "default"
        }
    )
);



const galleries = [

    {
        id: "backgrounds",

        number: "01",

        title: "Background Paintings",

        subtitle: "The worlds before the stories begin",

        description: `
Studio Ghibli backgrounds are more than simple scenery.
They create emotional landscapes filled with memories, atmosphere,
and quiet moments. Forests, villages, oceans, and rooms become
living parts of every story.

Every painted world carries its own feeling,
inviting viewers to slow down and discover the beauty hidden
inside ordinary places.
`,

        category: "Background Archive",

        images: backgrounds

    },


    {
        id: "characters",

        number: "02",

        title: "Character Designs",

        subtitle: "Creating souls through lines",

        description: `
Before characters move across the screen, they begin as sketches.

Expressions, clothing, gestures, and small details slowly transform
simple drawings into unforgettable personalities.

These designs reveal the artistic process behind the characters
we grow attached to.
`,

        category: "Character Study",

        images: characters

    },


    {
        id: "concept-art",

        number: "03",

        title: "Concept Art",

        subtitle: "The first dreams of imaginary worlds",

        description: `
Concept art captures the earliest visions behind Studio Ghibli films.

Before complete worlds exist, there are ideas:
unfinished sketches, colour experiments, and creative discoveries
that slowly become the stories we know.
`,

        category: "Concept Archive",

        images: conceptArt

    }

];



export default function ArtGallery() {


    return (

        <main className="art-gallery-page">



            <header className="gallery-header">


                <p className="section-label">
                    VISUAL ARCHIVE
                </p>


                <h1>
                    Studio Ghibli Art Gallery
                </h1>


                <p>
                    Exploring the artistic foundations behind
                    Studio Ghibli's worlds, characters, and imagination.
                </p>


                <div className="gallery-divider">
                    ✦ ✦ ✦
                </div>


            </header>





            <section className="gallery-introduction">


                <h2>
                    The Art Behind The Magic
                </h2>


                <p>
                    Every Ghibli film begins with a single idea:
                    a drawing, a colour, a landscape, or a character.
                    This collection explores the artwork that brings
                    these unforgettable worlds to life.
                </p>


            </section>






            <section className="gallery-sections">


                {galleries.map((gallery) => (


                    <article
                        className="gallery-section"
                        key={gallery.id}
                    >



                        <div className="gallery-layout">



                            <img
                                className="side-image left"
                                src={gallery.images[0]}
                                alt=""
                            />



                            <div className="gallery-text">


                                <span>
                                    COLLECTION {gallery.number}
                                </span>


                                <h2>
                                    {gallery.title}
                                </h2>


                                <h3>
                                    {gallery.subtitle}
                                </h3>


                                <p>
                                    {gallery.description}
                                </p>


                            </div>





                            <img
                                className="side-image right"
                                src={gallery.images[1]}
                                alt=""
                            />



                            <div className="small-gallery">


                                {gallery.images
                                    .slice(2)
                                    .map((image, index) => (


                                        <figure
                                            key={index}
                                        >

                                            <img
                                                src={image}
                                                alt={`${gallery.title} ${index + 3}`}
                                            />


                                            <figcaption>
                                                {gallery.category}
                                                <br />
                                                No. {String(index + 3).padStart(2, "0")}
                                            </figcaption>


                                        </figure>


                                    ))}


                            </div>



                        </div>



                    </article>


                ))}


            </section>



        </main>

    );

}