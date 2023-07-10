import { EmptyTasksFeedback } from "./EmptyTasksFeedback";
import { Task } from "./Task";

import styles from "./Tasks.module.css";

export interface TaskType {
  id: number;
  description: string;
  finished: boolean;
}

const tasks: TaskType[] = [{
  id: 1,
  description: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  finished: false
},
{
  id: 2,
  description: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  finished: true
}
];

export function Tasks(){
  return(
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <span className={styles.createdTasks}>Tarefas criadas</span>
          <span className={styles.tasksCount}>0</span>
        </div>

        <div>
          <span className={styles.finishedTasks}>Concluídas</span>
          <span className={styles.tasksCount}>0</span>
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
                />
              ))
            }
          </div>
        )
      }
    </div>
  );
}