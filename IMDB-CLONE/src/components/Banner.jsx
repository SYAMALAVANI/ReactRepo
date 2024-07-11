import { useState, useEffect } from "react";

// import React from 'react'
const bannerUrls = [
  {
    backdrop_path: "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
    "title": "Napoleon",
  },
  {
    backdrop_path: "/rVJfabCz1ViynQCEz54MRqdZig1.jpg",
    "title": "Justice League: Crisis on Infinite Earths Part One",
  },
  {
    backdrop_path: "/vdpE5pjJVql5aD6pnzRqlFmgxXf.jpg",
    "title": "Society of the Snow",
  },
  {
    backdrop_path: "/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
    "title": "The Beekeeper",
  },
  {
    backdrop_path: "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
    "title": "Oppenheimer",
  },
  {
    "backdrop_path": "/m3s0jyPGtluJ48kD0fUiPjXrRhr.jpg",
    "title": "Mean Girls",
  },
  {
    backdrop_path: "/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
    "title": "Barbie",
  },
  {
    "backdrop_path": "/vrpSBM5Zr2L15cFKhOwlKA8Ttyc.jpg",
    "title": "The Painter",
  },
  {
    "backdrop_path": "/mSJ18SvWHShacTp8BcqH5WRCkGQ.jpg",
    "title": "The Bricklayer",
  },
  {
    "backdrop_path": "/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg",
    "title": "Aquaman and the Lost Kingdom",
  },
];

function Banner() {
  const [index, setIndex] = useState(0)
  useEffect(()=>{
    let idx = Math.floor(Math.random() * 10) // 0 to 9
    setIndex(idx)
  } , [])
return (
  <div
    className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
    style={{
      backgroundImage:
        `url(https://image.tmdb.org/t/p/original/${bannerUrls[index].backdrop_path})`,
    }}
  >
    <div className="text-white w-full text-center text-5xl text-bold">
      {bannerUrls[index].title}
    </div>
  </div>
);
}

export default Banner;