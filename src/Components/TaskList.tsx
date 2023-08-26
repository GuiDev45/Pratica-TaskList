import React from "react";
import TaskItem from "./TaskItem";

function TaskList() {
  const [tasks, setTasks] = React.useState<string[]>([]); // Estado das tarefas
  const [newTask, setNewTask] = React.useState<string>(""); // Nova tarefa a ser adicionada

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]); // Adiciona nova tarefa ao estado
      setNewTask(""); // Limpa o campo de entrada
    }
  };

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks); // Remove a tarefa do estado
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="button" onClick={addTask}>
          Adicionar Tarefa
        </button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            text={task}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
