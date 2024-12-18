"use client";

import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";

const MovieContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getMovieData = async () => {
      const res = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=3c7eed5e"
      );
      const data = await res.json();
      setData(data);
    };

    getMovieData();
  }, []);

  console.log(data);

  return (
    <div>
      <MovieCard />
    </div>
  );
};

export default MovieContainer;
