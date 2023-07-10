import { CreateNewTask } from "./components/CreateNewTask"
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks";

import styles from "./App.module.css";

function App() {
  return (
   <>
    <Header />
    <div className={styles.wrapper} >
      <CreateNewTask />
      <Tasks />
    </div>
   </>
  )
}

export default App
