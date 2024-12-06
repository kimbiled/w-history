import React, { useState, useEffect } from "react";

const BreakTimer = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 минут = 600 секунд

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // Очистить таймер при размонтировании
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return (
    <div className="h-screen flex bg-[#1D1D1D] text-white font-sans">
        <div className="absolute bottom-6 left-16 text-xl font-medium">
            <p>Ansar Dussaliyev</p>
        </div>
        <div className="absolute top-6 right-8 flex flex-row gap-1 w-16 justify-center items-center rounded bg-[#4d4d4d] h-6">
            <span className="text-[10px] font-medium tracking-wide">100%</span>
            <img src="/battery.png" alt="battery" className="w-4 h-4" />
          </div>
      {/* Левая часть: Таймер */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="flex flex-col items-center justify-center border-2 ml-18 border-gray-500 p-6 rounded-lg w-[340px] h-[150px]">
          <div className="text-2xl font-medium mb-4">Remaining Break Time:</div>
          <div className="text-7xl font-medium">{formatTime(timeLeft)}</div>
        </div>
      </div>

      <div className="w-1/2 flex justify-center items-center bg-[#1D1D1D] font-sans">
        <div className="max-w-md mr-56">
          <h1 className="text-4xl font-medium mb-4">
            Take a Break: Do Not Close Your Device
          </h1>
          <p className="text-gray-300 mb-6 text-base">
            After the break, a{" "}
            <span className="font-semibold text-white">Resume Testing Now</span>{" "}
            button will appear and you'll start the next session.
          </p>
          <h2 className="font-semibold text-white mb-2">Follow these rules during the break:</h2>
          <ol className="text-gray-300 list-decimal list-inside space-y-4 text-md">
            <li className="ml-1">Do not disturb students who are still testing.</li>
            <li className="ml-1">Do not exit the app or close your laptop.</li>
            <li className="ml-1">
              Do not access phones, smartwatches, textbooks,<br/>notes, or the
              internet.
            </li>
            <li className="ml-1">Do not eat or drink near any testing device.</li>
            <li className="ml-1">
              Do not speak in the test room; outside the test<br/> room, do not
              discuss the exam with anyone.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default BreakTimer;
