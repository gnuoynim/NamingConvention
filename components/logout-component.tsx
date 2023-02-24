import { useRouter } from "next/router";
import Router from "next/router";
import SideList from "./side-list";
import { RootState, useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import { setEmail } from "../store/reducers/user-reducer";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const LogoutComponent = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const [img, setImg] = useState("");

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.unsplash.com/photos/?client_id=Ft-vTqCsJU0N5_SVPIllf5hsaE0grdtcjbkkF76b6UU",
      data: {},
      responseType: "json",
      headers: {
        Authorization: "Ft-vTqCsJU0N5_SVPIllf5hsaE0grdtcjbkkF76b6UU",
      },
    }).then((response) => {
      const img = response.data;
      console.log(img);
      setImg(
        img.map((i: any) => {
          return i.urls.small;
        })
      );
      console.log(img[0].urls.small);
    });
  }, []);

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
        <img src={img} />
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
