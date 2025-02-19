import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export function SignIn() {
  const navigation = useNavigate();

  function handleClickAcessar() {
    navigation('/home');
  };

  function handleClickRegister() {
    navigation('/register');
  }

  return (
    <div className={styles.container}>
      <span className={styles.title}>token<span style={{ fontWeight: "bold" }}>lab</span></span>

      <div className={styles.box}>
        <span className={styles.subtitle}>Acessar sua conta</span>

        <form className={styles.form}>
          <input className={styles.input} type="text" name="e-mail" placeholder="E-mail" />
          <input className={styles.input} type="password" name="senha" placeholder="Senha" />

          <button
            onClick={handleClickAcessar}
            className={styles.button}>
            Acessar
          </button>
        </form>

        <div className={styles.footer}>
          <span className={styles.subtitle}>Ainda não tem conta?</span>
          <div className={styles["div-button"]}>
            <button
              onClick={handleClickRegister}
              className={styles["button-transparent"]}>
              Criar conta
            </button>
          </div>
        </div>

      </div>
    </div>
  )
};