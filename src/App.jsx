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
import CountdownGuard from './components/CountdownGuard';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/speaker-identity" element={<SpeakerIdentity />} />
            
            {/* Protected Routes */}
            <Route path="/framework" element={<CountdownGuard><Framework /></CountdownGuard>} />
            <Route path="/framework/:id" element={<CountdownGuard><ModuleDetail /></CountdownGuard>} />
            <Route path="/content-plan" element={<CountdownGuard><ContentPlan /></CountdownGuard>} />
            <Route path="/workshop" element={<CountdownGuard><Workshop /></CountdownGuard>} />
            <Route path="/quiz" element={<CountdownGuard><Quiz /></CountdownGuard>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
