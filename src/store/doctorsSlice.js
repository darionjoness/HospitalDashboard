import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    doctors: []
}

const doctorsSlice = createSlice({
    name: 'doctorsSlice',
    initialState,
    reducers: {
        setDoctors(state, action){
            state.doctors = action.payload
        }
    }
})

export const doctorsActions = doctorsSlice.actions

export default doctorsSlice

