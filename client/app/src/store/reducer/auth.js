export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const reducer = (state, { type, payload }) => {
    switch (type) {
      case LOGIN:
        const { token, user } = payload;
        localStorage.setItem('@auth/user', JSON.stringify(user));
        localStorage.setItem('@auth/token', token);
        localStorage.setItem('@workspace/account', JSON.stringify({ id: user.account_id }));

        return {
            ...state,
            isAuthenticated: true,
            user,
            token
        };
      case LOGOUT:
        localStorage.removeItem('@auth/user');
        localStorage.removeItem('@auth/token');
        localStorage.removeItem('@workspace/account');
        
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          token: null
        };
      default:
        return state;
    }
  };