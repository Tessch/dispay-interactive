import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { useCustomers } from "../hooks/useCustomers";
import CustomerList from "../components/CustomerList";

const CustomersPage = () => {
  const { data: customers = [], isLoading, error } = useCustomers();

  if (isLoading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error.message}</Alert>;

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          mt: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ mb: 4 }}>
          Customers
        </Typography>
        <Box sx={{ width: "100%", maxWidth: 900 }}>
          <CustomerList customers={customers} />
        </Box>
      </Box>
    </Container>
  );
};

export default CustomersPage;
