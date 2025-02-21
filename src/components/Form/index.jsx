import styles from "./styles.module.css";

export function Form() {
  return (
    <div className={styles.form}>
      <input
        type="text"
        placeholder="Digite alguma coisa..."
        className={styles.input}
      />

      <div className={styles.button}><button className={styles.buttonText}>+</button></div>
    </div>
  )
}