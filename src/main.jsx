import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import AppRouter from './routes/AppRouter.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <AppRouter />
  // </StrictMode>
);
