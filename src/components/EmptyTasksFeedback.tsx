import { ClipboardText } from "@phosphor-icons/react";

import styles from "./EmptyTasksFeedback.module.css";

export function EmptyTasksFeedback(){
  return(
    <div className={styles.wrapper}>
      <div className={styles.emptyTasksFeedback}>
        <ClipboardText size={56}/>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}