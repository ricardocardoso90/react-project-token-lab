import styles from "./styles.module.css";

export function Tasks() {
  return (
    <div className={styles.container}>
      <span className={styles.name}>Lista de Tarefas</span>

      <div className={styles.button}><button className={styles.buttonText}>-</button></div>
    </div>
  )
}