import React from "react";

export default function CurrentForecast() {
  return (
    <div className="z-30 relative mt-10 md:flex md:items-center md:mt-0 md:top-5 lg:space-x-8 md:space-x-4">
      <h1 className="text-9xl font-medium">26°C</h1>

      <div>
      <p className="text-[2.5rem] font-medium mt-3 md:mt-0">Onitsha</p>
      <p className="text-xl mt-1 md:mt-0">10:36AM - Tuesday, 28 Oct 2022</p>
      </div>

      <div className="mt-7 space-y-3.5 md:mt-0">
        <img className="w-10 h-10" src="/assets/icons/sun.svg" alt="weather conditon" />
        <p className="text-2xl font-bold">Sunny</p>
      </div>
    </div>
  );
}
