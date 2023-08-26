type TaskItemProps = {
  text: string;
  onDelete: () => void;
};

function TaskItem({ text, onDelete }: TaskItemProps) {
  return (
    <li>
      {text}
      <button onClick={onDelete}>Excluir</button>
    </li>
  );
}

export default TaskItem;
