import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and short description */}
          <div>
            <Link to="/" className="text-2xl font-bold inline-flex items-center">
              Математика <span className="ml-2 math-symbol">∞</span>
            </Link>
            <p className="mt-4 text-gray-300">
              Индивидуальный подход к обучению математике, подготовка к ЕГЭ/ОГЭ и олимпиадам.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Навигация</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-white transition">Главная</Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition">Обо мне</Link>
              <Link to="/students" className="text-gray-300 hover:text-white transition">Ученикам</Link>
              <Link to="/parents" className="text-gray-300 hover:text-white transition">Родителям</Link>
              <Link to="/blog" className="text-gray-300 hover:text-white transition">Блог</Link>
              <Link to="/gallery" className="text-gray-300 hover:text-white transition">Галерея</Link>
              <Link to="/contacts" className="text-gray-300 hover:text-white transition">Контакты</Link>
            </nav>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} />
                <a href="mailto:math@example.com" className="text-gray-300 hover:text-white transition">
                  math@example.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} />
                <a href="tel:+71234567890" className="text-gray-300 hover:text-white transition">
                  +7 (123) 456-78-90
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle size={18} />
                <a href="https://t.me/username" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                  Telegram
                </a>
              </div>
            </div>
            
            {/* Social links placeholder */}
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition" aria-label="WhatsApp">
                WhatsApp
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition" aria-label="VK">
                VK
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Математика с [Имя Фамилия]. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
