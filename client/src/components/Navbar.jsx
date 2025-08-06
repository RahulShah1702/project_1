import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav>
      <div className="container">
        <Link to="/" className="logo">Volunteer App</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/admin">AdminDashboard</Link>
          {token ? (
            <button onClick={handleLogout} className="adminbutton">AdminLogout</button>
          ) : (
            <Link to="/login" className='adminbutton'>AdminLogin</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;