import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const fetchUserData = () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                resolve({
                    displayName: user.displayName || 'Anonymous',
                    email: user.email,

                });
            } else {
                reject('No user is signed in');
            }
        });
    });
};