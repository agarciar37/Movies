import { FunctionalComponent } from "preact";
import { signal } from "@preact/signals";
import MovieCard from "../components/MovieCard.tsx";

type Movie = {
    original_title: string;
    release_date: string;
    backdrop_path: string;
    popularity: number;
};

type Props = {
    movies: Movie[];
};

// Estado global usando signals
const columns = signal(4);

const MoviesContainerInteractive: FunctionalComponent<Props> = ({ movies }) => {
    return (
        <>
            <div class="column-selector">
                <span>Columnas:</span>
                {[1, 2, 3, 4, 5].map((col) => (
                    <button
                        key={col}
                        class={columns.value === col ? "active" : ""}
                        onClick={() => columns.value = col}
                    >
                        {col}
                    </button>
                ))}
            </div>

            <div
                class="movieContainer"
                style={{ gridTemplateColumns: `repeat(${columns.value}, 1fr)` }}
            >
                {movies.map((mv) => (
                    <a href={`${mv.original_title}`}>
                        <MovieCard key={mv.original_title} movie={mv} />
                    </a>
                ))}
            </div>
        </>
    );
};

export default MoviesContainerInteractive;
