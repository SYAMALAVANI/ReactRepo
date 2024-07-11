/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react'
import { MovieContext } from "./MovieContext";
import { useContext } from "react";


function MovieCard({ movieObject}) {
  let {watchList , handleAddtoWatchList, DeleteFromWatchList} = useContext(MovieContext)

  function doesContain() {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id === movieObject.id) {
        return true; // change button to cross
      }
    }
    return false;
  }
  return (
    <div
    className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObject.poster_path})`,
      }}
    >
      {doesContain(movieObject) ? (
        <div onClick={()=>DeleteFromWatchList(movieObject)}
          className="flex justify-center items-center"
        >
          &#10060; {/* code for cross */}         
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchList(movieObject)}
          className="flex justify-center items-center"
        >
          &#128525;
        </div>
      )}

      <div className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-lg">
        {movieObject.title}
      </div>
    </div>
  );
}

export default MovieCard;
