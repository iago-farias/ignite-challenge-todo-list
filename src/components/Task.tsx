import { Trash } from "@phosphor-icons/react";

import { TaskType } from "./Tasks"

import styles from "./Task.module.css";

interface TaskProps {
  task: TaskType;
} 

export function Task({ task } : TaskProps){
  return(
    <div className={styles.task}>

      <label className={styles.checkboxContainer}>
        <input type="checkbox"  />
        <span className={styles.checkbox}></span>
      </label>

      <p>{task.description}</p>

      <button className={styles.deleteButton}>
        <Trash />
      </button>
    </div>
  )
}