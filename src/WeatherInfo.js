import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TempConvert from "./TempConvert";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-sm-6">
          <WeatherIcon
            code={props.data.icon}
            size={64}
            alt={props.data.description}
          />
          <TempConvert celsius={props.data.temperature} />
        </div>
        <div className="col-sm-6">
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
