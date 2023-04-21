import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    patientChartData: []
}

const patientChartSlice = createSlice({
    name: 'patientSlice',
    initialState,
    reducers: {
        setPatientChartData(state, action){
            state.patientChartData = action.payload
        }
    }
})

export const patientChartActions = patientChartSlice.actions

export default patientChartSlice
