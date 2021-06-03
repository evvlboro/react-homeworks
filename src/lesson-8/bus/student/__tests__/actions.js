import { userActions } from '../actions';

describe("User actions", () => {
  it('should fill student', () => {
    expect(userActions.fillProfile(
      {
        firstName: 'Уилл',
        surname: 'Тернер',
        age: '19',
        email: 'blablabla@gmail.com',
        sex: 'male',
        speciality: 'writer',
      }
    )).toMatchSnapshot();
  });
})
