import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    input: ''
}

const searchTermSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {
        setSearchInput(state, action){
            state.input = action.payload
        }
    }
})

export const searchTermActions = searchTermSlice.actions

export default searchTermSlice