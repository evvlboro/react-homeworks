import { store } from '../../../init/store';

it('test store', () => {
  expect(store.getState()).toMatchSnapshot();
});
