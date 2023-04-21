import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cnas: []
}

const cnasSlice = createSlice({
    name: 'cnasSlice',
    initialState,
    reducers: {
        setCnas(state, action){
            state.cnas = action.payload
        }
    }
})

export const cnasActions = cnasSlice.actions

export default cnasSlice
