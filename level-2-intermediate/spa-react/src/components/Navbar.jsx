import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBurgerClick = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${theme}`}>
      <NavLink to="/" className="logo" onClick={handleLinkClick}>
        Alpha Tech
      </NavLink>
      <ul className={`nav-links${menuOpen ? ' nav-active' : ''}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLinkClick}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLinkClick}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLinkClick}>
            Contact
          </NavLink>
        </li>
      </ul>
      <button onClick={toggleTheme} className="theme-btn" aria-label="Changer le thème">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
      <div className={`burger${menuOpen ? ' open' : ''}`} onClick={handleBurgerClick} aria-label="Menu" tabIndex={0} role="button">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </nav>
  );
}