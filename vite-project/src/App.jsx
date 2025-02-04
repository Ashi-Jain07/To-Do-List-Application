import { tasks } from "./utils/itemData";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";
import "./index.css"

function App() {


  return (
    <>
      <div className="app-div">
        <Header />
        <ToDoList todotask={tasks} />
      </div>
    </>
  )
}

export default App
