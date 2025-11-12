import { Business, Player } from "@/data/types";

interface BusinessesTableProps {
  businesses: Business[];
  players: Player[];
}

export default function BusinessesTable({
  businesses,
  players,
}: BusinessesTableProps) {
  const getPlayerName = (playerId?: string): string => {
    if (!playerId) return "-";
    const player = players.find((p) => p.id === playerId);
    return player?.name || "-";
  };

  const getStatusColor = (status: Business["status"]) => {
    switch (status) {
      case "Accepts Bitcoin":
        return "bg-green-500 text-white";
      case "Considering Accepting Bitcoin":
        return "bg-yellow-500 text-black";
      case "Refuses to Accept Bitcoin":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getStatusText = (status: Business["status"]) => {
    switch (status) {
      case "Accepts Bitcoin":
        return "Accepts Bitcoin";
      case "Considering Accepting Bitcoin":
        return "Considering";
      case "Refuses to Accept Bitcoin":
        return "Refused";
      default:
        return status;
    }
  };

  return (
    <div className="mt-12 rounded-3xl bg-gradient-to-br from-indigo-200 to-purple-200 p-6 shadow-lg border-4 border-black">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-4xl">📊</span>
        <h2 className="text-3xl font-bold text-black">All Businesses</h2>
      </div>
      <p className="mb-6 text-sm font-medium text-gray-800">
        Complete list of all businesses being tracked
      </p>

      <div className="overflow-hidden rounded-2xl bg-white/90 shadow-lg border-2 border-black">
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-0">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-400 to-purple-400">
                <th className="border-b-2 border-r-2 border-black px-4 py-3 text-left text-sm font-bold text-white">
                  Business Name
                </th>
                <th className="border-b-2 border-r-2 border-black px-4 py-3 text-left text-sm font-bold text-white">
                  Status
                </th>
                <th className="border-b-2 border-r-2 border-black px-4 py-3 text-left text-sm font-bold text-white">
                  Visited By
                </th>
                <th className="border-b-2 border-r-2 border-black px-4 py-3 text-left text-sm font-bold text-white">
                  Follow-up Purchase
                </th>
                <th className="border-b-2 border-r-2 border-black px-4 py-3 text-left text-sm font-bold text-white">
                  Added to BTC Map
                </th>
                <th className="border-b-2 border-black px-4 py-3 text-left text-sm font-bold text-white">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {businesses.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-8 text-center text-gray-600"
                  >
                    No businesses tracked yet. Start visiting businesses to add them! 🚀
                  </td>
                </tr>
              ) : (
                businesses.map((business, index) => {
                  const isLastRow = index === businesses.length - 1;
                  return (
                    <tr
                      key={business.id}
                      className="transition-colors hover:bg-yellow-100"
                    >
                      <td className={`border-r-2 border-black px-4 py-3 font-semibold text-gray-900 ${!isLastRow ? 'border-b-2' : ''}`}>
                        {business.name}
                      </td>
                      <td className={`border-r-2 border-black px-4 py-3 ${!isLastRow ? 'border-b-2' : ''}`}>
                        <span
                          className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${getStatusColor(
                            business.status
                          )}`}
                        >
                          {getStatusText(business.status)}
                        </span>
                      </td>
                      <td className={`border-r-2 border-black px-4 py-3 text-gray-700 ${!isLastRow ? 'border-b-2' : ''}`}>
                        {getPlayerName(business.visitedBy)}
                      </td>
                      <td className={`border-r-2 border-black px-4 py-3 text-gray-700 ${!isLastRow ? 'border-b-2' : ''}`}>
                        {getPlayerName(business.followUpBitcoinPurchase)}
                      </td>
                      <td className={`border-r-2 border-black px-4 py-3 text-gray-700 ${!isLastRow ? 'border-b-2' : ''}`}>
                        {getPlayerName(business.addedToBTCMap)}
                      </td>
                      <td className={`border-black px-4 py-3 text-sm text-gray-600 ${!isLastRow ? 'border-b-2' : ''}`}>
                        {business.notes || "-"}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

