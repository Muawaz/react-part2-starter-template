import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

const usePosts = () => {
    const fetchPosts = () =>
        axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((res) => res.data);

    
return useQuery<Post[], Error>({
    queryKey: ["Post"],
    queryFn: fetchPosts,
  });

}

export default usePosts