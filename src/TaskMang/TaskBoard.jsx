import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Typography,
  List,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import useBoardName from "../Hook/useBoardName";


const TasksBoard = ({ setBoardName}) => {
  const [open, setOpen] = useState(false);
  const [ board  , setBoard] = useState([]);
  const [signelBoard, setSingleBoard] = useState(" ");
  const handleOpen = () => setOpen(!open);

  // all hooks here 
 // get the board name here 
 const {result} = useBoardName({email:'example@gmail.com'})
 
  useEffect(() => {
    // Check if signelBoard is defined
    if (signelBoard && board) {
      const AllboardList = {
        singleBoardName: signelBoard,
        allBoardName: board,
      };
  
      // Update the state
      setBoardName(AllboardList);
    }
  }, [board, signelBoard, setBoardName]);

  console.log(board);

  const handleAddBoard = (event) => {
    event.preventDefault();
    const newBoardValue = event.target.board.value;
    setBoard([...result, newBoardValue]);

    event.target.board.value = "";
  };

  const hangleSingleName = (item) => {
    setSingleBoard(item);
  };

  console.log(board,result);

  return (
    <>
      <div>
        <Typography>
        {
          Array.isArray(result) &&
          result.map((item, indx) => (
            <List
              className="bg-blue-gray-50 m-2 rounded-md cursor-pointer"
              key={indx}
            >
              <Typography
                onClick={() => hangleSingleName(item)}
                variant="title"
              >
                {" "}
                {item}
              </Typography>
            </List>
          ))}
        </Typography>
      </div>
      <Button onClick={handleOpen} variant="gradient">
        Add Board Name
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          <form onSubmit={handleAddBoard} action="" className=" space-y-4">
            <div>
              <input
                name="board"
                type="text"
                className="w-full px-6 py-2 outline-none border rounded-md mr-4"
                placeholder="Input Board Name"
              />
            </div>
            <div className="flex justify-center">
              <Button onClick={handleOpen}>Chancle</Button>
              <Button onClick={handleOpen} className="ml-4" type="submit">
                Add
              </Button>
            </div>
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default TasksBoard;
