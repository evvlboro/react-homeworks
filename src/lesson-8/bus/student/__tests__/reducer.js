// Reducer
import { studentReducer } from "../reducer";

// Actions
import { userActions } from "../actions";

describe("User reducer", () => {
  test("should return initial state by default", () => {
    expect(studentReducer(void 0, {})).toMatchSnapshot(`
      Object {
        "data": {
          "age": "",
          "email": "",
          "firstName": "",
          "sex": "",
          "speciality": "",
          "surname": "",
        }
    `);
  });
  test("should handle fill action", () => {
    expect(
      studentReducer(
        void 0,
        userActions.fillProfile({
          age: "19",
          email: "blablabla@gmail.com",
          firstName: "Уилл",
          sex: "male",
          speciality: "writer",
          surname: "Тернер",
        })
      )
    ).toMatchSnapshot(`
      Object {
        "data": Object {
          "age": "19",
          "email": "blablabla@gmail.com",
          "firstName": "Уилл",
          "sex": "male",
          "speciality": "writer",
          "surname": "Тернер",
        }
      }
    `);
  });
});
