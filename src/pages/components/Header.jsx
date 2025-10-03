import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="app-header">
      <div className="logo">Finanças</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
