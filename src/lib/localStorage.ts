import { TaskType } from "../App";

export function getTasks(){
  const taskString = localStorage.getItem("tasks");

  if(!taskString){
    return [];
  }

  const tasks = JSON.parse(taskString) as TaskType[];

  return tasks;
}

export function saveTasks(newTasks: TaskType[]){
  localStorage.setItem("tasks", JSON.stringify(newTasks));
}