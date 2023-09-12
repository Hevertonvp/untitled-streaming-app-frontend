export const initialState = {
  loginFormIsOpen: false,
  loginStatus: [],
};

export function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case 'SET_REGISTER_FORM_OPEN': {
      return {
        loginFormIsOpen: payload,
      };
    }
    default: {
      return state;
    }
  }
}
