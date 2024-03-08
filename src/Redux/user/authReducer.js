

const initialState = {
    user: null,
    isAuthenticated: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          user: action.payload.user,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  