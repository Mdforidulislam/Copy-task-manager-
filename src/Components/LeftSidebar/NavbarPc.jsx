import { Avatar, Card } from "@material-tailwind/react";
import { useContext } from "react";
import { Divider } from "@mui/material";
import { usecontextHook } from "../../Auth/Context";
import TasksBoard from "../../TaskMang/TaskBoard";


 
export function LeftSidePc({setBoardName,data , refetch}) {
  const {userInfo} =useContext(usecontextHook)
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="w-[200px] flex justify-center mt-4 ">
      {
      userInfo.photoURL ? <Avatar  src={userInfo.photoURL} alt="avatar" 
      size="xxl" /> : <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xxl" />}
      </div>
      <div>
         <h1>{userInfo.displayName}</h1>
         <h1 className="text-center mt-4 mb-4">{userInfo.displayName} Daniyal</h1>
      </div>
      <Divider sx={{marginY:'12px'}}/>
      <div>
        <h1>Task Board List</h1>
        <TasksBoard setBoardName={setBoardName} data={data} refetch={refetch} />

      </div>
    </Card>
  );
}