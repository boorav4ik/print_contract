import { Routes, Route } from 'react-router-dom';
import AppBar from '../components/AppBar';
import ClientPage from '../components/pages/ClientPage';
import './App.css';

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
