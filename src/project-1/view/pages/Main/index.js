// Core
import React from 'react';

// Components
import { Header, CurrentWeather, Forecast, Filter } from '../../components';

// Redux
import { useForecastQuery } from '../../../bus/forecast';
import { useUI } from '../../../bus/ui';

export const Main = () => {
  const forecast = useForecastQuery();
  const { ui: { filterState, isFilterActive, activeDay } } = useUI();


  const filterForecast = (() => {
    let filteredForecast = forecast.slice(0, 7);

    if (!isFilterActive) {
      return filteredForecast;
    }

    if (filterState.sunny) {
      filteredForecast = forecast.filter((day) => day.type === 'sunny')
    }

    if (filterState.cloudy) {
      filteredForecast = forecast.filter((day) => day.type === 'cloudy')
    }

    if (filterState.minTemp) {
      filteredForecast = forecast.filter((day) => day.temperature >= filterState.minTemp)
    }

    if (filterState.maxTemp) {
      filteredForecast = forecast.filter((day) => day.temperature <= filterState.maxTemp)
    }

    return filteredForecast;
  })();

  const currentWeather = filterForecast.find((weather) => weather.day === activeDay);

  return (
    <section className="body">
      <main>
        <Filter forecast={filterForecast} />
        {
          filterForecast.length === 0
            ? (
              <section className="forecast">
                <p className="message">По заданным критериям нет доступных дней!</p>
              </section>
            )
            : (
              <>
                <Header currentWeather={currentWeather} />
                <CurrentWeather currentWeather={currentWeather} />
                <Forecast forecast={filterForecast} />
              </>
            )
        }
      </main>
    </section>
  );
};
