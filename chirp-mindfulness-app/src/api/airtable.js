import axios from 'axios';

const baseURL = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/Entries`;

const config = {
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
    },
};

export const fetchEntries = async () => {
    try {
        const response = await axios.get(baseURL, config);
        return response.data.records;
    } catch (error) {
        console.error('Error fetching entries:', error);
        return [];
    }
};

export const addEntryWithFile = async (entry, mood, fileUrl) => {
    const data = {
        fields: {
            Entry: entry,
            Mood: mood,
            Date: Date,
            Attachments: [{ url: fileUrl }],
        },
    };

    try {
        const response = await axios.post(baseURL, data, config);
        return response.data;
    } catch (error) {
        console.error('Error adding entry:', error);
        return null;
    }
};