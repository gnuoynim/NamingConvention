import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import UserInterface from "../../interface/user-interface";

const initialState: UserInterface = {
  nickname: "",
  email: "",
  like: [],
  often: [],
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state = action.payload;
      return state;
    },
    setNickname(state, action) {
      state.nickname = action.payload;
      return state;
    },
    setEmail(state, action) {
      state.email = action.payload;
      return state;
    },
    setLike(state, action) {
      state.like = action.payload;
    },
    addLike(state, action){
      state.like.push(action.payload)
    },
    removeLike(state, action) {
      state.like.splice(action.payload,1);
    },
    setOften(state, action){
      state.often =action.payload;
    },
    addOften(state, action){
      state.often.push(action.payload);
    }
  },
});

export const { setUser, setNickname, setEmail, setLike, addLike, removeLike, setOften, addOften } = userReducer.actions;
export default userReducer.reducer;
