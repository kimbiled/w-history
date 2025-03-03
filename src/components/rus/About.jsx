import hands from '../../assets/images/hands.jpg';
import success from '../../assets/images/success.jpg';
import tech from '../../assets/images/tech.jpg';
import us from '../../assets/images/us.jpg';

const About = () => {
    return (
        <div className="2xl:container 2xl:mx-auto">
            <div className="flex flex-col lg:flex-row justify-between gap-12  lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-5xl font-bold text-[#A67F78] leading-tight pb-6">О Нас</h1>
                    <p className="text-lg text-gray-700 leading-7">
                        Цифровой архив казахстанских женщин посвящен документированию и прославлению достижений женщин по всему Казахстану. 
                        Наша инициатива поддерживает программу «Цифровой Казахстан», подчеркивая важность цифровых инноваций для социального прогресса.
                    </p>
                </div>
                <div className="w-full lg:w-7/12">
                    <img className="w-full h-full rounded-lg shadow-lg" src={us} alt="Women in history" />
                </div>
            </div>

            <div className="w-full bg-[#e1dcd9] py-16 mt-36">
            <div className="max-w-7xl mx-auto px-4 lg:px-20 md:px-6">
            <h2 className="text-5xl font-bold text-[#A67F78] leading-tight pb-6 text-center">Наша работа</h2>
                <p className="text-lg text-gray-700 text-center">Наш цифровой архив — это не просто собрание историй, а живая платформа, демонстрирующая силу, стойкость и достижения казахстанских женщин.<br/> Здесь мы создаем пространство для вдохновения, обучения и осознания их вклада в общество.
                </p>
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                    <div className="p-6 bg-white shadow-md rounded-lg border-t-4 border-[#A67F78]">
                        <h3 className="text-xl font-semibold text-[#A67F78]">Сбор историй</h3>
                        <p className="text-gray-600 mt-2">Мы документируем жизненные истории женщин, которые внесли значительный вклад в науку, бизнес, искусство, общественную деятельность и другие сферы. Каждая история – это вдохновение для будущих поколений.</p>
                    </div>
                    <div className="p-6 bg-white shadow-md rounded-lg border-t-4 border-[#A67F78]">
                        <h3 className="text-xl font-semibold text-[#A67F78]">Популяризация достижений</h3>
                        <p className="text-gray-600 mt-2">Мы освещаем выдающиеся достижения казахстанских женщин, предоставляя платформу для распространения знаний, признания их вклада и устранения гендерных стереотипов.</p>
                    </div>
                    <div className="p-6 bg-white shadow-md rounded-lg border-t-4 border-[#A67F78]">
                        <h3 className="text-xl font-semibold text-[#A67F78]">Платформа для обмена</h3>
                        <p className="text-gray-600 mt-2">Мы создаем пространство, где женщины могут делиться своими историями, обмениваться опытом и поддерживать друг друга, формируя сильное и сплоченное сообщество.</p>
                    </div>
                </div>
                </div>
            </div>

            <section className=" lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 rounded-lg mt-12">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md lg:flex-row">
                        <img src={success} alt="Success Story" className="h-80 w-full lg:w-1/2 object-cover rounded-xl" />
                        <div className="flex flex-col justify-center flex-1 p-6">
                            <h3 className="text-3xl font-bold text-[#A67F78]">Истории успеха</h3>
                            <p className="my-6 text-gray-500">Мы собираем вдохновляющие истории женщин, достигших значительных высот в различных сферах жизни. Эти рассказы мотивируют, доказывая, что любые барьеры можно преодолеть, а мечты — осуществить. Истории наших героинь – это примеры упорства, профессионализма и преданности своему делу.</p>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md lg:flex-row-reverse">
                        <img src={tech} alt="Women in Tech" className="h-80 w-full lg:w-1/2 object-cover rounded-xl" />
                        <div className="flex flex-col justify-center flex-1 p-6">
                            <h3 className="text-3xl font-bold text-[#A67F78]">Технологии и наука</h3>
                            <p className="my-6 text-gray-500">Казахстанские женщины активно участвуют в научных разработках, технологических стартапах и инновационных решениях. Они работают в самых передовых областях, включая искусственный интеллект, биотехнологии и инженерное дело, внося неоценимый вклад в развитие мировой науки и экономики.</p>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md lg:flex-row">
                        <img src={hands} alt="Leadership" className="h-80 w-full lg:w-1/2 object-cover rounded-xl" />
                        <div className="flex flex-col justify-center flex-1 p-6">
                            <h3 className="text-3xl font-bold text-[#A67F78]">Лидерство и общественная деятельность</h3>
                            <p className="my-6 text-gray-500">Женщины Казахстана активно участвуют в политической жизни страны, занимают ключевые позиции в общественных движениях и международных организациях. Их лидерство способствует формированию более справедливого общества, расширению прав и возможностей женщин во всех сферах жизни.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;