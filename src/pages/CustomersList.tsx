import { useCustomers } from "../hooks/useCustomers";

const CustomersList = () => {
  const { data: customers } = useCustomers();
  console.log(customers);
  return (
    <div>
      <h2>Customers</h2>

      <ul>
        {customers?.map((customer) => (
          <li key={customer.id}>
            {customer.firstname} {customer.lastname}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomersList;
