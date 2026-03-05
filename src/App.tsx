import { Navigate, Route, Routes } from "react-router-dom";
import CustomersList from "./pages/CustomersList";
import OrdersList from "./pages/OrdersList";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/customers" replace />} />
        <Route path="/customers" element={<CustomersList />} />
        <Route path="/customers/:id/orders" element={<OrdersList />} />
      </Routes>
    </div>
  );
};

export default App;
