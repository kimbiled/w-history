import { useState } from "react";
import news from '../../assets/images/news.jpg'
const newsData = [
    { id: 1, title: "Казахстанская ученая получила международную премию", date: "2024-02-15", category: "Наука", description: "Исследовательница из Казахстана удостоена международной премии за достижения в биотехнологиях и генетике.", image: news},
    { id: 2, title: "Женщины-лидеры обсудили вопросы гендерного равенства", date: "2024-03-10", category: "События", description: "В Астане прошел форум, на котором обсуждались вопросы женского лидерства в бизнесе и политике.", image: news },
    { id: 3, title: "Развитие женского предпринимательства в Казахстане", date: "2024-02-28", category: "Технологии", description: "В Алматы состоялась встреча предпринимательниц, обсуждавших инновации и поддержку стартапов.", image: news },
    { id: 4, title: "Женщины в искусстве: новые грани творчества", date: "2024-03-05", category: "Искусство", description: "Казахстанские художницы представили уникальные проекты на международной выставке в Париже.", image: news },
    { id: 5, title: "Женщины в спорте: достижения и вызовы", date: "2024-02-20", category: "Спорт", description: "Казахстанские спортсменки завоевали медали на международных соревнованиях по легкой атлетике.", image: news },
    { id: 6, title: "Образование и женщины: новые возможности", date: "2024-02-25", category: "Образование", description: "В Казахстане запустили образовательную программу для женщин, стремящихся к профессиональному росту.", image: news }
];

const News = () => {
    const [filter, setFilter] = useState("Все категории");
    const [visibleCount, setVisibleCount] = useState(3);
    
    const filteredNews = filter === "Все категории" ? newsData : newsData.filter(news => news.category === filter);
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
                <h1 className="text-5xl font-bold text-[#A67F78] leading-tight text-center pb-8">Новости и события</h1>
                <p className="text-lg text-gray-500 text-center max-w-3xl mx-auto">
                    Следите за последними событиями, достижениями и инициативами, направленными на поддержку женщин в Казахстане.
                </p>
                <div className="flex justify-center mb-6">
                    <select 
                        className="px-4 py-2 border rounded-lg shadow-sm" 
                        value={filter} 
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option>Все категории</option>
                        <option>Наука</option>
                        <option>События</option>
                        <option>Технологии</option>
                        <option>Искусство</option>
                        <option>Спорт</option>
                        <option>Образование</option>
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
                            Загрузить еще...
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default News;