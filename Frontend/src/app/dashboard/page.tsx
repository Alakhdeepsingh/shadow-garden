"use client";

import { useState } from "react";

const groupsData = [
    { id: 1, name: "X-Force Group", icon: "🟥" },
    { id: 2, name: "Auto-Drops", icon: "⬜" },
];

const chatsData = {
    1: ["Hey team!", "New drop coming up.", "Be prepared!"],
    2: ["Auto-bot initialized.", "Scraping data...", "Drop complete."]
};

export default function ChatUI() {
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [openMenuGroupId, setOpenMenuGroupId] = useState(null);

    const toggleMenu = (groupId) => {
        setOpenMenuGroupId(openMenuGroupId === groupId ? null : groupId);
    };

    return (
        <div className="h-screen flex flex-col md:flex-row bg-[#0f0f0f] text-white">
            {/* Sidebar */}
            <div className="w-full md:w-1/4 bg-[#1a1a1a] flex flex-col p-2 relative overflow-y-auto">
                {/* Profile Icon */}
                <div className="h-12 w-12 bg-[#2c2c2c] rounded-full mb-4"></div>

                {/* Groups */}
                {groupsData.map((group) => (
                    <div
                        key={group.id}
                        className={`relative flex items-center justify-between p-3 rounded cursor-pointer mb-2 transition-all duration-200 ${selectedGroup === group.id
                                ? "bg-[#3a3a3a]"
                                : "bg-[#2a2a2a] hover:bg-[#2f2f2f]"
                            }`}
                        onClick={() => setSelectedGroup(group.id)}
                    >
                        {/* Left side: icon + name */}
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">{group.icon}</span>
                            <div className="flex flex-col">
                                <span className="font-medium">{group.name}</span>
                                <span className="text-xs text-pink-400">Pinned 📌</span>
                            </div>
                        </div>

                        {/* Menu Button */}
                        <div
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleMenu(group.id);
                            }}
                            className="text-gray-400 cursor-pointer px-2"
                        >
                            ⋮
                        </div>

                        {/* Dropdown Menu */}
                        {openMenuGroupId === group.id && (
                            <div className="absolute right-2 top-14 bg-[#2e2e2e] border border-[#444] rounded shadow-md z-10 w-36">
                                <div className="px-4 py-2 hover:bg-[#3a3a3a] cursor-pointer">Join Group</div>
                                <div className="px-4 py-2 hover:bg-[#3a3a3a] cursor-pointer">Group Info</div>
                                <div className="px-4 py-2 hover:bg-[#3a3a3a] text-red-400 hover:text-red-300 cursor-pointer">Report</div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Chat Area */}
            <div className="w-full md:w-3/4 flex flex-col">
                {/* Header */}
                <div className="bg-[#1a1a1a] p-4 flex items-center gap-2 border-b border-[#00ffff44]">
                    {selectedGroup ? (
                        <>
                            <span className="text-2xl">{groupsData.find(g => g.id === selectedGroup)?.icon}</span>
                            <span className="text-lg font-semibold text-cyan-400">
                                {groupsData.find(g => g.id === selectedGroup)?.name}
                            </span>
                        </>
                    ) : (
                        <span className="text-lg font-semibold text-gray-400">
                            Welcome! Select a group to start chatting.
                        </span>
                    )}
                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-4 overflow-auto space-y-4 bg-[#121212]">
                    {selectedGroup &&
                        chatsData[selectedGroup].map((msg, index) => (
                            <div
                                key={index}
                                className="bg-cyan-500 text-black p-3 rounded-xl w-fit max-w-full sm:max-w-md"
                            >
                                {msg}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
