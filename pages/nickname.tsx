import JoinLayout from "../layout/join-layout";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RootState, useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import stateReducer from "../store/reducers/state-reducer";
import { setModalConfirm } from "../store/reducers/state-reducer";
import userReducer, {
  setEmail,
  setNickname,
} from "../store/reducers/user-reducer";
import {
  loginInitialState,
  setConvention,
} from "../store/reducers/convention-reducer";
import axios from "axios";

const Nickname = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  const state = useSelector((state: RootState) => state.state);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const [check, setCheck] = useState(false);

  const handleClickLogin = () => {
    dispatch(setNickname(value));

    if (check === false) {
      dispatch(setModalConfirm("중복을 확인해주세요"));
    } else {
      dispatch(setConvention(loginInitialState));
      Router.push("/");
    }
  };
  const handleClickCheck = () => {
    setCheck(true);
  };
  useEffect(() => {
    if (router.query.code) {
      console.log(router.query.code);
      axios
        .post(
          "https://kauth.kakao.com/oauth/token",
          {
            grant_type: "authorization_code",
            client_id: "7270da306046f8c3d3e7ad1ba11c2354",
            redirect_uri: "http://localhost:3000/nickname",
            code: router.query.code,
            client_secret: "aiWYTyMMHIGO3sM6avJQeYTyanypX0fq",
          },
          {
            headers: {
              "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          }
        )
        .then(function (res) {
          console.log(res);
          window.Kakao.Auth.setAccessToken(res.data.access_token);
          window.Kakao?.API?.request({
            url: "/v2/user/me",
            data: {
              property_keys: ["kakao_account.email", "kakao_account.gender"],
            },
          }).then(function (res: any) {
            console.log(res.kakao_account.email);
            dispatch(setEmail(res.kakao_account.email));
          });
        });
    }
    if (window.location.href.includes("access_token")) {
      const naverLogin = new window.naver.LoginWithNaverId({
        clientId: "BMdY7jIrDUpcMpKkB06t",
        callbackUrl: "http://localhost:3000/nickname",
        callbackHandle: true,
      });
      naverLogin.init();

      naverLogin.getLoginStatus(function (status: any) {
        if (status) {
          console.log(naverLogin.user.email);
          dispatch(setEmail(naverLogin.user.email));
        }
      });
    }


  }, [router.query]);

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
          <button type="button" onClick={handleClickCheck}>
            중복확인
          </button>
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
