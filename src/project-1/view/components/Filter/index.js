// Core
import React from 'react';

// Redux
import { useUI } from '../../../bus/ui'

export const Filter = () => {
  const {
    ui: { filterState, isFilterActive },
    setFilterState, setTogglerState, filterForecast
  } = useUI();

  const onChangeHandler = (fieldName) => (event) => {
    if (isFilterActive) {
      return;
    }

    const parsedValue = parseInt(event.target.value, 10);

    return void setFilterState(fieldName, parsedValue);
  }

  const onButtonClick = () => void filterForecast({ isReset: isFilterActive })

  const isButtonActive = Boolean(filterState.sunny || filterState.cloudy || filterState.minTemp || filterState.maxTemp);

  return (
    <section className="filter">
      <span
        onClick={() => !isFilterActive && void setTogglerState('cloudy')}
        className={`checkbox ${filterState.cloudy ? 'selected' : ''}`}>
        Облачно
      </span>
      <span
        onClick={() => !isFilterActive && void setTogglerState('sunny')}
        className={`checkbox${filterState.sunny ? ' selected' : ''}`}>
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
        onClick={onButtonClick}>
        {isFilterActive ? 'Сбросить' : 'Отфильтровать'}
      </button>
    </section>
  );
};
