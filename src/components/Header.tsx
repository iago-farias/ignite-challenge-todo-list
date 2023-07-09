import styles from "./Header.module.css";
import TodoLogo from "../assets/todo-logo.svg";

export function Header(){
  return(
    <div className={styles.header}>
      <img src={TodoLogo} alt="Todo list logo." />
    </div>
  );
}