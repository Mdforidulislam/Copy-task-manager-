import { useEffect } from "react";


const useGetTask = () => {
   useEffect(()=>{
    const { data: getBoardData,refetch } = useQuery({
        queryKey: ["getBoardData", email, signelBoard],
        queryFn: async () => {
          try {
            const response = await fetch(
              `http://localhost:5000/getBoardData?email=${email}&boardName=${signelBoard}`
            );
            const data = await response.json();
            return data;
          } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
          }
        },
      });
   },[])
};

export default useGetTask;