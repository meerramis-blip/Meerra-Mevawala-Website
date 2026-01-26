import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./store";
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
