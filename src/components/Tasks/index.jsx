import { useContext } from "react";
import styles from "./styles.module.css";
import { PiPencilSimpleBold, PiTrashBold } from "react-icons/pi";
import { AuthContext } from "../../context";

// eslint-disable-next-line react/prop-types
export function Tasks({ tasks, handleClickEdit, handleClickDel }) {
  // const newDateStorage = localStorage.getItem("mydate");
  const { newDate } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <div className={styles["container-task"]}>
        <div
          onClick={handleClickEdit}
          className={styles["button-edit"]}
        >
          <button
            className={styles["button-text-edit"]}
          >
            <PiPencilSimpleBold size={21} />
          </button>
        </div>

        <span className={styles.name}>{tasks}</span>

        <div
          onClick={handleClickDel}
          className={styles["button-edit"]}
        >
          <button
            className={styles["button-text-del"]}
          >
            <PiTrashBold size={22} />
          </button>
        </div>

      </div>
      <span className={styles["title-task"]}>{newDate()} hrs</span>
    </div>
  )
}