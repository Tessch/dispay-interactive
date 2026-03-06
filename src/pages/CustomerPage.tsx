import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { useCustomers } from "../hooks/useCustomers";
import CustomerList from "../components/CustomerList";

const CustomersPage = () => {
  const { data: customers = [], isLoading, error } = useCustomers();

  if (isLoading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error.message}</Alert>;

  return (
    <>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Customers
      </Typography>

      <CustomerList customers={customers} />
    </>
  );
};

export default CustomersPage;
