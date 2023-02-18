import { createSlice } from "@reduxjs/toolkit";
import StateInterface from "../../interface/state-interface";


const initialState: StateInterface = {keyword:""};
const stateReducer = createSlice({
    name:"state",
    initialState,
    reducers:{
        setState(state, action){
            state = action.payload;
        },
        setKeyword(state, action){
            state.keyword = action.payload
        }
    }
});


export const {setState, setKeyword} = stateReducer.actions;
export default stateReducer.reducer;