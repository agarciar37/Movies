import MoviesContainerInteractive from "../islands/MoviesContainerInteractive.tsx";

type Movie = {
    original_title: string;
    release_date: string;
    backdrop_path: string;
    popularity: number;
};

type Props = {
    movies: Movie[];
};

const MoviesContainer = ({ movies }: Props) => {
    return (
        <>
            <form method="get" style={{ display: "flex", justifyContent: "center" }}>
                <input type="text" name="original_title" placeholder="Buscar película" />
                <button type="submit">Submit</button>
            </form>

            <MoviesContainerInteractive movies={movies} />
        </>
    );
};

export default MoviesContainer;
