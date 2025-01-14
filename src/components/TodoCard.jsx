import { Link } from "react-router-dom";
import styles from "./styles/TodosCard.module.scss";
import { useLangContext } from "../contexts/LangContext";

function TodoCard({
  id,
  fName,
  lName,
  description,
  isCompleted,
  validUntill,
  onDelete,
}) {
  const { language } = useLangContext();

  return (
    <li
      className={`${styles["todos-card"]} ${
        styles[isCompleted ? "completed" : "in-progress"]
      }`}
    >
      <div>
        <h1>{description}</h1>

        <div>
          <Link to={`/edit/${id}`}>
            <span className="material-symbols-outlined">
              <span className="material-symbols-outlined">menu</span>
            </span>
          </Link>
          <button onClick={onDelete}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </div>

      <div>
        <p>
          {fName} {lName}
        </p>
        <p>
          {language["deadline"]}: {validUntill}
        </p>
      </div>
    </li>
  );
}

export default TodoCard;
