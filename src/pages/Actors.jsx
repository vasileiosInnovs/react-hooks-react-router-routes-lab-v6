import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() => {
        fetch("http://localhost:4000/actors")
        .then(response => response.json())
        .then(data => setActors(data))
        .catch(error => console.error(error))
      }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map(({ name, id, movies }) => (
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

export default Actors;
