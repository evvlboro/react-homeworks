// Core
import React from 'react';
import { Link } from 'react-router-dom';

// Hooks
import { useFilmsFetch } from './hooks/useFilmsFetch';

export const Films = () => {
  const { isFetching, data, error } = useFilmsFetch();

  if (error && error.status === 404) {
    return <p>Not Found!</p>;
  }

  if (error && error.status !== 404) {
    return <p>Something went wrong</p>;
  }

  const spinnerJSX = isFetching && (
    <p>Loading data from api</p>
  );

  const listJSX = !isFetching && data && data.length && data.map(({ title, url }, index) => {
    const link = url.slice(url.indexOf('films'), url.length);

    return (
      <li key={String(index)}>
        <Link to={link}>{title}</Link>
      </li>
    );
  });

  return (
    <section>
      <h1>Films</h1>
      {spinnerJSX}
      <ul>
        {listJSX}
      </ul>
    </section>
  );
};
