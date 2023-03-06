import { createSlice } from "@reduxjs/toolkit";
import { text } from "stream/consumers";
import DepthInterface from "../../interface/depth-interface";

const initialState: DepthInterface[] = [
  {
    id: "1",
    text: "content",
  },
  {
    id: "2",
    text: "content2",
  },
  {
    id: "3",
    text: "content3",
  },
  {
    id: "4",
    text: "content4",
  },
  {
    id: "5",
    text: "content5",
  },
];
const depthReducer = createSlice({
  name: "depth",
  initialState,
  reducers: {
    setDepth(state, action) {
      state = action.payload;
      return state;
    },
    removeDepth(state, action) {
      state.splice(action.payload, 1);
    },
    addDepth(state, action) {
      state.push(action.payload);
    },
    setText(state, action) {
      state[action.payload.index].text = action.payload.text;
    },
  },
});

export const { setDepth, removeDepth, addDepth, setText } = depthReducer.actions;
export default depthReducer.reducer;
