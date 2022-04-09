import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
              <table className="navbar-nav">
                <tr>
                <td className="nav-item">
                  <Link to='/Home' className="nav-link" aria-current="page">Home</Link>
                </td>
                <td className="nav-item">
                  <Link to='/Student' className="nav-link" aria-current="page">Student</Link>
                </td>
                <td className="nav-item">
                  <Link to='/Contact' className="nav-link" aria-current="page">Contact</Link>
                </td>
                </tr>
              </table>
          </nav>
    </div>
  )
}

export default Header