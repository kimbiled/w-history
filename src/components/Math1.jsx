import React, { useState, useEffect } from "react";
import { FiClock, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const QuestionPage = () => {
  const [timeRemaining, setTimeRemaining] = useState(2100); // Таймер (10 минут)
  const [showTimer, setShowTimer] = useState(true); // Показ таймера
  const [currentQuestion, setCurrentQuestion] = useState(1); // Текущий номер вопроса
  const [currentSection, setCurrentSection] = useState(1); // Текущая секция
  const [currentModule, setCurrentModule] = useState(1); // Текущий модуль
  const [showDirections, setShowDirections] = useState(false); // Показ инструкции
  const [showQuestionDetails, setShowQuestionDetails] = useState(true); // Показ деталей вопроса
  const [selectedOption, setSelectedOption] = useState(null); // Выбранный вариант ответа
  const navigate = useNavigate();
  // Улучшенная функция для рендера опций
  // Mock data for the questions
  const questionsData = [
    {
      "image": "/math/math1.png",
      "text": "/math/qv1.png",
      "options": ["\\\sqrt{40}",

"\\sqrt{202}",
"20",
 
"202"
 ]
    },
    {
      "image": "/math/math2.png",
      "text": "/math/qv2.png",
      "options": [ "h(x) = \\frac{1}{2}x − \\frac{7}{2}",
        "h(x) = 2x + 7",
        
        "h(x) = 7x + 21",
       
        "h(x) = 9x + 25"
        ]
    },
    {
      "image": "/math/math3.png",
      "text": "/math/qv3.png",
      "options": ["3.62%",
       "8.38% ",
       "12%",
       "15.62%"
    ]
    },
    {
      "image": "/math/math4.png",
      "text": "/math/qv4.png",
      "options": ["25x + 62y ≤ 5,440",
       "25x + 62y ≥ 5,440",
       "62x + 25y ≤ 5,630",
       "62x + 25y ≥ 5,630"]
    },
    {
      "image": "/math/math5.png",
      "text": "/math/qv5.png",
      "options": [ "(\\frac{5}{2}, 1)",
        "(1, \\frac{2}{5})",
        "(-2, -5)",
        "(-5, -2)"]
    },
    {
      "image": "/math/math6.png",
      "text": "/math/qv6.png",
      "options": [
      ]
    },
    {
      "image": "/math/math7.png",
      "text": "/math/qv6.png",
      "options": [
        "3.77",
       "3.88",
      "4.15",
      "4.34"]
    },
    {
        "image": "/math/math2.png",
        "text": "/math/qv2.png",
        "options": [ "h(x) = \\frac{1}{2}x − \\frac{7}{2}",
          "h(x) = 2x + 7",
          
          "h(x) = 7x + 21",
         
          "h(x) = 9x + 25"
          ]
      },
    {
      "image": "/math/math9.png",
      "text": "/math/qv9.png",
      "options": [
        "(4, 28)",
       "(20, 28)",
      "(28, 4)",
      "(28, 20)"
    ]
    }, 
    {
        "image": "/math/math10.png",
        "text": "/math/qv10.png",
        "options": [
           ]
      },
      {
        "image": "/math/math14.png",
        "text": "/math/qv14.png",
        "options": [
            "16",
            "21",
           "46",
           "96"]
      },
      {
        "image": "/math/math20.png",
        "text": "/math/qv20.png",
        "options": [
         "\\sqrt{206}",
       "2\\sqrt{102}",
      "103\\sqrt{2}",
      "103\\sqrt{3}"
        ]
      },
      {
        "image": "/math/math13.png",
        "text": "/math/qv13.png",
        "options": [
          "x² + 14x − 49 = 0",
       "x² − 14x + 49 = 0",
      "5x² − 14x − 49 = 0",
      "5x² − 14x + 49 = 0"
    ]
      },
      {
        "image": "/math/math14.png",
        "text": "/math/qv14.png",
        "options": [
            "16",
            "21",
           "46",
           "96"]
      }, 
      {
        "image": "/math/math15.png",
        "text": "/math/qv15.png",
        "options": [
           ]
      },
      {
        "image": "/math/math16.png",
        "text": "/math/qv16.png",
        "options": [
         ]
      },
      {
        "image": "/math/math17.png",
        "text": "/math/qv17.png",
        "options": [
            "f(x) = -d - cx",
       "f(x) = d - cx",
      "f(x) = -d + cx",
      "f(x) = d + cx"
        ]
      },
      {
        "image": "/math/math18.png",
        "text": "/math/qv18.png",
        "options": [
          ]
      },
      {
        "image": "/math/math19.png",
        "text": "/math/qv19.png",
        "options": [
            "12",
            "15",
           "240",
           "340"
        ]
      },
      {
        "image": "/math/math20.png",
        "text": "/math/qv20.png",
        "options": [
         "\\sqrt{206}",
       "2\\sqrt{102}",
      "103\\sqrt{2}",
      "103\\sqrt{3}"
        ]
      },
      {
        "image": "/math/math21.png",
        "text": "/math/qv21.png",
        "options": [
           ]
      },
      {
        "image": "/math/math22.png",
        "text": "/math/qv22.png",
        "options": [
          "y = 46.8 + 5.9x",
       "y = 46.8 + 1.5x",
      "y = 12 + 5.9x",
      "y = 12 + 1.5x"
        ]
      }
  ]
  

  const renderOption = (option) => {
    // Разделяем текст и числа/формулы
    const parts = option.split(/(\d+(\.\d+)?%?)/); // Регулярное выражение для чисел с %, например "8.38%"
    return parts.map((part, index) =>
      /^\d+(\.\d+)?%?$/.test(part) ? ( // Проверяем, является ли часть числом
        <InlineMath key={index} math={part} />
      ) : (
        <span key={index}>{part}</span> // Остальной текст рендерим как обычный текст
      )
    );
  };

  const [answer, setAnswer] = useState("");

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
  };

  useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setInterval(() => setTimeRemaining((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else {
      navigate("/redirect3", { state: { remainingTime: timeRemaining } }); // Передача времени при окончании таймера
    }
  }, [timeRemaining, navigate]);
  

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const goToNext = () => {
    if (currentQuestion < 22) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      navigate("/results3", { state: { remainingTime: timeRemaining } }); // Передача времени
    }
  };
  

  const goToPrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion((prev) => prev - 1);
      setSelectedOption(null); // Clear selected option when moving to the previous question
    }
  };

  const toggleTimer = () => {
    setShowTimer(!showTimer);
  };

  const toggleDirections = () => {
    setShowDirections(!showDirections);
  };

  const handleOptionSelection = (option) => {
    setSelectedOption(option);
  };

  

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white">
        <div className="flex flex-col justify-between">
          <div className="flex flex-row gap-1 absolute right-4 top-1">
            <span className="text-[10px] font-medium tracking-wide">100%</span>
            <img src="/battery.png" alt="battery" className="w-4 h-4" />
          </div>
          <div className="flex justify-between items-center p-4 px-10">
            {/* Section Name */}
            <h1 className="text-lg font-medium">
              Section 1, Module 1: Reading and Writing
            </h1>

            {/* Timer */}
            <div className="absolute left-1/2 transform -translate-x-1/2 text-center mt-8 tracking-tight">
            {showTimer ? (
  <>
    <div
      className={`text-sm ${
        timeRemaining <= 300 ? "text-red-600" : "text-gray-800"
      }`}
    >
      <span className="font-bold text-[20px] ">
        {formatTime(timeRemaining)}
      </span>
    </div>
    {timeRemaining > 300 && ( // Показываем кнопку только если осталось больше 5 минут
      <button
        className="mt-[8px]"
        onClick={toggleTimer}
      >
        <img
          src="/hide.png"
          alt="show"
          className="w-[54px]"
        />
      </button>
    )}
  </>
) : (
  <div className="flex flex-col items-center gap-4">
    <div className="text-gray-700 mt-[-12px]">
      <img src="/timer.png" alt="timer" className="w-4 h-5" />
    </div>
    <button
      className="mt-[-5px]"
      onClick={toggleTimer}
    >
      <img
        src="/show.png"
        alt="show"
        className="w-[54px]"
      />
    </button>
  </div>
)}

            </div>

            {/* Highlights & More */}
            <div className="flex gap-4 mb-[-32px]">
              <button className="flex items-center text-gray-600 hover:text-gray-800 flex-col gap-1">
                <div className="flex flex-row gap-4">
                  <div className="flex flex-col items-center">
                  <img
                    src="/calc.png"
                    alt="Highlight"
                    className="w-4 h-4"
                  />
                   <span className="text-sm font-medium">
                    Calculator
                  </span>
                  </div>
                  <div className="flex flex-col items-center">
                  <img src="/x.png" alt="Annotate" className="w-4 h-4" />
                   <span className="text-sm font-medium">
                    Reference
                  </span>
                  </div>
                </div>
              </button>
              <button className="flex items-center text-gray-600 hover:text-gray-800 flex-col justify-between">
                <div className="flex flex-row">
                  <img src="/more.png" alt="More" className="w-3 h-3 mt-[2px]" />
                </div>
                <div>
                  <span className="text-sm font-medium">More</span>
                </div>
              </button>
            </div>
          </div>

          {/* Directions */}
          <div className="px-10 mt-[-10px] mb-[15px] ">
            <button
              onClick={toggleDirections}
              className="flex items-center text-gray-700 font-medium text-sm"
            >
              Directions
              {showDirections ? (
                <FiChevronUp className="ml-2" />
              ) : (
                <FiChevronDown className="ml-2" />
              )}
            </button>
            {showDirections && (
              <p className="text-sm text-gray-600 mt-2">
                Read the question and choose the best answer based on the
                provided notes.
              </p>
            )}
          </div>
        </div>

        {/* Stripes */}
        <div className="h-2">
          <img src="/stripes.png" alt="Vector stripes" className="w-full" />
        </div>
      </header>

      {/* Main Content */}
       {questionsData[currentQuestion-1].options.length === 0 ? ( 
          <main className="flex flex-1 font-mainText mt-2 mb-2 overflow-hidden">
          {/* Research Notes */}
          <section className="custom-scroll w-1/2 p-8 border-r border-r-[4px] border-[#888888] h-full overflow-y-scroll">
  <img src="/up.jpg" alt="question" className="w-[680px] mt-3" />
  <img src="/down.png" alt="question" className="w-[520px] mx-auto ml-[72px]" />
</section>

  
          {/* Questions and Options */}
          <section className="w-1/2 p-6">
            <div className="p-6">
              {showQuestionDetails && (
                <>
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between font-sans bg-[#F0F0F0] ml-[2px] mr-[4px] h-[28px]">
                      {/* Number Box */}
                      <div className="flex flex-row items-center">
                        <div className="bg-black text-white font-bold w-8 h-[28px] flex items-center justify-center font-medium">
                          {currentQuestion}
                        </div>
                        {/* Text */}
                        <img src="/mark.png" alt="abc" className="w-5 h-5 ml-4 cursor-pointer"/>
                        <span className="ml-2 text-gray-700 text-sm">Mark for Review</span>
                      </div>
                      {/* Icon */}
                      <div>
                        <img src="/abc.png" alt="abc" className="w-6 h-6 mr-2 cursor-pointer"/>
                      </div>
                    </div>
                    <img src="/stripes2.png" alt="Footer stripes" className="w-full h-1 mt-[0.5px]" />
                  </div>
  
                  <div className="w-[640px] h-420px mb-[5px]">
                      <img src={questionsData[currentQuestion - 1].image} alt="question" className="h-auto"/>
                  </div>
                  <div className="flex flex-col items-left mb-4">
                  <div className="w-[100px] rounded-lg border h-auto border-gray-400 focus-within:border-black focus-within:border-2 transition-all relative">
  <input
    type="text"
    className="w-full h-12 text-center bg-transparent outline-none"
    value={answer}
    onChange={handleInputChange} // Обновляем состояние при вводе
  />
  {/* Линия */}
  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2/3 border-b border-gray-400"></div>
</div>



        <p
          className="text-xl mt-4 font-bold"
        >
          Answer Preview: {answer}
        </p>
      </div>
                </>
              )}
            </div>
          </section>
        </main>
       ) : ( <main className="flex flex-1 font-mainText ">
        {/* Research Notes */}
        <section className="w-full p-8 items-center flex flex-col">
          <div className="p-6">
            {showQuestionDetails && (
              <>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between font-sans bg-[#F0F0F0] ml-[2px] mr-[4px] h-[28px] w-[750px]">
                    {/* Number Box */}
                    <div className="flex flex-row items-center">
                      <div className="bg-black text-white font-bold w-8 h-[28px] flex items-center justify-center font-medium">
                        {currentQuestion}
                      </div>
                      {/* Text */}
                      <img src="/mark.png" alt="abc" className="w-5 h-5 ml-4 cursor-pointer"/>
                      <span className="ml-2 text-gray-700 text-sm">Mark for Review</span>
                    </div>
                    {/* Icon */}
                    <div>
                      <img src="/abc.png" alt="abc" className="w-6 h-6 mr-2 cursor-pointer"/>
                    </div>
                  </div>
                  <img src="/stripes2.png" alt="Footer stripes" className="w-full h-1 mt-[0.5px]" />
                  <img src={questionsData[currentQuestion - 1].image} alt="question" className="w-[750px] h-auto"/>
                </div>
                <div className="space-y-3 font-sans mt-3">
  {questionsData[currentQuestion - 1].options.map((option, index) => (
    <button
      key={index}
      onClick={() => handleOptionSelection(option)}
      className={`flex items-start w-full text-left text-sm border rounded-lg p-2 transition ${
        selectedOption === option
          ? "border-[#374BC5] text-[#374BC5] bg-blue-50"
          : "border-gray-400 text-gray-700 hover:bg-blue-50"
      }`}
    >
      {/* Индикатор с буквой */}
      <span
        className={`w-6 h-6 flex-shrink-0 flex items-center justify-center border-2 rounded-full mr-3 transition ${
          selectedOption === option
            ? "border-gray-900 bg-[#374BC5] text-white"
            : "border-gray-700 text-gray-700"
        }`}
      >
        {String.fromCharCode(65 + index)} {/* A, B, C, D */}
      </span>
      {/* Текст ответа с математическим отображением */}
      <InlineMath math={option} className="text-sm font-medium leading-tight" />
    </button>
  ))}
</div>

              </>
            )}
          </div>
        </section>
      </main> )}
      

      {/* Footer */}
      <footer className="bg-white mt-[10px]">
        <div className="h-1 mb-[-6px]">
          <img src="/stripes.png" alt="Footer stripes" className="w-full" />
        </div>
        <div className="flex justify-between items-center p-4 ">
          <span className="text-gray-800 px-6 text-lg font-medium">
          Alan Yermukhan
          </span>
          <div>
            <span className="tracking-tight bg-black text-white font-medium font-sans rounded-[8px] flex items-center flex-row w-[150px] h-[34px] text-center justify-center ml-[-24px] text-[15px]">
              Question {currentQuestion} of {questionsData.length}
              <FiChevronUp className="ml-1" />
            </span>
          </div>
          <div className="space-x-3 tracking-tight">
            <button
              onClick={goToPrevious}
              className="w-20 h-10 bg-[#374BC5] font-medium text-white rounded-[48px]"
            >
              Back
            </button>
            <button
              onClick={goToNext}
              className="w-20 h-10 bg-[#374BC5] font-medium text-white rounded-[48px]"
            >
              Next
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QuestionPage;
