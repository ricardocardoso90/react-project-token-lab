import styles from "./styles.module.css";

// eslint-disable-next-line react/prop-types
export function Form({ handleClick, setNewTasks, newTasks }) {
  return (
    <div className={styles.form}>
      <input
        type="text"
        className={styles.input}
        value={newTasks}
        onChange={e => setNewTasks(e.target.value)}
        placeholder="Digite uma tarefa"
      />

      <div
        onClick={handleClick}
        className={styles.button}
      >
        <button className={styles.buttonText} >+</button>
      </div>
    </div>
  )
}