/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// import React from 'react'

function Pagination({nextPageFn, previousPageFn,pageNumber}) {
  return (
    <div className="bg-gray-400 h-[50px] w-full p-4 mt-8 flex justify-center">
      <div onClick={previousPageFn} className="px-8"><i class='fa-solid fa-arrow-left'></i></div>
      <div>{pageNumber}</div>
      <div onClick={nextPageFn} className="px-8"><i class='fa-solid fa-arrow-right'></i></div>
    </div>
  )
}

export default Pagination;
