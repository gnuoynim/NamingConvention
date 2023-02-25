import JoinLayout from "../layout/join-layout";
import Router, { useRouter } from "next/router";
import { useState } from "react";
import { RootState, useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import userReducer, { setNickname } from "../store/reducers/user-reducer";

const Nickname = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const [check, setCheck] = useState(false);

  const handleClickLogin = () => {
    dispatch(setNickname(value));

    if (check == false) {
      alert("중복을 확인해주세요");
    } else {
      Router.push("/");
    }
  };
  const handleClickCheck = () => {
    setCheck(true);
  };

  return (
    <JoinLayout>
      <div className="nicknameBox">
        <label>*닉네임을 입력해주세요</label>
        <div className="checkInput">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="button" onClick={handleClickCheck}>중복확인</button>
        </div>
        <button
          type="button"
          className="enrollButton"
          onClick={handleClickLogin}
        >
          등록
        </button>
      </div>
    </JoinLayout>
  );
};

export default Nickname;
