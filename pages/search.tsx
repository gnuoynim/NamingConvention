import BaseLayout from "../layout/base-layout";
import Autocomplete from "react-autocomplete";

const Search = () => {
  return (
    <BaseLayout>
      <div className="searchBox">
        <input type="search" placeholder="단어를 검색하세요." />
      </div>
      <button type="button" className="enrollButton">
        등록
      </button>
    </BaseLayout>
  );
};
export default Search;
