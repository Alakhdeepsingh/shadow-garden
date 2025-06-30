'use client';

import { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import './page.css'; // Reuse styles from admin page
import Link from 'next/link';

export default function LoginPage() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:8080/auth/login', {
                name,
                password,
            });

            localStorage.setItem('token', response.data.token);
            router.push('/profile');
        } catch (err: any) {
            const message = err.response?.data?.error || 'Login failed. Try again.';
            setError(message);
            console.error('❌ Login Error:', message);
        } finally {
            setLoading(false);
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
                    <h2>Sign in to your account</h2>
                    <p className="description">
                        Not a member?{' '}
                        <a href="/register" className="text-cyan-400 hover:underline">
                            Register
                        </a>
                    </p>
                </div>

                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="name">Username</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='login-inputfields'
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
                            className='login-inputfields'
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {error && <p style={{ color: 'red', fontSize: '0.9rem' }}>{error}</p>}

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                        <label className="text-gray-400">
                            <input type="checkbox" style={{ marginRight: '8px' }} />
                            Remember me
                        </label>
                        <Link href="/forgotpassword" className="text-cyan-400 hover:underline">
                            Forgot password?
                        </Link>
                    </div>

                    <button type="submit" className="purple-blue-btn" disabled={loading}>
                        {loading ? 'Signing in...' : 'Sign in'}
                    </button>
                </form>
            </div>
        </div>
    );
}
