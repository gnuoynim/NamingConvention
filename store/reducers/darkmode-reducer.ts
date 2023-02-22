import { createSlice } from "@reduxjs/toolkit";

const initialState:boolean = true;

const darkmodeReducer = createSlice({
    name :  "darkmode",
    initialState,
    reducers :{
        setDarkmode(state, action){
            state = action.payload
        }
    }
});

export const{setDarkmode} = darkmodeReducer.actions;
export default darkmodeReducer.reducer;