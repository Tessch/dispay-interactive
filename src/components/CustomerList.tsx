import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import SimpleTable from "./SimpleTable";
import type { Customer } from "../types/customer";

type Props = {
  customers: Customer[];
};

const CustomerList = ({ customers }: Props) => {
  const navigate = useNavigate();

  const columns = [
    { field: "id", header: "ID" },
    { field: "title", header: "Title" },
    { field: "lastname", header: "Lastname" },
    { field: "firstname", header: "Firstname" },
    { field: "postal_code", header: "Postal Code" },
    { field: "city", header: "City" },
    { field: "email", header: "Email" },
    {
      field: "orders",
      header: "Show Orders",
      render: (customer: Customer) => (
        <Button
          variant="contained"
          size="small"
          onClick={() => navigate(`/customers/${customer.id}/orders`)}
        >
          Show Orders
        </Button>
      ),
    },
  ];

  return <SimpleTable columns={columns} rows={customers} />;
};

export default CustomerList;
