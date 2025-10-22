import React, { useState, useEffect} from 'react';
import { fetchEntries } from "../api/airtable";

function PreviousEntries() {
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getEntries = async () => {
            try{
            const data = await fetchEntries();
            setEntries(data);
        } catch (error) {
            console.error('Error fetching entries:', error);
        } finally {
            setLoading(false);
        }
    };
        getEntries();
    }, []);

    if (loading) {
        return <p>Loading your entries...</p>
    }

    return (
        <div className="previous-entries">
            <h2>Previous Entries</h2>
            {entries.length === 0 ? (
                <p>No entries found.</p>
            ) : (
            <ul>
                {entries.map((entry) => (
                    <li key={entry.id}>
                        <strong>{entry.fields.Date} - {entry.fields.Mood}</strong><br />
                        {entry.fields.Entry}
                    </li>
                ))}
            </ul>
            )}
        </div>
    );
}

export default PreviousEntries;