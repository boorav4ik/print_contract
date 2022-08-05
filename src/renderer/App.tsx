import { Routes, Route, Navigate } from 'react-router-dom';
import openDB from 'services/idb';
import AppBar from '../components/AppBar';
import ClientPage from '../components/pages/ClientPage';
import ClientDiteilsPage from '../components/pages/ClientDiteilsPage';
import ServicesPage from '../components/pages/ServicesPage';
import './App.css';

export default function App() {
  openDB();
  return (
    <>
      <AppBar />
      <Routes>
        <Route
          path="/index.html"
          element={<Navigate to="/clients" replace />}
        />
        <Route path="/clients" element={<ClientPage />} />
        <Route path="/clients/:id" element={<ClientDiteilsPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </>
  );
}
