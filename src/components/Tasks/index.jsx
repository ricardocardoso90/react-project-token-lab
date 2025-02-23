import styles from "./styles.module.css";
import { PiArticleBold, PiTrashBold } from "react-icons/pi";

// eslint-disable-next-line react/prop-types
export function Tasks({ tasks, handleClickEdit, handleClickDel }) {
  return (
    <div className={styles.container}>
      <div
        onClick={handleClickEdit}
        className={styles.button}
      >
        <button className={styles.buttonText}><PiArticleBold size={21} /></button>
      </div>

      <span className={styles.name}>{tasks}</span>

      <div
        onClick={handleClickDel}
        className={styles.button}
      >
        <button className={styles.buttonText}><PiTrashBold size={22} /></button>
      </div>

    </div>
  )
}