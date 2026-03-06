export const customers = [
  {
    id: 1,
    title: "m",
    lastname: "Dupont",
    firstname: "Jean",
    postal_code: "75001",
    city: "Paris",
    email: "jean.dupont@example.com",
  },
  {
    id: 2,
    title: "mme",
    lastname: "Martin",
    firstname: "Sophie",
    postal_code: "69002",
    city: "Lyon",
    email: "sophie.martin@example.com",
  },
  {
    id: 3,
    title: "m",
    lastname: "Bernard",
    firstname: "Lucas",
    postal_code: "13001",
    city: "Marseille",
    email: "lucas.bernard@example.com",
  },
] as const;

export const ordersByCustomer = {
  "1": [
    {
      last_name: "Dupont",
      purchase_identifier: "P-1001",
      product_id: 501,
      quantity: 2,
      price: 19.9,
      currency: "EUR",
      date: "2024-11-01",
    },
    {
      last_name: "Dupont",
      purchase_identifier: "P-1002",
      product_id: 700,
      quantity: 1,
      price: 99.0,
      currency: "EUR",
      date: "2024-11-08",
    },
  ],
  "2": [
    {
      last_name: "Martin",
      purchase_identifier: "P-2001",
      product_id: 120,
      quantity: 3,
      price: 12.5,
      currency: "EUR",
      date: "2024-10-12",
    },
  ],
  "3": [],
} as const;
