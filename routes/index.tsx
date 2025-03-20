import type { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import MoviesContainer from "../components/MoviesContainer.tsx";

type Movie = {
    original_title: string;
    release_date: string;
    backdrop_path: string;
    popularity: number;
};

type Data = {
    movies: Movie[];
};

type MovieAPI = {
    results: Array<{
        original_title: string;
        release_date: string;
        backdrop_path: string;
        popularity: number;
    }>;
};

export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
        const webURL = new URL(req.url);
        const title = webURL.searchParams.get("original_title") ;
        let url = "https://api.themoviedb.org/3/search/movie"
        
        if (title) {
            url += `?query=` + title;
        }
        try {
            const response = await Axios.get<MovieAPI>(url,  {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmZmYTcxYmU1ZGFhMDBlMTJjMWJjMTMxMjBlM2Q3NSIsIm5iZiI6MTY4NTM4MTkzNS4wMTYsInN1YiI6IjY0NzRlMzJmY2MyNzdjMDBhNzQ2MTYzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.raEEljpmsGfGMENtPmE-LFWcBEiDUcFKG5B-8_WQABQ",
                    "accept": "application/json"
                }
            });
            return ctx.render({movies: response.data.results});
        }catch (e) {
            return new Response("Error de API");
        }
    },
};

export default (props: PageProps<Data>) => {
    const movies = props.data.movies;
    return (<MoviesContainer movies={movies}/>)
}
