import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="header__inner">
                <p className="header__eyebrow">
                    Studio Ghibli Archive
                </p>

                <h1 className="header__title">
                    Studio Ghibli
                </h1>

                <p className="header__subtitle">
                    A digital archive celebrating the worlds, stories, and artistry of Studio Ghibli.
                </p>
            </div>
        </header>
    );
}

export default Header;