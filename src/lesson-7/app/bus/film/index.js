// Core
import React from 'react';

// Hooks
import { useFilmFetch } from './hooks/useFilmFetch';

export const Film = ({ id }) => {
  const { isFetching, data, error } = useFilmFetch(id);

  if (error && error.status === 404) {
    return <p>Not Found!</p>;
  }

  if (error && error.status !== 404) {
    return <p>Something went wrong</p>;
  }

  const spinnerJSX = isFetching && (
    <p>Loading data from api</p>
  );

  /*const listJSX = !isFetching && data && Object.entries(data).map((item, index) => {
    return (
      <li key={index}>
        {`${item[0]}: ${item[1]}`}
      </li>
    );
  });*/

  const listJSX = !isFetching && data &&
    (
      <>
        <p>Title: {data.title}</p>
        <p>Opening_crawl: {data.opening_crawl}</p>
        <p>Director: {data.director}</p>
        <p>Producer: {data.producer}</p>
        <p>Release_date: {data.release_date}</p>
      </>
    );


  return (
    <section>
      {spinnerJSX}
      {listJSX}
    </section>
  );

};
