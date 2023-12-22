import { Avatar, Card } from "@material-tailwind/react";
import { useContext } from "react";
import { shareAuth } from "../../Auth/Authentication";
import { Divider } from "@mui/material";

 
export function SidebarWithSearch() {
  const {userinfo} =useContext(shareAuth)
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="w-[200px] flex justify-center mt-4 ">
      {
      userinfo.photoURL ? <Avatar  src={userinfo.user.photoURL} alt="avatar" 
      size="xxl" /> : <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xxl" />}
      </div>
      <div>
         <h1>{userinfo.displayName}</h1>
         <h1 className="text-center mt-4 mb-4">{userinfo.displayName} Daniyal</h1>
      </div>
      <Divider sx={{marginY:'12px'}}/>
      <div>
        <h1>Task Board List</h1>
        
      </div>
    </Card>
  );
}