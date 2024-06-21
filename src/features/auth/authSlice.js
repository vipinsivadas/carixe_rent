import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null
    
  },
  reducers: {
   addUser: (state, actions)=>{
    state.user = actions.payload
   }
  
  }
})

// Action creators are generated for each case reducer function
export const { addUser} = authSlice.actions

export default authSlice.reducer