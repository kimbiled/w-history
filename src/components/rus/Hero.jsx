import main from '../../assets/images/main.JPG'
const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-gray-900">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        {/* Обрезка изображения с диагональю */}
        <div className="absolute inset-0 w-full h-full bg-gray-900 clip-diagonal"></div>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full opacity-70 clip-diagonal"
          src={main} alt=""
        />
      </div>

      <div className="relative flex flex-col items-start w-full max-w-2xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <h2 className="mb-5 xl:text-[44px] font-bold text-white sm:text-4xl">
            Добро пожаловать в
            <p className="text-[#A67F78] mt-1"> Цифровой архив</p>
            женщин Казахстана
          </h2>
          <p className="pr-5 mb-5 xl:text-lg text-gray-300 md:text-lg">
            Откройте вдохновляющие истории женщин Казахстана, которые формируют будущее в науке, медиа, искусстве и других сферах.
          </p>
          <div className="flex items-center flex-row gap-4">
            {/* Синяя кнопка */}
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 border border-white rounded-lg hover:bg-white hover:text-gray-900"
           >
              Присоединиться
            </a>
            {/* Прозрачная кнопка с белой рамкой */}
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 border border-white rounded-lg hover:bg-white hover:text-gray-900"
            >
              Читать истории
            </a>
          </div>
        </div>
      </div>

      {/* Добавляем стили для диагонального среза */}
      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(100% 0, 100% 100%, 0 100%, 50% 0);
        }
      `}</style>
    </div>
  );
};
export default Hero;