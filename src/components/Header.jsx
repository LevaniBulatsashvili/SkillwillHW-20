import { useLangContext } from "../contexts/LangContext";
import styles from "./styles/Header.module.scss";
import { Link } from "react-router-dom";

function Header() {
  const { language, toggleLang } = useLangContext();

  return (
    <nav className={styles["header"]}>
      <ul>
        <li>
          <Link to="/">{language["home"]}</Link>
        </li>
        <li>
          <Link to="/create">{language["create"]}</Link>
        </li>
        <li>
          <button onClick={toggleLang}>{language["lang"]}</button>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
