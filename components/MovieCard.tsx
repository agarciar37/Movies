import type { FunctionalComponent } from "preact";

type Props = {
    movie: {
        original_title: string;
        release_date: string;
        backdrop_path: string;
        popularity: number;
    }
}

const MovieCard: FunctionalComponent<Props> = (props) => {
    const { original_title, backdrop_path, popularity, release_date } = props.movie;
    const popularityPercentage = Math.min(100, (popularity / 10) * 100); // Máximo 10

    return (
        <div class="movieCard">
            <img src={"https://image.tmdb.org/t/p/original" + backdrop_path} alt={original_title} />
            <div class="title">{original_title}</div>
            <div class="release">Fecha de estreno: {release_date}</div>
            <div class="popularity">
                <span>Popularidad:</span>
                <div class="progress-bar">
                    <div class="progress-fill" style={{ width: `${popularityPercentage}%` }}></div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;
