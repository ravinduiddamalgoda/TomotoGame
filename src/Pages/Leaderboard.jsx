import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Leaderboard = () => {
    const [leaders, setLeaders] = useState([]);

    useEffect(() => {
        const fetchLeaders = async () => {
            try {
                const response = await axios.get('/api/leaderboard'); // Replace with your API endpoint
                setLeaders(response.data);
            } catch (error) {
                console.error('Error fetching leaderboard:', error);
            }
        };

        fetchLeaders();
    }, []);

    return (
        <div className="max-w-2xl mx-auto my-10">
            <h2 className="text-3xl font-bold text-center mb-5">Game Leaderboard</h2>
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                    {leaders.map((leader, index) => (
                        <li key={leader.id} className="px-6 py-4">
                            <div className="flex items-center justify-between">
                                <div className="text-sm font-medium text-gray-900">{leader.username}</div>
                                <div className="ml-2 flex-shrink-0 flex">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${index === 0 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                        #{index + 1}
                                    </span>
                                </div>
                                <div className="text-sm text-gray-500">{leader.score} pts</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Leaderboard;
