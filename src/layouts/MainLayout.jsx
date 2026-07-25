import "./MainLayout.css";
import ArchiveSidebar from "../components/ArchiveSidebar";
import { Link, Outlet } from "react-router-dom";


export default function MainLayout() {

    return (

        <div className="app-window">


            <header className="window-titlebar">


                <div className="title-left">

                    <span className="window-dot"></span>

                    <h1>
                        Studio Ghibli Encyclopedia CD-ROM
                    </h1>

                </div>


                <div className="title-right">

                    Version 1.0 • Japan • 2004

                </div>


            </header>





            <nav className="window-nav">


                <Link to="/">
                    Home
                </Link>


                <Link to="/films">
                    Films
                </Link>


                <Link to="/history">
                    History
                </Link>


                <Link to="/themes">
                    Themes
                </Link>


                <Link to="/art-style">
                    Art Style
                </Link>


                <Link to="/legacy">
                    Legacy
                </Link>


                <Link to="/references">
                    Archive
                </Link>


            </nav>





            <main className="window-content">


                <ArchiveSidebar />


                <section className="archive-main">

                    <Outlet />

                </section>


            </main>





            <footer className="window-statusbar">


                <span>
                    Archive Loaded
                </span>


                <span>
                    Version 1.0 • Japan • 2004
                </span>


            </footer>


        </div>

    );

}