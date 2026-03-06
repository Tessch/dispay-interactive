import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { Link as RouterLink, useParams } from "react-router-dom";
import OrderList from "../components/OrderList";
import { useOrders } from "../hooks/useOrders";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const OrdersPage = () => {
  const { id } = useParams<{ id: string }>();

  const customerId = Number(id);
  const { data: orders = [], isLoading, error } = useOrders(customerId);

  if (isLoading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error.message}</Alert>;

  const total = orders.reduce((sum, order) => {
    return sum + order.price * order.quantity;
  }, 0);

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
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4 }}>
          <Link component={RouterLink} to="/customers" underline="hover">
            Customers
          </Link>

          <Typography color="text.primary">Orders</Typography>
        </Breadcrumbs>
        <Box sx={{ width: "100%", maxWidth: 900 }}>
          <OrderList orders={orders} total={total} />
        </Box>
      </Box>
    </Container>
  );
};

export default OrdersPage;
