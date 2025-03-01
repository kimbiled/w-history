import { useState } from "react";
import { motion } from "framer-motion";
import b1 from "../../assets/people/b1.jpg";
import b2 from "../../assets/people/b2.jpg";
import b3 from "../../assets/people/b3.jpeg";
import b4 from "../../assets/people/b4.jpg";
import b5 from "../../assets/people/b5.jpeg";
import b6 from "../../assets/people/b6.jpeg";
import b7 from "../../assets/people/b7.webp";
import b8 from "../../assets/people/b8.jpg";
import b9 from "../../assets/people/b9.jpg";
import b10 from "../../assets/people/b10.jpeg";
import b11 from "../../assets/people/b11.jpg";
import b12 from "../../assets/people/b12.jpg";
import b13 from "../../assets/people/b13.jpeg";
import b14 from "../../assets/people/b14.jpeg";

import s1 from "../../assets/people/sport1.jpg";
import s2 from "../../assets/people/sport2.jpg";
import s3 from "../../assets/people/sport3.jpg";
import s4 from "../../assets/people/sport4.jpg";
import s5 from "../../assets/people/sport5.jpg";
import s6 from "../../assets/people/sport6.jpg";

import media1 from "../../assets/people/media1.jpeg";
import media2 from "../../assets/people/media2.jpg";
import media3 from "../../assets/people/media3.jpg";
import media4 from "../../assets/people/media4.png";
import media5 from "../../assets/people/media5.jpg";
import media6 from "../../assets/people/media6.jpeg";
import media7 from "../../assets/people/media7.jpg";
import media8 from "../../assets/people/media8.jpeg";
import media9 from "../../assets/people/media9.jpeg";
import media10 from "../../assets/people/media10.jpg";
import media11 from "../../assets/people/media11.jpeg";
import media12 from "../../assets/people/media12.jpg";
import media13 from "../../assets/people/media13.jpg";
import media14 from "../../assets/people/media14.jpg";
import media15 from "../../assets/people/media15.jpg";

import sci1 from "../../assets/people/sci1.jpg";
import sci2 from "../../assets/people/sci2.jpg";
import sci3 from "../../assets/people/sci3.jpg";
import sci4 from "../../assets/people/sci4.jpg";
import sci5 from "../../assets/people/sci5.png";
import sci6 from "../../assets/people/sci6.jpg";
import sci7 from "../../assets/people/sci7.jpg";
import sci8 from "../../assets/people/sci8.jpg";
import sci9 from "../../assets/people/sci9.jpg";
import sci10 from "../../assets/people/sci10.png";



