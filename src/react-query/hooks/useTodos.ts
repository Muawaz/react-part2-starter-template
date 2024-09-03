import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
    const fetchtodos = () =>
        axios
          .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
          .then((res) => res.data);
    
      // Auto Retries
      // Auto Refetch
      // Caching
      
      return useQuery<Todo[], Error>({
        queryKey: ["todos"],
        queryFn: fetchtodos,
        staleTime: 10 * 1000, //10s
      });

}

export default useTodos