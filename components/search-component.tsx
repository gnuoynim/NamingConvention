import Autocomplete from "react-autocomplete";
import { useState } from "react";
import { RootState, useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import { setKeyword } from "../store/reducers/state-reducer";
import Wordinterface from "../interface/word-interface";
import { useEffect } from "react";
import axios from "axios";


const SearchComponent = () => {
  const [value, setValue] = useState("");
  const [words, setWords] = useState<Wordinterface[]>([]);
  const state = useSelector((state: RootState) => state.state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setKeyword(value));

    if (value !== "") {
      axios
        .post(
          "https://translation.googleapis.com/language/translate/v2?key=AIzaSyA876NOi1cmp5RSgEGuYVLnhwMOsq5rkTs",
          {
            q: value,
            source: "ko",
            target: "en",
          }
        )
        .then(function (response) {
          setWords(
            response.data.data.translations.map(
              (i: { translatedText: string }, index: number) => {
                return { label: i.translatedText, index } as Wordinterface;
              }
            )
          );
        });
    }
  }, [value]);

  const handleKeypress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Autocomplete
      getItemValue={(item) => item.label}
      items={words}
      renderItem={(item, isHighlighted) => (
        <div style={{ background: isHighlighted ? "lightgray" : "white" }} key={item.label}>
          {item.label}
        </div>
      )}
      renderInput={(props) => (
        <input {...props} type="search" placeholder="단어를 검색하세요."/>
      )}
      value={value}
      onChange={handleKeypress}
      onSelect={(val) => setValue(val)}
    />
  );
};

export default SearchComponent;
