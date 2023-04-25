import { configureStore } from "@reduxjs/toolkit";
import patientsSlice from "./patientsSlice";
import searchTermSlice from "./searchTermSlice";
import totalRoomsSlice from "./totalRoomsSlice";
import doctorsSlice from "./doctorsSlice";
import nursesSlice from "./nursesSlice";
import cnasSlice from "./cnasSlice";
import otherEmployeesSlice from "./otherEmployeesSlice";
import patientChartSlice from "./patientChartSlice";
import currentPatientSlice from "./currentPatientSlice";

const store = configureStore({
    reducer: {
        // State for patients data
        patients: patientsSlice.reducer, 

        // State for search bar 
        searchTerm: searchTermSlice.reducer,

        // State for rooms
        rooms: totalRoomsSlice.reducer,

        // State for doctors
        doctors: doctorsSlice.reducer,

        // State for nurses
        nurses: nursesSlice.reducer,

        // State for cnas
        cnas: cnasSlice.reducer,

        // State for otherEmployees
        otherEmployees: otherEmployeesSlice.reducer,

        // State for patient 30 day chart data
        patientChartData: patientChartSlice.reducer,

        // State for the current patient selected
        currentPatient: currentPatientSlice.reducer,

    }
})

export default store