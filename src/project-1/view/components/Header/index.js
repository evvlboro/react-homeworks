// Core
import React from 'react';
import moment from 'moment';

export const Header = ({ currentWeather }) => {
  return (
    <section className="head">
      <div className={`icon ${currentWeather?.type}`} />
      <div className="current-date">
        <p>{moment(currentWeather?.day).format('dddd')}</p>
        <span>{moment(currentWeather?.day).format('DD MMMM')}</span>
      </div>
    </section>
  );
};
