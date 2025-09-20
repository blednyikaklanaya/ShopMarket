import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";


export interface AppState { //interface a state for all App
    count : number,
};

const initialState: AppState = { 
    count : 0,
}

const sliceApp = createSlice({
    name: "sliceApp",
    initialState,
    reducers: {

    }
});

export const {  } = sliceApp.actions;
export default sliceApp.reducer;