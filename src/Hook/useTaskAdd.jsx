import { useEffect, useState } from "react";

const useTaskAdd = ({TaskAllInfoList}) => {
    const [result , setResult] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/allTaskAdd", {
            method: "post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(TaskAllInfoList),
          })
          .then(res => res.json())
          .then(data => setResult(data))
    },[TaskAllInfoList])
    return {result}
};

export default useTaskAdd;