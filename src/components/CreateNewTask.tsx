import { FormEvent, useState } from 'react';
import { PlusCircle } from "@phosphor-icons/react";

import styles from './CreateNewTask.module.css';

interface CreateNewTaskProps {
  createNewTask: (taskDescription: string) => void;
}

export function CreateNewTask({ createNewTask } : CreateNewTaskProps){
  const [newTaskDescription, setNewTaskDescription] = useState("");

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault();

    if(newTaskDescription.length === 0){
      return;
    }

    createNewTask(newTaskDescription);
    setNewTaskDescription("");
  }

  return (
    <form onSubmit={handleCreateNewTask}>
      <div className={styles.container}>
        <input
          className={styles.taskInput}
          type="text"
          placeholder='Adicione uma nova tarefa'
          value={newTaskDescription}
          onChange={e => setNewTaskDescription(e.target.value)}
          required
        />
        <button
          type='submit'
          className={styles.createButton}
        >
          Criar
          <PlusCircle size={18} />
        </button>
      </div>
    </form>
  )
}