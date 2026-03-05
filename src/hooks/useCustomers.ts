import { useQuery } from "@tanstack/react-query";
import { useFetch } from "../api/useFetch";

export const useCustomers = () => {
  return useQuery({
    queryKey: ["customers"],
    queryFn: () => useFetch("/customers"),
  });
};
