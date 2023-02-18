import React from "react";
import DarkmodeComponent from "../components/darkmode-component";
import { useRouter } from "next/router";
import LogoutComponent from "../components/logout-component";
import LoginComponent from "../components/login-component";
import { RootState, useAppDispatch } from "../store";
import { Selector, useSelector } from "react-redux";



const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const user = useSelector((state:RootState) => state.user)
  const dispatch = useAppDispatch();


  const handleClickLogin = () => {
    router.push("/login");
  };
  const handleCLickBase=()=>{
    router.push("/")
  }

  return (
    <div >
      <div className="navBar">
        <h1 onClick={handleCLickBase}>NamingConvention</h1>
        <DarkmodeComponent />
      </div>
      <div className="container">
        {user.email === '' ?
        <LoginComponent/> :
        <LogoutComponent/>}
        <div className="contents">{children}</div>
      </div>
    </div>
  );
};

export default BaseLayout;
