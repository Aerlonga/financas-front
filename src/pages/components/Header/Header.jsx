import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-cyan-400">
          <Link to="/">Finanças</Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-cyan-300 transition">Home</Link></li>
            <li><Link to="/login" className="hover:text-cyan-300 transition">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;