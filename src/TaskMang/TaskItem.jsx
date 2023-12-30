import { Draggable } from "react-beautiful-dnd";
import AddTask from "./AddTask";

const TaskItem = ({tasks,column,setTasks,setAlltask}) => {
    return (
        <div>
            {tasks[column].map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className="task  border  p-4 m-2 bg-white"
                      >
                        <div>
                          <h3>{task.content.title}</h3>
                          <p>{task.content.description}</p>
                          <p>Time: {task.content.time}</p>
                          <p>Priority: {task.content.priority}</p>
                        </div>
                      </div>
                    )}
                  </Draggable>
                  
                ))}
              <AddTask  setTasks={setTasks} tasks={tasks} column={column} setAlltask={setAlltask} />
        </div>
    );
};

export default TaskItem;