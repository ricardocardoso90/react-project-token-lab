import styles from "./styles.module.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yupResolver.object({
  email: yup.string().required("Informe o E-mail"),
  senha: yup.string().required("Informe a Senha"),
}).required();

export function Input(type, errorMessage) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  return (
    <div>
      <input
        type={type}
        placeholder="E-mail"
        className={styles.input}
        {...register("email")}
      />
      <span style={{ color: "red" }}>{errorMessage}</span>
    </div>
  )
}