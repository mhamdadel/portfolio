import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.js";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </HelmetProvider>
);
