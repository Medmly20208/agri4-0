import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faPieChart } from "@fortawesome/free-solid-svg-icons";
const WeatherDeatailsItem = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="m-8 border border-gray-200 w-fit  flex flex-row p-6  justify-center align-center gap-8 items-center  "
    >
      <div className="flex flex-row gap-4">
        <div className="text-3xl">
          <FontAwesomeIcon icon={faCloud}></FontAwesomeIcon>
        </div>
        <div>
          <div>{props.Weather.WeatherText}</div>
          <div className="text-sm text-gray-600">
            Dernier mesure prise le {props.Weather.LocalObservationDateTime}
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div className="border-r border-gray-400 p-2">
          <h3 className="text-sm text-gray-600">Températeure</h3>
          <p>
            {" "}
            <span className="font-bold text-lg">
              {props.Weather.Temperature.Metric.Value}
            </span>{" "}
            C
          </p>
        </div>
        <div className="border-r border-gray-400 p-2">
          <h3 className="text-sm text-gray-600">Humidité</h3>
          <p>
            <span className="font-bold text-lg">
              {props.Weather.RelativeHumidity + " "}
            </span>
            %RH
          </p>
        </div>
        <div className="border-r border-gray-400 p-2">
          <h3 className="text-sm text-gray-600">Vent</h3>
          <p>
            <span className="font-bold text-lg">
              {props.Weather.Wind.Direction.Localized + " "}
              {props.Weather.Wind.Speed.Metric.Value + " "}
            </span>
            {props.Weather.Wind.Speed.Metric.Unit}
          </p>
        </div>
        <div className=" p-2">
          <h3 className="text-sm text-gray-600">Rafele de vent</h3>
          <p>
            <span className="font-bold text-lg">
              {props.Weather.WindGust.Speed.Metric.Value + " "}
            </span>
            {props.Weather.WindGust.Speed.Metric.Unit}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDeatailsItem;
