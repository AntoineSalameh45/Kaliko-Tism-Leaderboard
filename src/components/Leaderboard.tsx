import { useState, useEffect } from "react";
import leaderboardData from "../../data/TismScores.json";

interface LeaderboardEntry {
  name: string;
  score: number;
  date: string;
}

const Leaderboard = () => {
  const [data, setData] = useState<(LeaderboardEntry & { rank: number })[]>([]);

  useEffect(() => {
    const sortedData = [...leaderboardData].sort((a, b) => b.score - a.score);
    let rank = 0;
    let prevScore: number | null = null;
    let rankCounter = 0;
    const rankedData = sortedData.map((entry) => {
      rankCounter++;
      if (prevScore === null || entry.score !== prevScore) {
        rank = rankCounter;
      }
      prevScore = entry.score;
      return { ...entry, rank };
    });
    setData(rankedData);
  }, []);

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
      <ul>
        {data.map((entry, index) => (
          <li
            key={index}
            className="grid grid-cols-3 p-2 border-b last:border-b-0"
          >
            <span className="text-[#0c9cc1] text-left">{entry.rank}. {entry.name}</span>
            <span className="text-gray-600 text-center">{entry.score}</span>
            <span className="text-sm text-gray-400 text-center">{entry.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
