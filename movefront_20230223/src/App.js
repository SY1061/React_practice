import {Fragment, useCallback, useEffect, useState} from "react";
import MoviesList from "./components/MoviesList";
import './App.css';

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMoviesHandler = useCallback( async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('https://swapi.dev/api/films/');
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const data = await response.json();

            /*
            POST 신호를 통해 데이터 베이스로 들어간 데이터를 다시 GET 신호로 받을 땐 대부분 객체의 형태로 반환.
            따라서 배열 형태로 반환 후 나타내는 작업 필요.

            const loadedMovies = [];

            for (const key in data) {
                loadedMovies.push({
                    id: key,
                    title: data[key].title,
                    openingText: data[key].openingText,
                    releaseDate: data[key].releaseDate
                });
            }

             */

            const transformedMovies = data.results.map(movieData => {
                return {
                    id: movieData.episode_id,
                    title: movieData.title,
                    openingText: movieData.opening_crawl,
                    releaseDate: movieData.releate_date
                };
            });
            setMovies(transformedMovies);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchMoviesHandler().then(null);
    }, [fetchMoviesHandler]);

    /*
        POST 보낼 때 필요.

    async function addMovieHandler(movie) {
        const response = await fetch('', {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                'Context-Type': 'application/json'
            }
        });
        const data = await response.json();
    }

     */


    // console.log(isLoading);
    // console.log(movies);
    let content = <p>Found no movies.</p>;

    if (movies.length > 0 ) {
        content = <MoviesList movies={movies} />;
    }

    if (error) {
        content = <p>{error}</p>;
    }

    if (isLoading) {
        content = <p>Loading...</p>;
    }

    return (
        <Fragment>
            {/*<section>*/}
            {/*    <AddMovie onAddMovie={addMovieHandler} />*/}
            {/*</section>*/}
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                {content}
            </section>
        </Fragment>
    );
}

export default App;
