'use client';

import { useRef, useState } from 'react';
import './page.css';

export default function CreateGroupPage() {
    const [groupName, setGroupName] = useState('');
    const btnRef = useRef(null);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // if (!groupName.trim()) return alert('Group name is required');
        // alert(`Group "${groupName}" created successfully`);
        setGroupName('');
    };


    const handleMouseEnter = () => {
        const btn = btnRef.current;
        btn.classList.add('hover-persist');
    };

    const handleMouseLeave = () => {
        const btn = btnRef.current;
        // Keep hover effect alive for 1.5s after mouse leaves
        setTimeout(() => {
            btn.classList.remove('hover-persist');
        }, 1500);
    };



    return (
        <div className="overlay">
            <div className="card">
                <h2>Create a New Group</h2>
                <p className="description">Only Admins can create groups</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="groupName">Group Name</label>
                        <input
                            type="text"
                            id="groupName"
                            value={groupName}
                            onChange={(e) => setGroupName(e.target.value)}
                            placeholder="Enter group name"
                        />
                    </div>

                    <button type="submit" className="purple-blue-btn" onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>Create Group</button>
                </form>
            </div>
        </div>
    );
}
