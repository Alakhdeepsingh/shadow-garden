"use client";

import React, { useState } from "react";

const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        firstName: "Alakhdeep",
        lastName: "Malhotra",
        email: "alakhdeep@example.com",
        bio: "I am a frontend developer passionate about building beautiful and accessible user interfaces.",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProfileData((prev) => ({ ...prev, [name]: value }));
    };

    const handleToggleEdit = () => {
        if (isEditing) {
            console.log("Saving profile data:", profileData);
        }
        setIsEditing((prev) => !prev);
    };

    return (
        // <main className="w-full h-screen bg-gray-100 flex justify-center items-center p-4">
        <div>
            <section className="w-full h-full max-w-5xl bg-white shadow-lg rounded-lg p-6 sm:p-10 overflow-y-auto">
                <header className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
                    <div className="flex gap-2">
                        <button
                            className="bg-green-600 text-white px-4 py-2 text-sm rounded-md hover:bg-green-700 transition"
                        >
                            Subscription
                        </button>
                        <button
                            onClick={handleToggleEdit}
                            className="bg-blue-600 text-white px-5 py-2 text-sm rounded-md hover:bg-blue-700 transition"
                        >
                            {isEditing ? "Save" : "Edit"}
                        </button>
                    </div>
                </header>


                <div className="flex flex-col items-center mb-6">
                    <img
                        src="https://via.placeholder.com/120"
                        alt="Profile"
                        className="w-28 h-28 rounded-full object-cover mb-3"
                    />
                    <button className="bg-gray-200 text-sm px-4 py-1 rounded cursor-not-allowed" disabled>
                        Change photo
                    </button>
                    <p className="text-xs text-gray-500 mt-1">
                        Max size: 1MB. Formats: JPG, PNG, GIF
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={profileData.firstName}
                            onChange={handleChange}
                            readOnly={!isEditing}
                            className={`w-full border rounded-md px-4 py-2 transition ${isEditing ? "bg-white" : "bg-gray-100"}`}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={profileData.lastName}
                            onChange={handleChange}
                            readOnly={!isEditing}
                            className={`w-full border rounded-md px-4 py-2 transition ${isEditing ? "bg-white" : "bg-gray-100"}`}
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleChange}
                        readOnly={!isEditing}
                        className={`w-full border rounded-md px-4 py-2 transition ${isEditing ? "bg-white" : "bg-gray-100"}`}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                    <textarea
                        name="bio"
                        value={profileData.bio}
                        onChange={handleChange}
                        readOnly={!isEditing}
                        className={`w-full border rounded-md px-4 py-2 h-28 resize-none transition ${isEditing ? "bg-white" : "bg-gray-100"}`}
                    />
                </div>
            </section>
        </div>
        // </main>
    );
};

export default ProfilePage;
