import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
type TAuthState = {
    user: null | object;
    token: null | string;
}

// Define the initial state using that type
const initialState: TAuthState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
      setUser: (state,action) => {
          const { user, token } = action.payload;
          state.user = user;
          state.token = token;
      },
        logout:(state)=> {
            state.user = null;
            state.token = null;
      },
  },
})

export const {  setUser , logout} = authSlice.actions;

export default authSlice.reducer;