import { createSlice } from "@reduxjs/toolkit";
import UserInterface from "../../interface/user-interface";

const initialState: UserInterface = { nickname: "", email: "" };

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
  },
});

export const { setUser, setNickname, setEmail } = userReducer.actions;
export default userReducer.reducer;
