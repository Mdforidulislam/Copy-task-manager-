import { v4 as uuidv4 } from 'uuid';

const AddTask = ({ column, setTasks , tasks,setAlltask}) => {
    console.log(column);
  const addTask = (column, content) => {
    const newTask = {
        id: uuidv4(),
        content: {
          title: content.title,
          description: content.description,
          time: content.time,
          priority: content.priority,
        },
        status: column,
      };
    setTasks((prevTasks) => ({
      ...prevTasks,
      [column]: [...prevTasks[column],  newTask ],
    }));
    setAlltask((prevTask)=>[...prevTask, newTask])
  };

  return (
    <div>
      <button
        onClick={() => {
          const content = {
            title: prompt("Enter task title:"),
            description: prompt("Enter task description:"),
            time: prompt("Enter task time:"),
            priority: prompt("Enter task priority:"),
          };
          addTask(column, content);
        }}
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
