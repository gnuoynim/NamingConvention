import React from "react";
import DarkmodeComponent from "../components/darkmode-component";
import ModalComponent from "../components/modal-component";
import Router, { useRouter } from "next/router";


const JoinLayout = ({ children }: { children: React.ReactNode }) => {

  const handleClickTitle=()=>{
    Router.push('./')
  }

  return (
    <div>
      <ModalComponent/>
      <div className="navBar">
        <h1 onClick={handleClickTitle}>NamingConvention</h1>
        <DarkmodeComponent/>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default JoinLayout;
