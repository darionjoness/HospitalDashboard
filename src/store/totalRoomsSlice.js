import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rooms: [
        100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
        200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210,
        300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310,
        400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410,
        500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510
      ]
}

const totalRoomsSlice = createSlice({
    name: 'totalRooms',
    initialState,
    reducers: {

    }
})

export const totalRoomsActions = totalRoomsSlice.actions

export default totalRoomsSlice