import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  const [link, setLink] = useState(
    JSON.parse(localStorage.getItem("link")) || "main"
  );
  useEffect(() => {
    const linkInStarage = localStorage.getItem("link");
    if (linkInStarage) {
      setLink(linkInStarage);
    }
  }, []);
  const handleChangeLink = (param) => {
    localStorage.removeItem("link");
    const json = JSON.stringify(param);
    localStorage.setItem("link", json);
    setLink(param);
  };

  const setClass = (param) => {
    const newLink = JSON.parse(localStorage.getItem("link"));

    if (param === newLink) {
      return "nav-link active";
    } else {
      return "nav-link";
    }
  };

  return (
    <>
      <ul className="nav nav-pills nav-tabs nav-fill justify-content-center m-2">
        <li
          className="nav-item"
          onClick={() => {
            handleChangeLink("main");
          }}
        >
          <Link className={setClass("main")} aria-current="page" to="/posts">
            Главная
          </Link>
        </li>
        <li
          className="nav-item"
          onClick={() => {
            handleChangeLink("about");
          }}
        >
          <Link className={setClass("about")} aria-current="page" to="/aboutUs">
            О нас
          </Link>
        </li>
        <li
          className="nav-item"
          onClick={() => {
            handleChangeLink("contact");
          }}
        >
          <Link
            className={setClass("contact")}
            aria-current="page"
            to="/contakts"
          >
            Контакты
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MainNavigation;
