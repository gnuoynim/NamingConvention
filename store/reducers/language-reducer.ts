import { createSlice } from "@reduxjs/toolkit";
import LanguageInterface from "../../interface/language-interface";


const languageReducer = createSlice({
    name : "language",
    initialState:{
        variable : ""
    },
    reducers:{
        setVar(state, action){
            state = action.payload;
        }
    }
})

export const{setVar} = languageReducer.actions;
export default languageReducer.reducer;