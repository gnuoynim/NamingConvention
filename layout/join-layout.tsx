import React from "react";
import DarkmodeComponent from "../components/darkmode-component";
import ModalComponent from "../components/modal-component";

const JoinLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ModalComponent/>
      <div className="navBar">
        <h1>NamingConvention</h1>
        <DarkmodeComponent/>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default JoinLayout;
