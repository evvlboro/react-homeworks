// Core
import React from 'react';

export const CurrentWeather = ({ currentWeather }) => {
    return (
      <section className="current-weather">
        <p className="temperature">{currentWeather?.temperature ?? 0}</p>
        <p className="meta">
          <span className={currentWeather?.type ?? ''}>% {currentWeather?.rain_probability ?? 0}</span>
          <span className="humidity">% {currentWeather?.humidity ?? 0}</span>
        </p>
      </section>
    );
};
