import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

//import page components
import JournalEntryForm from './components/JounralEntryForm';
import NewEntry from './pages/NewEntry';
import PreviousEntries from './pages/PreviousEntries';
import AccountInfo from './pages/AccountInfo';
import About from './pages/About';

function App() {
  //State for journal entries and daily mood tracker
const [entries, setEntries] = useState([]);


// Handle adding daily entry with mood
const handleAddEntry = ({ entry, mood }) => {
  if (entry.trim() && mood) {
    const today = new Date().toISOString().split('T')[0];
    setEntries([...entries, { date: today, entry, mood }]);
  }
};

  return (
    <Router>
        <header className="App-header">
          <h1>Chirp: Mindfulness Journal</h1>
          <nav className="navbar">
            <ul className="nav-list">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/previous-entries">Previous Entries</Link></li>
            <li className="nav-item"><Link to="/account-info">Account Info</Link></li>
            <li className="nav-item"><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </header>
        

<Routes>
  <Route
    path="/"
    element={
        <main>
          <section id="journal">
            <h2>Today's Journal</h2>
            <JournalEntryForm onSubmit={handleAddEntry} />
          </section>
        </main>
      }
    />
    <Route path="/previous-entries" element={<PreviousEntries entries={entries} />} />
    <Route path="/account-info" element={<AccountInfo />} /> 
    <Route path="/about" element={<About />} />
  </Routes>

        <footer>
          <p>&copy; 2025 Chirp Mindfulness Journal</p>
        </footer>
        </Router>
  );
}

export default App;
