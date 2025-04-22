import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const menuItems = [
    { title: "Главная", path: "/" },
    { title: "Обо мне", path: "/about" },
    { title: "Ученикам", path: "/students" },
    { title: "Родителям", path: "/parents" },
    { title: "Блог", path: "/blog" },
    { title: "Галерея", path: "/gallery" },
    { title: "Контакты", path: "/contacts" },
  ];

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-math-blue">
            Математика <span className="math-symbol">∞</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-gray-700 hover:text-math-blue transition duration-200"
            >
              {item.title}
            </Link>
          ))}
          <Button className="bg-math-blue hover:bg-math-light-blue">
            Связаться
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t mt-2 animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-math-blue py-2 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <Button className="bg-math-blue hover:bg-math-light-blue w-full">
              Связаться
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
