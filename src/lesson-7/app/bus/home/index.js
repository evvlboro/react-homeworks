// Core
import React from 'react';
import { Link } from 'react-router-dom';

// Tools
import { book } from '../../navigation/books';

export const Home = () => (
  <section>
    <Link to={book.people}>People page</Link>
    <Link to={book.films}>Films page</Link>
  </section>
);