const people = [
    { name: "Umut Shayakhmetova", category: "Business", image: b1, description: "Chairwoman of the Management Board and member of the Board of Directors of JSC 'Halyk Bank of Kazakhstan'. She has been leading the largest bank in the country for 15 years, actively contributing to the development of the financial sector and digitalization." },
    { name: "Lyazzat Ibragimova", category: "Business", image: b2, description: "Chairwoman of the Management Board and member of the Board of Directors of JSC 'Otbasu Bank'. She heads Kazakhstan's leading mortgage bank, promoting housing lending and improving citizens' living conditions." },
    { name: "Alina Aldambergen", category: "Business", image: b3, description: "Head of the Kazakhstan Stock Exchange (KASE). Under her leadership, the exchange has reached new heights, contributing to the development of the country's financial market." },
    { name: "Asel Zhanassova", category: "Business", image: b4, description: "Head of JSC 'Kazpost'. She implements innovative solutions and digital technologies, modernizing the postal service and improving service quality." },
    { name: "Anar Rakhimbaeva", category: "Business", image: b5, description: "Co-founder and Chairwoman of the Board of Trustees of the AYALA Charity Foundation. Successfully combines entrepreneurial activity with philanthropy, implementing projects in education and healthcare." },
    { name: "Gulnara Bazhkenova", category: "Business", image: b6, description: "Editor-in-chief and founder of the independent online publication 'The Village Kazakhstan'. She created a successful media business covering current urban topics and attracting a wide audience." },
    { name: "Asel Tasmagambetova", category: "Business", image: b7, description: "Entrepreneur and philanthropist, founder of the Saby Foundation. Implements projects in education, healthcare, and support for young entrepreneurs, making a significant contribution to the country's social development." },
    { name: "Aida Balayeva", category: "Business", image: b8, description: "Minister of Culture and Information of the Republic of Kazakhstan. Leads the cultural sphere and information policy of the country, contributing to the development of national culture and the media space." },
    { name: "Madina Abylkassymova", category: "Business", image: b9, description: "Chairwoman of the Agency for Regulation and Development of the Financial Market. Ensures the stability and development of the financial sector by implementing effective regulatory measures." },
    { name: "Tamara Duissenova", category: "Business", image: b10, description: "Deputy Prime Minister of the Republic of Kazakhstan. Coordinates social policy and labor relations, contributing to the improvement of citizens' well-being." },
    { name: "Aruzhan Sain", category: "Business", image: b11, description: "Public figure and entrepreneur, founder of the 'Voluntary Society 'Mercy'' charity foundation. Actively engaged in protecting children's rights and implementing social projects." },
    { name: "Dinara Smailova", category: "Business", image: b12, description: "Human rights activist and entrepreneur, also known as Dina Tansari. Founder of the 'NeMolchiKZ' organization, supporting victims of violence and promoting gender equality." },
    { name: "Zhanna Urazbakhova", category: "Business", image: b13, description: "Lawyer and entrepreneur, widely known for participating in high-profile court cases. Founder of a law firm providing a wide range of services." },
    { name: "Gulnar Dossayeva", category: "Business", image: b14, description: "Founder of the 'Dara' charity foundation and entrepreneur. Implements projects in education and social support, contributing to the development of an inclusive society." },
    { name: "Gulnara Bazhkenova", category: "Media", image: media1, description: "Editor-in-chief and founder of the independent online publication 'The Village Kazakhstan'. She created a successful media business covering current urban topics and attracting a wide audience." },
    { name: "Lyazzat Tanysbai", category: "Media", image: media2, description: "CEO of the 'Kazakhstan' TV channel. Under her leadership, the channel has reached new heights in national broadcasting." },
    { name: "Nurzhan Mukhamedzhanova", category: "Media", image: media3, description: "Head of the National Television and Radio Corporation 'Kazakhstan'. Under her management, the corporation significantly expanded its broadcasting and strengthened its market position." },
    { name: "Aniya Baiorazova", category: "Media", image: media4, description: "Head of a TV channel positioned as the 'Main Women's Channel'. She introduces new formats and programs targeted at the female audience." },
    { name: "Nazipa Kulzhanova", category: "Media", image: media5, description: "The first female journalist in Kazakhstan, who participated in the development of the women's movement and supported social initiatives." },
    { name: "Gulzhan Yergalieva", category: "Media", image: media6, description: "Founder of one of the popular newspapers 'Freedom of Speech'. She greatly contributed to the development of independent journalism." },
    { name: "Aida Balaeva", category: "Media", image: media7, description: "Minister of Culture and Information of the Republic of Kazakhstan, Chairwoman of the National Commission on Women's Affairs and Family-Demographic Policy." },
    { name: "Samal Yeslyamova", category: "Media", image: media8, description: "Kazakh actress who gained international recognition for her roles in cinema." },
    { name: "Aigul Nuriyeva", category: "Media", image: media9, description: "Businesswoman holding high positions in media and other sectors of the economy." },
    { name: "Gulshara Abdykalikova", category: "Media", image: media10, description: "Political figure contributing to the development of information policy and media." },
    { name: "Asel Zhanassova", category: "Media", image: media11, description: "Head of 'Kazpost' JSC, implementing digital technologies and innovative solutions." },
    { name: "Aruzhan Sain", category: "Media", image: media12, description: "Public figure, founder of the 'Mercy' charitable foundation." },
    { name: "Dinara Sadzhan", category: "Media", image: media13, description: "TV presenter and entrepreneur, actively developing the fashion and media industry." },
    { name: "Zhanna Kuanysheva", category: "Media", image: media14, description: "Editor-in-chief of the online publication 'Vlast', a leading independent media resource." },
    { name: "Aigul Omarova", category: "Media", image: media15, description: "Film director and screenwriter who has received international recognition." },
    { name: "Nazym Kyzaibai", category: "Sports", image: s1, description: "Two-time world boxing champion in the up to 48 kg weight category. She became the first Kazakhstani female athlete to win the Women's World Boxing Championship." },  
    { name: "Sabina Altynbekova", category: "Sports", image: s2, description: "Volleyball player widely known for her athletic achievements and attractive appearance. She played for Kazakhstan's youth national team, gaining international fan attention." },  
    { name: "Olga Rypakova", category: "Sports", image: s3, description: "2012 Olympic champion in triple jump, multiple medalist at World Championships and Asian Championships. Her achievements made her one of Kazakhstan's most decorated track and field athletes." },  
    { name: "Firuza Sharipova", category: "Sports", image: s4, description: "Professional boxer, world lightweight champion by WIBA and WBU versions. She became the first Kazakhstani woman to win a professional world boxing title." },  
    { name: "Yulia Galysheva", category: "Sports", image: s5, description: "Freestyle skier, bronze medalist at the 2018 Pyeongchang Olympics in moguls. Multiple winner and medalist of World Cup stages, World Championships, and Asian Games." },  
    { name: "Zhanbota Aldabergenova", category: "Sports", image: s6, description: "Freestyle skier specializing in aerials. She distinguished herself twice at the European Cup in Finland, winning bronze and silver medals." },
    { name: "Kunsulu Zakarya", category: "Science", image: sci1, description: "Doctor of Biological Sciences, head of the Scientific Research Institute for Biological Safety Problems. Led the development of the Kazakhstani QazVac vaccine against COVID-19, making a significant contribution to the country's biotechnology industry." },  
{ name: "Mariam Alimardanova", category: "Science", image: sci2, description: "Doctor of Technical Sciences specializing in dairy product technology. Developed biotechnological Kazakh national dairy products and holds around 30 patents in Kazakhstan." },  
{ name: "Patshaiym Tazhibayeva", category: "Science", image: sci3, description: "The first woman in Kazakhstan and Central Asia to become a Doctor of Geological Sciences, founder of lithology in the country. Her scientific works in lithology gained worldwide recognition." },  
{ name: "Nailya Bazanova", category: "Science", image: sci4, description: "Doctor of Biological Sciences, the first female academician in Kazakhstan and Central Asia. Founder of the physiology of agricultural animals, making a significant contribution to biological science." },  
{ name: "Akkagaz Doszhanova", category: "Science", image: sci5, description: "One of the first Kazakh female doctors, actively involved in public and educational activities. Her medical works were published in magazines such as 'Әйел теңдігі', 'Abaı', and 'Jas Azamat'." },  
{ name: "Nursulu Buketova", category: "Science", image: sci6, description: "Doctor of Philological Sciences, professor, and a key figure in developing linguistics and teaching foreign languages in Kazakhstan. Founded the Faculty of Foreign Languages at Buketov Karaganda University and the 'Lingua' Language and Translation Institute." },  
{ name: "Alina Solovyova", category: "Science", image: sci7, description: "Biology teacher awarded the title of 'Kazakhstan Yenbek Eri' for outstanding achievements in education. Author of textbooks and teaching materials, actively implementing modern technologies in the learning process." },  
{ name: "Madina Madieva", category: "Science", image: sci8, description: "Doctor of Medical Sciences, author of a method for predicting the risk of genetic consequences of low-dose radiation exposure in descendants of irradiated individuals. Works at Semey State Medical University and has over 240 scientific publications." },  
{ name: "Fauziya Orazbayeva", category: "Science", image: sci9, description: "Doctor of Pedagogical Sciences, professor, director of the 'Latin' scientific and practical center. Specialist in communicative linguistics and Kazakh language teaching methods, author of over 300 scientific works." },  
{ name: "Zhanna Khamzina", category: "Science", image: sci10, description: "Doctor of Legal Sciences, research professor, member of the National Scientific Council for Social and Humanitarian Sciences. Ranked among the TOP-50 university professors in Kazakhstan and recipient of the 'Best University Lecturer' grant." }
];

const categories = ["All", "Science", "Sports", "Media", "Business"];

export default function Story() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPeople = selectedCategory === "All"
    ? people
    : people.filter(person => person.category === selectedCategory);

  return (
    <div className="min-h-screen p-8 mt-24 mb-24 text-center">
      <h1 className="text-5xl font-bold text-gray-900 leading-tight pb-6">Success Stories</h1>
      <div className="flex justify-center gap-4 mb-8">
        {categories.map(category => (
          <button 
            key={category} 
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg ${selectedCategory === category ? "bg-black text-white" : "bg-white text-black"}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPeople.map((person, index) => (
          <motion.div 
            key={index} 
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-lg text-center"
          >
            <img src={person.image} alt={person.name} className="w-40 h-40 mx-auto rounded-full mb-4 object-cover" />
            <h2 className="text-2xl font-semibold mb-2">{person.name}</h2>
            <p className="text-gray-700">{person.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
