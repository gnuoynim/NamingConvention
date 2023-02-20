import JoinLayout from "../layout/join-layout";
import Router, { useRouter } from "next/router";
import { useState } from "react";
import { RootState, useAppDispatch } from "../store";
import { ReactReduxContext, useSelector } from "react-redux";
import userReducer, { setNickname } from "../store/reducers/user-reducer";


const Nickname = () => {
  const router =useRouter();
  const user = useSelector((state:RootState)=> state.user)
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");


  const handleClickLogin=()=>{
    dispatch(setNickname(value));
    Router.push("/")
  }


  return (
    <JoinLayout>
      <div className="nicknameBox">
        <label>*닉네임을 입력해주세요</label>
        <div className="checkInput">
          <input type="text" value={value} onChange={(e) =>setValue(e.target.value)}/>
          <button type="button">중복확인</button>
        </div>
        <button type="button" className="enrollButton" onClick={handleClickLogin}>등록</button>
      </div>
    </JoinLayout>
  );
};

export default Nickname;
