import type { Order } from "../types/order";
import SimpleTable from "./SimpleTable";

type OrdersListProps = {
  orders: Order[];
  total: number;
};

const OrdersList = ({ orders, total }: OrdersListProps) => {
  const columns = [
    { field: "last_name", header: "Last Name" },
    { field: "purchase_identifier", header: "Purchase Identifier" },
    { field: "product_id", header: "Product ID" },
    { field: "quantity", header: "Quantity" },
    { field: "price", header: "Price" },
    { field: "currency", header: "Currency" },
    { field: "date", header: "Date" },
  ];

  return (
    <div>
      <SimpleTable<Order>
        columns={columns}
        rows={orders}
        footer={<strong>Total: {total.toFixed(2)}</strong>}
      />
    </div>
  );
};

export default OrdersList;
