import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuestionPage from "./components/Verbal";
import Result1 from "./components/Result1";
import Result2 from "./components/Results2";
import Result3 from "./components/Results3";
import Result4 from "./components/Results4";
import BreakTimer from "./components/Pause";
import RedirectPage from './components/Redirect'
import Verbal2 from './components/Verbal2'
import Math from './components/Math1'
import Math2 from './components/Math2'
import Redirect2 from './components/Redirect2';
import Redirect3 from './components/Redirect2';
import Final from './components/Final';
import Start from './components/Start';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} /> {/* Главная страница */}
        <Route path="/verbal1" element={<QuestionPage />} /> {/* Главная страница */}
        <Route path="/results" element={<Result1 />} /> {/* Страница результатов */}
        <Route path="/results2" element={<Result2 />} /> {/* Страница результатов */}
        <Route path="/results3" element={<Result3 />} /> {/* Страница результатов */}
        <Route path="/results4" element={<Result4 />} /> {/* Страница результатов */}
        <Route path="/redirect" element={<RedirectPage />} />
        <Route path="/redirect3" element={<Redirect3 />} />
        <Route path="/verbal2" element={<Verbal2 />} />
        <Route path="/math" element={<Math />} />
        <Route path="/math2" element={<Math2 />} />
        <Route path="/redirect2" element={<Redirect2 />} />
        <Route path="/break" element={<BreakTimer />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </Router>
  );
};

export default App;
