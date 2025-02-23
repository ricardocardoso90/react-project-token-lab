import styles from "./styles.module.css";
import { PiArticleBold, PiTrashBold } from "react-icons/pi";

// eslint-disable-next-line react/prop-types
export function Tasks({ tasks, handleClickEdit, handleClickDel }) {
  return (
    <div className={styles.container}>
      <div className={styles["container-task"]}>
        <div
          onClick={handleClickEdit}
          className={styles["button-edit"]}
        >
          <button className={styles["button-text-edit"]}><PiArticleBold size={21} /></button>
        </div>

        <span className={styles.name}>{tasks}</span>

        <div
          onClick={handleClickDel}
          className={styles["button-edit"]}
        >
          <button className={styles["button-text-del"]}><PiTrashBold size={22} /></button>
        </div>

      </div>
      <span>Data/Horário da criação do evento: 23/02/2015 às 16:50 hrs</span>
    </div>
  )
}