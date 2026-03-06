Frontend application built with React, TypeScript and Vite.

## Tech Stack

React
TypeScript
Vite
React Router
React Query
MSW (Mock Service Worker)
Material UI
Vitest + React Testing Library

## Install

npm install

## Run

npm run dev

## Mock API (MSW)

The project can run without a backend using mocked API responses.

## Install MSW

npm install msw

## Generate the service worker

npx msw init public/ --save

## Enable mocks

Create a .env file:

VITE_USE_MOCKS=true
VITE_API_URL=http://localhost:8000

When VITE_USE_MOCKS=true, the application uses mocked data instead of a real backend.

## API Endpoints

GET /customers

GET /customers/{id}/orders

## Run tests

npm run test

## Project Structure

src
├── api
│ └── useFetch.ts
│
├── components
│ ├── SimpleTable.tsx
│ ├── CustomerList.tsx
│ └── OrdersList.tsx
│
├── hooks
│ ├── useCustomers.ts
│ └── useOrders.ts
│
├── pages
│ ├── CustomersPage.tsx
│ └── OrdersPage.tsx
│
├── types
│ ├── customer.ts
│ └── order.ts
│
├── App.tsx
└── main.tsx

# Features

Display customers list

Navigate to customer orders

Display orders in a reusable table component

Orders total shown in table footer

Unit tests for components

## Notes

The table component (SimpleTable) is generic and reusable for different data types.
