import { Navigate, Route, Routes } from "react-router-dom";
import OrdersList from "./pages/OrdersList";
import CustomersPage from "./pages/CustomerPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/customers" replace />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/customers/:id/orders" element={<OrdersList />} />
      </Routes>
    </div>
  );
};

export default App;
