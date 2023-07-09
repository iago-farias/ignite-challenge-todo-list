import { PlusCircle } from "@phosphor-icons/react";

import styles from './CreateNewTask.module.css';

export function CreateNewTask(){
  return (
    <div className={styles.container} >
      <input 
        className={styles.taskInput}
        type="text"
        placeholder='Adicione uma nova tarefa'
      />
      <button className={styles.createButton}>
        Criar
        <PlusCircle size={18}/>
      </button>
    </div>
  )
}