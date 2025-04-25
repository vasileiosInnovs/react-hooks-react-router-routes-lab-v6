import {Link} from 'react-router-dom';

function MovieCard({ movies }) {
  
  return (
    <article>
        <h2>{movies.title}</h2>
        <Link to={`/movie/${movies.id}`}>View Details</Link>
    </article>
  );
};

export default MovieCard;