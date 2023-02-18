import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userReducer from "./reducers/user-reducer";
import countReducer from "./reducers/count-reducer";
import stateReducer from "./reducers/state-reducer";
import depthReducer from "./reducers/depth-reducer";
import conventionRducer from "./reducers/convention-reducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    count: countReducer,
    state: stateReducer,
    depth: depthReducer,
    convention: conventionRducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
