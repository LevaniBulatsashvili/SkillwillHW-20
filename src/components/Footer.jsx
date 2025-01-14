import { useLangContext } from "../contexts/LangContext";
import styles from "./styles/Footer.module.scss";

function Footer() {
  const {language} = useLangContext()

  return (
    <div className={styles["footer"]}>
      <p>&copy; 2024 {language["allRightsReserved"]}</p>
    </div>
  );
}

export default Footer;
