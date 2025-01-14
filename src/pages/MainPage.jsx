import styles from "./styles/MainPage.module.scss";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";
import TodoCard from "../components/TodoCard";
import PageContainer from "../components/PageContainer";
import { useLangContext } from "../contexts/LangContext";

function MainPage() {
  const { language } = useLangContext();

  const {
    data: todos,
    loading: fetchLoading,
    error: fetchError,
    fetchData,
  } = useFetch("https://crudapi.co.uk/api/v1/todos", "GET", []);
  const {
    sendRequest,
    loading: requestLoading,
    error: requestError,
  } = useRequest();

  return (
    <PageContainer
      loading={fetchLoading || requestLoading}
      error={fetchError || requestError}
    >
      <div className={styles["main-page"]}>
        {todos.length > 0 ? (
          <ul>
            <h1>{language["myTodos"]}</h1>
            {todos.map((todo) => (
              <TodoCard
                key={todo["_uuid"]}
                id={todo["_uuid"]}
                fName={todo.fName}
                lName={todo.lName}
                description={todo.description}
                isCompleted={todo.isCompleted}
                validUntill={todo.validUntill}
                onDelete={() =>
                  sendRequest(
                    `https://crudapi.co.uk/api/v1/todos/${todo["_uuid"]}`,
                    "DELETE"
                  )
                    .then(() => fetchData())
                    .catch((err) => console.log(err))
                }
              />
            ))}
          </ul>
        ) : (
          <h1>{language["noTasksAvailable"]}</h1>
        )}
      </div>
    </PageContainer>
  );
}

export default MainPage;
