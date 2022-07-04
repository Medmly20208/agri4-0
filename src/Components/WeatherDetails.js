import React, { useState, useEffect } from "react";
import WeatherDeatailsItem from "./WeatherDeatailsItem";
import ChartCurve from "./ChartCurve";
import AlertItemhumtemp from "./AlertItemhumtemp";
import AlertItemWind from "./AlertItemWind";

const WeatherDetails = (props) => {
  const [HistoricalData, setHistoricaldata] = useState(null);
  const [Chosenrange, setChosenRange] = useState("24");
  const [temperature, settemperature] = useState(true);
  const [humidity, sethumidity] = useState(true);

  useEffect(() => {
    fetch(
      `https://dataservice.accuweather.com/currentconditions/v1/245771/historical${
        Chosenrange != "6" ? "/24" : ""
      }?apikey=KLt0LkjAqxu8Tnt1XEGilkIa9yAWrzjs&language=fr-FR&details=true`
    )
      .then((res) => res.json())
      .then((res) => {
        return setHistoricaldata(res.reverse());
      });
  }, [Chosenrange]);

  const ChangeHandler = (e) => {
    setChosenRange(e.target.value);
  };
  return (
    <main className="w-full flex flex-col justify-around items-center">
      <WeatherDeatailsItem Weather={props.Weather}></WeatherDeatailsItem>
      <div className="border border-gray-300 rounded-xl p-12">
        <div>
          <div className="flex flex-row gap-4">
            <div>
              <input
                type="checkbox"
                id="temperature"
                name="weather"
                value="temperature"
                onChange={(e) => settemperature(e.target.checked)}
                checked={temperature}
              />
              <label htmlFor="temperature">Température</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="humidity"
                name="humidity"
                value="humidity"
                onChange={(e) => sethumidity(e.target.checked)}
                checked={humidity}
              />
              <label htmlFor="humidity"> Humidité</label>
            </div>
          </div>
          <div className="w-full flex flex-row justify-end ">
            <select
              className="border border-gay-500 p-2  mr-12"
              onChange={ChangeHandler}
            >
              <option value="24">les derniérs 24 heures</option>
              <option value="6">les derniérs 6 heures</option>
            </select>
          </div>
        </div>
        <div>
          {HistoricalData && (
            <ChartCurve
              temperature={temperature}
              humidty={humidity}
              HistoricalData={HistoricalData}
            ></ChartCurve>
          )}
        </div>
      </div>
      <div className="w-4/5">
        <h1 className="font-bold text-lg m-6">Configurations des alertes</h1>
        <div>
          <AlertItemhumtemp
            title="de température"
            type="temperature"
          ></AlertItemhumtemp>
          <AlertItemhumtemp
            title="d'humidité"
            type="humidity"
          ></AlertItemhumtemp>
          <AlertItemWind title="de vitesse du vent"></AlertItemWind>
          <AlertItemWind title="de rafales de vent"></AlertItemWind>
        </div>
      </div>
    </main>
  );
};

export default WeatherDetails;
