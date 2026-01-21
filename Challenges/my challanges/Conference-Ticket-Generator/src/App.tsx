import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes } from './Routes';
import './App.css';

function App() {
  return <div></div>;
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
);
export default App;
