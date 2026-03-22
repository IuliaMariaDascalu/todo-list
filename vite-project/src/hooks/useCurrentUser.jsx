import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/1'
      );
      return response.json();
    },
  });
};