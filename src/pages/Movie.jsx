import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error(error));
  }, [id]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movies.title}</h1>
        <p>{movies.time} minutes</p>
        {movies.genres?.map((genre) => (
          <span key={genre}>{genre}</span>
        ))}
      </main>
    </>
  );
}

export default Movie;
