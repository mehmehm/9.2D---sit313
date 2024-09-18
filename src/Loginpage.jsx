import React, { useState } from 'react';
import './Loginpage.css';  // Import the CSS file\
import { useNavigate } from "react-router-dom";
import { signInWithEmail   } from './utils/Firebase';
import {db} from './utils/Firebase'
import {doc, getDoc} from 'firebase/firestore';

const Loginpage = () => {
    const [contact, setContact] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);

    const navigate = useNavigate();  // Initialize the navigate function

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContact((prevContact) => ({
            ...prevContact,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = contact;

        try {
            const { user } = await signInWithEmail(email, password);
            const userDocRef = doc(db, 'users', user.uid);
            const userSnapshot = await getDoc(userDocRef);

            if( userSnapshot.exists()) {
                const userData = userSnapshot.data();
                const userName = userData.name || userData.email;

                navigate('/welcome', {state: {name: userName}});
            }
            else{
                setError("User data not found");
            }
            
        } catch (error) {
            setError("Invalid email or password. Please try again.");
            console.error("Login error:", error.message);
        }
    };

    return (
        <div>
            <div className="login-container">
                <div className="align-right">
                    <button className="signup-button" onClick={() => navigate('/signup')}>Sign up</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={contact.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={contact.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                    {error && <p className="error-message">{error}</p>}
                </form>
            </div>
        </div>
    );
}

export default Loginpage;
