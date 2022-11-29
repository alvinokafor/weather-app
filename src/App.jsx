import { useState } from "react";
import CurrentForecast from "./components/CurrentForecast";
import Search from "./components/Search";
import WeatherDetails from "./components/WeatherDetails";
import FutureForecast from "./components/FutureForecast";
import Footer from "./components/Footer";
import useFetch from "./hooks/useFetch";

function App() {
  const [city, setCity] = useState('London')
  const [currentForecast, setCurrentForecast] = useState(null);
  const [inputText, setInputText] = useState("");
  // console.log(import.meta.env.VITE_API_KEY)

  const { data } = useFetch(`http://api.weatherapi.com/v1/current.json?key=8c92749d2b6f4870b3a202908222811=${city}&aqi=no`);
  console.log(data);

  return (
    <div className="App font-body relative text-white">
      <section className="max-w-xs mx-auto pt-8 md:max-w-4xl lg:max-w-6xl">
        <div className="md:flex md:justify-between md:items-end">
          <Search inputText={inputText} setInputText={setInputText} />
          <CurrentForecast />
        </div>

        <div className="md:flex md:justify-between md:mt-20 md:mb-32">
          <WeatherDetails />
          <FutureForecast />
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
