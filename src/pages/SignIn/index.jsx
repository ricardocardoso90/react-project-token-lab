import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export function SignIn() {
  const navigation = useNavigate();

  function handleClick() {
    navigation('/register');
  }

  return (
    <div className={styles.container}>
      <span className={styles.title}>TOKENLAB</span>

      <div className={styles.box}>
        <span className={styles.subtitle}>Acesse sua conta</span>

        <form className={styles.form}>
          <input className={styles.input} type="text" name="nome" placeholder="E-mail" />
          <input className={styles.input} type="text" name="nome" placeholder="Senha" />

          <button className={styles.button}>Acessar</button>

          <div className={styles.footer}>
            <span className={styles.subtitle}>Ainda não tem conta?</span>
            <button
              onClick={handleClick}
              className={styles.button}>
              Criar conta
            </button>
          </div>
        </form>

      </div>
    </div>
  )
};