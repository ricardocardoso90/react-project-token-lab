import styles from "./styles.module.css";

export function Form() {
  return (
    <div className={styles.form}>
      <input
        type="text"
        placeholder="Digite alguma coisa..."
        className={styles.input}
      />

      <button className={styles.button}>+</button>
    </div>
  )
}