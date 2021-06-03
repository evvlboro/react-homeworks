import { types } from './types';

export const userActions = {
  fillProfile: (profile) => {
    return {
      type: types.STUDENT_FILL,
      payload: profile,
    }
  }
};
