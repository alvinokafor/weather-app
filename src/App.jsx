import { useState, useEffect } from "react";
import CurrentForecast from "./components/CurrentForecast";
import Search from "./components/Search";
import WeatherDetails from "./components/WeatherDetails";
import FutureForecast from "./components/FutureForecast";
import Footer from "./components/Footer";
import useFetch from "./hooks/useFetch";

function App() {
  const [searchResult, setSearchResult] = useState("");
  const [city, setCity] = useState(null);
  const [futureForecast, setFutureForecast] = useState({});

  useEffect(() => {
    if (city) {
      useFetch(
        `https://api.weatherapi.com/v1/current.json?key=${
          import.meta.env.VITE_API_KEY
        }&q=${city}&aqi=no`,
        setSearchResult
      );

      //   getFutureDate()

      // useFetch(
      //   `http://api.weatherapi.com/v1/future.json?key=b8f956e94956426c897214448222911&q=london&dt=2022-12-30`,
      //   setFutureForecast
      // );
    } else {
      setSearchResult({});
    }
  }, [city]);

  // useEffect(() => {
  //   if (Object.keys(searchResult).length > 0) {
  //     // let date = getFutureDate(searchResult.location.localtime);

  //     useFetch(
  //       `http://api.weatherapi.com/v1/future.json?key=b8f956e94956426c897214448222911&q=${city}&dt=${date}`,
  //       setFutureForecast
  //     );
  //   }
  // }, [searchResult]);

  // const getFutureDate = (date) => {
  //   const dateArr = date.split(" ");

  //   let futureDate = dateArr[0];
  //   // futureDate.setDate(futureDate.getDate() + 1);
  //   return futureDate
  // };

  return (
    <div className="App font-body relative text-white">
      <section className="max-w-xs mx-auto pt-8 md:max-w-4xl lg:max-w-6xl">
        <div className="md:flex md:justify-between md:items-end">
          <Search
            setCity={setCity}
            // searchResult={searchResult}
          />
          <CurrentForecast
            city={city}
            searchResult={searchResult}
            // searchResult={checkCityValue()}
          />
        </div>

        <div className="md:flex md:justify-between md:mt-20 md:mb-32">
          <WeatherDetails />
          <FutureForecast futureForecast={futureForecast} />
        </div>
      </section>
      <Footer />

      <div className="md:h-screen absolute inset-0 z-10 bg-black">
        <img
          className="h-full w-full object-center object-cover z-10 opacity-70"
          src="/assets/backgrounds/sky.webp"
          alt=""
        />
      </div>
    </div>
  );
}

export default App;
