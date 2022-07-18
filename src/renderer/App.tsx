import { Routes, Route } from 'react-router-dom';
import AppBar from '../components/AppBar';
import ClientPage from '../components/pages/ClientPage';
import './App.css';
import addCustomers from '../services/indexedDB';

export default function App() {
  addCustomers();
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/clients" element={<ClientPage />} />
      </Routes>
    </>
  );
}
