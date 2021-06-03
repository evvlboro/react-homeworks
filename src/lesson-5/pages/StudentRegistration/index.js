// Core
import React from 'react';
import { Formik, Field, Form } from "formik";

// Components
import { ErrorText } from '../../components'

// Styles
import { Container, Label, SexContainer } from './styles'

// Tools
import { validate, initialValues, validationSchema } from './tools';

export const StudentRegistration = () => {

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        //Таск 2----------------------------
        //Раскомментируйте validate={validate} для таска 2 и закомментируйте validationSchema={validationSchema}
        //validate={validate}
        //Таск 2----------------------------

        //Таск 3----------------------------
        validationSchema={validationSchema}
        //Таск 3----------------------------

        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => {
          const { setFieldValue, errors } = props;

          return (
            <Form>
              <Label isError={Boolean(errors.firstName)}>
                <Field type="text" name="firstName" placeholder="Type your first name here..."></Field>
              </Label>
              <ErrorText errorText={errors.firstName} />

              <Label isError={Boolean(errors.surname)}>
                <Field type="text" name="surname" placeholder="Type your surname here..."></Field>
              </Label>
              <ErrorText errorText={errors.surname} />

              <Label isError={Boolean(errors.age)}>
                <Field
                  type="number"
                  name="age"
                  placeholder="Type your age here..."
                  onChange={(event) => {
                    event.preventDefault();
                    const parsedValue = parseInt(event.target.value, 10);

                    if (parsedValue >= 0) {
                      setFieldValue('age', parsedValue);
                    }
                  }}
                ></Field>
              </Label>
              <ErrorText errorText={errors.age} />

              <Label isError={Boolean(errors.email)}>
                <Field type="email" name="email" placeholder="Type your email here..."></Field>
              </Label>
              <ErrorText errorText={errors.email} />

              <div id="sex-group">Sex</div>
              <SexContainer isError={Boolean(errors.sex)} role="group" aria-labelledby="sex-group">
                <Label>
                  <Field type="radio" name="sex" value="male" />
                Male
              </Label>
                <Label>
                  <Field type="radio" name="sex" value="female" />
                Female
              </Label>
              </SexContainer>
              <ErrorText errorText={errors.sex} />

              <Label isError={Boolean(errors.speciality)}>
                Speciality
                <Field as="select" name="speciality" style={{ marginLeft: '10px' }}>
                  <option value="empty"></option>
                  <option value="designer">Designer</option>
                  <option value="developer">Developer</option>
                  <option value="writer">Writer</option>
                </Field>
              </Label>
              <ErrorText errorText={errors.speciality} />

              <button type="submit">Submit</button>
            </Form>
          )
        }}
      </Formik>
    </Container>
  );
};

