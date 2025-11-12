import { PlayerScore } from "@/lib/leaderboard";

interface LeaderboardSectionProps {
  title: string;
  icon: string;
  color: string;
  scores: PlayerScore[];
  emptyMessage: string;
  description: string;
}

export default function LeaderboardSection({
  title,
  icon,
  color,
  scores,
  emptyMessage,
  description,
}: LeaderboardSectionProps) {
  const getRankEmoji = (rank: number) => {
    if (rank === 0) return "🥇";
    if (rank === 1) return "🥈";
    if (rank === 2) return "🥉";
    return `${rank + 1}.`;
  };

  return (
    <div className={`rounded-3xl p-6 shadow-lg ${color} border-4 border-black`}>
      <div className="mb-3 flex items-center gap-3">
        <span className="text-4xl">{icon}</span>
        <h2 className="text-2xl font-bold text-black">{title}</h2>
      </div>
      <p className="mb-4 text-sm font-medium text-gray-800">{description}</p>

      {scores.length === 0 ? (
        <div className="py-8 text-center">
          <p className="text-lg text-gray-700">{emptyMessage}</p>
        </div>
      ) : (
        <div className="space-y-3">
          {scores.map((score, index) => (
            <div
              key={score.player.id}
              className="flex items-center justify-between rounded-2xl bg-white/90 p-4 shadow-md transition-transform hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-black">
                  {getRankEmoji(index)}
                </span>
                <span className="text-xl font-semibold text-gray-900">
                  {score.player.name}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-yellow-400 px-4 py-2 text-lg font-bold text-black shadow-md">
                  {score.count}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

