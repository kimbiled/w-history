const Resources = () => {
    const links = [
        { title: "Саясат пен гендер: Қазақ әйелдері кедергілерді қалай еңсерді", url: "https://cyberleninka.ru/article/n/politika-i-gender-kak-kazahskie-pravitelnitsy-preodolevali-gendernye-bariery-v-patriarhalnom-obschestve" },
        { title: "Science and World (мамыр 2014)", url: "http://scienceph.ru/d/413259/d/science-and-world--5-(9)-may-vol.-ii_1.pdf#page=130" },
        { title: "Қазақстандық ғалым әйелдердің рөлі", url: "https://elib.bsu.by/bitstream/123456789/195538/1/Жанибекова_Байжуманова_РОЛЬ%20УЧЕНЫХ%20ЖЕНЩИН%20КАЗАХСТАНА.pdf" },
        { title: "Қазақстанның гендерлік саясатының қазіргі жағдайы", url: "https://cyberleninka.ru/article/n/sovremennoe-sostoyanie-gendernoy-politiki-respubliki-kazahstan" },
        { title: "Қазақстандағы еңбек нарығындағы гендерлік теңсіздік", url: "https://cyberleninka.ru/article/n/gendernoe-neravenstvo-na-rynke-truda-v-kazahstane" },
        { title: "Қазақстандық әйелдердің үлесі", url: "https://elib.bsu.by/bitstream/123456789/195539/1/Жапекова_ВКЛАД%20КАЗАХСТАНСКИХ%20ЖЕНЩИН.pdf" },
        { title: "Экономиканың өзекті мәселелері", url: "https://bulecon.enu.kz/index.php/main/article/view/1023" },
        { title: "Білім берудегі гендерлік саясат", url: "https://bulletin-socpolit.kaznpu.kz/index.php/ped/article/view/517" },
        { title: "Гендерлік зерттеулер және әйелдердің жұмысқа орналасуы", url: "https://esp.ieconom.kz/jour/article/view/317" },
        { title: "Ғылымды дамытудағы әйелдердің рөлі", url: "https://journals.nauka-nanrk.kz/bulletin-science/article/view/5685" },
        { title: "Әлеуметтік ғылымдар бойынша жаһандық конференция", url: "https://top-conferences.us/index.php/ICBPCS/article/view/916" },
        { title: "Қазақстанның тарихи зерттеулері", url: "https://nguhist.elpub.ru/jour/article/view/2193" },
        { title: "Қазақстандағы әйелдердің көшбасшылығын талдау", url: "https://rmebrk.kz/journals/869/94485.pdf#page=68" },
        { title: "Гендерлік зерттеулер және халықаралық перспективалар", url: "https://repository.almau.edu.kz/xmlui/bitstream/handle/123456789/424/Iab_vi_2006_sbornikStatey.pdf?sequence=1&isAllowed=y#page=285" }
    ];

    return (
        <div className="container mx-auto px-6 py-12 mt-16">
            <h1 className="text-5xl font-bold text-[#A67F78] text-center pb-8">Ресурстар</h1>
            <p className="text-lg text-gray-500 text-center max-w-3xl mx-auto pb-6">
                Мұнда гендерлік мәселелерге, Қазақстандағы әйелдердің ғылым, экономика және қоғамдағы рөліне арналған пайдалы зерттеулер, мақалалар және жарияланымдар жиналған.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {links.map((link, index) => (
                    <a 
                        key={index} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-200 border-l-4 border-[#A67F78]"
                    >
                        <h3 className="text-xl font-semibold text-[#A67F78]">{link.title}</h3>
                        <p className="text-gray-500 mt-2">Дереккөз: {new URL(link.url).hostname}</p>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Resources;