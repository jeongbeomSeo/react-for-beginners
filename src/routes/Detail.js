import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  return (
    <div>
      {loading ? (
        <h1>Loding...</h1>
      ) : (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          coverImg={movie.background_image}
          summary={movie.description_full}
          genres={movie.genres}
        />
      )}
    </div>
  );
}

export default Detail;
