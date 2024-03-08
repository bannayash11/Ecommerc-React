import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post('https://reqres.in/api/login', {
      username,
      password,
    });

    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: {
        user: response.data.user,
      },
    });

    localStorage.setItem('token', response.data.token);

    // Use useNavigate directly
    const navigate = useNavigate();
    navigate('/dashboard');
  } catch (error) {
    console.error('Login error:', error);
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');

  dispatch({
    type: 'LOGOUT',
  });
};
