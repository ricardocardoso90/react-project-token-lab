// import { useState } from "react";
import styles from "./slyles.module.css";

import { Form } from "../../components/Form";
import { Tasks } from "../../components/Tasks";

export function Home() {
  return (
    <div className={styles.container}>
      <span className={styles.title}>token<span style={{ fontWeight: "bold" }}>lab</span></span>

      <div className={styles["box-games"]}>
        <span className={styles.subtitle}>Lista de Tarefas</span>
        <Form />
        
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
      </div>
    </div>
  )
};