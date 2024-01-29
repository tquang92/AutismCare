import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = "";

const bookingSlice = createSlice({
    initialState,
    name: "booking",
    reducers: {
        addBooking: (state,actions: PayloadAction<string>) => {
            return actions.payload;
        },
        cancelBookin: () => {
            return "";
        }
    }
})

export const bookingReducer = bookingSlice.reducer;
export const {addBooking, cancelBooking} = bookingSlice.actions;