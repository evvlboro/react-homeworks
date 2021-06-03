// Config
import { root } from './config';

export const api = Object.freeze({
  people: {
    fetch: () => {
      return fetch(`${root}/people`, {
        method: 'GET'
      });
    }
  },
  person: {
    fetch: (id) => {
      return fetch(`${root}/people/${id}/`, {
        method: 'GET'
      });
    }
  },
  films: {
    fetch: () => {
      return fetch(`${root}/films`, {
        method: 'GET'
      });
    }
  },
  film: {
    fetch: (id) => {
      return fetch(`${root}/films/${id}/`, {
        method: 'GET'
      });
    }
  },
});
