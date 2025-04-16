import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-indigo-600 font-bold underline underline-offset-4'
      : 'text-gray-700 hover:text-indigo-500 transition duration-200';

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/Sakinat.png"
            alt="Sakinat Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-xl md:text-2xl font-bold text-gray-800 font-serif">Sakinat</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-md">
          <NavLink to="/" className={navLinkClass}>Uy</NavLink>
          <NavLink to="/pdf-books" className={navLinkClass}>PDF Kitoblar</NavLink>
          <NavLink to="/audio-books" className={navLinkClass}>Audio Kitoblar</NavLink>
          <NavLink to="/favorites" className={navLinkClass}>Sevimlilar</NavLink>
          <NavLink to="/read" className={navLinkClass}>O'qilganlar</NavLink>
          <NavLink to="/stores" className={navLinkClass}>Do'konlar</NavLink>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl text-indigo-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col space-y-3 text-center bg-indigo-50">
          <NavLink to="/" className={navLinkClass} onClick={toggleMenu}>Uy</NavLink>
          <NavLink to="/pdf-books" className={navLinkClass} onClick={toggleMenu}>PDF Kitoblar</NavLink>
          <NavLink to="/audio-books" className={navLinkClass} onClick={toggleMenu}>Audio Kitoblar</NavLink>
          <NavLink to="/favorites" className={navLinkClass} onClick={toggleMenu}>Sevimlilar</NavLink>
          <NavLink to="/read" className={navLinkClass} onClick={toggleMenu}>O'qilganlar</NavLink>
          <NavLink to="/stores" className={navLinkClass} onClick={toggleMenu}>Do'konlar</NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
