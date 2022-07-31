import { Routes, Route } from 'react-router-dom';
import openDB from 'services/idb';
import AppBar from '../components/AppBar';
import ClientPage from '../components/pages/ClientPage';
import './App.css';

openDB();

export default function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/clients" element={<ClientPage />} />
      </Routes>
    </>
  );
}
