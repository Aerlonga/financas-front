import { link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}
export default Layout;
