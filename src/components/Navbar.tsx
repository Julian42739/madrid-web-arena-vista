
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png" 
                alt="Real Madrid Logo" 
                className="h-12 w-auto" 
              />
              <span className="ml-3 text-madrid-navy font-montserrat font-bold text-lg hidden sm:block">
                REAL MADRID CF
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="text-madrid-navy px-3 py-2 rounded-md font-medium hover:text-madrid-gold transition-colors">
              Inicio
            </Link>
            <div className="relative">
              <button 
                onClick={toggleDropdown}
                className="text-madrid-navy px-3 py-2 rounded-md font-medium hover:text-madrid-gold transition-colors flex items-center"
              >
                Equipo <ChevronDown size={16} className="ml-1" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link 
                    to="/jugadores" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-madrid-gray"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Jugadores
                  </Link>
                  <Link 
                    to="/cuerpo-tecnico" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-madrid-gray"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Cuerpo Técnico
                  </Link>
                </div>
              )}
            </div>
            <Link to="/noticias" className="text-madrid-navy px-3 py-2 rounded-md font-medium hover:text-madrid-gold transition-colors">
              Noticias
            </Link>
            <Link to="/partidos" className="text-madrid-navy px-3 py-2 rounded-md font-medium hover:text-madrid-gold transition-colors">
              Partidos
            </Link>
            <Link to="/trofeos" className="text-madrid-navy px-3 py-2 rounded-md font-medium hover:text-madrid-gold transition-colors">
              Trofeos
            </Link>
          </div>
          
          <div className="hidden md:flex items-center">
            <Button className="bg-madrid-navy hover:bg-madrid-gold text-white transition-colors">
              Hazte Socio
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-madrid-navy"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-madrid-navy hover:bg-madrid-gray">
              Inicio
            </Link>
            <Link to="/jugadores" className="block px-3 py-2 rounded-md text-base font-medium text-madrid-navy hover:bg-madrid-gray">
              Jugadores
            </Link>
            <Link to="/noticias" className="block px-3 py-2 rounded-md text-base font-medium text-madrid-navy hover:bg-madrid-gray">
              Noticias
            </Link>
            <Link to="/partidos" className="block px-3 py-2 rounded-md text-base font-medium text-madrid-navy hover:bg-madrid-gray">
              Partidos
            </Link>
            <Link to="/trofeos" className="block px-3 py-2 rounded-md text-base font-medium text-madrid-navy hover:bg-madrid-gray">
              Trofeos
            </Link>
            <div className="pt-2">
              <Button className="w-full bg-madrid-navy hover:bg-madrid-gold text-white transition-colors">
                Hazte Socio
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
