import { useRouter } from "next/router";
import { useState } from "react";
import SideList from "./side-list";


const LoginComponent = () => {
  const [init, setInit] = useState("")
  const router = useRouter();
  const handleClickLogin = () => {
    router.push("/login");
  };
  const handleClickList = () => {
    router.push("/my-list");
  };

  return (
    <div className="sideBar">
      <ul>
        <li onClick={handleClickLogin}>
          <p className="login">로그인</p>
        </li>
        <li onClick={handleClickList} >
          <p className="list">List</p>
        </li>
      </ul>
      <SideList />
    </div>
  );
};

export default LoginComponent;
