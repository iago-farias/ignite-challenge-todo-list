import { Trash } from "@phosphor-icons/react";

import styles from "./Task.module.css";
import { TaskType } from "../App";

interface TaskProps {
  task: TaskType;
  finishTask: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
} 

export function Task({ task, deleteTask, finishTask } : TaskProps){
  const isFinished = task.finished;

  function handleFinishTask(){
    finishTask(task.id);
  }

  function handleDeleteTask(){
    deleteTask(task.id);
  }

  return(
    <div className={styles.task}>

      <label className={styles.checkboxContainer} onClick={handleFinishTask}>
        <input type="checkbox" checked={isFinished} />
        <span className={styles.checkbox}></span>
      </label>

      <p className={isFinished ? styles.finishedTaskText : ""}>
        {task.description}
      </p>

      <button 
        className={styles.deleteButton}
        onClick={handleDeleteTask}
      >
        <Trash />
      </button>
    </div>
  )
}