import { useQuery } from "@tanstack/react-query";

const useBoardName = ({ email }) => {
  const { data, refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:5000/getBoardName/${email}`);
      const { result, message } = await response.json();
      return { result, message };
    },
  });

  // Destructure data, or provide default values
  const { result, message } = data || { result: [], message: "" };

  console.log(result);

  return { data, refetch, result, message };
};



export default useBoardName;
