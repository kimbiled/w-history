import React, { useState, useEffect } from "react";
import { FiClock, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Result1 = () => {
  const [timeRemaining, setTimeRemaining] = useState(10); // Таймер (10 минут)
  const [showTimer, setShowTimer] = useState(true); // Показ таймера
  const [currentQuestion, setCurrentQuestion] = useState(1); // Текущий номер вопроса
  const [showDirections, setShowDirections] = useState(false); // Показ инструкции
  const navigate = useNavigate(); // Хук для навигации
  const location = useLocation();
  const { remainingTime } = location.state || {};
  const handleNext = () => {
    navigate("/final"); // Перенаправление на страницу Redirect
  };
  

  useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setInterval(() => setTimeRemaining((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeRemaining]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };


  const goToPrevious = () => {
    navigate("/math2");
  };

  const toggleTimer = () => {
    setShowTimer(!showTimer);
  };

  const toggleDirections = () => {
    setShowDirections(!showDirections);
  };



  

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
      {/* Header */}
      <header className="bg-[#FAFAFA]">
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
                    <span className="font-bold text-[20px] ">{formatTime(timeRemaining)}</span>
                  </div>
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
                <div className="flex flex-row gap-1">
                  <img
                    src="/highlight.png"
                    alt="Highlight"
                    className="w-4 h-4"
                  />
                  <img src="/annotate.png" alt="Annotate" className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-sm font-medium">
                    Highlights & Notes
                  </span>
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
        <div className="h-2 bg-[#FAFAFA]">
          <img src="/stripes.png" alt="Vector stripes" className="w-full" />
        </div>
      </header>

      {/* Main Content */}
        <main className="flex flex-1 font-mainText mt-2 mb-2 mx-auto bg-[#FAFAFA] w-full h-full">
            <img src="/math_modu2.png" className="w-[1200px] h-[600px] mx-auto"></img>
        </main>

      {/* Footer */}
      <footer className="bg-[#FAFAFA] mt-[10px]">
        <div className="h-1 mb-[-6px] bg-[#FAFAFA]">
          <img src="/stripes.png" alt="Footer stripes" className="w-full" />
        </div>
        <div className="flex justify-between items-center p-4 ">
          <span className="text-gray-800 px-6 text-lg font-medium">
            Ivan Ivanov
          </span>
          <div>
            <span className="tracking-tight bg-black text-white font-medium font-sans rounded-[8px] flex items-center flex-row w-[150px] h-[34px] text-center justify-center ml-[-24px] text-[15px]">
              Question 22 of 22
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
               onClick={handleNext}
              
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

export default Result1;
