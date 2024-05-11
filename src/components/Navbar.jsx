import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState, useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { GlobalContext } from "../context/useGlobal";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

function themeFormLocalStorage() {
  const storedTheme = localStorage.getItem("theme");
  return storedTheme in themes ? storedTheme : themes.winter;
}

function Navbar() {
  const { dispatch, user } = useContext(GlobalContext);
  const [currentTheme, setCurrentTheme] = useState(themeFormLocalStorage());
  const [isDarkMode, setIsDarkMode] = useState(currentTheme === themes.dracula);

  const handleMode = () => {
    setCurrentTheme((prev) => {
      const newTheme = prev === themes.winter ? themes.dracula : themes.winter;
      setIsDarkMode(newTheme === themes.dracula);
      return newTheme;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const handleLogout = () => { 
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOG_OUT" });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="bg-base-300 mb-10">
      <div className="navbar align-content">
        <div className="navbar-start">
          <Link to="/" className="font-extrabold">
            Kitchen App
          </Link>
        </div>
        <div className="navbar-end mr-5 ">
          <label className="swap swap-rotate mr-9">
            <input type="checkbox" checked={isDarkMode} onChange={handleMode} />
            <FaSun className="swap-on fill-current w-5 h-5" />
            <FaMoon className="swap-off fill-current w-5 h-5" />
          </label>
          {user && <p className="font-bold">{user.displayName}</p>}

          <div className="dropdown ml-5 rounded-lg">
            <div tabIndex={0} role="button">
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user.photoURL} />
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-48 mt-2"
            >
              <NavLinks />
            </ul>
          </div>
          <button className="btn btn-warning ml-5" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
