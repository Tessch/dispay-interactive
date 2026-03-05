import { useQuery } from "@tanstack/react-query";
import { useFetch } from "../api/useFetch";

export const useOrders = (customerId: number) => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: () => useFetch(`/customers${customerId}/orders`),
  });
};
