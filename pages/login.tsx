import JoinLayout from "../layout/join-layout";
import Router, { useRouter } from "next/router";
import { RootState, useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import { setEmail } from "../store/reducers/user-reducer";


const Login = () => {
  const router = useRouter();
  const user = useSelector((state:RootState) => state.user);
  const dispatch = useAppDispatch();

  const handleClickLogin =() => {
    dispatch(setEmail("abcdefg@nkakao.com"))
    router.push("/nickname");
   
    
  };
  return (
    <div>
      <JoinLayout>
        <div className="loginButton">
          <button type="button" onClick={handleClickLogin}>
            <span>카카오 로그인</span>
          </button>
          <button type="button" onClick={handleClickLogin}>
            <span>네이버 로그인</span>
          </button>
          <button type="button" onClick={handleClickLogin}>
            <span>구글 로그인</span>
          </button>
        </div>
      </JoinLayout>
    </div>
  );
};

export default Login;
