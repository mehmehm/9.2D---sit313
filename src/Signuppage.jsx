import React, { useState } from "react";
import './Signuppage.css';
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from './utils/Firebase';

function Signuppage() {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState(null);

    const { name, email, password, confirmPassword } = contact;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContact((prevValue) => ({
            ...prevValue,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocFromAuth(user, { name });
            // Navigate to the login page or another page after successful sign-up
            console.log("User signed up successfully");
        } catch (error) {
            setError("Error signing up. Please try again.");
            console.error("Error signing up:", error.message);
        }
    };

    return (
        <div className="container">
            <div className="header">
                Create a DEV@DEAKIN account
            </div>
            <form onSubmit={handleSubmit}>
                <div className="group">
                    <label>Name*</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                        value={name}
                    />
                </div>
                <div className="group">
                    <label>Email*</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={email}
                    />
                </div>
                <div className="group">
                    <label>Password*</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={password}
                    />
                </div>
                <div className="group">
                    <label>Confirm Password*</label>
                    <input
                        type="password"
                        id="confirm-password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        value={confirmPassword}
                    />
                </div>
                <button type="submit" className="create-button">Create</button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
}

export default Signuppage;
