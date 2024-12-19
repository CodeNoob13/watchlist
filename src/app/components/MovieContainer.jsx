"use client";

import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import Image from "next/image";
import Button from "./Button";

const MovieContainer = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const getMovieData = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `http://www.omdbapi.com/?s=${value}&apikey=3c7eed5e`
    );
    const data = await res.json();
    setData(data.Search);
  };

  console.log(data);

  return (
    <div className="h-screen p-16">
      <div>
        <form className="relative mb-4" onSubmit={getMovieData}>
          <input
            className="border-[#D9D9D9] border-[1px] border-opacity-30 w-full rounded-md h-12 bg-transparent pl-12 placeholder-[#D9D9D9] placeholder-opacity-30 focus:outline-none"
            type="text"
            placeholder="Search"
            aria-label="Search movie"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Image
            src="/searchIcon.svg"
            height={21}
            width={21}
            alt=""
            className="absolute top-1/2 -translate-y-1/2 left-3"
          />
          <Button classes="absolute right-0 h-12 top-0 w-28">Search</Button>
        </form>

        <div className="grid grid-cols-4 gap-4">
          {data.map((movie, index) => (
            <MovieCard key={index} title={movie.Title} image={movie.Poster} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieContainer;
