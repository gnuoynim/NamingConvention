import { useRouter } from "next/router";
import Router from "next/router";
import SideList from "./side-list";
import { RootState, useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import { setEmail } from "../store/reducers/user-reducer";

const LogoutComponent = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  const handleClickLogout = () => {
    dispatch(setEmail(""));
    router.push("/");
  };

  const handleClickMyList = () => {
    router.push("./my-list");
  };

  const handleClickBookmark = () => {
    router.push("./bookmark");
  };

  return (
    <div className="sideBar">
      <div className="loginNickname">
        <span>
          <img src="img/emoji2.png" />
        </span>
        <span className="nickname">{user.nickname}</span>
      </div>
      <ul>
        <li>
          <p className="login" onClick={handleClickLogout}>
            로그아웃
          </p>
        </li>
        <li>
          <p className="myList" onClick={handleClickMyList}>
            내 리스트
          </p>
        </li>
        <li>
          <p className="bookmark" onClick={handleClickBookmark}>
            즐겨찾기
          </p>
        </li>
      </ul>
      <SideList />
    </div>
  );
};

export default LogoutComponent;
