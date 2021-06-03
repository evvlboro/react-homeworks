// Core
import React, { useLayoutEffect } from 'react';

// Components
import { Header, CurrentWeather, Forecast, Filter } from '../../components';

// Redux
import { useForecastQuery } from '../../../bus/forecast';
import { useUI } from '../../../bus/ui';

export const Main = () => {
  const forecast = useForecastQuery();
  const {
    ui: { filterState, isFilterActive, activeDay },
    setActiveDay
   } = useUI();

  const filterForecast = () => {
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
  };

  const filteredForecast = filterForecast();
  const findedWeather = filteredForecast.find((weather) => weather.day === activeDay)

  useLayoutEffect(() => {
    filteredForecast.length !== 0 && !findedWeather && void setActiveDay(filteredForecast[0]?.day);
  });

  useLayoutEffect(() => {
    if (filteredForecast.length !== 0 && !isFilterActive) {
      setActiveDay(filteredForecast[0]?.day)
    }
  }, [isFilterActive]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="body">
      <main>
        <Filter filteredForecast={ filteredForecast }/>
        {
          filteredForecast.length === 0
            ? (
              <section className="forecast">
                <p className="message">По заданным критериям нет доступных дней!</p>
              </section>
            )
            : (
              <>
                <Header currentWeather={findedWeather} />
                <CurrentWeather currentWeather={findedWeather} />
                <Forecast forecast={filteredForecast} />
              </>
            )
        }
      </main>
    </section>
  );
};
