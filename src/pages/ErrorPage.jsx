import { Link } from "react-router-dom";
import styles from "./styles/ErrorPage.module.scss";
import { useLangContext } from "../contexts/LangContext";

function ErrorPage({ error }) {
  const {language} = useLangContext()

  return (
    <div className={styles["error-page"]}>
      <h1>{language("An Error Has Occured")}: {error}</h1>
      <Link to="/">{language("Back To Home")}</Link>
    </div>
  );
}

export default ErrorPage;
