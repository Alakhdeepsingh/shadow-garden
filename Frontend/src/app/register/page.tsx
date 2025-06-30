'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import './page.css'; // Reuse same CSS as admin page

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const res = await fetch('http://localhost:8080/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, password }),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || 'Registration failed');

            setSuccess('Account created successfully!');
            setName('');
            setPassword('');

            setTimeout(() => router.push('/login'), 1500);
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div className="overlay">
            <div className="card">
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                    <Image
                        src="/unnamed.png"
                        alt="Logo"
                        width={40}
                        height={40}
                        style={{ margin: '0 auto' }}
                    />
                    <h2>Create Your Account</h2>
                    <p className="description">
                        Already have an account?{' '}
                        <a href="/login" className="text-cyan-400 hover:underline">
                            Sign in
                        </a>
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="your_username"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {error && <p style={{ color: 'red', fontSize: '0.9rem' }}>{error}</p>}
                    {success && <p style={{ color: 'lightgreen', fontSize: '0.9rem' }}>{success}</p>}

                    <button type="submit" className="purple-blue-btn">
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
}
