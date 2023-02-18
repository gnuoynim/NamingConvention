import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";
import React from "react";
import { ReactDOM } from "react";

const DarkmodeComponent = () => {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);

    const theme = localStorage.getItem("data-theme");
    if (theme == "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else if (theme == "") {
      document.documentElement.setAttribute("data-theme", "light");
    } else if (theme == "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    console.log(theme);
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
