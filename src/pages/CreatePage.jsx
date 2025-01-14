import styles from "./styles/CreatePage.module.scss";
import { useNavigate } from "react-router-dom";
import useRequest from "../hooks/useRequest";
import TodoForm from "../components/TodoForm";
import PageContainer from "../components/PageContainer";
import { useLangContext } from "../contexts/LangContext";

function CreatePage() {
  const { language } = useLangContext();
  const navigate = useNavigate();
  const { sendRequest, loading, error } = useRequest();

  return (
    <PageContainer loading={loading} error={error}>
      <div className={styles["create-page"]}>
        <TodoForm
          title={language["newTodo"]}
          onFormSubmit={(todo) =>
            sendRequest("https://crudapi.co.uk/api/v1/todos", "POST", [todo])
              .then(() => navigate("/"))
              .catch((err) => console.log(err))
          }
        />
      </div>
    </PageContainer>
  );
}

export default CreatePage;
