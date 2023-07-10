import { TaskType } from "../App";
import { EmptyTasksFeedback } from "./EmptyTasksFeedback";
import { Task } from "./Task";

import styles from "./Tasks.module.css";

export interface TaskProps {
  tasks: TaskType[];
  finishTask: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
}

export function Tasks({ tasks, finishTask, deleteTask } : TaskProps){
  const totalTasksCount = tasks.length;
  const finishedTasksCount = tasks.filter(task => task.finished).length; 

  return(
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <span className={styles.createdTasks}>Tarefas criadas</span>
          <span className={styles.tasksCount}>{totalTasksCount}</span>
        </div>

        <div>
          <span className={styles.finishedTasks}>Concluídas</span>
          <span className={styles.tasksCount}>
            {totalTasksCount > 0 ? `${finishedTasksCount} de ${totalTasksCount}` : 0}
          </span>
        </div>
      </div>
      {
        tasks.length === 0 ? (
          <EmptyTasksFeedback />
        ) : (
          <div className={styles.taskList}>
            {
              tasks.map(task => (
                <Task 
                  task={task}
                  finishTask={finishTask}
                  deleteTask={deleteTask}
                />
              ))
            }
          </div>
        )
      }
    </div>
  );
}