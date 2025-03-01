import hands from '../../assets/images/hands.jpg'
import success from '../../assets/images/success.avif'
import tech from '../../assets/images/tech.webp'
import us from '../../assets/images/us.jpg'

const About = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-5xl font-bold text-gray-900 leading-tight pb-6">About Us</h1>
                    <p className="text-lg text-gray-700 leading-7">
                        The Digital Archive of Kazakhstani Women is dedicated to documenting and celebrating the achievements of women across Kazakhstan.
                        Our initiative supports the "Digital Kazakhstan" program, emphasizing the importance of digital innovations for social progress.
                    </p>
                </div>
                <div className="w-full lg:w-7/12">
                    <img className="w-full h-full rounded-lg shadow-lg" src={us} alt="Women in history" />
                </div>
            </div>

            <div className="flex flex-col items-center text-center py-16">
                <h2 className="text-5xl font-bold text-gray-900 leading-tight pb-6">Our Work</h2>
                <p className="text-lg text-gray-700 text-center">
                    Our digital archive is not just a collection of stories but a living platform demonstrating the strength, resilience, and achievements of Kazakhstani women.
                    Here we create a space for inspiration, learning, and recognition of their contributions to society.
                </p>
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                    <div className="p-6 bg-white shadow-md rounded-lg border-t-4 border-[#A67F78]">
                        <h3 className="text-xl font-semibold text-gray-900">Story Collection</h3>
                        <p className="text-gray-600 mt-2">
                            We document the life stories of women who have made significant contributions to science, business, art, social activities, and other fields.
                            Each story is an inspiration for future generations.
                        </p>
                    </div>
                    <div className="p-6 bg-white shadow-md rounded-lg border-t-4 border-[#A67F78]">
                        <h3 className="text-xl font-semibold text-gray-900">Promoting Achievements</h3>
                        <p className="text-gray-600 mt-2">
                            We highlight the outstanding achievements of Kazakhstani women, providing a platform to spread knowledge, recognize their contributions, and break down gender stereotypes.
                        </p>
                    </div>
                    <div className="p-6 bg-white shadow-md rounded-lg border-t-4 border-[#A67F78]">
                        <h3 className="text-xl font-semibold text-gray-900">Exchange Platform</h3>
                        <p className="text-gray-600 mt-2">
                            We create a space where women can share their stories, exchange experiences, and support each other, forming a strong and united community.
                        </p>
                    </div>
                </div>
            </div>

            <section className="p-12 rounded-lg mt-12">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md lg:flex-row">
                        <img src={success} alt="Success Story" className="h-80 w-full lg:w-1/2 object-cover rounded-xl" />
                        <div className="flex flex-col justify-center flex-1 p-6">
                            <h3 className="text-3xl font-bold">Success Stories</h3>
                            <p className="my-6 text-gray-500">
                                We gather inspiring stories of women who have achieved remarkable heights in various fields of life.
                                These stories motivate, proving that any barriers can be overcome and dreams can come true.
                                The stories of our heroines are examples of perseverance, professionalism, and dedication to their work.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md lg:flex-row-reverse">
                        <img src={tech} alt="Women in Tech" className="h-80 w-full lg:w-1/2 object-cover rounded-xl" />
                        <div className="flex flex-col justify-center flex-1 p-6">
                            <h3 className="text-3xl font-bold">Technology and Science</h3>
                            <p className="my-6 text-gray-500">
                                Kazakhstani women actively participate in scientific developments, tech startups, and innovative solutions.
                                They play a crucial role in shaping the future of technology and science in the country.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md lg:flex-row">
    <img src={hands} alt="Leadership" className="h-80 w-full lg:w-1/2 object-cover rounded-xl" />
    <div className="flex flex-col justify-center flex-1 p-6">
        <h3 className="text-3xl font-bold">Leadership and Public Activity</h3>
        <p className="my-6 text-gray-500">Women in Kazakhstan actively participate in the country's political life, occupy key positions in public movements and international organizations. Their leadership contributes to building a more just society and expanding women's rights and opportunities in all areas of life.</p>
    </div>
</div>
                </div>
            </section>
        </div>
    );
}

export default About;