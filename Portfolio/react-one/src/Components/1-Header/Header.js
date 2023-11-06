import { useEffect, useState } from "react";
import "./Header.css";


function Header() {
   const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ??  "dark");
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [theme]);
  return (
    <header className=" flex">
      <button
        className="menu"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <span className="icon-menu flex"></span>
      </button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Articiles</a>
          </li>
          <li>
            <a href="/"> Projects</a>
          </li>
          <li>
            <a href="/">Speaking</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          localStorage.setItem("currentMode", theme ==="dark" ? "light" : "dark")
          setTheme(localStorage.getItem("currentMode"))
        }}
        className="mode  flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {showModal && (
        <div className=" fixed">
          <ul className="Modal ">
            <li>
              {" "}
              <button
                className="icon-close"
                onClick={() => {
                  setShowModal(false);
                }}
              ></button>{" "}
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Articiles</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Speaking</a>
            </li>
            <li>
              <a href="/">Uses</a>
            </li>
          </ul>
        </div>
      )}
       
    </header>
  );
}

export default Header;
