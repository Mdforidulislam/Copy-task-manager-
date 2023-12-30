import { useEffect, useState } from "react";

const useInsertBoard = ({ TaskAllInfoList, boardName }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/createBoard", {
          method: 'post',
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            ...TaskAllInfoList,
            Boardname: boardName
          })
        });

        const resultData = await response.json();
        setData(resultData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [TaskAllInfoList, boardName]);

  return { data };
};

export default useInsertBoard;
