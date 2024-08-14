import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '@/styles/login.css';

const LoginSignupForm = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);

    const handleSignupClick = () => {
        setIsSignup(true);
    };

    const handleLoginClick = () => {
        setIsSignup(false);
    };

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div className="login-frm">
            <div className="wrapper">
                <div className="title-text">
                    <div className={`title ${isSignup ? 'signup' : 'login'}`}>
                        {isSignup ? 'Signup Form' : 'Login Form'}
                    </div>
                </div>
                <div className="form-container">
                    <div className="slide-controls">
                        <input
                            type="radio"
                            name="slide"
                            id="login"
                            checked={!isSignup}
                            onChange={handleLoginClick}
                        />
                        <input
                            type="radio"
                            name="slide"
                            id="signup"
                            checked={isSignup}
                            onChange={handleSignupClick}
                        />
                        <label htmlFor="login" className="slide login" onClick={handleLoginClick}>
                            Login
                        </label>
                        <label htmlFor="signup" className="slide signup" onClick={handleSignupClick}>
                            Signup
                        </label>
                        <div className="slide-tab" style={{ left: isSignup ? '50%' : '0%' }}></div>
                    </div>
                    <div className={`form-inner ${isSignup ? 'move' : ''}`}>
                        <form className="login">
                            <div className="field">
                                <input type="text" placeholder="Email Address" required />
                            </div>
                            <div className="field password-field">
                                <input
                                    type={passwordShown ? 'text' : 'password'}
                                    placeholder="Password"
                                    required
                                />
                                <span onClick={togglePasswordVisibility} className="eye-icon">
                                    <FontAwesomeIcon icon={passwordShown ? faEyeSlash : faEye} />
                                </span>
                            </div>
                            <div className="pass-link">
                                <a href="#">Forgot Password</a>
                            </div>
                            <Link href='/dashboard'>
                                <div className="field">
                                    <input type="submit" value="Login" />
                                </div>
                            </Link>
                            <div className="signup-link">
                                Not a member?<br />
                                <a href="#" onClick={handleSignupClick}>Signup Now</a>
                            </div>
                        </form>
                        <form className="signup">
                            <div className="field">
                                <input type="text" placeholder="Email Address" required />
                            </div>
                            <div className="field password-field">
                                <input
                                    type={passwordShown ? 'text' : 'password'}
                                    placeholder="Password"
                                    required
                                />
                                <span onClick={togglePasswordVisibility} className="eye-icon">
                                    <FontAwesomeIcon icon={passwordShown ? faEyeSlash : faEye} />
                                </span>
                            </div>
                            <div className="field password-field">
                                <input
                                    type={passwordShown ? 'text' : 'password'}
                                    placeholder="Confirm Password"
                                    required
                                />
                                <span onClick={togglePasswordVisibility} className="eye-icon">
                                    <FontAwesomeIcon icon={passwordShown ? faEyeSlash : faEye} />
                                </span>
                            </div>
                            <div className="field">
                                <input type="submit" value="Signup" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignupForm;
