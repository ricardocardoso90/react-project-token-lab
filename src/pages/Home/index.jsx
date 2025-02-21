// import { useState } from "react";
import styles from "./slyles.module.css";

import { Form } from "../../components/Form";
import { Tasks } from "../../components/Tasks";

export function Home() {
  return (
    <div className={styles.container}>
      <h2 style={{ marginTop: 50, marginBottom: 50 }}>tokenLab</h2>

      <div className={styles["box-games"]}>
        <h2>Lista de Tarefas</h2>
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