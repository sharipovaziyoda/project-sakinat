import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`); // query uchun parameterni encode qildik
      setQuery('');  // Qidiruvni bo'shatish
      setIsOpen(false);  // Mobil menyuni yopish
    }
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-blue-600 font-semibold'
      : 'text-gray-700 hover:text-blue-500';

  return (
    <header className="bg-yellow-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center font-serif text-3xl text-black">
          <img src="/Sakinat.png" alt="Sakinat Logo" className="w-18 h-18 rounded-full" />
        </div>

        {/* Desktop Search */}
        <form action="/search" method="GET" className="hidden md:block" onSubmit={handleSearch}>
          <input
            type="text"
            name="q"
            placeholder="Kitob qidiring..."
            className="border px-3 py-1 rounded-md"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="ml-2 text-blue-600">Qidirish🔍</button>
        </form>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          <NavLink to="/" className={navLinkClass}>Uy</NavLink>
          <NavLink to="/pdf-books" className={navLinkClass}>PDF Kitoblar</NavLink>
          <NavLink to="/audio-books" className={navLinkClass}>Audio Kitoblar</NavLink>
          <NavLink to="/favorites" className={navLinkClass}>Sevimlilar</NavLink>
          <NavLink to="/read" className={navLinkClass}>O'qilganlar</NavLink>
          <NavLink to="/stores" className={navLinkClass}>Do'konlar</NavLink>
        </nav>

        {/* Hamburger / Close Icon */}
        <button className="md:hidden text-3xl text-black" onClick={toggleMenu}>
          {isOpen ? '📚' : '📘'}
        </button>
      </div>

      {/* Mobile Search Input */}
      {isOpen && (
        <form onSubmit={handleSearch} className="md:hidden px-4 pb-2 w-full">
          <input
            type="text"
            placeholder="Kitob qidirish..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden px-4 pb-4 transition-all duration-300 ease-in-out ${isOpen ? 'flex flex-col items-center justify-center text-center space-y-2' : 'hidden'}`}
      >
        <NavLink to="/" className={navLinkClass} onClick={toggleMenu}>Uy</NavLink>
        <NavLink to="/pdf-books" className={navLinkClass} onClick={toggleMenu}>PDF Kitoblar</NavLink>
        <NavLink to="/audio-books" className={navLinkClass} onClick={toggleMenu}>Audio Kitoblar</NavLink>
        <NavLink to="/favorites" className={navLinkClass} onClick={toggleMenu}>Sevimlilar</NavLink>
        <NavLink to="/read" className={navLinkClass} onClick={toggleMenu}>O'qilganlar</NavLink>
        <NavLink to="/stores" className={navLinkClass} onClick={toggleMenu}>Do'konlar</NavLink>
      </div>
    </header>
  );
};

export default Navbar;
