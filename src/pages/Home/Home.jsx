import "./Home.css";

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

                        <p className="editorial">
                            Dear Reader,

                            Every Studio Ghibli film feels like discovering a
                            forgotten memory hidden inside an old sketchbook.
                            This magazine was lovingly created as a collector's
                            archive celebrating the worlds, stories and quiet
                            magic imagined by Hayao Miyazaki, Isao Takahata and
                            the artists of Studio Ghibli.

                            Rather than browsing a website, imagine turning the
                            pages of a handmade magazine assembled in 2004 by a
                            passionate fan who carefully preserved every note,
                            illustration and memory.
                        </p>

                        <p className="signature">
                            — The Editorial Team
                        </p>

                        <div className="postcard">

                            <p className="postcard-title">
                                Collector's Note
                            </p>

                            <p>
                                This issue explores the beauty of memory,
                                childhood, flight and wonder through Studio
                                Ghibli's timeless films.
                            </p>

                        </div>

                    </article>

                    <article className="right-page">

                        <div className="cover-image">

                            <img
                                src="/images/home-cover.jpg"
                                alt="Studio Ghibli"
                            />

                        </div>

                        <div className="headline-block">

                            <p className="section-label">
                                FEATURE STORIES
                            </p>

                            <ul>

                                <li>Spirited Away — A World Beyond Memory</li>

                                <li>The Food That Made Us Hungry</li>

                                <li>Inside Miyazaki's Sketchbooks</li>

                                <li>The Poetry of Flight</li>

                                <li>The Forests of Princess Mononoke</li>

                            </ul>

                        </div>

                        <div className="film-month">

                            <p className="section-label">
                                FILM OF THE MONTH
                            </p>

                            <h3>Spirited Away</h3>

                            <p>

                                "Once you've met someone, you never really
                                forget them."

                            </p>

                        </div>

                    </article>

                </div>

            </section>

            <section className="contents">

                <div className="divider"></div>

                <h2>Table of Contents</h2>

                <div className="contents-grid">

                    <div>HOME <span>01</span></div>

                    <div>FILMS <span>12</span></div>

                    <div>HISTORY <span>28</span></div>

                    <div>THEMES <span>43</span></div>

                    <div>ART GALLERY <span>61</span></div>

                    <div>LEGACY <span>82</span></div>

                </div>

            </section>

            <section className="feature-preview">

                <article>

                    <p className="section-label">
                        FEATURE
                    </p>

                    <h2>The Worlds of Hayao Miyazaki</h2>

                    <p>
                        Wander through enchanted forests, floating castles,
                        hidden bathhouses and timeless landscapes where every
                        frame feels painted by hand.
                    </p>

                </article>

                <article>

                    <p className="section-label">
                        ESSAY
                    </p>

                    <h2>Why Ghibli Feels Like Childhood</h2>

                    <p>
                        An editorial reflection exploring nostalgia, memory and
                        the quiet emotions that define Studio Ghibli's films.
                    </p>

                </article>

                <article>

                    <p className="section-label">
                        ARCHIVE
                    </p>

                    <h2>The Museum Through Paper</h2>

                    <p>
                        Rare artwork, production notes and collector's memories
                        presented as if preserved inside a vintage exhibition
                        catalogue.
                    </p>

                </article>

            </section>

            <footer className="page-footer">

                <span>GHIBLI DAYS</span>

                <span>PAGE 01</span>

            </footer>

        </main>
    );
}