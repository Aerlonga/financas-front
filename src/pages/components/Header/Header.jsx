import { Link } from 'react-router-dom';
import { BarChart2 } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white text-[#002B60] shadow-md border-b border-blue-100">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center gap-2 text-2xl font-bold text-cyan-600">
          <BarChart2 size={28} strokeWidth={2.2} className="text-cyan-600" />
          <Link to="/">Finanças</Link>
        </div>
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