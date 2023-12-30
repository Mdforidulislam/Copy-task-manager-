import LeftBare from "../Dashboard/LeftBare";
import MobileHeader from "../Dashboard/MobileHeader";
import TasksBoad from "./Kanban";
import { initialData } from "./InitialDataList";
import useInsertBoard from "../Hook/useInsertBoard";
import { useState } from "react";

const MainDasbard = () => {
  const [boardName, setBoardName] = useState({});
  const [allTask, setAlltask] = useState([]);
  const email = "example@gmail.com";

  const TaskAllInfoList = {
    Boardname: boardName.allBoardName,
    userEmail: email,
    allTaskList: {
      today: allTask.filter((task) => task.status === "today"),
      inProgress: allTask.filter((task) => task.status === "inProgress"),
      completed: allTask.filter((task) => task.status === "completed"),
    },

  };

  console.log(boardName);

  // all the list hook 
  // create boardName 

  const {data} = useInsertBoard({TaskAllInfoList,boardName})
  console.log(data);





  return (
    <div className="flex flex-col lg:flex-row  h-screen w-full bg-slate-400">
      <div className=" lg:hidden">
        <MobileHeader />
      </div>
      <LeftBare setBoardName={setBoardName}  />
      <TasksBoad initialData={initialData} setAlltask={setAlltask}  />
    </div>
  );
};

export default MainDasbard;
