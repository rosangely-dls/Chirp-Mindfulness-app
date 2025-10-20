import React, { useState } from 'react';
import './App.css';

function App() {
  //State for journal entries and daily mood tracker
const [entry, setEntry] = useState('');
const [mood, setMood] = useState('');
const [entries, setEntries] = useState([]); //To store daily entries with mood

// Handle adding daily entry with mood
const handleAddEntry = () => {
  if (entry.trim() && mood) {
    const today = new Date().toISOString().split('T')[0]; //Getting today's date 'YYYY-MM-DD'
    setEntries([...entries, { date: today, entry, mood }]);
    setEntry('');
    setMood('');
  }
};
  return (
    
      <div className="App">
        <header className="App-header">
          <h1>Chirp: Mindfulness Journal</h1>
        </header>
        
        <main>
          <section id="journal">
            <h2>Today's Journal</h2>
            <textarea
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
              placeholder="Reflect on your day..."
          />
          <select value={mood} onChange={(e) => setMood(e.target.value)}>
            <option value="">Select your mood</option>
            <option value="Happy">Happy</option>
            <option value="Calm">Calm</option>
            <option value="Excited">Excited</option>
            <option value="Motivated">Motivated</option>
            <option value="Tired">Tired</option>
            <option value="Sad">Sad</option>
            <option value="Stressed">Stressed</option>
            <option value="Angry">Angry</option>
            <option value="Grateful">Grateful</option>
          </select>
          <button onClick={handleAddEntry}>Add Today's Entry</button>

          <h3>Past Entries</h3>
          <ul>
            {entries.map((entry, index) => (
              <li key={index}>
                <strong>{entry.date} - {entry.mood}</strong><br/>
                {entry.entry}
              </li>
            ))}
          </ul>
          </section>
        </main>

        <footer>
          <p>&copy; 2025 Chirp Mindfulness Journal</p>
        </footer>
        </div>
  );
}

export default App;
