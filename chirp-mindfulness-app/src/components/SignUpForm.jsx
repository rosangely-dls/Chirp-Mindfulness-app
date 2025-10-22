import React, { useState } from 'react';
import { signup } from '../utils/authService';

const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signup(email, password);
            alert('Signed up successfully!');
        } catch (e) {
            setError(e.message);
        }
    };

    return (
        <div>
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                    <input
                    type="password"
                    value={password}
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                    <button type="submit">Sign Up</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default SignUpForm;