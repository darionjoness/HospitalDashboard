import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nurses: []
}

const nursesSlice = createSlice({
    name: 'nursesSlice',
    initialState,
    reducers: {
        setNurses(state, action){
            state.nurses = action.payload
        }
    }
})

export const nursesActions = nursesSlice.actions

export default nursesSlice