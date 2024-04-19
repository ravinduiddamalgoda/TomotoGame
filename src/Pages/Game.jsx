import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate should be used instead of Navigate

const Game = () => {
    const [mark, setMark] = useState(0);
    const [game, setGame] = useState({});
    const [solution, setSolution] = useState('');
    const [time, setTime] = useState(0);
    const navigate = useNavigate(); // useNavigate hook

    useEffect(() => {
        fetchGame();
    }, []);

    const fetchGame = async () => {
        try {
            const response = await axios.get('https://marcconrad.com/uob/tomato/api.php');
            setGame(response.data);
        } catch (error) {
            console.error('Error fetching game:', error);
        }
    };

    const handleSubmission = async () => {
        const correct = parseInt(solution) === game.solution;
        if (time >= 9 || !correct) {
            alert(correct ? 'Correct answer' : 'Wrong answer');
            alert('Game Over');
            // Reset the game or update the leaderboard
            navigate('/leaderboard');
        } else if (correct) {
            setMark(mark + 1);
            alert('Correct answer');
        } else {
            alert('Wrong answer');
        }
        setTime(time + 1);
        setSolution(''); // Clear the input
        fetchAnotherGame();
    };

    const fetchAnotherGame = async () => {
        try {
            const response = await axios.get('https://marcconrad.com/uob/tomato/api.php');
            setGame(response.data);
        } catch (error) {
            console.error('Error fetching game:', error);
        }
    };

    return (
        <div className="bg-pink-100 h-screen flex flex-col items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl text-pink-600 font-bold mb-4">Let's Play...</h1>
                <div className="mb-6">
                    {game.question && <img src={game.question} alt="game" className="inline-block" />}
                </div>
                <div className="flex justify-center">
                    <input
                        type="text"
                        value={solution}
                        onChange={(e) => setSolution(e.target.value)}
                        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <button
                        onClick={handleSubmission}
                        className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 ml-4 rounded focus:outline-none focus:shadow-outline transition-colors"
                    >
                        Submit
                    </button>
                </div>
                <p className="text-pink-600 mt-4">Score: {mark}</p>
                <button onClick={() => navigate('/leaderboard')} className="text-pink-600 underline mt-4">Leaderboard</button>
            </div>
        </div>
    );
};

export default Game;
