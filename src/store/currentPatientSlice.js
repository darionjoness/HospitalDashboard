import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPatient: []
}

const currentPatientSlice = createSlice({
    name: 'currentPatient',
    initialState,
    reducers: {
        setCurrentPatient(state, action){
            state.currentPatient = action.payload
        }
    }
})

export const currentPatientActions = currentPatientSlice.actions

export default currentPatientSlice