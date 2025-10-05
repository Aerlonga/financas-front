import { Link } from 'react-router-dom';
import logoControle from '../../../assets/logo.png';

function Header() {
  return (
    <header className="bg-white text-[#002B60] shadow-md border-b border-blue-100 z-20 relative">
      <div className="w-full flex justify-between items-center p-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoControle}
            alt="Logo Controle Financeiro"
            className="h-8 w-auto"
          />
          <span
            style={{
              fontFamily: "'Cy Grotesk Grand', sans-serif",
              textTransform: 'uppercase',
              fontSize: '1.35rem',
              color: '#002B60',
              letterSpacing: '0.01em',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {/* <span style={{ fontWeight: 700 }}>CONTROLE</span> */}
            <span style={{ fontWeight: 700 }}>CONTROLE</span>
            {/* <span style={{ fontWeight: 400 }}>FINANCEIRO</span> */}
            <span>FINANCEIRO</span>
          </span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-blue-700 transition font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-blue-700 transition font-medium">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;