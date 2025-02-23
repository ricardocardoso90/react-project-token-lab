// import { useState } from "react";
import styles from "./slyles.module.css";

import { AuthContext } from "../../Context";
import { useContext, useState } from "react";

import { Form } from "../../components/Form";
import { Tasks } from "../../components/Tasks";

export function Home() {
  const { listTasks } = useContext(AuthContext);

  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState('');

  function handleTasksAdd() {
    if (tasks.includes(newTasks)) {
      return alert("Adicione um evento diferente.");
    };

    newTasks === ""
      ? alert("Digite um evento.")
      : setTasks(prevState => [...prevState, newTasks]);

    setNewTasks('');
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
        <span className={styles.subtitle}>{listTasks}</span>
        <Form
          newTasks={newTasks}
          setNewTasks={setNewTasks}
          handleClick={handleTasksAdd}
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