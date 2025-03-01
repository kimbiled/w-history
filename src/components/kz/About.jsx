import hands from '../../assets/images/hands.jpg'
import success from '../../assets/images/success.avif'
import tech from '../../assets/images/tech.webp'
import us from '../../assets/images/us.jpg'
const About = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-5xl font-bold text-gray-900 leading-tight pb-6">Біз туралы</h1>
                    <p className="text-lg text-gray-700 leading-7">
                        Қазақстан әйелдерінің цифрлық архиві – бұл Қазақстанның түкпір-түкпіріндегі әйелдердің жетістіктерін құжаттау және насихаттауға арналған жоба. 
                        Біздің бастама «Цифрлық Қазақстан» бағдарламасын қолдап, әлеуметтік прогресс үшін цифрлық инновациялардың маңыздылығын көрсетеді.
                    </p>
                </div>
                <div className="w-full lg:w-7/12">
                    <img className="w-full h-full rounded-lg shadow-lg" src={us} alt="Әйелдер тарихта" />
                </div>
            </div>

            <div className="flex flex-col items-center text-center py-16">
            <h2 className="text-5xl font-bold text-gray-900 leading-tight pb-6">Біздің жұмысымыз</h2>
                <p className="text-lg text-gray-700 text-center">Біздің цифрлық архивіміз – бұл жай ғана әңгімелер жинағы емес, ол қазақстандық әйелдердің күші, төзімділігі мен жетістіктерін көрсететін тірі платформа.<br/> Мұнда біз шабыттандыру, оқыту және олардың қоғамға қосқан үлесін түсіну үшін кеңістік құрамыз.
                </p>
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                    <div className="p-6 bg-white shadow-md rounded-lg border-t-4 border-[#A67F78]">
                        <h3 className="text-xl font-semibold text-gray-900">Тарихтарды жинау</h3>
                        <p className="text-gray-600 mt-2">Біз ғылым, бизнес, өнер, қоғам және басқа да салаларда айтарлықтай үлес қосқан әйелдердің өмір тарихтарын құжаттаймыз. Әрбір оқиға – болашақ ұрпақ үшін шабыт.</p>
                    </div>
                    <div className="p-6 bg-white shadow-md rounded-lg border-t-4 border-[#A67F78]">
                        <h3 className="text-xl font-semibold text-gray-900">Жетістіктерді насихаттау</h3>
                        <p className="text-gray-600 mt-2">Біз қазақстандық әйелдердің көрнекті жетістіктерін көрсетіп, олардың үлесін тану, білім тарату және гендерлік стереотиптерді жою үшін платформа ұсынамыз.</p>
                    </div>
                    <div className="p-6 bg-white shadow-md rounded-lg border-t-4 border-[#A67F78]">
                        <h3 className="text-xl font-semibold text-gray-900">Тәжірибе алмасу платформасы</h3>
                        <p className="text-gray-600 mt-2">Біз әйелдер өз оқиғаларымен бөлісе алатын, тәжірибе алмасатын және бір-бірін қолдайтын кеңістік құрамыз, бұл күшті және біртұтас қауымдастықты қалыптастырады.</p>
                    </div>
                </div>
            </div>

            <section className="p-12 rounded-lg mt-12">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md lg:flex-row">
                        <img src={success} alt="Табыс тарихы" className="h-80 w-full lg:w-1/2 object-cover rounded-xl" />
                        <div className="flex flex-col justify-center flex-1 p-6">
                            <h3 className="text-3xl font-bold">Табыс тарихтары</h3>
                            <p className="my-6 text-gray-500">Біз өмірдің әртүрлі салаларында үлкен жетістіктерге жеткен әйелдердің шабыттандыратын әңгімелерін жинаймыз. Бұл әңгімелер кез келген кедергілерді жеңуге және армандарды жүзеге асыруға болатынын дәлелдейді. Біздің кейіпкерлеріміздің тарихы – табандылық, кәсібилік және өз ісіне адалдық үлгісі.</p>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md lg:flex-row-reverse">
                        <img src={tech} alt="Әйелдер технологияда" className="h-80 w-full lg:w-1/2 object-cover rounded-xl" />
                        <div className="flex flex-col justify-center flex-1 p-6">
                            <h3 className="text-3xl font-bold">Технология және ғылым</h3>
                            <p className="my-6 text-gray-500">Қазақстандық әйелдер ғылыми әзірлемелерге, технологиялық стартаптарға және инновациялық шешімдерге белсенді қатысады. Олар жасанды интеллект, биотехнология және ақпараттық технологиялар салаларында жетекші орындарға ие болып, болашақ ұрпақ үшін үлгі болады.</p>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md lg:flex-row">
    <img src={hands} alt="Көшбасшылық" className="h-80 w-full lg:w-1/2 object-cover rounded-xl" />
    <div className="flex flex-col justify-center flex-1 p-6">
        <h3 className="text-3xl font-bold">Көшбасшылық және қоғамдық қызмет</h3>
        <p className="my-6 text-gray-500">Қазақстан әйелдері елдің саяси өміріне белсенді қатысады, қоғамдық қозғалыстар мен халықаралық ұйымдарда маңызды орын алады. Олардың көшбасшылығы әділетті қоғам қалыптастыруға, әйелдердің барлық саладағы құқықтары мен мүмкіндіктерін кеңейтуге ықпал етеді.</p>
    </div>
</div>
                </div>
            </section>
        </div>
    )
}

export default About;
