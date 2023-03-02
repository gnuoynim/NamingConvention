import BaseLayout from "../layout/base-layout";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store";
import { RootState } from "../store";
import { addOften, removeLike, removeOften,} from "../store/reducers/user-reducer";
import SearchComponent from "../components/search-component";
import ModalComponent from "../components/modal-component";
import React from "react";
import {setModalAlert, setModalConfirm, } from "../store/reducers/state-reducer";
import autocompleteFilter from "../helpers/autocomplete-filter";

const Bookmark = () => {
  const convention = useSelector((state: RootState) => state.convention);
  const state = useSelector((state: RootState) => state.state);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  const handleClickRemoveOften = (
    event: React.MouseEvent<HTMLSpanElement>,
    index: number
  ) => {
    dispatch(removeOften(index));
  };

  const handleClickRemoveLike = (
    event: React.MouseEvent<HTMLSpanElement>,
    index: number
  ) => {
    dispatch(removeLike(index));
  };

  const handleClickAdd = () => {
    console.log(state.keyword);
    autocompleteFilter(
      state.keyword,
      user.often,
      dispatch,
      addOften,
      setModalAlert
    );
  };

  return (
    <BaseLayout>
      <div id="bookmark">
        <div className="usedWords">
          <p>자주사용하는 단어</p>
          <div className="search">
            <div className="searchInr">
              <SearchComponent />
              <button type="button" onClick={handleClickAdd}>
                +
              </button>
            </div>
          </div>
          <ul>
            {user.often.map((item, index) => (
              <li key={index}>
                <label className="">
                  <input type="checkbox" />
                  <span>{item}</span>
                </label>
                <span
                  className="deleteBtn"
                  onClick={(event) => handleClickRemoveOften(event, index)}
                ></span>
              </li>
            ))}
          </ul>
          <p>
            좋아요 표시한 단어
            <span>like</span>
          </p>
          <ul>
            {convention
              .filter((_, index) => user.like.includes(index))
              .map((item, index) => (
                <li key={index}>
                  <label className="">
                    <input type="checkbox" />
                    <span>{item.keyword}</span>
                  </label>
                  <span
                    className="deleteBtn"
                    onClick={(event) => handleClickRemoveLike(event, index)}
                  ></span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Bookmark;
