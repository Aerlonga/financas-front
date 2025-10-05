import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';

function Layout() {
  return (
    <div className="app-layout min-h-screen flex flex-col">
      <Header />
      <main className="app-content flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}5

export default Layout;
