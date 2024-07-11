/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieContext } from "./components/MovieContext";


function App() {
  const [watchList, setWatchList] = useState([]);
  
  const handleAddtoWatchList = (movieObj) => {
    let newWatchList = [...watchList, movieObj];
    setWatchList(newWatchList);
    localStorage.setItem('movies', JSON.stringify(newWatchList))
  };

  const DeleteFromWatchList = (movieObj) => {
    let filteredMovies = watchList.filter((movie) =>{
      return movie.id != movieObj.id
    })
    setWatchList(filteredMovies);
    localStorage.setItem('movies', JSON.stringify(filteredMovies))
  };
  

  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('movies')
    if(!moviesFromLocalStorage){
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
  },[])

  return (
    <>
      <BrowserRouter>
      <MovieContext.Provider value={{handleAddtoWatchList , DeleteFromWatchList, watchList , setWatchList}}>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner/>
                <Movies/>
              </>
            }
          />
          <Route
            path="/watchlist"
            element={<WatchList/>}
          />
        </Routes>
        </MovieContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
