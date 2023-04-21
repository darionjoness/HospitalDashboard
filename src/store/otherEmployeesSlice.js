import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    otherEmployees: []
}

const otherEmployeesSlice = createSlice({
    name: 'otherEmployees',
    initialState,
    reducers: {
        setOtherEmployees(state, action){
            state.otherEmployees = action.payload
        }
    }
})

export const otherEmployeesActions = otherEmployeesSlice.actions

export default otherEmployeesSlice