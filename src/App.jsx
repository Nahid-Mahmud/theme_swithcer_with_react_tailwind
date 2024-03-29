import { useState } from "react";
import { getThemeFromLocalStoragae } from "./utils/getThemeFromLocalStoragae";
import { useEffect } from "react";

function App() {
  // getting theme from local storage from utility function

  const themeData = getThemeFromLocalStoragae();
  console.log(themeData);

  // creating state for theme

  const [theme, setTheme] = useState(themeData);

  // function to switch theme
  const themeSwitcher = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // useEffect for dom manupulation and setting local storage value

  useEffect(() => {
    if (theme === "dark") {
      // if theme is dark then add dark class to document element
      document.documentElement.classList.add("dark");
    } else {
      // if theme is light then remove dark class and add light class to document element
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("_theme", theme); // setting theme value to local storage
  }, [theme]);

  return (
    <div className="flex h-screen bg-[#f2f6fa] dark:bg-[#0f172a] items-center justify-center ">
      <div className="bg-[#ffffff] dark:bg-[#0b1120] text-white  flex-1 h-96 max-w-80 drop-shadow-md rounded-md m-10">
        <div className="items-center h-full justify-center flex">
          <button
            onClick={themeSwitcher}
            className="dark:bg-[#0284c7] bg-[#0f172a] px-4 py-2 rounded-full text-xl font-medium hover:scale-110  transition duration-300 "
          >
            {" "}
            {theme === "light" ? "Switch to Dark" : "Switch to Light"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
