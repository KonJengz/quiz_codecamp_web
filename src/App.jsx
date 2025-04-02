import { Outlet } from "react-router";
import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout />
      <Outlet />
    </>
  );
}

export default App;
