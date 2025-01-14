import styles from "./styles/PageContainer.module.scss";
import Spinner from "../components/Spinner";
import ErrorPage from "../pages/ErrorPage";

function PageContainer({ children, loading, error }) {
  return (
    <div className={styles["page-container"]}>
      {loading && <Spinner />}
      {error && <ErrorPage error={error.message} />}
      {!loading && !error && <>{children}</>}
    </div>
  );
}

export default PageContainer;
