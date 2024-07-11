/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
// import React from 'react'

import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  // console.log("this is movies array", movies)

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };
  const handlePrevious = () => {
    if (pageNo === 1) {
      setPageNo(pageNo);
    } else if (pageNo >= 1) {
      setPageNo(pageNo - 1);
    } else return;
  };

  useEffect(() => {
    console.log("useEffect fetched data");
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=f2e959d230e5a2e46d81ff5679f265be&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageNo]);
  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
      </div>
      <div className="flex justify-evenly flex-wrap gap-8 ">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              name={movieObj.title}
              posterPath={movieObj.poster_path}
              movieObject={movieObj}
            />
          );
        })}
      </div>
      <Pagination
        nextPageFn={handleNext}
        previousPageFn={handlePrevious}
        pageNumber={pageNo}
      />
    </div>
  );
}

export default Movies;
