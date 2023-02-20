import { DarkModeSwitch } from "react-toggle-dark-mode";
import React from "react";


const DarkmodeComponent = () => {
  const [isDarkMode, setDarkMode] = React.useState(false);

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
