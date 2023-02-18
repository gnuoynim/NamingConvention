import Autocomplete from "react-autocomplete";
import { useState } from "react";
import { RootState, useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import { setKeyword } from "../store/reducers/state-reducer";
import { useEffect } from "react";


const SearchComponent = () => {
  const [value, setValue] = useState("");
  const state = useSelector((state:RootState) => state.state);
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(setKeyword(value))

  },[value])
  
  return (
    <Autocomplete
      getItemValue={(item) => item.label}
      items={[
        { label: "apple", index: 0 },
        { label: "banana", index: 1 },
        { label: "pear", index: 2 },
        { label: value },
      ]}
      renderItem={(item, isHighlighted) => (
        <div
          style={{ background: isHighlighted ? "lightgray" : "white" }}
          key={item.label}
        >
          {item.label}
        </div>
      )}
      renderInput={(props) => (
        <input {...props} type="search" placeholder="단어를 검색하세요." />
      )}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onSelect={(val) => setValue(val)}

    />
  );
};

export default SearchComponent;
