import { CreateNewTask } from "./components/CreateNewTask"
import { Header } from "./components/Header"

import styles from "./App.module.css";

function App() {
  return (
   <>
    <Header />
    <div className={styles.wrapper} >
      <CreateNewTask />
    </div>
   </>
  )
}

export default App
