import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">DCIT26 Student Portal</h2>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/students">Students</Link>
      </div>
    </nav>
  );
}

export default Navbar;