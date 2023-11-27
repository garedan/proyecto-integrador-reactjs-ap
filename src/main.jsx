import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SidebarProvider from "./contexts/SidebarContext";
import CartContext from "./contexts/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <CartContext>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartContext>
  </SidebarProvider>
);
