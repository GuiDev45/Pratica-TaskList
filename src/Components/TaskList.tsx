import React, { useState } from "react";
import TaskItem from "./TaskItem";

function TaskList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [editingIndex, setEditingIndex] = useState<number>(-1);
  const [editedTask, setEditedTask] = useState<string>("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const editTask = (index: number, newText: string) => {
    const newTasks = tasks.map((task, i) => (i === index ? newText : task));
    setTasks(newTasks);
    setEditingIndex(-1);
    setEditedTask("");
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
          <li key={index}>
            {editingIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => editTask(index, editedTask)}
                >
                  Concluir Edição
                </button>
              </div>
            ) : (
              <TaskItem
                text={task}
                onDelete={() => deleteTask(index)}
                onEdit={() => {
                  setEditingIndex(index);
                  setEditedTask(task);
                }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
