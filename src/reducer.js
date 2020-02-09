const accessToken = localStorage.getItem('accessToken');
const refreshToken = localStorage.getItem('refreshToken');

const initialState = {
  user: {
    accessToken: accessToken || null,
    refreshToken: refreshToken || null,
    loading: false,
    data: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'user/SIGNUP':
    case 'user/LOGIN':
      localStorage.setItem('accessToken', action.payload.accessToken);
      localStorage.setItem('refreshToken', action.payload.refreshToken);
      return {
        ...state,
        user: {
          ...state.user,
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
        },
      };
    case 'user/LOAD':
      return {
        ...state,
        user: {
          ...state.user,
          loading: true,
        },
      };
    case 'user/LOAD_FAIL':
      return {
        ...state,
        user: {
          ...state.user,
          loading: false,
        },
      };
    case 'user/LOAD_SUCCESS':
      return {
        ...state,
        user: {
          ...state.user,
          data: action.payload,
          loading: false,
        },
      };
    case 'user/LOGOUT':
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      return {
        ...state,
        user: {
          ...state.user,
          accessToken: null,
          refreshToken: null,
        },
      };
    default:
      return state;
  }
};
