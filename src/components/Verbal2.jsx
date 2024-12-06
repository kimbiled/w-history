import React, { useState, useEffect } from "react";
import { FiClock, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const QuestionPage = () => {
  const [timeRemaining, setTimeRemaining] = useState(600); // Таймер (10 минут)
  const [showTimer, setShowTimer] = useState(true); // Показ таймера
  const [currentQuestion, setCurrentQuestion] = useState(1); // Текущий номер вопроса
  const [currentSection, setCurrentSection] = useState(1); // Текущая секция
  const [currentModule, setCurrentModule] = useState(1); // Текущий модуль
  const [showDirections, setShowDirections] = useState(false); // Показ инструкции
  const [showQuestionDetails, setShowQuestionDetails] = useState(true); // Показ деталей вопроса
  const [selectedOption, setSelectedOption] = useState(null); // Выбранный вариант ответа
  const navigate = useNavigate();
  // Mock data for the questions
  const questionsData = [
    {
      "image": "/verbal/Verbal1.png",
      "text": "/verbal/qv1.png",
      "options": ["permanent", "tentative", "warranted", "prominent"]
    },
    {
      "image": "/verbal/Verbal2.png",
      "text": "/verbal/qv2.png",
      "options": ["hypothesized", "discounted", "redefined", "exploited"]
    },
    {
      "image": "/verbal/Verbal3.png",
      "text": "/verbal/qv3.png",
      "options": ["sanction", "ameliorate", "rationalize", "postulate"]
    },
    {
      "image": "/verbal/Verbal4.png",
      "text": "/verbal/qv4.png",
      "options": ["examples of", "concerns about", "indications of", "similarities with"]
    },
    {
      "image": "/verbal/Verbal5.png",
      "text": "/verbal/qv5.png",
      "options": ["controversial among", "antagonistic toward", "imitated by", "inconsequential to"]
    },
    {
      "image": "/verbal/Verbal6.png",
      "text": "/verbal/qv6.png",
      "options": [
        "It implies that Israel treasures a particular characteristic of his personality when that characteristic should usually be regarded as a flaw.",
        "It suggests that if not for a certain aspect of his character, Israel might not have been as easily thwarted in his ambition to establish a farm.",
        "It shows why Israel would not have been able to undertake the enormous amount of labor necessary to run a farm even if he had owned the necessary property.",
        "It explains why, when the situation requires it, Israel is able to undertake courageous acts that others would generally avoid."
      ]
    },
    {
      "image": "/verbal/Verbal7.png",
      "text": "/verbal/qv6.png",
      "options": [
        "It describes a phenomenon that scientists do not fully understand, explains a research team’s hypothesis about that phenomenon, and then describes a finding that led the team to refine the hypothesis.",
        "It introduces an unresolved scientific question, presents a research team’s hypothesis pertaining to that question, and then describes an observation made by the team that conflicts with that hypothesis.",
        "It discusses a process that scientists are somewhat unclear about, introduces competing hypotheses about that process, and then explains how a research team concluded that one of those hypotheses is likely correct.",
        "It explains a hypothesis that has been the subject of scientific debate, discusses how a research team tested that hypothesis, and then presents data the team collected that validate the hypothesis."
      ]
    },
    {
       "image": "/verbal/Verbal8.png",
        "text": "/verbal/qv8.png",
        "options": [
        "By emphasizing that there are still advances being made in automated artistic style classification",
        "By criticizing previous research into automated artistic style classification systems for focusing on a narrow group of styles",
        "By arguing that most people are not able to correctly identify the style of paintings that they are shown",
        "By suggesting that people may eventually develop more uniform and accepted ideas about artistic styles and their boundaries"
        ]
      },
    {
      "image": "/verbal/Verbal9.png",
      "text": "/verbal/qv9.png",
      "options": [
        "It provided preliminary evidence that microorganism-mediated nutrient cycling was accelerated in the transplanted cores.",
        "It suggested that temperature-induced changes in microorganism activity may be occurring at increasingly high elevations.",
        "It ruled out a potential alternative explanation for the acceleration in microorganism-mediated nutrient cycling.",
        "It clarified that microorganism activity levels in the plant-soil cores varied depending on which microorganisms comprised the community."
      ]
    }, 
    {
        "image": "/verbal/Verbal10.png",
        "text": "/verbal/qv10.png",
        "options": [
           "ranged from 5.0 to 92.00, indicating that well-being varied widely from participant to participant.",
           "were lower for two measures, with the rating for only one measure indicating greater well-being for these participants.",
           "ranged from 3.9 to 46.00, with no rating indicating greater well-being in any measure for these participants.",
           "were higher for all three measures, indicating greater overall well-being for these participants."
        ]
      },
      {
        "image": "/verbal/Verbal11.png",
        "text": "/verbal/qv11.png",
        "options": [
           "In the second test administration, participants who took 2–4 days of leave had higher average attentiveness scores than did those who took no leave, but in the third test administration, those who took no leave had higher average scores than those who took 1–5 weeks of leave.",
           "In the first test administration, participants who took 2–4 days of leave had lower average attentiveness scores than did those who took 1–5 weeks of leave and those who took no leave.",
           "In both the second and third test administrations, participants who took 2–4 days of leave had higher average attentiveness scores than did participants who took 1–5 weeks of leave.",
           "In the second and third test administrations, participants who took 2–4 days of leave had higher average attentiveness scores than did those who took no leave."
  ]
      },
      {
        "image": "/verbal/Verbal12.png",
        "text": "/verbal/qv12.png",
        "options": [
           "most lizard species use about the same percentage of their maximal speed when escaping predation as they do when pursuing prey.",
           "multiple lizard species move at an average of less than 90% of their maximal speed while escaping predation.",
           "more lizard species use, on average, 90%–100% of their maximal speed while escaping predation than use any other percentage of their maximal speed.",
           "at least 4 lizard species use, on average, less than 100% of their maximal speed while pursuing prey."
        ]
      },
      {
        "image": "/verbal/Verbal13.png",
        "text": "/verbal/qv13.png",
        "options": [
           "“nor is it valid / to discriminate against ‘business documents and / school-books’; all these phenomena are important.”",
           "“One must make a distinction / however: when dragged into prominence by half poets, the result is not / poetry”",
           "“when [poems] become so derivative as to become unintelligible, the / same thing may be said for all of us—that we / do not admire what / we cannot understand.”",
           "“Reading [poetry], however, with a perfect contempt for it, one discovers that there is in / it after all, a place for the genuine.”"
        ]
      },
      {
        "image": "/verbal/Verbal14.png",
        "text": "/verbal/qv14.png",
        "options": [
           "flew for longer distances than did other pterosaur species that had oversized head crests.",
           "had longer wings than other pterosaur species considered to have been comfortable walking.",
           "had a smaller head than researchers expected based on the earlier T. navigans skull specimens.",
           "flew for shorter distances and spent more time walking than researchers previously thought."
        ]
      }, 
      {
        "image": "/verbal/Verbal15.png",
        "text": "/verbal/qv15.png",
        "options": [
           "the Aztecs would have disputed the idea that the morality of an individual’s actions can be assessed by appealing to standards of behavior that are independent of the individual’s social circumstances.",
           "the Aztecs would not have accepted the notion that the morality of an individual’s actions can be fairly evaluated by people who do not live in the same society as that individual.",
           "actions by members of Aztec society who contributed a great deal to their community could be judged as morally good even if those actions were inconsistent with behaviors the Aztecs regarded as good in all contexts.",
           "similar actions performed by people in different social roles in Aztec society would have been regarded as morally equivalent unless those actions led to different outcomes for the community."
        ]
      },
      {
        "image": "/verbal/Verbal16.png",
        "text": "/verbal/qv16.png",
        "options": [
           "Created",
           "Creates",
           "Creating",
           "Create"
        ]
      },
      {
        "image": "/verbal/Verbal17.png",
        "text": "/verbal/qv17.png",
        "options": [
           "was revealing",
           "has revealed",
           "reveals",
           "reveal"
        ]
      },
      {
        "image": "/verbal/Verbal18.png",
        "text": "/verbal/qv18.png",
        "options": [
           "through,",
           "through",
           "through;",
           "through and"
        ]
      },
      {
        "image": "/verbal/Verbal19.png",
        "text": "/verbal/qv19.png",
        "options": [
           "underlies",
           "is underlying",
           "underlie",
           "has been underlying"
        ]
      },
      {
        "image": "/verbal/Verbal20.png",
        "text": "/verbal/qv20.png",
        "options": [
           "competitions, however:",
           "competitions, however,",
           "competitions, however;",
           "competitions; however,"
        ]
      },
      {
        "image": "/verbal/Verbal21.png",
        "text": "/verbal/qv21.png",
        "options": [
           "indiscriminate and",
           "indiscriminate,",
           "indiscriminate",
           "indiscriminate:"
        ]
      },
      {
        "image": "/verbal/Verbal22.png",
        "text": "/verbal/qv22.png",
        "options": [
           "in other words,",
           "for instance,",
           "on the other hand,",
           "in summary,"
        ]
      },
      {
        "image": "/verbal/Verbal23.png",
        "text": "/verbal/qv23.png",
        "options": [
           "Subsequently,",
           "Conversely,",
           "For instance,",
           "In other words,"
  ]
      },
      {
        "image": "/verbal/Verbal24.png",
        "text": "/verbal/qv24.png",
        "options": [
           "That being said,",
           "However,",
           "For instance,",
           "Hence,"
  ]
      },
      {
        "image": "/verbal/Verbal25.png",
        "text": "/verbal/qv25.png",
        "options": [
           "In other words,",
           "That said,",
           "For example,",
           "Accordingly,"
      ]
      },
      {
        "image": "/verbal/Verbal26.png",
        "text": "/verbal/qv26.png",
        "options": [
           "Catlett’s *Students Aspire* depicts two figures supporting each other in the pursuit of equality.",
           "*Recognition* and *Students Aspire* both show African American figures in poses that symbolize supportive relationships.",
           "Catlett completed *Recognition* in 1970 and *Students Aspire* in 1978.",
           "The figures in *Recognition* have features that are rounded and indistinct, while the figures in *Students Aspire* have sharply defined features."
        ]
      },
      {
        "image": "/verbal/Verbal27.png",
        "text": "/verbal/qv27.png",
        "options": [
           "According to the US government, which classifies such sensitive information as routine diplomatic correspondence, Confidential information could damage national security if disclosed.",
           "Most routine diplomatic correspondence is classified according to the degree to which disclosure could affect the nation’s security.",
           "Having the potential to damage national security if disclosed, most routine diplomatic correspondence is classified as Confidential.",
           "If disclosed, communication with both allies and adversaries could affect the nation’s security."
  ]
      }
  ]
  

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

  const goToNext = () => {
    if (currentQuestion < 27) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      navigate("/results"); // Переход на страницу результатов
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
    <div className="min-h-screen flex flex-col">
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
              Section 1, Module 2: Reading and Writing
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
        <div className="h-2">
          <img src="/stripes.png" alt="Vector stripes" className="w-full" />
        </div>
      </header>

      {/* Main Content */}
        <main className="flex flex-1 font-mainText mt-2 mb-2">
        {/* Research Notes */}
        <section className="w-1/2 p-8 border-r border-r-[4px] border-[#888888]">
          <img src={questionsData[currentQuestion - 1].image} alt="question" className="w-[640px] h-auto"/>
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
                    <img src={questionsData[currentQuestion - 1].text} alt="question" className="h-auto"/>
                </div>
                <div className="space-y-3 font-sans">
                  {questionsData[currentQuestion - 1].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionSelection(option)}
                      className={`flex items-center w-full text-left border rounded-md p-2 transition ${
                        selectedOption === option
                          ? "border-[#374BC5] text-[#374BC5] bg-blue-50"
                          : "border-gray-400 text-gray-700 hover:bg-blue-50"
                      }`}
                    >
                      <span
                        className={`w-6 h-6 flex items-center justify-center border rounded-full mr-3 transition ${
                          selectedOption === option
                            ? "border-[#374BC5] bg-[#374BC5] text-white"
                            : "border-gray-400 text-gray-700"
                        }`}
                      >
                        {String.fromCharCode(65 + index)} {/* A, B, C, D */}
                      </span>
                      <span className="text-sm font-medium">{option}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      

      {/* Footer */}
      <footer className="bg-white mt-[10px]">
        <div className="h-1 mb-[-6px]">
          <img src="/stripes.png" alt="Footer stripes" className="w-full" />
        </div>
        <div className="flex justify-between items-center p-4 ">
          <span className="text-gray-800 px-6 text-lg font-medium">
            Ivan Ivanov
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
