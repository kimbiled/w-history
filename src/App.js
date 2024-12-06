import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuestionPage from "./components/Verbal";
import Result1 from "./components/Result1";
import BreakTimer from "./components/Pause";
import RedirectPage from './components/Redirect'
import Verbal2 from './components/Verbal2'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuestionPage />} /> {/* Главная страница */}
        <Route path="/results" element={<Result1 />} /> {/* Страница результатов */}
        <Route path="/redirect" element={<RedirectPage />} />
        <Route path="/verbal2" element={<Verbal2 />} />
      </Routes>
    </Router>
  );
};

export default App;
