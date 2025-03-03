import { useState } from "react";
import news from '../../assets/images/news.jpg'
const newsData = [
    { id: 1, title: "Kazakh Scientist Receives International Award", date: "2024-02-15", category: "Science", description: "A researcher from Kazakhstan has been awarded an international prize for achievements in biotechnology and genetics.", image: news},
    { id: 2, title: "Women Leaders Discuss Gender Equality Issues", date: "2024-03-10", category: "Events", description: "A forum was held in Astana where women's leadership in business and politics was discussed.", image: news },
    { id: 3, title: "Development of Women's Entrepreneurship in Kazakhstan", date: "2024-02-28", category: "Technology", description: "A meeting of women entrepreneurs took place in Almaty, where innovations and startup support were discussed.", image: news },
    { id: 4, title: "Women in Art: New Facets of Creativity", date: "2024-03-05", category: "Art", description: "Kazakh female artists presented unique projects at an international exhibition in Paris.", image: news },
    { id: 5, title: "Women in Sports: Achievements and Challenges", date: "2024-02-20", category: "Sports", description: "Kazakh sportswomen won medals at international athletics competitions.", image: news },
    { id: 6, title: "Education and Women: New Opportunities", date: "2024-02-25", category: "Education", description: "An educational program for women aspiring for professional growth was launched in Kazakhstan.", image: news }
];

const News = () => {
    const [filter, setFilter] = useState("All Categories");
    const [visibleCount, setVisibleCount] = useState(3);
    
    const filteredNews = filter === "All Categories" ? newsData : newsData.filter(news => news.category === filter);
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
                <h1 className="text-5xl font-bold text-[#A67F78] leading-tight text-center pb-8">News and Events</h1>
                <p className="text-lg text-gray-500 text-center max-w-3xl mx-auto">
                    Stay updated with the latest events, achievements, and initiatives aimed at supporting women in Kazakhstan.
                </p>
                <div className="flex justify-center mb-6">
                    <select 
                        className="px-4 py-2 border rounded-lg shadow-sm" 
                        value={filter} 
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option>All Categories</option>
                        <option>Science</option>
                        <option>Events</option>
                        <option>Technology</option>
                        <option>Art</option>
                        <option>Sports</option>
                        <option>Education</option>
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
                            Load More...
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default News;
