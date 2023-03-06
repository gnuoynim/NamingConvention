import JoinLayout from "../layout/join-layout";
import Router, { useRouter } from "next/router";
import { RootState, useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import { setEmail } from "../store/reducers/user-reducer";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
// import { google } from "googleapis";


const Login = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  const handleClickLogin = () => {
    dispatch(setEmail("abcdefg@nkakao.com"));
    router.push("/nickname");
  };

  const handleClickKaKao = () => {
    window.Kakao?.Auth.authorize({
      redirectUri: "https://kimminyoung-naming.cozyfex.com",
      scope: "account_email",
    });
  };

  const handleClickNaver = () => {
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: "BMdY7jIrDUpcMpKkB06t",
      callbackUrl: "https://kimminyoung-naming.cozyfex.com/nickname",
      callbackHandle: true,
    });
    naverLogin.init();
    location.href = naverLogin.generateAuthorizeUrl();
  };

  useEffect(() => {
    const parent = document.getElementById("google_btn");

    
    /*
    const oauth2Client = new google.auth.OAuth2(
      "929612726597-2km4n9td86u8rk6jngcsrndig4as7je7.apps.googleusercontent.com",
      "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",
      "http://localhost:3000/nickname"
    );
    const url = oauth2Client.generateAuthUrl();
    console.log(url);
    */
    

    window.google.accounts.id.initialize({
      client_id:
        "929612726597-2km4n9td86u8rk6jngcsrndig4as7je7.apps.googleusercontent.com",
      login_uri: "https://kimminyoung-naming.cozyfex.com/",
      prompt_parent_id: "ggg",
      context: "asdfasdf",
      callback: function (res: any) {
        const aa = res.credential;
        const decode = jwt_decode(aa) as any;
        dispatch(setEmail(decode.email));
        console.log(decode.email);
        router.push("/nickname");
      },
    });

    window.google.accounts.id.renderButton(parent, {
      type: "standard",
      text: "구글로그인",
      width: "300",
    });
  }, []);

  // const handleClickGoogle = () => {
  //   const btn = document.getElementById("google_btn") as HTMLDivElement;

  //   const parent = document.querySelector(
  //     "#google_btn iframe"
  //   ) as HTMLIFrameElement;
  //   (parent.querySelector('[role="button"]') as HTMLDivElement).click();
  //   console.log(parent.contentWindow);
  // };
  return (
    <div>
      <JoinLayout>
        <div className="loginButton">
          <div>
            <button type="button" onClick={handleClickKaKao}>
              <span>카카오 로그인</span>
            </button>
            <button type="button" onClick={handleClickNaver}>
              <span>네이버 로그인</span>
            </button>
            <button id="ggg" type="button">
              <span> 구글 로그인</span>
            </button>
            <div id="google_btn"></div>

            <button type="button" onClick={handleClickLogin}>
              test
            </button>
          </div>
        </div>
      </JoinLayout>
    </div>
  );
};

export default Login;
