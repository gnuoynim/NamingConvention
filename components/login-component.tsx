import { useRouter } from "next/router";
import SideList from "./side-list";


const LoginComponent = () => {
  const router = useRouter();
  const handleClickLogin = () => {
    router.push("/login");
  };
  return (
    <div className="sideBar">
      <ul>
        <li onClick={handleClickLogin}>
          <p className="login">로그인</p>
        </li>
      </ul>
      <SideList />
    </div>
  );
};

export default LoginComponent;
