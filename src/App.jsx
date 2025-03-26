import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';
import { useState } from 'react';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <>
      <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
        <Router>
          <Routes>
            <Route
              path="/Notes-App"
              element={<NoteList isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
            />
            <Route path="/new" element={<NoteEditor isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} />
            <Route path="/edit/:index" element={<NoteEditor isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;