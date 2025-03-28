import { Outlet } from 'react-router';
import './App.css';
import Button from './components/Button';
import Layout from './components/Layout';
import Card from './components/Card';
import Rocket from './icons/Rocket';
import Jupiter from './icons/Jupiter';

function App() {
  return (
    <>
      <Layout />
      <Outlet />
    </>
  );
}

export default App;
