import { players } from "@/data/players";
import { businesses } from "@/data/businesses";
import {
  getTopPlayers,
  getSupportingSpenders,
  getTopMappers,
  getTopVisitors,
} from "@/lib/leaderboard";
import LeaderboardSection from "@/components/LeaderboardSection";
import BusinessesTable from "@/components/BusinessesTable";

export default function Home() {
  const topPlayers = getTopPlayers(players, businesses);
  const supportingSpenders = getSupportingSpenders(players, businesses);
  const topMappers = getTopMappers(players, businesses);
  const topVisitors = getTopVisitors(players, businesses);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-yellow-200 to-green-200 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-8 text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="text-6xl">₿</span>
            <h1 className="text-5xl font-bold text-black drop-shadow-lg md:text-6xl">
              Bitcoin Onboarding Leaderboard
            </h1>
            <span className="text-6xl">₿</span>
          </div>
          <p className="text-xl text-gray-800 md:text-2xl">
            Competing to onboard local small businesses to Bitcoin
          </p>
          <div className="mt-4 flex justify-center gap-2 text-4xl">
            <span>🚀</span>
            <span>💪</span>
            <span>🎉</span>
          </div>
        </header>

        {/* Leaderboard Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {/* Top Players */}
          <LeaderboardSection
            title="Top Players"
            icon="🏆"
            color="bg-gradient-to-br from-yellow-300 to-yellow-400"
            scores={topPlayers}
            emptyMessage="No businesses converted yet. Be the first to convince a business to accept Bitcoin! 🚀"
            description="Players who have successfully convinced a local merchant to adopt bitcoin."
          />

          {/* Supporting Spenders */}
          <LeaderboardSection
            title="Supporting Spenders"
            icon="💸"
            color="bg-gradient-to-br from-green-300 to-green-400"
            scores={supportingSpenders}
            emptyMessage="No follow-up purchases yet. Support businesses that accept Bitcoin! 💰"
            description="Players who supported a bitcoin merchant by making a follow-up purchase with bitcoin"
          />

          {/* Top Mappers */}
          <LeaderboardSection
            title="Top Mappers"
            icon="🗺️"
            color="bg-gradient-to-br from-blue-300 to-blue-400"
            scores={topMappers}
            emptyMessage="No businesses mapped yet. Add businesses to BTCMap.org! 📍"
            description="Players who added a bitcoin merchant to BTCMap.org"
          />

          {/* Top Visitors */}
          <LeaderboardSection
            title="Top Visitors - Honorable Mentions"
            icon="👣"
            color="bg-gradient-to-br from-purple-300 to-pink-400"
            scores={topVisitors}
            emptyMessage="No visits yet. Start visiting businesses to spread the word about Bitcoin! 🚶"
            description="Players who visited a local merchant to discuss bitcoin"
          />
        </div>

        {/* Businesses Table */}
        <BusinessesTable businesses={businesses} players={players} />

        {/* Footer */}
        <footer className="mt-12 text-center">
          <p className="text-lg text-gray-700">
            Keep spreading the Bitcoin revolution! 🌟
          </p>
          <div className="mt-4 flex justify-center gap-4 text-3xl">
            <span>⚡</span>
            <span>₿</span>
            <span>⚡</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
