import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskItem from './TaskItem';



const TasksBoad = ({initialData, setAlltask}) => {
  const [tasks, setTasks] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return; // dropped outside the droppable area

    const updatedTasks = { ...tasks };
    const task = updatedTasks[source.droppableId][source.index];

    task.status = destination.droppableId;

    // Remove the task from the source column
    updatedTasks[source.droppableId].splice(source.index, 1);

    // Add the task to the destination column
    updatedTasks[destination.droppableId].splice(destination.index, 0, task);

    setTasks(updatedTasks);
  };

  
  console.log(Object.keys(tasks));

  Object.keys(tasks).map((column)=>(
    console.log(column.charAt(0).toUpperCase() + column.slice(1)),
    tasks[column].map((task, index) =>(
      console.log(task)
    ))
  ))

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board flex flex-col md:flex-row gap-6 justify-around w-full bg-blue-gray-800 ">
        {Object.keys(tasks).map((column) => (
          <Droppable key={column} droppableId={column}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="column"
              >
      
                <h2>{column.charAt(0).toUpperCase() + column.slice(1)}</h2>
                <TaskItem tasks={tasks} column={column} setTasks={setTasks} setAlltask={setAlltask}/>
                {provided.placeholder}
              
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default TasksBoad;
