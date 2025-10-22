Chirp: Mindfulness Journal
Chirp is a mindfulness journal app designed to encourage daily reflection and mindfulness. Track your moods, record personal entries, and observe patterns to foster self-awareness and enhance your mental wellbeing.

Features
*Journal Entries: Write down your thoughts and experiences using the journal feature.
*Mood Tracking: Record your daily mood to identify trends over time.
*View Past Entries: Access previous entries to reflect on your progress.
*Account Management: Manage your personal account information and preferences.
*Secure Storage: Integrate with Airtable for storing entries and Firebase for user authentication.



Getting Started

Prerequisites
Node.js and npm installed on your system
Firebase and Airtable accounts set up

Installation
1.Clone the repository:

git clone https://github.com/rosangely-dls/Chirp-Mindfulness-app.git

2.Navigate to the project directory:
cd Chirp-Mindfulness-app

3.Install dependencies:
npm install




Configuration
1.Set up environment variables by creating a .env file in the project root with:

VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_AIRTABLE_API_KEY=your_airtable_api_key
VITE_AIRTABLE_BASE_ID=your_airtable_base_id

2.Ensure .env is added to .gitignore to prevent it from being committed.








Running the App
Start the development server:

npm run dev





Tech Stack
*Frontend: React, Vite
*Backend: Airtable (for data storage)
*Authentication: Firebase Authentication
*CSS Styling: CSS modules and responsive design




License
This project is licensed under the MIT License - see the LICENSE file for details.

Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.