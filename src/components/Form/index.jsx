import styles from "./styles.module.css";
import { PiCaretDownBold, PiPlusCircleBold } from "react-icons/pi";

// eslint-disable-next-line react/prop-types
export function Form({ handleClickAdd, setNewTasks, newTasks, handleClickConfirm }) {
  return (
    <div className={styles.form}>
      <div
        onClick={handleClickConfirm}
        className={styles["button-confirm"]}
      >
        <button
          className={styles["button-confirm-text"]}
        >
          <PiCaretDownBold size={21} />
        </button>
      </div>

      <input
        type="text"
        className={styles.input}
        value={newTasks}
        onChange={e => setNewTasks(e.target.value)}
        placeholder="Digite um evento"
      />

      <div
        onClick={handleClickAdd}
        className={styles["button-confirm"]}
      >
        <button
          className={styles["button-confirm-text"]}
        >
          <PiPlusCircleBold size={21} />
        </button>
      </div>
    </div>
  )
}