// Core
import React from 'react';

// Hooks
import { usePerson } from './hooks/usePerson';

export const Person = ({ id }) => {
  const { isFetching, data, error } = usePerson(id);

  if (error && error.status === 404) {
    return <p>Not Found!</p>;
  }

  if (error && error.status !== 404) {
    return <p>Something went wrong</p>;
  }

  const spinnerJSX = isFetching && (
    <p>Loading data from api</p>
  );

  const listJSX = !isFetching && data &&
    (
      <>
        <p>Name: {data.name}</p>
        <p>Gender: {data.gender}</p>
        <p>Birth_year: {data.birth_year}</p>
        <p>Height: {data.height}</p>
        <p>Mass: {data.mass}</p>
        <p>Hair_color: {data.hair_color}</p>
        <p>Eye_color: {data.eye_color}</p>
      </>
    );

  return (
    <section>
      {spinnerJSX}
      {listJSX}
    </section>
  );

};
