import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAN43ebnRcZPYpHCCCEvapJZbENs_rf7rw",
    authDomain: "chirpuserauth.firebaseapp.com",
    projectId: "chirpuserauth",
    storageBucket: "chirpuserauth.appspot.com",
    messagingSenderId: "454365152383",
    appId: "1:454365152383:web:287492382832a20998ab4a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);