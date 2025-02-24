// import { useState } from "react";
import { useState } from "react";
import styles from "./slyles.module.css";

import { Form } from "../../components/Form";
import { Tasks } from "../../components/Tasks";

export function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState('');

  function handleTasksAdd() {
    if (tasks.includes(newTasks)) {
      return alert("Adicione um evento diferente.");
    };

    newTasks === ""
      ? alert("Digite um evento.")
      : setTasks(prevState => [...prevState, newTasks]);


    var todosArray = [...tasks];
    for (var i in todosArray) {
      if (todosArray[i].Tasks === newTasks) {
        todosArray[i].title = tasks;
      };
    };

    setNewTasks('');
  };

  function handleTaskEdit(item) {
    setNewTasks(item);
  };

  function handleTasksRemove(item) {
    // setTasks(prevState => prevState.filter(tasks => tasks !== item));

    const filtered = tasks.filter(task => task !== item);
    setTasks(filtered);
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