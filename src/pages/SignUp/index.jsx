import * as yup from "yup";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  nome: yup.string()
    .required("Informe seu nome"),
  email: yup.string()
    .required("Informe seu e-mail")
    .email("Insira um e-mail válido."),
  senha: yup.string()
    .required("Informe a senha"),
});

export function SignUp() {
  const navigation = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  function handleClick() {
    navigation('/');
  };

  function handleCreate(data) {
    if (data) {
      alert("Conta criada com sucesso!!");
      navigation('/');
    }
    // console.log(data);
  };

  return (
    <div className={styles.container}>
      <span className={styles.title}>token<span style={{ fontWeight: "bold" }}>lab</span></span>

      <div className={styles.box}>
        <span className={styles.subtitle}>Crie sua conta</span>

        <form onSubmit={handleSubmit(handleCreate)} className={styles.form}>
          <input
            type="text"
            placeholder="Nome"
            {...register("nome")}
            className={styles.input}
          />
          <span style={{ color: "red" }}>{errors.nome?.message}</span>

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
            {...register("senha")}
            className={styles.input}
          />
          <span style={{ color: "red" }}>{errors.senha?.message}</span>

          <button type="submit" className={styles.button}>Criar e acessar</button>
        </form>

        <div className={styles.footer}>
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