import { useState } from "react";

export default function CurrentForecast({ searchResult, city }) {

  const date = Object.keys(searchResult).length > 0 ? searchResult.location.localtime : '1999'
  const dateArr = date.split(' ')

  let forecastDate = new Date(dateArr[0])
  // console.log(date)

  return (
    <>
      {!city && (
        <p className="z-30 relative text-[1.5rem] font-small mt-3 md:mt-0">
          Enter a search entry
        </p>
      )}

      {Object.keys(searchResult).length > 0 && (
        <div className="z-30 relative mt-10 md:flex md:items-center md:mt-0 md:top-5 lg:space-x-8 md:space-x-4">
          <h1 className="text-9xl font-medium">
            {searchResult.current.temp_c}
          </h1>

          <div>
            <p className="text-[2.5rem] font-medium mt-3 md:mt-0">
              {searchResult.location.name}
            </p>

            <p className="text-xl mt-1 md:mt-0">
            {`${forecastDate.toDateString()} ${dateArr[1]}`}
            </p>
          </div>

          <div className="mt-7 space-y-3.5 md:mt-0">
            <img
              className="w-10 h-10"
              src="/assets/icons/sun.svg"
              alt="weather conditon"
            />

            <p className="text-2xl font-bold">
              {searchResult.current.condition.text}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
