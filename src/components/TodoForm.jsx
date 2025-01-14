import { useLangContext } from "../contexts/LangContext";
import styles from "./styles/TodoForm.module.scss";
import { useRef } from "react";

function TodoForm({
  title,
  onFormSubmit,
  fName,
  lName,
  description,
  isCompleted,
  validUntill,
}) {
  const { language } = useLangContext();
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const descriptionRef = useRef(null);
  const isCompletedRef = useRef(null);
  const validUntillRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const todo = {
      fName: firstNameRef.current.value,
      lName: lastNameRef.current.value,
      description: descriptionRef.current.value,
      isCompleted: isCompletedRef.current.checked,
      validUntill: validUntillRef.current.value,
    };

    if (
      firstNameRef.current.value &&
      lastNameRef.current.value &&
      descriptionRef.current.value &&
      validUntillRef.current.value
    )
      onFormSubmit(todo);
    else alert("Please Fill Form Information!");
  };

  return (
    <form className={styles["todo-form"]} onSubmit={onSubmit}>
      <h1>{title}</h1>

      <div>
        <input
          ref={firstNameRef}
          type="text"
          placeholder={language["firstName"]}
          defaultValue={fName}
        />
        <input
          ref={lastNameRef}
          type="text"
          placeholder={language["lastName"]}
          defaultValue={lName}
        />
        <input
          ref={descriptionRef}
          type="text"
          placeholder={language["todo"]}
          defaultValue={description}
        />
        <div>
          <p>{language["completed"]}?</p>
          <input
            ref={isCompletedRef}
            type="checkbox"
            defaultChecked={isCompleted}
          />
        </div>

        <input ref={validUntillRef} type="date" defaultValue={validUntill} />
      </div>

      <button type="submit">{language["create"]}</button>
    </form>
  );
}

export default TodoForm;
