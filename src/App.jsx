import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/rus/HomePage'
import HomePageKz from './pages/kz/HomePageKz'
import StoryPageKz from './pages/kz/StoryPageKz'
import ResourcesPageKz from './pages/kz/ResourcesPageKz'
import AboutPageKz from './pages/kz/AboutPageKz'
import NewsPageKz from './pages/kz/NewsPageKz'

import HomePageEng from './pages/eng/HomePageEng'
import AboutPageEng from './pages/eng/AboutPageEng'
import ResourcesPageEng from './pages/eng/ResourcesPageEng'
import NewsPageEng from './pages/eng/NewsPageEng'
import StoryPageEng from './pages/eng/StoryPageEng'

import AboutPage from "./pages/rus/AboutPage";
import NewsPage from "./pages/rus/NewsPage";
import ResourcesPage from "./pages/rus/ResourcesPage";
import StoryPage from "./pages/rus/StoryPage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/story" element={<StoryPage />} />

        <Route path="/kz" element={<HomePageKz />} />
        <Route path="/kz/about" element={<AboutPageKz />} />
        <Route path="/kz/news" element={<NewsPageKz />} />
        <Route path="/kz/resources" element={<ResourcesPageKz />} />
        <Route path="/kz/story" element={<StoryPageKz />} />


        <Route path="/eng" element={<HomePageEng />} />
        <Route path="/eng/about" element={<AboutPageEng />} />
        <Route path="/eng/news" element={<NewsPageEng />} />
        <Route path="/eng/resources" element={<ResourcesPageEng />} />
        <Route path="/eng/story" element={<StoryPageEng />} />
      </Routes>
    </Router>
  );
};

export default App;
