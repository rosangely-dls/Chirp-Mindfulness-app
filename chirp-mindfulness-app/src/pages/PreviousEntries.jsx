import React, { useState, useEffect} from 'react';
import { fetchEntries } from "../api/airtable";

function PreviousEntries() {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const getEntries = async () => {
            const data = await fetchEntries();
            setEntries(data);
        };
        getEntries();
    }, []);

    return (
        <div>
            <h2>Previous Entries</h2>
            <ul>
                {entries.map((entry) => (
                    <li key={entry.id}>
                        <strong>{entry.fields.Date} - {entry.fields.Mood}</strong><br />
                        {entry.fields.Entry}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PreviousEntries;