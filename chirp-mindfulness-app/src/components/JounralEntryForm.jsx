import React, { useState } from 'react';

function JournalEntryForm ({ onSubmit}) {
    const [entry, setEntry] = useState('');
    const [mood, setMood] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!entry || !mood) {
            alert('Please fill in all fields');
            return;
        }
        onSubmit({ entry, mood });
        setEntry('');
        setMood('');
    };

    return (
        <form onSubmit={handleSubmit} className="form">
           <textarea 
           value={entry}
           onChange={(e) => setEntry(e.target.value)}
           placeholder="Reflect on your day..."
           required
           />
           <select 
           value={mood}
           onChange={(e) => setMood(e.target.value)}
           required
           >
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
           <button type="submit">Submit Entry</button>
        </form>
    );
}

export default JournalEntryForm;