import React, {useEffect, useState } from 'react';

function PreviousEntries({ entries }) {
    return (
        <div>
        <h2>Previous Entries</h2>
        {entries.length === 0 ? (
            <p>No previous entries available.</p>
        ) : (
            <ul>
                {entries.map((entry, index) => (
                  <li key={index}>
                    <strong>{entry.date} - {entry.mood}</strong><br />
                    {entry.entry}
                  </li>  
                ))}
            </ul>
        )}
        </div>
    );

}

export default PreviousEntries;