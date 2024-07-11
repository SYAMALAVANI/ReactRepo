/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// import React from 'react'

import {useContext, useEffect, useState } from "react";
import genreids from "../utility/genre";
import { MovieContext } from "./MovieContext";

function WatchList() {
  const {watchList , setWatchList, DeleteFromWatchList} = useContext(MovieContext)

  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState([]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    //  console.log(e.target)
  };

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  useEffect(() => {
    let temp = watchList.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    console.log(temp);
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
    console.log(watchList)
  }, [watchList]);

  const handleAscnedingRatings = () =>{
    let sortedAscending = watchList.sort((movieObjA, movieObjB) => {
      return movieObjA.vote_average - movieObjB.vote_average
    });
    setWatchList([...sortedAscending]);
  }
  const handleDescendingRatings = () =>{
    let sortedDescending = watchList.sort((movieObjA, movieObjB) => {
      return movieObjB.vote_average - movieObjA.vote_average;
    });
    setWatchList([...sortedDescending])
  }

  // const handleDeletefromWatchList = (movieObj) => {
  //   const updatedMovieList = removeObjectFromArray(watchList, movieObj.id);
  //   setWatchList([...updatedMovieList]);
  //   localStorage.setItem('movies', JSON.stringify(updatedMovieList))
  // }

  // const removeObjectFromArray = (array, idToRemove) => {
  //   // Find the index of the object with the specified id
  //   const indexToRemove = array.findIndex(obj => obj.id === idToRemove);

  //   // If the index is found (not -1), remove the object from the array
  //   if (indexToRemove !== -1) {
  //       array.splice(indexToRemove, 1);
  //   }
  //   // Return the modified array
  //   return array;
// }

  const renderMovies = (movieObj) => {
    return (
      <tr className="border-b-2">
                  <td className="flex items-center px-6 py-4">
                    <img
                      className="h-[6rem] w-[10rem]"
                      src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                    />
                    <div className="mx-10">{movieObj.title}</div>
                  </td>

                  <td>{movieObj.vote_average}</td>
                  <td>{movieObj.popularity}</td>
                  <td>{genreids[movieObj.genre_ids[0]]}</td>

                  <td 
                    onClick={() => DeleteFromWatchList(movieObj)} className="text-red-500 cursor-pointer">Delete</td>
                </tr>
    )
  }

  return (
    <>
      {/* Genre Based Filtering */}
      <div className="flex justify-center m-4">
        {genreList.map((genre) => {
          return (
            <div
            onClick={() => handleFilter(genre)}
            className={
              currGenre == genre
                ? "mx-4 flex justify-center items-center bg-blue-400 h-[3rem] w-[9rem] text-white font-bold border rounded-xl"
                : "flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold mx-4"
            }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-10 ">
        <input
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] bg-gray-200 px-4 outline-none border border-slate-600"
          type="text"
          onChange={handleSearch}
          value={search}
        />
      </div>
      <div className="m-8">
        <table className="w-full text-center">
          <thead className="border border-gray-200 rounded-lg bg-gray-200">
            <tr>
              <th>Name</th>
              <th>
                <i
                  onClick={handleAscnedingRatings}
                  class="fa-solid fa-arrow-up"
                ></i>{" "}
                Ratings{" "}
                <i
                  onClick={handleDescendingRatings}
                  class="fa-solid fa-arrow-down"
                ></i>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Delete Movies</th>
            </tr>
          </thead>
          <tbody>
            {watchList.filter((movieObj)=>{
                if (currGenre == 'All Genres'){
                  return true;
                }else{
                  return genreids[movieObj.genre_ids[0]] == currGenre;
                }
            })
              .filter((movieObj) =>
                movieObj.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((movieObj) => (
                renderMovies(movieObj)
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
