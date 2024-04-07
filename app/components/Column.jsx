"use client";
import { SortableContext, arrayMove, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";
import Todos from "./Todos";
import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor } from "@dnd-kit/core";
import { useState } from "react";

export const Column = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Learn React",
      completed: false,
    },
    {
      id: 2,
      task: "Learn Next",
      completed: false,
    },
    {
      id: 3,
      task: "Learn Svelt",
      completed: false,
    },
  ]);
  const getTaskPros = (id) => {
    tasks.findIndex((task) => task.id === id);
  };
  const handleDragEnd = (e) => {
    const { active, over } = e;

    if (active.id === over.id) return;

    setTasks((tasks) => {
      const originalPosition = tasks.findIndex((task) => task.id === active.id);
      const newPosition = tasks.findIndex((task) => task.id === over.id);
      return arrayMove(tasks, originalPosition, newPosition);
    });
  };

  const sensors = useSensor(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates
    })
  );
  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <div className="bg-purple-400 flex flex-col gap-5 p-2">
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
          {tasks.map((task) => (
            <Todos key={task.id} task={task} />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
};
