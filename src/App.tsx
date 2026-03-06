import { Navigate, Route, Routes } from "react-router-dom";
import CustomersPage from "./pages/CustomerPage";
import OrderPage from "./pages/OrderPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/customers" replace />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/customers/:id/orders" element={<OrderPage />} />
      </Routes>
    </div>
  );
};

export default App;
