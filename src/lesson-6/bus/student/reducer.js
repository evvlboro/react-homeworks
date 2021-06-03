import { types } from './types';

const initialState = {
  data: {
    firstName: '',
    surname: '',
    age: '',
    email: '',
    sex: '',
    speciality: '',
  }
};

export const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.STUDENT_FILL: {
      return {
        ...state,
        data: action.payload,
      }
    }

    default:
      return state
  }
}
