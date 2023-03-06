import { DarkModeSwitch } from "react-toggle-dark-mode";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store";


const DarkmodeComponent = () => {
  const darkmode = useSelector((state: RootState) => state.darkmode);
  const dispatch = useAppDispatch();
  const [isDarkMode, setDarkMode] = React.useState(false);
  const [mode, setMode] = useState(true);


  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    const body = document.getElementsByTagName("body")[0];
    if (isDarkMode == true) {
      body.setAttribute("data-theme", "light");
    } else {
      body.setAttribute("data-theme", "dark");
    }
  };

  return (
    <div className="darkMode">
      <DarkModeSwitch
        style={{ marginBottom: "2rem", width: "40px", height: "70px" }}
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={120}
      />
    </div>
  );
};

export default DarkmodeComponent;
