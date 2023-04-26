export const userReducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return {
        isAuthenticated: true,
        username: action.payload.username,
        email: action.payload.email,
      }
    case 'logout':
      return {
        isAuthenticated: false,
        username: '',
        email: '',
      }
    case 'updateUser':
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email
      }
  }
}