// import { useState } from "react";
import { useContext, useState } from "react";
import styles from "./slyles.module.css";

import { Form } from "../../components/Form";
import { Tasks } from "../../components/Tasks";
import { AuthContext } from "../../Context";

export function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState('');
  const [storage, setStorage] = useState([]);

  const { newDate } = useContext(AuthContext);

  function handleTasksAdd() {
    if (tasks.includes(newTasks)) {
      return alert("Adicione um evento diferente.");
    };

    newTasks === ""
      ? alert("Digite um evento.")
      : setTasks(prevState => [...prevState, newTasks]);

    setNewTasks('');

    const newStorage = localStorage.setItem("mydate", newDate());
    setStorage(prev => [...prev, newStorage]);
  };

  function handleTaskEdit(item) {
    console.log(item);
  }

  function handleTasksRemove(item) {
    setTasks(prevState => prevState.filter(tasks => tasks !== item));
  };

  return (
    <div className={styles.container}>
      <span className={styles.title}>token
        <span style={{ fontWeight: "bold" }}>lab</span>
      </span>

      <div className={styles["box-games"]}>
        <span className={styles.subtitle}>Lista de eventos</span>
        <Form
          newTasks={newTasks}
          setNewTasks={setNewTasks}
          handleClickAdd={handleTasksAdd}
        />

        {tasks.map((item) => (
          <Tasks
            key={item}
            tasks={item}
            handleClickEdit={() => handleTaskEdit(item)}
            handleClickDel={() => handleTasksRemove(item)}
          />
        ))}
      </div>
    </div>
  )
};