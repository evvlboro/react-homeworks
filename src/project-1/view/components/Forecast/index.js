// Core
import React from 'react';
import moment from 'moment';

// Redux
import {useUI} from '../../../bus/ui';

export const Forecast = ({ forecast }) => {
  const { ui: { activeDay }, setActiveDay } = useUI();

  return (
    <section className="forecast">
      {
        forecast.map((weather, index) => {
          return (
            <div
              style = {{ cursor: 'pointer'}}
              onClick={() => void setActiveDay(weather?.day)}
              className={`day ${weather?.type}${activeDay === weather?.day ? ' selected' : ''}`}
              key={index}>
              <p>{moment(weather?.day).format('dddd')}</p>
              <span>{weather?.temperature}</span>
            </div>
          );
        })
      }
    </section>
  )
};
