import React, { useEffect, useState } from 'react';
import { fetchUserData } from '../utils/userService';

function AccountInfo() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUserData()
        .then((userData) => {
            setUser(userData);
            setLoading(false);
        })
        .catch((error) => {
            console.error(error);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <p>Loading...</p>
    }

    return user ? (
        <div className="account-info">
            <div className="profile-section">
              <h3>{user.displayName}</h3>
              <p>{user.email}</p>
            </div>
        </div>
    ) : (
        <p>No user data available.</p>
    );
}
export default AccountInfo;