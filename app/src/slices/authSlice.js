import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: false,
  },

  reducers: {
    signinRedux: (state, action) => {
      state.status = true
    },
    signoutRedux: (state, action) => {
      state.status = false
    },
  },
})

export default authSlice.reducer

export const { signinRedux, signoutRedux } = authSlice.actions
