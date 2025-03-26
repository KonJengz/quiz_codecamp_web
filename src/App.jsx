import { Outlet } from 'react-router';
import './App.css';
import Button from './components/Button';
import Layout from './components/Layout';
import Card from './components/Card';
import Rocket from './icons/Rocket';
import Jupiter from './icons/Jupiter';

function App() {
  const data = [
    {
      name: 'Variable',
      isSuccess: true,
      finish: 78,
      total: 120
    },
    {
      name: 'basic object',
      isSuccess: false
    },
    {
      name: 'Loop',
      isSuccess: false
    },
    {
      name: 'basic array',
      isSuccess: true
    },
    {
      name: 'basic array2',
      isSuccess: false
    }
  ];
  return (
    <>
      <Layout></Layout>

      <div className="flex flex-wrap justify-center gap-4">
        {data.map((item, index) => (
          <Card
            finish={78}
            total={200}
            name={item.name}
            icon={
              item.isSuccess ? (
                <Jupiter></Jupiter>
              ) : (
                <Rocket width={'120'} height={'120'}></Rocket>
              )
            }
          ></Card>
        ))}
      </div>

      <Outlet />
    </>
  );
}

export default App;
