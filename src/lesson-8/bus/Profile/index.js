// Core
import React from 'react';
import { useHistory } from 'react-router-dom';

// Redux
import { useStudent } from '../student/hooks/useStudent'

// Tools
import { book } from '../../navigation/book';

export const Profile = () => {
  const { student } = useStudent();
  const { push } = useHistory();

  return (
    <section>
      <button onClick={() => void push(book.registration)}>To registration</button>
      <h1>Student</h1>
      <p>First name: {student.firstName}</p>
      <p>Last Name: {student.surname}</p>
      <p>Age: {student.age}</p>
      <p>Email: {student.email}</p>
      <p>Sex: {student.sex}</p>
      <p>Speciality: {student.speciality}</p>
    </section>
  );
};
