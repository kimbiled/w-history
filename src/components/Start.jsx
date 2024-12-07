import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function App() {
  const [inputs, setInputs] = useState(["", "", "", "", "", ""]);
    const navigate = useNavigate()
  const handleChange = (index, value) => {
    if (/^\d*$/.test(value)) { // Только числа
      const newInputs = [...inputs];
      newInputs[index] = value;
      setInputs(newInputs);

      // Автоматически переходит на следующее поле, если введено число
      if (value && index < inputs.length - 1) {
        document.getElementById(`input-${index + 1}`).focus();
      }
    }
  };

  const handleClick = () => {
    navigate("/verbal1");
  }
  const isButtonActive = inputs.every((input) => input !== "");

  return (
    <div className="min-h-screen bg-[#C9DFD3] flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white shadow-md py-4">
       <img src="/header.png" alt="header" className="h-12 w-full"/>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-start mt-8 flex-grow">
        <h2 className="text-3xl font-medium mb-4">Start Code</h2>
        <p className="text-lg mb-6">
          Enter your start code now to begin testing. Good luck!
        </p>
        <p className="text-lg mb-8">
          The start code contains <strong>numbers only</strong>.
        </p>

        <div className="flex flex-row gap-4 mb-6">
          {inputs.map((value, index) => (
            <input
              key={index}
              id={`input-${index}`}
              type="text"
              maxLength="1"
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-16 h-16 text-center text-2xl font-bold border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        <button
           className={`px-6 py-3 text-black font-bold rounded-full transition border-2 ${
            isButtonActive
              ? "bg-yellow-400 border-black"
              : "bg-gray-400 border-gray-500"
          }`}
          disabled={!isButtonActive}
          onClick={()=>handleClick()}
        >
          Start Test
        </button>
      </main>

      <p className="text-sm text-gray-700 mt-4 text-center mb-12">
  You can{" "}
  <a
    href="#"
    className="text-blue-600 underline hover:text-blue-800 transition"
  >
    review the instructions
  </a>{" "}
  that the proctor reads aloud.
</p>
    </div>
  );
}

export default App;
