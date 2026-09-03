import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Framework from './pages/Framework';
import Workshop from './pages/Workshop';
import ModuleDetail from './pages/ModuleDetail';
import ContentPlan from './pages/ContentPlan';
import Quiz from './pages/Quiz';
import SpeakerIdentity from './pages/SpeakerIdentity';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/framework" element={<Framework />} />
            <Route path="/framework/:id" element={<ModuleDetail />} />
            <Route path="/content-plan" element={<ContentPlan />} />
            <Route path="/workshop" element={<Workshop />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/speaker-identity" element={<SpeakerIdentity />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
