import { UserCircle2 } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentLanguage = () => {
    if (location.pathname === "/kz") return "kz";
    if (location.pathname === "/eng") return "eng";
    return "ru";
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    if (selectedLanguage === "ru") {
      navigate("/");
    } else {
      navigate(`/${selectedLanguage}`);
    }
  };

  return (
    <nav className="bg-white py-4 px-8 flex items-center justify-between">
      {/* Левая часть - ссылки */}
      <div className="text-xl font-bold text-black">W-History</div>
      
      <div className="flex space-x-6">
      <a href="/kz" className="text-gray-700 hover:text-black transition">Басты бет</a>
<a href="/kz/story" className="text-gray-700 hover:text-black transition">Табысты оқиғалар</a>
<a href="/kz/about" className="text-gray-700 hover:text-black transition">Жоба туралы</a>
<a href="/kz/news" className="text-gray-700 hover:text-black transition">Жаңалықтар мен оқиғалар</a>
<a href="/kz/resources" className="text-gray-700 hover:text-black transition">Ресурстар</a>
      </div>
      
      {/* Правая часть - выбор языка, иконка пользователя и email */}
      <div className="flex items-center space-x-4">
      <div className="relative">
          <select 
            className="appearance-none text-gray-700 bg-white border border-gray-300 rounded-lg py-2 px-2 pr-4 hover:text-black transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400"
            onChange={handleLanguageChange}
            value={getCurrentLanguage()} // Устанавливаем текущее значение
          >
            <option value="ru">🇷🇺 RU</option>
            <option value="kz">🇰🇿 KZ</option>
            <option value="eng">🇬🇧 ENG</option>
          </select>
          <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
            ▼
          </div>
        </div>
        <UserCircle2 size={24} className="text-gray-700 hover:text-black cursor-pointer transition" />
        <span className="text-gray-700">user@example.com</span>
      </div>
    </nav>
  );
}

