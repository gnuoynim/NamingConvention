import { createSlice } from "@reduxjs/toolkit";
import ConventionInterface from "../../interface/convention-interface";

const initialState: ConventionInterface[] = [];

const loginInitialState: ConventionInterface[] = [
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
    tab: 0,
    order:0,
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
    like: 2,
    tab: 1,
    order:1,
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
    like: 2,
    tab: 2,
    order:3,
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
    like: 3,
    tab: 3,
    order:3,
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
    setConventionModify: (state, action) => {
      state[action.payload.index].depth = action.payload.depth;
      state[action.payload.index].name = action.payload.name;
    },
    increment: (state, action) => {
      state[action.payload].like++;
      return state;
    },
    remove: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { setConvention, increment, remove, setConventionModify } =
  conventionReducer.actions;
export default conventionReducer.reducer;
export { loginInitialState };
