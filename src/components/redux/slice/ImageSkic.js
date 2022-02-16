import { createSlice } from '@reduxjs/toolkit'

export const imageSlice = createSlice({
  name: 'fakeImage',
  initialState: {
    rawData: [],
    selectedImage: []
  },
  reducers: {
    // increment: state => {
     
    //   state.value += 1
    // },
  
  }
})

// Action creators are generated for each case reducer function
export const {  } = imageSlice.actions

export default imageSlice.reducer