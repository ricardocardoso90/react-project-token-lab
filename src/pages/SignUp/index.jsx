import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export function SignUp() {
  const navigation = useNavigate();

  function handleClick() {
    navigation('/');
  }

  return (
    <div className={styles.container}>
      <span className={styles.title}>TOKENLAB</span>

      <div className={styles.box}>
        <span className={styles.subtitle}>Crie sua conta</span>

        <form className={styles.form}>
          <input className={styles.input} type="text" name="nome" placeholder="Nome" />
          <input className={styles.input} type="text" name="e-mail" placeholder="E-mail" />
          <input className={styles.input} type="password" name="senha" placeholder="Senha" />

          <button className={styles.button}>Criar e acessar</button>
        </form>

        <div className={styles.footer}>
          {/* <span className={styles.subtitle}>Ainda não tem conta?</span> */}
          <div className={styles["div-button"]}>
            <button
              onClick={handleClick}
              className={styles["button-transparent"]}>
              Voltar para o login
            </button>
          </div>
        </div>

      </div>
    </div>
  )
};