import styles from "./styles/EditPage.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";
import TodoForm from "../components/TodoForm";
import PageContainer from "../components/PageContainer";
import { useLangContext } from "../contexts/LangContext";

function EditPage() {
  const { language } = useLangContext();
  const params = useParams();
  const navigate = useNavigate();
  const {
    data: todo,
    loading: fetchLoading,
    error: fetchError,
  } = useFetch(`https://crudapi.co.uk/api/v1/todos/${params.todoId}`, "GET");
  const {
    sendRequest,
    loading: requestLoading,
    error: requestError,
  } = useRequest();

  return (
    <PageContainer
      loading={(fetchLoading || requestLoading) && !todo}
      error={fetchError || requestError}
    >
      {todo && (
        <div className={styles["edit-page"]}>
          <TodoForm
            title={language["editTodo"]}
            onFormSubmit={(todo) =>
              sendRequest(
                `https://crudapi.co.uk/api/v1/todos/${params.todoId}`,
                "PUT",
                todo
              )
                .then(() => navigate("/"))
                .catch((err) => console.log(err))
            }
            fName={todo.fName}
            lName={todo.lName}
            description={todo.description}
            isCompleted={todo.isCompleted}
            validUntill={todo.validUntill}
          />
        </div>
      )}
    </PageContainer>
  );
}

export default EditPage;
