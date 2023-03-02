import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store";
import stateReducer, {
  setModal,
  setModalClose,
  setModalReset,
} from "../store/reducers/state-reducer";
import { RootState } from "../store";

const ModalComponent = () => {
  const state = useSelector((state: RootState) => state.state);
  const dispatch = useAppDispatch();

  const handleHide = () => {
    dispatch(setModalClose());
    setTimeout(() => dispatch(setModalReset()), 200);
  };

  return (
    <div>
      <Modal show={state.modal.show} onHide={handleHide}>
        {state.modal.title === "" ? null : (
          <Modal.Header closeButton>
            <Modal.Title>{state.modal.title}</Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body>{state.modal.content}</Modal.Body>
        <Modal.Footer>
          {state.modal.close ? (
            <Button variant="secondary" onClick={handleHide}>
              취소
            </Button>
          ) : null}
          {state.modal.confirm ? (
            <Button variant="primary" onClick={handleHide}>
              확인
            </Button>
          ) : null}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalComponent;
