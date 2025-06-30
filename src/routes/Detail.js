import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setData(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    }, []);
    
    return(
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <h1> This is the movie Detail</h1>
                    <img src={data.large_cover_image} alt={data.title} />
                    <h2>{data.title}</h2>
                    <p>{data.summary}</p>
                    <ul>
                        {data.genres.map((g) => (
                            <li key={g}>{g}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Detail;