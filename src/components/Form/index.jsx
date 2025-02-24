import styles from "./styles.module.css";
import { PiPlusCircleBold } from "react-icons/pi";

// eslint-disable-next-line react/prop-types
export function Form({ handleClickAdd, setNewTasks, newTasks }) {
  return (
    <div className={styles.form}>
      <input
        type="text"
        className={styles.input}
        value={newTasks}
        onChange={e => setNewTasks(e.target.value)}
        placeholder="Digite um evento"
      />

      <div
        onClick={handleClickAdd}
        className={styles.button}
      >
        <button className={styles.buttonText} ><PiPlusCircleBold size={22} color="white" /></button>
      </div>
    </div>
  )
}