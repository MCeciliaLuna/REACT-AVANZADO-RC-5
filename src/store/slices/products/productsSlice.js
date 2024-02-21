import { createSlice } from '@reduxjs/toolkit'

const initialValues = {

}
export const templateSlice = createSlice({
name: 'template',
initialState: initialValues,
reducers: {
type: (state, action) => {
(state.value = action.payload.value)
}
}
})

export const { type } = templateSlice.actions