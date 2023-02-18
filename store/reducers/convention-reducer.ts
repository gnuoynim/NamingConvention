import { createSlice } from "@reduxjs/toolkit";
import ConventionInterface from "../../interface/convention-interface";

const initialState: ConventionInterface[] = [
  {
    keyword: "container",
    name: "snake_casing",
    depth: [
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
    ],
    like: 0,
  },
  {
    keyword: "list",
    name: "camelCasing",
    depth: [
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
    ],
    like: 1,
  },
  {
    keyword: "list",
    name: "PascalCase",
    depth: [
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
    ],
    like: 3,
  },
  {
    keyword: "melon",
    name: "kebab-case",
    depth: [
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
    ],
    like: 4,
  },
];

const conventionReducer = createSlice({
  name: "convention",
  initialState,
  reducers: {
    setConvention: (state, action) => {
      state = action.payload;
      return state;
    },
    increment:(state, action) =>{
      state[action.payload].like++;
  
    }
  },
});

export const { setConvention,increment } = conventionReducer.actions;
export default conventionReducer.reducer;
