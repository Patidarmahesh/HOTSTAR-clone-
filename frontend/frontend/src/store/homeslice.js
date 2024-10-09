import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'home',
  initialState:{
    url:{},
  },
  reducers: {
   getApiConfigure:(state,action) =>{
    state.url = action.payload
   },
  },
})

// Action creators are generated for each case reducer function

export const { getApiConfigure } = homeSlice.actions

export default homeSlice.reducer