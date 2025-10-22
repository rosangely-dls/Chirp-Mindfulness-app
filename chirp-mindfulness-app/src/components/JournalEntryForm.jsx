import React, { useState } from 'react';
import { addEntryWithFile } from "../api/airtable";

async function uploadFileToCloudinary(file) {
   const formData = new FormData();
   formData.append('file', file);
   formData.append('upload_preset', 'journalEntriesUpload');

   const response = await fetch(`https://api.cloudinary.com/v1_1/djijclsz3/upload`, {
    method: 'POST',
    body: formData,
   });

   const data = await response.json();
   return data.secure_url;

}

function JournalEntryForm () {
    const [entry, setEntry] = useState('');
    const [mood, setMood] = useState('');
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!entry || !mood || !file) {
            alert('Please fill in all fields and select a file');
            return;
        }
        setLoading(true);

        const fileUrl = await uploadFileToCloudinary(file);

        if (fileUrl) {
            await addEntryWithFile(entry, mood, fileUrl);
        } else {
            alert('Failed to upload file');
        }

        setLoading(false);
        setEntry('');
        setMood('');
        setFile(null);
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
           <input type="file" onChange={(e) => setFile(e.target.files[0])} />
           <button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Entry'}
           </button>
        </form>
    );
}

export default JournalEntryForm;