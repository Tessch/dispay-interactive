import { useQuery } from "@tanstack/react-query";
import { useFetch } from "../api/useFetch";
import type { Customer } from "../types";

export const useCustomers = () => {
  return useQuery<Customer[]>({
    queryKey: ["customers"],
    queryFn: () => useFetch("/customers"),
  });
};
