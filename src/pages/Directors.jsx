import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([])
  
    useEffect(() => {
      fetch("http://localhost:4000/directors")
      .then(response => response.json())
      .then(data => setDirectors(data))
      .catch(error => console.error(error))
    }, []);
  

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map(({ id, name, movies }) => (
          <article key={id}>
            <h2>{name}</h2>
            <ul>
              {movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Directors;