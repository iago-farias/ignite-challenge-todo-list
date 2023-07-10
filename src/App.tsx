import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { CreateNewTask } from "./components/CreateNewTask"
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks";

import styles from "./App.module.css";

export interface TaskType {
  id: string;
  description: string;
  finished: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  function createNewTask(taskDescription: string){
    setTasks(state => [...state, {
      id: uuidv4(),
      description: taskDescription,
      finished: false
    }]);
  }

  function finishTask(taskId: string){
    const newTasks = tasks.map(task => {
      if(task.id !== taskId){
        return task;
      }
      
      task.finished = !task.finished;

      return task;
    });

    setTasks(newTasks);
  }

  function deleteTask(taskId: string){
    const taskWithoutDeletedTask = tasks.filter(task => task.id !== taskId);

    setTasks(taskWithoutDeletedTask);
  }

  return (
   <>
    <Header />
    <div className={styles.wrapper} >
      <CreateNewTask 
        createNewTask={createNewTask}
      />
      <Tasks 
        tasks={tasks} 
        finishTask={finishTask} 
        deleteTask={deleteTask} 
      />
    </div>
   </>
  )
}

export default App
