import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthContext } from "../../Context";

const schema = yup.object({
  email: yup.string()
    .required("Informe o E-mail")
    .email("Insira um e-mail válido."),
  senha: yup.string().required("Informe a Senha"),
});

export function SignIn() {
  const navigation = useNavigate();
  const { isLoadedRoutes } = useContext(AuthContext);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  function handleClickHome() {
    isLoadedRoutes();
  };

  function handleClick() {
    navigation('/register');
  }

  return (
    <div className={styles.container}>
      <span className={styles.title}>token<span style={{ fontWeight: "bold" }}>lab</span></span>

      <div className={styles.box}>
        <span className={styles.subtitle}>Acessar sua conta</span>

        <form onSubmit={handleSubmit(handleClickHome)} className={styles.form}>
          <input
            type="text"
            placeholder="E-mail"
            {...register("email")}
            className={styles.input}
          />
          <span style={{ color: "red" }}>{errors.email?.message}</span>

          <input
            type="password"
            placeholder="Senha"
            {...register('senha')}
            className={styles.input}
          />
          <span style={{ color: "red" }}>{errors.senha?.message}</span>

          <button type="submit" className={styles.button}>Acessar</button>
        </form>

        <div className={styles.footer}>
          <h2 className={styles.subtitle}>Ainda não tem conta?</h2>

          <div className={styles["div-button"]}>
            <button
              onClick={handleClick}
              className={styles["button-transparent"]}>
              Criar conta
            </button>
          </div>
        </div>

      </div>
    </div>
  )
};