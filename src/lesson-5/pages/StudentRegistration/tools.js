// Core
import * as Yup from 'yup';

export const initialValues = {
  firstName: '',
  surname: '',
  age: '',
  email: '',
  sex: '',
  speciality: 'empty',
}

export const validate = ({ firstName, surname, age, email, sex, speciality }) => {
  const errors = {};
  const regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/ig

  if (firstName === "") {
    errors.firstName = "FirstName required";
  }
  if (surname === "") {
    errors.surname = "Surname required";
  }
  if (email === "") {
    errors.email = "Email required";
  } else if (!regExpEmail.test(email)) {
    errors.email = "Invalid email";
  }
  if (sex === "") {
    errors.sex = "Sex required";
  }
  if (speciality === "" || speciality === "empty") {
    errors.speciality = "Speciality required";
  }
  if (Number.isInteger(age) && (parseInt(age, 10) > 60 || (parseInt(age, 10) < 6))) {
    errors.age = "Age must be less then 60 and greater then 6";
  }

  return errors;
};

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('FirstName required'),
  surname: Yup.string()
    .required('Surname required'),
  age: Yup.number()
    .min(7, 'Age must be less then 60 and greater then 6')
    .max(59, 'Age must be less then 60 and greater then 6'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email required'),
  sex: Yup.string()
    .required('Sex required'),
  speciality: Yup.string()
    .notOneOf(['empty'], 'Speciality required')
    .required('Speciality required'),
});

