import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components from 'react-router-dom'
import Header from './components/Header';
import Navbar from './components/NavBar'; 
import Home from './components/pages/Home'; // Import the Home component
import About from './components/pages/About'; // Import the About component
import Newsletters from './components/pages/Newsletters'; // Import the Newsletters component
import LearningAppList from './components/pages/LearningAppList'; // Import the LearningAppList component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          {/* Define routes for different pages */}
          <Route path="/" element={<Home />} /> 
          <Route path="/Home" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/newsletters" element={<Newsletters />} /> 
          <Route path="/LearningApps" element={<LearningAppList />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
