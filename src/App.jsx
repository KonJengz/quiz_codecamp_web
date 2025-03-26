import { Outlet } from 'react-router';
import './App.css';
import Button from './components/Button';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Layout />
      <Outlet />
    </>
  );
}

export default App;
