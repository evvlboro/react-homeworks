//Core
import React from 'react';
import { NavLink } from 'react-router-dom';

//Tools
import { book } from '../../navigation/book';

export const Links = () => (
  <nav>
    <NavLink activeStyle={{ color: "blue" }} to={book.root}>Home</NavLink>
    <NavLink activeStyle={{ color: "blue" }} to={book.contacts}>Contacts</NavLink>
    <NavLink activeStyle={{ color: "blue" }} to={book.secret}>Secret</NavLink>
  </nav>
);
