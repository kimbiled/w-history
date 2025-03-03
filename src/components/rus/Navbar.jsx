import { UserCircle2 } from "lucide-react";
import Select from "react-select";
import { useNavigate, useLocation } from "react-router-dom";
import usa from "../../assets/images/usa.png";
import kz from "../../assets/images/kz.png";
import russia from "../../assets/images/russia.png";

const options = [
  { value: "ru", label: <><img src={russia} alt="ru" className="w-5 h-5 inline-block mr-2" />RU</> },
  { value: "kz", label: <><img src={kz} alt="kz" className="w-5 h-5 inline-block mr-2" />KZ</> },
  { value: "eng", label: <><img src={usa} alt="usa" className="w-5 h-5 inline-block mr-2" />ENG</> }
];
export default function Navbar() {
const navigate = useNavigate();
  const location = useLocation();

  const getCurrentLanguage = () => {
    if (location.pathname.startsWith("/kz")) return options[1]; // KZ
    if (location.pathname.startsWith("/eng")) return options[2]; // ENG
    return options[0]; // RU (по умолчанию)
  };

  const handleLanguageChange = (selectedOption) => {
    if (!selectedOption) return;
    const selectedLanguage = selectedOption.value;

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
        <a href="/" className="text-gray-700 hover:text-black transition">Главная</a>
        <a href="/story" className="text-gray-700 hover:text-black transition">Истории успеха</a>
        <a href="/about" className="text-gray-700 hover:text-black transition">О проекте</a>
        <a href="/news" className="text-gray-700 hover:text-black transition">Новости и события</a>
        <a href="/resources" className="text-gray-700 hover:text-black transition">Ресурсы</a>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Select 
            options={options} 
            value={getCurrentLanguage()} 
            onChange={handleLanguageChange} 
          />
        </div>
        <UserCircle2 size={24} className="text-gray-700 hover:text-black cursor-pointer transition" />
      </div>
    </nav>
  );
}


