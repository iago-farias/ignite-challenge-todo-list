import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

import { CreateNewTask } from "./components/CreateNewTask"
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks";

import styles from "./App.module.css";
import { getTasks, saveTasks } from "./lib/localStorage";

export interface TaskType {
  id: string;
  description: string;
  finished: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    const savedTasks = getTasks();

    setTasks(savedTasks);
  }, []);

  function createNewTask(taskDescription: string){
    const newTask = {
      id: uuidv4(),
      description: taskDescription,
      finished: false
    }

    setTasks(state => {
      const newTasks = [...state, newTask];

      saveTasks(newTasks);

      return newTasks;
    });
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
    saveTasks(newTasks);
  }

  function deleteTask(taskId: string){
    const taskWithoutDeletedTask = tasks.filter(task => task.id !== taskId);

    setTasks(taskWithoutDeletedTask);
    saveTasks(taskWithoutDeletedTask);
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
