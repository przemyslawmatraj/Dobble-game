import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import back from "../../assets/images/back.png";
import styles from "./Navbar.module.scss";
import { checkPathName } from "../../helpers/pathFunctions";

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
          {pathname === "/quiz" && (
            <img className={styles.logo} src={logo} alt="logo" />
          )}
        </>
      )}
    </nav>
  );
}

export default Navbar;
