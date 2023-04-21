import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    patients: []
}

const patientsSlice = createSlice({
    name: 'patientSlice',
    initialState,
    reducers: {
        setPatients(state, action){
            state.patients = action.payload
        },
        addPatient(state,action){
            state.patients.push(action.payload)
        }
    }
})

export const patientActions = patientsSlice.actions

export default patientsSlice