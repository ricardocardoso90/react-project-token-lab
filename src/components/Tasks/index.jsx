import styles from "./styles.module.css";

// eslint-disable-next-line react/prop-types
export function Tasks({ tasks, handleClick }) {
  return (
    <div className={styles.container}>
      <span className={styles.name}>{tasks}</span>

      <div
        className={styles.button}
        onClick={handleClick}
      >
        <button className={styles.buttonText}>-</button>
      </div>
    </div>
  )
}