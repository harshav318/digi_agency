import React, { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const element = document.documentElement; // access to html element

  // Apply initial theme setup
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.remove("light");
    } else {
      element.classList.add("light");
      element.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun onClick={() => setTheme("light")} className="text-2xl" />
      ) : (
        <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl" />
      )}
    </>
  );
};

export default DarkMode;
