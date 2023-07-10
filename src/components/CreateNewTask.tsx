import { useState } from 'react';
import { PlusCircle } from "@phosphor-icons/react";

import styles from './CreateNewTask.module.css';

interface CreateNewTaskProps {
  createNewTask: (taskDescription: string) => void;
}

export function CreateNewTask({ createNewTask } : CreateNewTaskProps){
  const [newTaskDescription, setNewTaskDescription] = useState("");

  function handleCreateNewTask(){
    createNewTask(newTaskDescription);
    setNewTaskDescription("");
  }

  return (
    <div className={styles.container}>
      <input 
        className={styles.taskInput}
        type="text"
        placeholder='Adicione uma nova tarefa'
        value={newTaskDescription}
        onChange={e => setNewTaskDescription(e.target.value)}
      />
      <button 
        className={styles.createButton} 
        onClick={handleCreateNewTask}
      >
        Criar
        <PlusCircle size={18}/>
      </button>
    </div>
  )
}