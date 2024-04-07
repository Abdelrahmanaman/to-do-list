"use client"
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
const Todos = ({task}) => {
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id: task.id}); 
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
    return (
    <div style = {style}
    ref={setNodeRef} {...listeners} {...attributes} className="flex items-center gap-2 touch-none bg-zinc-800 rounded-md p-2">
            <input type="checkbox" checked={task.completed} aria-checked={task.completed} id={`todo-${task.id}`} />
            <label htmlFor={`todo-${task.id}`}>{task.task}</label>
    </div>
  );
};

export default Todos;
