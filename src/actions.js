import { gql } from 'apollo-boost';
import client from './client';

export const login = (email, password) => {
  return dispatch => {
    return client
      .mutate({
        mutation: gql`
          mutation {
            login(
              email: "${email}"
              password: "${password}"
            ) {
              accessToken
              refreshToken
            }
          }
        `,
      })
      .then(result => {
        dispatch({
          type: 'user/LOGIN',
          payload: result.data.login,
        });
        return result;
      });
  };
};
export const signup = (name, email, password) => {
  return dispatch => {
    return client
      .mutate({
        mutation: gql`
          mutation {
            signup(
              name: "${name}"
              email: "${email}"
              password: "${password}"
            ) {
              accessToken
              refreshToken
            }
          }
        `,
      })
      .then(result => {
        dispatch({
          type: 'user/SIGNUP',
          payload: result.data.signup,
        });
        return result;
      });
  };
};

export const logout = () => {
  return {
    type: 'user/LOGOUT',
  };
};

export const loadUser = () => {
  return dispatch => {
    dispatch({
      type: 'user/LOAD',
    });

    client
      .query({
        query: gql`
          {
            me {
              id
              name
              email
            }
          }
        `,
      })
      .then(result =>
        dispatch({
          type: 'user/LOAD_SUCCESS',
          payload: result.data.me,
        })
      )
      .catch(error => {
        dispatch({
          type: 'user/LOAD_FAIL',
          payload: error,
        });
        console.log(error.message);
      });
  };
};
