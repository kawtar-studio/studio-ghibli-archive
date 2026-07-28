import "./MainLayout.css";
import { NavLink, Outlet } from "react-router-dom";

const navigation = [
    { label: "HOME", path: "/" },
    { label: "FILMS", path: "/films" },
    { label: "HISTORY", path: "/history" },
    { label: "THEMES", path: "/themes" },
    { label: "ART GALLERY", path: "/art-style" },
    { label: "LEGACY", path: "/legacy" },
];

export default function MainLayout() {
    return (
        <div className="magazine-shell">

            <div className="paper">

                <header className="masthead">

                    <div className="masthead-top">

                        <div className="issue">

                            <span>ISSUE 01</span>

                            <span>SPRING 2004</span>

                        </div>

                        <div className="archive-stamp">
                            STUDIO GHIBLI ARCHIVE
                        </div>

                    </div>

                    <div className="masthead-center">

                        <h1>
                            GHIBLI DAYS
                        </h1>

                        <p className="subtitle">
                            An illustrated archive dedicated to Studio Ghibli’s films, artwork, stories and the emotions they leave behind.
                        </p>

                    </div>

                </header>

                <nav className="editorial-nav">

                    {navigation.map((item) => (

                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === "/"}
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            {item.label}
                        </NavLink>

                    ))}

                </nav>

                <div className="chapter-frame">

                    <Outlet />

                </div>

                <footer className="magazine-footer">

                    <div className="footer-left">
                        <span>GHIBLI DAYS</span>
                    </div>


                    <div className="footer-center">

                        <span>
                            © 2026 · Crafted with love by Barakat Kawtar
                        </span>

                    </div>


                    <div className="footer-right">

                        <span>
                            COLLECTOR'S EDITION
                        </span>

                        <span>
                            SPRING 2004
                        </span>

                    </div>

                </footer>

            </div>

        </div>
    );
}