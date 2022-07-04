import React, { useEffect, useState } from "react";
import WeatherItem from "./WeatherItem";
import WeatherDetails from "./WeatherDetails";

const Main = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [dispWeatherDetails, setdispWeatherDetails] = useState(false);
  useEffect(() => {
    fetch(
      "https://dataservice.accuweather.com/currentconditions/v1/245771?apikey=KLt0LkjAqxu8Tnt1XEGilkIa9yAWrzjs&language=fr-FR&details=true"
    )
      .then((res) => res.json())
      .then((res) => setWeatherData(res[0]));
  }, []);
  return (
    <div className="w-4/5 absolute right-0 ">
      {dispWeatherDetails == true ? (
        <WeatherDetails Weather={weatherData}></WeatherDetails>
      ) : (
        <React.Fragment>
          <main>
            <h1 className="font-bold text-lg m-6">/Agadir</h1>
            <div className="flex felx-col justify-center items-center mt-24">
              {weatherData && (
                <WeatherItem
                  Weather={weatherData}
                  onClick={() => {
                    setdispWeatherDetails(true);
                  }}
                ></WeatherItem>
              )}
            </div>
          </main>
        </React.Fragment>
      )}
    </div>
  );
};

export default Main;
