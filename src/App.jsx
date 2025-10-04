import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/login/index.jsx';
import Layout from './pages/layouts/Layout.jsx';
import Teste from "./pages/login/teste.jsx";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="teste" element={<Teste />} />
      </Route>
    </Routes>
  );
}

export default App;
