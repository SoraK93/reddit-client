import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import routes from "./app/routes.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter(routes)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
