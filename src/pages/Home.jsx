import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </main>
    </>
  );
};

export default Home;
