// Core
import React from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

// Hooks
import { useStudent } from './hooks/useStudent';

// Tools
import { initialValues, validationSchema } from './tools';
import { book } from '../../navigation/book';

// Components
import { ErrorText } from './components';

// Styles
import { Container, Label, SexContainer } from './styles';

export const Registration = () => {
  const { push } = useHistory();
  const { fillStudent } = useStudent();

  const {
    handleSubmit,
    getFieldProps,
    getFieldMeta,
    isValid
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: fillStudent
  });

  return (
    <Container>
      <button onClick={() => void push(book.student)}>To profile</button>

      <form onSubmit={handleSubmit}>
        <Label isError={Boolean(getFieldMeta('firstName').error)}>
          <input
            type="text"
            name="firstName"
            placeholder="Type your first name here..."
            {...getFieldProps('firstName')}
          />
        </Label>
        <ErrorText errorText={getFieldMeta('firstName').error} />

        <Label isError={Boolean(getFieldMeta('surname').error)}>
          <input
            type="text"
            name="surname"
            placeholder="Type your surname here..."
            {...getFieldProps('surname')}
          />
        </Label>
        <ErrorText errorText={getFieldMeta('surname').error} />

        <Label isError={Boolean(getFieldMeta('age').error)}>
          <input
            type="number"
            placeholder="Type your age here..."
            {...getFieldProps('age')}
          />
        </Label>
        <ErrorText errorText={getFieldMeta('age').error} />

        <Label isError={Boolean(getFieldMeta('email').error)}>
          <input
            type="email"
            name="email"
            placeholder="Type your email here..."
            {...getFieldProps('email')}
          />
        </Label>
        <ErrorText errorText={getFieldMeta('email').error} />

        <div id="sex-group">Sex</div>
        <SexContainer isError={Boolean(getFieldMeta('sex').error)} role="group" aria-labelledby="sex-group">
          <Label>
            <input
              type="radio"
              {...getFieldProps('sex')}
              value='male'
            />
            <span>Male</span>
          </Label>
          <Label>
            <input
              type="radio"
              {...getFieldProps('sex')}
              value='female'
            />
            <span>Female</span>
          </Label>
        </SexContainer>
        <ErrorText errorText={getFieldMeta('sex').error} />

        <Label isError={Boolean(getFieldMeta('speciality').error)}>
          <span>Speciality</span>
          <select
            name="speciality"
            style={{ marginLeft: '10px' }}
            {...getFieldProps('speciality')}
          >
            <option value="empty"></option>
            <option value="designer">Designer</option>
            <option value="developer">Developer</option>
            <option value="writer">Writer</option>
          </select>
        </Label>
        <ErrorText errorText={getFieldMeta('speciality').error} />

        <button type="submit" disabled={!isValid}>Submit</button>
      </form>
    </Container>
  );
};
