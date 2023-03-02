import Autocomplete from "react-autocomplete";
import React, { useState } from "react";
import { RootState, useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import { setKeyword, setModalAlert } from "../store/reducers/state-reducer";
import Wordinterface from "../interface/word-interface";
import { useEffect } from "react";
import axios from "axios";
import { addOften, setOften } from "../store/reducers/user-reducer";
import autocompleteFilter from "../helpers/autocomplete-filter";

const SearchComponent = () => {
  const state = useSelector((state: RootState) => state.state);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const [words, setWords] = useState<Wordinterface[]>([]);
  const [value, setValue] = useState("");
  const [eventOnce, setEventOnce] = useState(true);
  const [oldValue, setOldValue] = useState("");

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
  const handleOnkeypress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code == "Enter") {
      if (oldValue === value) {
        setEventOnce(true);
      }
      if (eventOnce) {
        autocompleteFilter(
          value,
          user.often,
          dispatch,
          addOften,
          setModalAlert
        );
        setOldValue(value);
        setEventOnce(false);
      }
    } else {
      setEventOnce(true);
    }
  };

  return (
    <Autocomplete
      getItemValue={(item) => item.label}
      items={words}
      renderItem={(item, isHighlighted) => (
        <div
          style={{ background: isHighlighted ? "lightgray" : "white" }}
          key={item.label}
        >
          {item.label}
        </div>
      )}
      renderInput={(props) => {
        return (
          <input
            {...props}
            onKeyDown={handleOnkeypress}
            type="search"
            placeholder="단어를 검색하세요."
          />
        );
      }}
      value={value}
      onChange={handleKeypress}
      onSelect={(val) => setValue(val)}
    />
  );
};

export default SearchComponent;
