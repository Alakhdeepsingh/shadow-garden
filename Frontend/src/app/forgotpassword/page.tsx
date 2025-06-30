'use client';

import { useState } from 'react';
import Image from 'next/image';
import './page.css'; // Reuse styles from admin page

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');
        setError('');

        if (!email.trim()) {
            setError('Email is required');
            return;
        }

        // Simulate success
        setMessage('Reset link sent to your email!');
        setEmail('');
    };

    return (
        <div className="overlay">
            <div className="card">
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                    <Image src="/unnamed.png" alt="Logo" width={40} height={40} style={{ margin: '0 auto' }} />
                    <h2>Forgot your password?</h2>
                    <p className="description">
                        No worries! Enter your email and we'll send you a reset link.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {error && <p style={{ color: 'red', fontSize: '0.9rem' }}>{error}</p>}
                    {message && <p style={{ color: 'lightgreen', fontSize: '0.9rem' }}>{message}</p>}

                    <button type="submit" className="purple-blue-btn">
                        Send Reset Link
                    </button>

                    <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem' }}>
                        <a href="/login" className="text-cyan-400 hover:underline">
                            Back to Sign In
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}
