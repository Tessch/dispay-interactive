import { http, HttpResponse } from "msw";
import { customers, ordersByCustomer } from "./data";

export const handlers = [
  http.get("*/customers", () => {
    return HttpResponse.json(customers);
  }),

  http.get("*/customers/:id/orders", ({ params }) => {
    const id = Number(params.id);
    const orders = (ordersByCustomer as any)[id] ?? [];
    return HttpResponse.json(orders);
  }),
];
