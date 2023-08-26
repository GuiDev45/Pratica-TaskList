import React from "react";
import TaskItem from "./TaskItem";

type TaskListProps = {
  task: string;
};

function TaskList(props: TaskListProps) {
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
      <div>{props.task}</div>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            text={task}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </ul>
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
    </div>
  );
}

export default TaskList;
