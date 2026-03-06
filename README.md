Frontend application built with React, TypeScript and Vite.
Tech Stack

React

TypeScript

Vite

React Router

React Query

MSW (Mock Service Worker)

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
