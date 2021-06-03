// Core
import React from 'react';
import { Link } from 'react-router-dom';

// Hooks
import { usePeopleFetch } from './hooks/usePeopleFetch';

export const People = () => {
  const { isFetching, data, error } = usePeopleFetch();

  if (error && error.status === 404) {
    return <p>Not Found!</p>;
  }

  if (error && error.status !== 404) {
    return <p>Something went wrong</p>;
  }

  const spinnerJSX = isFetching && (
    <p>Loading data from api</p>
  );

  const listJSX = !isFetching && data && data.length && data.map(({ name, url }, index) => {
    const link = url.slice(url.indexOf('people'), url.length);
    return (
      <li key={String(index)}>
        <Link to={link}>{name}</Link>
      </li>
    );
  });

  return (
    <section>
      <h1>People</h1>
      {spinnerJSX}
      {listJSX}
    </section>
  );

};
