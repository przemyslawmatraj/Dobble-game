import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import back from "../../assets/images/back.png";
import styles from "./Navbar.module.scss";

function checkPathName(pathname: string): string {
  const pathArr = pathname.split("/");
  return pathArr.includes("dobble")
    ? "MEMORY"
    : pathArr.includes("quiz")
    ? "QUIZ"
    : "";
}

function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav>
      {pathname === "/" ? (
        <img className={styles.logo} src={logo} alt="logo" />
      ) : (
        <>
          <Link className={styles.menuIcon} to="/" aria-label="Wróć do menu">
            <img src={back} alt="powrót" />
          </Link>
          <span className={styles.currentPath}>
            WSEI Games - {checkPathName(pathname)}
          </span>
        </>
      )}
    </nav>
  );
}

export default Navbar;
