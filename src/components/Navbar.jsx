import { NavLink } from 'react-router-dom';
import { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-blue-600 font-semibold'
      : 'text-gray-700 hover:text-blue-500';

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div  className="flex items-center font-serif text-3xl text-black">
          <img src="/Sakinat.png" alt="Sakinat Logo" className='w-18 h-18 rounded-full ' />
        </div>
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/pdf-books" className={navLinkClass}>PDF Books</NavLink>
          <NavLink to="/audio-books" className={navLinkClass}>Audio Books</NavLink>
          <NavLink to="/favorites" className={navLinkClass}>Favorites</NavLink>
          <NavLink to="/read" className={navLinkClass}>Read</NavLink>
          <NavLink to="/stores" className={navLinkClass}>Stores</NavLink>
        </nav>
        {/* Hamburger / Close Icon */}
        <button className="md:hidden text-3xl text-black" onClick={toggleMenu}>
          {isOpen ? '📚' : '📘'}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden px-4 pb-4 transition-all duration-300 ease-in-out ${
          isOpen ? 'flex flex-col items-center justify-center text-center space-y-2' : 'hidden'
        }`}
      >
        <NavLink to="/" className={navLinkClass} onClick={toggleMenu}>Home</NavLink>
        <NavLink to="/pdf-books" className={navLinkClass} onClick={toggleMenu}>PDF Books</NavLink>
        <NavLink to="/audio-books" className={navLinkClass} onClick={toggleMenu}>Audio Books</NavLink>
        <NavLink to="/favorites" className={navLinkClass} onClick={toggleMenu}>Favorites</NavLink>
        <NavLink to="/read" className={navLinkClass} onClick={toggleMenu}>Read</NavLink>
        <NavLink to="/stores" className={navLinkClass} onClick={toggleMenu}>Stores</NavLink>
      </div>
    </header>
  );
};

export default Navbar;
