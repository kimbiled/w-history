import { useState } from "react";
import news from '../../assets/images/news.jpg'
const newsData = [
    { id: 1, title: "Қазақстандық ғалым халықаралық сыйлыққа ие болды", date: "2024-02-15", category: "Ғылым", description: "Қазақстандық зерттеуші биотехнология мен генетика саласындағы жетістіктері үшін халықаралық сыйлыққа ие болды.", image: news},
    { id: 2, title: "Әйел көшбасшылар гендерлік теңдік мәселелерін талқылады", date: "2024-03-10", category: "Оқиғалар", description: "Астанада бизнесте және саясатта әйелдердің көшбасшылығы мәселелері талқыланған форум өтті.", image: news },
    { id: 3, title: "Қазақстандағы әйел кәсіпкерлігінің дамуы", date: "2024-02-28", category: "Технологиялар", description: "Алматыда стартаптар мен инновацияларды қолдау мәселелерін талқылаған кәсіпкер әйелдердің кездесуі өтті.", image: news },
    { id: 4, title: "Өнердегі әйелдер: шығармашылықтың жаңа қырлары", date: "2024-03-05", category: "Өнер", description: "Қазақстандық суретшілер Париждегі халықаралық көрмеде бірегей жобаларын ұсынды.", image: news },
    { id: 5, title: "Спорттағы әйелдер: жетістіктер мен қиындықтар", date: "2024-02-20", category: "Спорт", description: "Қазақстандық спортшылар жеңіл атлетика бойынша халықаралық жарыстарда медальдар жеңіп алды.", image: news },
    { id: 6, title: "Білім және әйелдер: жаңа мүмкіндіктер", date: "2024-02-25", category: "Білім", description: "Қазақстанда кәсіби өсуге ұмтылатын әйелдерге арналған білім беру бағдарламасы іске қосылды.", image: news }
];

const News = () => {
    const [filter, setFilter] = useState("Барлық санаттар");
    const [visibleCount, setVisibleCount] = useState(3);
    
    const filteredNews = filter === "Барлық санаттар" ? newsData : newsData.filter(news => news.category === filter);
    const visibleNews = filteredNews.slice(0, visibleCount);

    const loadMore = () => {
        if (visibleCount + 3 >= filteredNews.length) {
            setVisibleCount(filteredNews.length);
        } else {
            setVisibleCount(visibleCount + 3);
        }
    };

    return (
        <section className="mt-16 mb-16">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <h1 className="text-5xl font-bold text-black leading-tight text-center pb-8">Жаңалықтар мен оқиғалар</h1>
                <p className="text-lg text-gray-500 text-center max-w-3xl mx-auto">
                    Қазақстандағы әйелдерді қолдауға бағытталған соңғы оқиғалар, жетістіктер мен бастамалардан хабардар болыңыз.
                </p>
                <div className="flex justify-center mb-6">
                    <select 
                        className="px-4 py-2 border rounded-lg shadow-sm" 
                        value={filter} 
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option>Барлық санаттар</option>
                        <option>Ғылым</option>
                        <option>Оқиғалар</option>
                        <option>Технологиялар</option>
                        <option>Өнер</option>
                        <option>Спорт</option>
                        <option>Білім</option>
                    </select>
                </div>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {visibleNews.map((news) => (
                        <a key={news.id} href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white shadow-md rounded-lg overflow-hidden">
                            <img src={news.image} alt={news.title} className="object-cover w-full h-44 rounded bg-gray-500" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold text-black group-hover:underline group-focus:underline">{news.title}</h3>
                                <span className="text-xs text-gray-500">{news.date}</span>
                                <p className="text-gray-500">{news.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
                {visibleCount < filteredNews.length && (
                    <div className="flex justify-center">
                        <button 
                            type="button" 
                            className="px-6 py-3 text-sm rounded-md hover:underline bg-white text-gray-500 border"
                            onClick={loadMore}
                        >
                            Қосымша жүктеу...
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default News;
