import TaskList from "./Components/TaskList";
import "./Style.css";

function App() {
  return (
    <div>
      <h1>Minha Lista de Tarefas</h1>
      <TaskList task="Tarefas:" />
    </div>
  );
}

export default App;
