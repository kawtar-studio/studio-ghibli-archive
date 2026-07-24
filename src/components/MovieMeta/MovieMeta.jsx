import "./MovieMeta.css";

export default function MovieMeta() {
    return (
        <div className="movie-meta-grid">

            <div>
                <span>Director</span>
                <strong>Hayao Miyazaki</strong>
            </div>

            <div>
                <span>Released</span>
                <strong>2001</strong>
            </div>

            <div>
                <span>Runtime</span>
                <strong>125 min</strong>
            </div>

            <div>
                <span>Studio</span>
                <strong>Studio Ghibli</strong>
            </div>

            <div>
                <span>Award</span>
                <strong>Academy Award</strong>
            </div>

        </div>
    );
}