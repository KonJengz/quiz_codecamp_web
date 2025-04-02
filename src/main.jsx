import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import AppRouter from "./routes/AppRouter.jsx";
import { Slide, ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <>
    {/* <StrictMode> */}
    <AppRouter />
    <ToastContainer
      position="bottom-right"
      autoClose={2000}
      transition={Slide}
    />
    {/* </StrictMode> */}
  </>
);
