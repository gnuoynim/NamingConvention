import BaseLayout from "../layout/base-layout";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store";
import { RootState } from "../store";
import { remove } from "../store/reducers/convention-reducer";
import ConventionInterface from "../interface/convention-interface";
import SearchComponent from "../components/search-component";

const Bookmark = () => {
  const convention = useSelector((state: RootState) => state.convention);
  const state = useSelector((state: RootState)=>state.state);
  const dispatch = useAppDispatch();

  const handleClickRemove = () => {
    dispatch(remove(convention));
    console.log(convention);
  };

  return (
    <BaseLayout>
      <div id="bookmark">
        <div className="usedWords">
          <p>자주사용하는 단어</p>
          <div className="search">
            <div className="searchInr">
              <SearchComponent />
              <button type="button">+</button>
            </div>
          </div>
          <ul>
            {convention.map((item, index) => (
              <li key={index}>
                <label className="">
                  <input type="checkbox" />
                  <span>{item.keyword}</span>
                </label>
                <span className="deleteBtn" onClick={handleClickRemove}></span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>
            좋아요 표시한 단어
            <span>like</span>
          </p>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Bookmark;
