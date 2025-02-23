import styles from "./styles.module.css";
import { PiPencilSimpleBold, PiTrashBold } from "react-icons/pi";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
// import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function Tasks({ tasks, handleClickEdit, handleClickDel }) {
  // const [newDate, setNewDate] = useState(new Date);

  const newDateDay = format(new Date(), "EEEE", {
    locale: ptBR,
  });

  const newDate = format(new Date(), "dd/MM/yyyy", {
    locale: ptBR,
  });

  const newDateHours = format(new Date(), "H:m", {
    locale: ptBR,
  });

  return (
    <div className={styles.container}>
      <div className={styles["container-task"]}>
        <div
          onClick={handleClickEdit}
          className={styles["button-edit"]}
        >
          <button className={styles["button-text-edit"]}><PiPencilSimpleBold size={21} /></button>
        </div>

        <span className={styles.name}>{tasks}</span>

        <div
          onClick={handleClickDel}
          className={styles["button-edit"]}
        >
          <button className={styles["button-text-del"]}><PiTrashBold size={22} /></button>
        </div>

      </div>
      <span className={styles["title-task"]}>{newDateDay}, {newDate} às {newDateHours} hrs</span>
    </div>
  )
}