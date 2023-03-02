import { createSlice } from "@reduxjs/toolkit";
import StateInterface from "../../interface/state-interface";
import ModalInterface from "../../interface/modal-interface";

const initialState: StateInterface = {
  keyword: "",
  conventionId: 0,
  modal: {
    show: false,
    title: "",
    content: "",
    close: true,
    confirm: true,
  },
};
const stateReducer = createSlice({
  name: "state",
  initialState,
  reducers: {
    setState(state, action) {
      state = action.payload;
    },
    setKeyword(state, action) {
      state.keyword = action.payload;
    },
    setConventionId(state, action) {
      state.conventionId = action.payload;
    },
    setModal(state, action) {
      state.modal = action.payload;
    },
    setModalAlert(state, action) {
      state.modal.content = action.payload;
      state.modal.show = true;
      state.modal.confirm = false;
    },
    setModalConfirm(state, action) {

      state.modal.content = action.payload;
      state.modal.show = true;
      state.modal.confirm = true;
      state.modal.close = false;
    },
    setModalReset(state) {
      state.modal = initialState.modal;
    },
    setModalClose(state) {
      state.modal.show = false;
    },
  },
});

export const {
  setState,
  setKeyword,
  setConventionId,
  setModal,
  setModalAlert,
  setModalConfirm,
  setModalClose,
  setModalReset,
} = stateReducer.actions;
export default stateReducer.reducer;
