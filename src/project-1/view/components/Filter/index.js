// Core
import React from 'react';

// Redux
import { useUI } from '../../../bus/ui'

export const Filter = ({ forecast }) => {
  const {
    ui: { filterState, isFilterActive },
    setFilterState, setTogglerState, filterForecast, setActiveDay
  } = useUI();

  const onChangeHandler = (fieldName) => (event) => {
    if (isFilterActive) {
      return;
    }

    const parsedValue = parseInt(event.target.value, 10);

    return void setFilterState(fieldName, parsedValue);
  }

  const isButtonActive = Boolean(filterState.sunny || filterState.cloudy || filterState.minTemp || filterState.maxTemp);

  console.log('Filter active day', forecast[0]);
  return (
    <section className="filter">
      <span
        onClick={() => !isFilterActive && void setTogglerState('cloudy')}
        className={`checkbox ${filterState.cloudy ? 'selected' : ''}`}>
        Облачно
      </span>
      <span
        onClick={() => !isFilterActive && void setTogglerState('sunny')}
        className={`checkbox ${filterState.sunny ? 'selected' : ''}`}>
        Солнечно
      </span>
      <p className="custom-input">
        <label htmlFor="min-temperature">Минимальная температура</label>
        <input
          disabled={isFilterActive}
          value={filterState.minTemp}
          id="min-temperature"
          type="number"
          onChange={onChangeHandler('minTemp')}
        />
      </p>
      <p className="custom-input">
        <label htmlFor="min-temperature">Максимальная температура</label>
        <input
          disabled={isFilterActive}
          value={filterState.maxTemp}
          id="max-temperature"
          type="number"
          onChange={onChangeHandler('maxTemp')}
        />
      </p>
      <button
        disabled={!isButtonActive}
        onClick={() => {
          filterForecast({ isReset: isFilterActive });
          setActiveDay(forecast[0]?.day);
        }}>
        {isFilterActive ? 'Сбросить' : 'Отфильтровать'}
      </button>
    </section>
  );
};
