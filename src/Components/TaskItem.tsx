type TaskItemProps = {
  text: string;
  onDelete: () => void;
  onEdit: () => void;
};

function TaskItem({ text, onDelete, onEdit }: TaskItemProps) {
  return (
    <li>
      {text}
      <div>
        <button onClick={onDelete}>Excluir</button>
        <button onClick={onEdit}>Editar</button>
      </div>
    </li>
  );
}

export default TaskItem;
