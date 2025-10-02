import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/login/index.jsx';
import './App.css';

function App() {
  return (
    <>
      {/* O componente Routes define a área onde as rotas serão renderizadas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
      </Routes>

    </>
  );
}

export default App;
