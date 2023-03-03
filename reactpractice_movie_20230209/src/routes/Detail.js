import {useParams} from "react-router-dom";
import {useCallback, useEffect} from "react";

function Detail() {
    const { id } = useParams();
    const getMovie = useCallback(async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json);
    }, [id]);
    useEffect (() => {
        void getMovie();
    }, [getMovie]);
    return <h1>Detail</h1>;
}
export default Detail;