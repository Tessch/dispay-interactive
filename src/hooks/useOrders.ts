import { useQuery } from "@tanstack/react-query";
import { useFetch } from "../api/useFetch";
import type { Order } from "../types/order";

export const useOrders = (customerId: number) => {
  return useQuery<Order[], Error>({
    queryKey: ["orders", customerId],
    queryFn: () => useFetch<Order[]>(`/customers/${customerId}/orders`),
    enabled: Number.isFinite(customerId),
  });
};
