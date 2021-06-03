// Core
import * as Yup from 'yup';

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


export const initialValues = {
  firstName: '',
  surname: '',
  age: '',
  email: '',
  sex: '',
  speciality: '',
};
